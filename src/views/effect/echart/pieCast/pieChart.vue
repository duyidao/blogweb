<script setup>
import { useUnit } from '@/store/rem.js';
import { screenWidth } from '@/store/index.js';
// 绘制图表
const props = defineProps({
    data: {
        type: Array,
        default: () => ([]),
    },
});

const legendMap = new Map();

const {ratio} = useUnit();
// echart的option配置项设置
const option = ref({
    tooltip: {
        trigger: 'item',
        formatter: e => {
            return `<div>
        <div>
            <span>${e.data.name}</span>
            <span>${e.data.value}%</span>
        </div>
        <div>
            <span>${e.data.flowName}</span>
            <span>${e.data.flowValue}</span>
        </div>
      </div>`;
        },
    },
    legend: {
        top: 'center',
        orient: 'vertical',
        left: 'right',
        icon: 'circle',
        align: 'left',
        textStyle: {
            color: '#7b70f7',
            rich: {
                name: {
                    width: screenWidth.value > 768 ? 70 : 70 * ratio.value,
                    fontWeight: 700,
                    fontSize: screenWidth.value > 768 ? 14 : 14 * ratio.value,
                    fontFamily: 'fang',
                    align: 'left',
                },
                value: {
                    width: screenWidth.value > 768 ? 50 : 50 * ratio.value,
                    fontSize: screenWidth.value > 768 ? 14 : 14 * ratio.value,
                    fontWeight: 700,
                    fontFamily: 'fang',
                    align: 'right',
                },
            },
        },
        formatter: e => {
            if (legendMap.has(e)) return `{name|${legendMap.get(e).name}} {value|${legendMap.get(e).value}%}`;

            let obj = { name: e, value: props.data.find(item => item.name === e).value };
            legendMap.set(e, obj);
            return `{name|${obj.name}} {value|${obj.value}%}`;
        },
    },
    series: [
        {
            name: '货车通行占比（单位：%）',
            type: 'pie',
            radius: ['55%', '65%'],
            center: ['35%', '50%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'left',
                normal: {
                    show: true,
                    position: 'center',
                    color: '#4c4a4a',
                    formatter: '{title|' + 0 + '%}' + '\n' + '{car|货车通行' + 0 + '辆}',
                    rich: {
                        title: {
                            fontFamily: 'sans',
                            fontSize: screenWidth.value > 768 ? 30: 30 * ratio.value,
                            color: '#999',
                            lineHeight: screenWidth.value > 768 ? 50 : 50 * ratio.value,
                            fontWeight: 500,
                            letterSpace: screenWidth.value > 768 ? 1.5 : 1.5 * ratio.value,
                        },
                        car: {
                            fontFamily: 'sans',
                            fontSize: screenWidth.value > 768 ? 16 : 16 * ratio.value,
                            color: '#999',
                            lineHeight: screenWidth.value > 768 ? 40 : 40 * ratio.value,
                            fontWeight: 500,
                            letterSpace: screenWidth.value > 768 ? 1.5 : 1.5 * ratio.value,
                        },
                    },
                },
                // 中间文字显示
                emphasis: {
                    show: true,
                },
            },
            emphasis: {
                label: {
                    show: false,
                    fontSize: screenWidth.value > 768 ? 20 : 20 * ratio.value,
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [],
        },
    ],
});

// 如果data发生变化则重新更新option
watch(
    () => props.data,
    (val) => {
        if (val.length > 0) {
            option.value.series[0].data = val;
            option.value.series[0].label.normal.formatter = '{title|' + val[0].value + '%}' + '\n' + '{car|' + val[0].name + val[0].flowValue + '辆}';
        }
    },
    { immediate: true, deep: true }
);

// 开启定时器轮播
const timer = ref(null);
const highlightIndex = ref(0);
const downplayIndex = ref(-1);
const intervalStartFn = () => {
    if (timer.value) {
        clearInterval(timer.value);
        timer.value = null;
    }
    const formatterChange = () => {
        if (!pieChart.value) return;
        pieChart.value.myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0, // 第一个系列
            dataIndex: highlightIndex.value,
        });
        pieChart.value.myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0, // 第一个系列
            dataIndex: downplayIndex.value,
        });

        // 中部自定义内容调整
        const obj = props.data[highlightIndex.value];
        option.value.series[0].label.normal.formatter = '{title|' + obj.value + '%}' + '\n' + '{car|' + obj.name + obj.value + '辆}';

        // 激活与非激活索引自增1
        highlightIndex.value = highlightIndex.value >= props.data.length - 1 ? 0 : highlightIndex.value + 1;
        downplayIndex.value = downplayIndex.value >= props.data.length - 1 ? 0 : downplayIndex.value + 1;
    };
    formatterChange();
    timer.value = setInterval(() => {
        formatterChange();
    }, 3000);
};

// 为echart绑定图例选中和取消选择事件
const pieChart = ref(null);
const pieChartAddEventFn = () => {
    pieChart.value.myChart.on('highlight', function (params) {
        if (params.name) {
            clearInterval(timer.value);
            timer.value = null;

            props.data.forEach((item, index) => {
                if (item.name !== params.name) {
                    pieChart.value.myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0, // 第一个系列
                        dataIndex: index,
                    });
                }
                else {
                    option.value.series[0].label.normal.formatter = '{title|' + item.value + '%}' + '\n' + '{car|' + item.name + item.value + '辆}';
                }
            });
        }
    });
    pieChart.value.myChart.on('downplay', function (params) {
        if (params.name) {
            intervalStartFn();
        }
    });
};

onMounted(() => {
    intervalStartFn();
    pieChartAddEventFn();
});

onUnmounted(() => {
    clearInterval(timer.value);
    timer.value = null;
});
</script>

<template>
    <chart class="pie_chart"
        ref="pieChart"
        :option="option"></chart>
</template>

<style scoped>
.pie_chart {
    width: 100%;
    height: 380px;
}

@media screen and (max-width: 768px) {
    .pie_chart {
        height: 23.75rem;
    }
}
</style>