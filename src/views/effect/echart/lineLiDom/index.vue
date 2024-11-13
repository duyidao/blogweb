<script setup>
import echarts from '@/components/chart/index.js';
import { useUnit } from '@/store/rem.js';

const props = defineProps({
  xAxis: {
    type: Array,
    default: () => (['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']),
  }
})

const { ratio } = useUnit();

const highlightXName = ref(''); // 当前悬浮的x轴数据
const option = ref({
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
    left: '6%',
    right: '2%',
    bottom: '2%',
    top: '8%',
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
      // formatter: (_, index) => {
      //   console.log('_, index', _, index);
      //     return xAxis[index];
      // },
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
    data: [],
  },
  yAxis: {
    // show:false,
    type: 'value',
            min: 0,
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line',
      name: '123'
    }
  ]
});
const initXAxisData = () => {
  option.value.xAxis.data = props.xAxis.map(item => {
    if (item === highlightXName.value) {
      return {
        value: item,
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
    } else {
      return {
        value: item,
        textStyle: {
          color: '#fff',
          padding: [2 * ratio.value, 6 * ratio.value],
        }
      }
    }
  })
}

const chartRef = ref(null);

onMounted(() => {
  initXAxisData();
  chartRef.value.myChart.on('mouseover', (params) => {
    highlightXName.value = params.name;
  });
  chartRef.value.myChart.on('mouseout', () => highlightXName.value = '');
})

watch(() => highlightXName.value, (newVal) => {
  initXAxisData();
})
</script>

<template>
  <div class="line-li-dom">
    <IframeItemModel>
      <chart class="line-li-dom__chart"
        ref="chartRef"
        :option="option"></chart>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .line-li-dom {
    width: 100%;
    height: 100%;

    &__chart {
      width: 100%;
      height: 420px;
    }
  }
</style>