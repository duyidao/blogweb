<script setup>
import echarts from '@/components/chart/index.js';
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表
import { useResizeObserver } from '@vueuse/core';
import { useUnit } from '@/store/rem.js';

const props = defineProps({
  data: {
    type: Array,
    default: () => ([{
      name: '正常运行设备数量',
      color: 'rgb(88, 255, 220)',
      colorStops: ['rgb(88, 255, 220)', 'rgba(88, 255, 220, 0.1)'],
      data: [{ name: 'Mon', value: 120 }, { name: 'Tue', value: 132 }, { name: 'Wed', value: 101 }, { name: 'Thu', value: 134 }, { name: 'Fri', value: 90 }, { name: 'Sat', value: 230 }, { name: 'Sun', value: 210 }],
    }, {
      name: '故障清单设备数量',
      color: '#ef8a3a',
      colorStops: ['#ef8a3a', 'rgba(88, 255, 220, 0.1)'],
      data: [{ name: 'Mon', value: 11 }, { name: 'Tue', value: 243 }, { name: 'Wed', value: 645 }, { name: 'Thu', value: 423 }, { name: 'Fri', value: 349 }, { name: 'Sat', value: 13 }, { name: 'Sun', value: 0 }],
    }]),
  },
  info: {
    type: Object,
    default: () => ({
      titleShow: true, // 是否展示标题
      yName: '单位：台', // y轴坐标单位
      splitNumber: 5, // y轴间隔
      style: {
        fontColor: 'rgba(255, 255, 255, .7)',
        white: 'rgb(255, 255, 255)',
        transparent: 'rgba(255, 255, 255, .0)',
      }
    }),
  },
})

const { ratio } = useUnit();

const highlightXName = ref(''); // 当前悬浮的x轴数据
const option = ref({});

const step = ref(0);
const xAxis = ref([]);
// 处理和转换data，生成一个包含图表配置信息的对象。
const transformData = () => {
  // 计算最大值max:首先，使用map方法遍历data数组中的每个元素（我们称之为items）。对于每个items，再次使用map方法遍历其data属性中的每个对象（我们称之为item）。从每个item中提取value属性。如果value是null或undefined，则使用item本身（但这里逻辑上有些问题，因为直接使用item在没有明确item中其他可替代value的数值属性时，这个操作可能没有意义）。使用flat()方法将嵌套数组展平成一个一维数组。使用Math.max(...)找到这个一维数组中的最大值，并使用Math.ceil()向上取整，确保max是一个整数（同时确保max至少为1，但由于Math.max的结果总是大于或等于数组中的任何元素，所以这里的1作为第二个参数实际上不会影响最终结果，除非数组为空）。
  const max = Math.ceil(Math.max(...props.data.map(items => items.data.map(item => {
    const { value } = item;
    return value ?? item;
  })).flat(), 1));

  // 计算s为max除以splitNumber的结果，并转换为固定小数位为1的数字，然后转换为Number类型。如果s大于1，则step为s的向上取整值；否则，step为s本身。这个逻辑确保了步长至少为1，如果max除以splitNumber的结果小于1，则步长取该结果（可能是小数）。
  const s = Number((max / props.info.splitNumber).toFixed(1));
  step.value = s > 1 ? Math.ceil(s) : s;

  // 如果data数组的第一个元素存在，则取其data属性中的每个对象的name属性，生成一个包含所有名称的数组作为xAxis。如果data数组为空或第一个元素不存在，则xAxis为一个空数组。
  xAxis.value = props.data[0] ? props.data[0].data.map(item => item.name) : [];
};
const init = () => {
  transformData();
  option.value = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#fff',
          width: 2,
          type: 'solid',
        },
      },
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '1%',
      top: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true, // 两边是否留白
      offset: 0,
      // 不展示x轴刻度
      axisTick: {
        show: false,
      },
      // 设置x轴刻度字体样式
      axisLabel: {
        interval: 'auto',
        formatter: (_, index) => xAxis.value[index],
        fontSize: 14 * ratio.value,
        color: '#fff',
        fontFamily: 'robo',
      },
      // 不展示x轴底部的黑色横轴
      axisLine: {
        show: false,
      },
      // 鼠标悬浮时展示不透明的柱体
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#fff',
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, .0)',
              },
            ],
            false
          ),
          opacity: 0.3,
        },
      },
      data: props.data[0].data.map(item => {
        if ((item.name || item) === highlightXName.value) {
          return {
            value: item.name || item,
            // 设置z轴刻度的背景色、边框等样式
            textStyle: {
              color: '#fff',
              padding: [2 * ratio.value, 6 * ratio.value],
              borderWidth: 1 * ratio.value,
              borderRadius: 2 * ratio.value,
              borderColor: 'rgba(255, 255, 255, .7)',
              backgroundColor: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#1F3A5F',
                  },
                  {
                    offset: 1,
                    color: '#acc2ef',
                  },
                ],
                false
              ),
            },
          };
        }
        return {
          value: item.name || item,
          textStyle: {
            color: '#fff',
            padding: [2 * ratio.value, 6 * ratio.value],
          }
        }
      }),
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: props.info.splitNumber * step.value,
      interval: step.value,
      splitNumber: props.info.splitNumber,
      // y轴横向echart图线设置与颜色
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.25)',
        },
      },
      // y轴坐标不展示
      axisLabel: {
        show: false,
        fontSize: 14 * ratio.value,
        color: props.info.style.fontColor,
      },
    },
    series: props.data?.map(item => ({
      ...item,
      type: 'line',
      symbol: 'circle',
      showSymbol: true,
      smooth: true, // 平滑曲线
      connectNulls: true, // 连续空值
      lineStyle: {
        color: item.color,
        width: 2 * ratio.value,
      },
      // itemStyle: {
      //   color: 'transparent',
      // },
      // 折线图区域渐变色设置
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: item.colorStops.map((color, index) => ({
            offset: index,
            color,
          })),
          global: false,
        },
      },
      data: item.data,
    })) || [],
  }
}

const chartRef = ref(null);
const myChartRef = ref(null);
const yAxixRef = ref(null);

useResizeObserver(yAxixRef, (newVal) => {
  if (!newVal) return;
  const entry = newVal[0];
  const { width } = entry.contentRect;
  myChartRef.value.style.left = width + 8 * ratio.value + 'px';
  chartRef.value.onResize()
});

onMounted(() => {
  init();
  // 悬浮保存当前选择的x轴坐标名称
  chartRef.value.myChart.on('highlight', ({ batch: [{ dataIndex }] }) => {
    highlightXName.value = props.data[0].data[dataIndex].name || props.data.data[dataIndex];
  });
  chartRef.value.myChart.on('downplay', () => highlightXName.value = '');

  codeList.value = [`\<script setup\>
import echarts from '@/components/chart/index.js';
import { useResizeObserver } from '@vueuse/core';
import { useUnit } from '@/store/rem.js';

const props = defineProps({
  data: {
    type: Array,
    default: () => ([{
      name: '正常运行设备数量',
      color: 'rgb(88, 255, 220)',
      colorStops: ['rgb(88, 255, 220)', 'rgba(88, 255, 220, 0.1)'],
      data: [{ name: 'Mon', value: 120 }, { name: 'Tue', value: 132 }, { name: 'Wed', value: 101 }, { name: 'Thu', value: 134 }, { name: 'Fri', value: 90 }, { name: 'Sat', value: 230 }, { name: 'Sun', value: 210 }],
    }, {
      name: '故障清单设备数量',
      color: '#ef8a3a',
      colorStops: ['#ef8a3a', 'rgba(88, 255, 220, 0.1)'],
      data: [{ name: 'Mon', value: 11 }, { name: 'Tue', value: 243 }, { name: 'Wed', value: 645 }, { name: 'Thu', value: 423 }, { name: 'Fri', value: 349 }, { name: 'Sat', value: 13 }, { name: 'Sun', value: 0 }],
    }]),
  },
  info: {
    type: Object,
    default: () => ({
      titleShow: true, // 是否展示标题
      yName: '单位：台', // y轴坐标单位
      splitNumber: 5, // y轴间隔
      style: {
        fontColor: 'rgba(255, 255, 255, .7)',
        white: 'rgb(255, 255, 255)',
        transparent: 'rgba(255, 255, 255, .0)',
      }
    }),
  },
})

const { ratio } = useUnit();

const highlightXName = ref(''); // 当前悬浮的x轴数据
const option = ref({});

const step = ref(0);
const xAxis = ref([]);
// 处理和转换data，生成一个包含图表配置信息的对象。
const transformData = () => {
  const max = Math.ceil(Math.max(...props.data.map(items => items.data.map(item => {
    const { value } = item;
    return value ?? item;
  })).flat(), 1));

  const s = Number((max / props.info.splitNumber).toFixed(1));
  step.value = s > 1 ? Math.ceil(s) : s;

  xAxis.value = props.data[0] ? props.data[0].data.map(item => item.name) : [];
};
const init = () => {
  transformData();
  option.value = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#fff',
          width: 2,
          type: 'solid',
        },
      },
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '1%',
      top: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true, // 两边是否留白
      offset: 0,
      // 不展示x轴刻度
      axisTick: {
        show: false,
      },
      // 设置x轴刻度字体样式
      axisLabel: {
        interval: 'auto',
        formatter: (_, index) => xAxis.value[index],
        fontSize: 14 * ratio.value,
        color: '#fff',
        fontFamily: 'robo',
      },
      // 不展示x轴底部的黑色横轴
      axisLine: {
        show: false,
      },
      // 鼠标悬浮时展示不透明的柱体
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#fff',
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, .0)',
              },
            ],
            false
          ),
          opacity: 0.3,
        },
      },
      data: props.data[0].data.map(item => {
        if ((item.name || item) === highlightXName.value) {
          return {
            value: item.name || item,
            // 设置z轴刻度的背景色、边框等样式
            textStyle: {
              color: '#fff',
              padding: [2 * ratio.value, 6 * ratio.value],
              borderWidth: 1 * ratio.value,
              borderRadius: 2 * ratio.value,
              borderColor: 'rgba(255, 255, 255, .7)',
              backgroundColor: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#1F3A5F',
                  },
                  {
                    offset: 1,
                    color: '#acc2ef',
                  },
                ],
                false
              ),
            },
          };
        }
        return {
          value: item.name || item,
          textStyle: {
            color: '#fff',
            padding: [2 * ratio.value, 6 * ratio.value],
          }
        }
      }),
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: props.info.splitNumber * step.value,
      interval: step.value,
      splitNumber: props.info.splitNumber,
      // y轴横向echart图线设置与颜色
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.25)',
        },
      },
      // y轴坐标不展示
      axisLabel: {
        show: false,
        fontSize: 14 * ratio.value,
        color: props.info.style.fontColor,
      },
    },
    series: props.data?.map(item => ({
      ...item,
      type: 'line',
      symbol: 'circle',
      showSymbol: true,
      smooth: true, // 平滑曲线
      connectNulls: true, // 连续空值
      lineStyle: {
        color: item.color,
        width: 2 * ratio.value,
      },
      // itemStyle: {
      //   color: 'transparent',
      // },
      // 折线图区域渐变色设置
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: item.colorStops.map((color, index) => ({
            offset: index,
            color,
          })),
          global: false,
        },
      },
      data: item.data,
    })) || [],
  }
}

const chartRef = ref(null);
const myChartRef = ref(null);
const yAxixRef = ref(null);

useResizeObserver(yAxixRef, (newVal) => {
  if (!newVal) return;
  const entry = newVal[0];
  const { width } = entry.contentRect;
  myChartRef.value.style.left = width + 8 * ratio.value + 'px';
  chartRef.value.onResize()
});

onMounted(() => {
  init();
  // 悬浮保存当前选择的x轴坐标名称
  chartRef.value.myChart.on('highlight', ({ batch: [{ dataIndex }] }) => {
    highlightXName.value = props.data[0].data[dataIndex].name || props.data.data[dataIndex];
  });
  chartRef.value.myChart.on('downplay', () => highlightXName.value = '');
})

watch(() => highlightXName.value, () => {
  init();
})

const transformStep = v => {
  const s = step.value;
  const n = (s > 1 || s === 1) ? (v - 1) * s : ((v - 1) * s).toFixed(1);
  return n === '0.0' ? '0' : n;
};
\<\/script\>

<template>
  <div class="line-li-dom">
    <IframeItemModel>
      <div class="line-li-dom__chart"
        v-if="data.length">
        <div v-if="info.titleShow"
          class="line-li-dom__chart__title">
          <div class="title__name">{{ info.yName }}</div>
          <div class="title__legend">
            <div v-for="item in data"
              :key="item.name"
              class="title__legend__item">
              <span class="title__legend__item__icon"
                :style="{ backgroundColor: item.color }"></span>
              <span class="title__legend__item__name">{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="line-li-dom__chart__content">
          <ul ref="yAxixRef"
            class="content__x-axis">
            <li v-for="i in (info.splitNumber + 1)"
              :key="i">
              {{ transformStep(i) }}
            </li>
          </ul>
          <div ref="myChartRef">
            <chart class="content__canvas"
              ref="chartRef"
              :option="option"></chart>
          </div>
        </div>
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .line-li-dom {
    width: 100%;
    height: 100%;

    &__chart {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 420px;

      &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 5px 0 25px;
        font-family: 'robo';
        font-size: 16px;

        .title__legend {
          display: flex;

          &__item {
            margin-left: 10px;

            &:first-child {
              margin-left: 0;
            }

            &__icon {
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              margin-right: 5px;
            }
          }
        }
      }

      &__content {
        flex: 1;
        position: relative;
        width: 100%;

        ul {
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          left: 0;
          top: -5px;
          height: calc(100% - 16px);
          margin-bottom: 27px;
        }

        >div {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
</style>`];
  modelInfo.value = {
    ...modelInfo.value,
    type: 'vue',
    activeIndex: 0,
  };
});

onUnmounted(() => {
  codeList.value = [''];
  modelInfo.value = {
    ...modelInfo.value,
    type: 'javascript',
    activeIndex: 0,
  };
});

watch(() => highlightXName.value, () => {
  init();
})

const transformStep = v => {
  const s = step.value;
  const n = (s > 1 || s === 1) ? (v - 1) * s : ((v - 1) * s).toFixed(1);
  return n === '0.0' ? '0' : n;
};
</script>

<template>
  <div class="line-li-dom">
    <IframeItemModel>
      <div class="line-li-dom__chart"
        v-if="data.length">
        <div v-if="info.titleShow"
          class="line-li-dom__chart__title">
          <div class="title__name">{{ info.yName }}</div>
          <div class="title__legend">
            <div v-for="item in data"
              :key="item.name"
              class="title__legend__item">
              <span class="title__legend__item__icon"
                :style="{ backgroundColor: item.color }"></span>
              <span class="title__legend__item__name">{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="line-li-dom__chart__content">
          <ul ref="yAxixRef"
            class="content__x-axis">
            <li v-for="i in (info.splitNumber + 1)"
              :key="i">
              {{ transformStep(i) }}
            </li>
          </ul>
          <div ref="myChartRef">
            <chart class="content__canvas"
              ref="chartRef"
              :option="option"></chart>
          </div>
        </div>
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .line-li-dom {
    width: 100%;
    height: 100%;

    &__chart {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 420px;

      &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 5px 0 25px;
        font-family: 'robo';
        font-size: 16px;

        .title__legend {
          display: flex;

          &__item {
            margin-left: 10px;

            &:first-child {
              margin-left: 0;
            }

            &__icon {
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              margin-right: 5px;
            }
          }
        }
      }

      &__content {
        flex: 1;
        position: relative;
        width: 100%;

        ul {
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          left: 0;
          top: -5px;
          height: calc(100% - 16px);
          margin-bottom: 27px;
        }

        >div {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .line-li-dom {

      &__chart {
        height: 26.25rem;

        &__title {
          padding: .3125rem 0 1.5625rem;
          font-size: 1rem;

          .title__legend {

            &__item {
              margin-left: .625rem;

              &__icon {
                width: .625rem;
                height: .625rem;
                margin-right: .3125rem;
              }
            }
          }
        }

        &__content {

          ul {
            top: -0.3125rem;
            height: calc(100% - 1rem);
            margin-bottom: 1.6875rem;
          }
        }
      }
    }
  }
</style>