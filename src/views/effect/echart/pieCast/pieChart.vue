<script setup>
// 绘制图表
const props = defineProps({
    data: {
        type: Array,
        default: () => ([]),
    },
});

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
            fontSize: 14,
        },
    },
    series: [
        {
            name: '货车通行占比（单位：%）',
            type: 'pie',
            radius: ['60%', '70%'],
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
                            fontSize: 30,
                            color: '#000000',
                            lineHeight: 30,
                            fontWeight: 500,
                            letterSpace: 1.5,
                        },
                        car: {
                            fontFamily: 'sans',
                            fontSize: 16,
                            color: '#000000',
                            lineHeight: 40,
                            fontWeight: 500,
                            letterSpace: 1.5,
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
                    fontSize: 20,
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [],
        },
    ],
})

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

const pieChart = ref(null);

onMounted(() => {
    console.log(pieChart.value.myChart);
    pieChart.value.myChart.on('highlight', function (params) {
        console.log('highlight', params);
        if (params.name) {
            const obj = props.data.find(item => item.name === params.name);
            console.log('obj', obj);
            option.value.series[0].label.normal.formatter = '{title|' + obj.value + '%}' + '\n' + '{car|' + obj.name + obj.flowValue + '辆}';
            console.log('option.value', option.value);
        }
    });
    pieChart.value.myChart.on('downplay', function (params) {
        console.log('downplay', params);
    });
})
</script>

<template>
    <chart class="pie_chart"
        ref="pieChart"
        :option="option"></chart>
</template>

<style scoped>
.pie_chart {
    width: 100%;
    height: 500px;
}
</style>