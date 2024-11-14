<script setup>
import echarts from './index.js';

const props = defineProps({
  option: {
    type: Object,
    default: () => ({}),
  },
});

const myChart = shallowRef(null);
const chartRef = shallowRef(null);
const onResize = () => {
  myChart.value.resize();
};
onMounted(() => {
  myChart.value = echarts.init(chartRef.value);
  // 绘制图表
  myChart.value.setOption(props.option);
  window.addEventListener('resize', onResize);
});

watch(
  () => props.option,
  (newValue, oldValue) => {
    myChart.value.setOption(newValue);
  },
  { deep: true }
);

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

defineExpose({
  myChart,
  onResize,
});
</script>

<template>
  <div ref="chartRef" class="all_chart"></div>
</template>

<style scoped>
.pie_chart {
  width: 100%;
  height: 100%;
}
</style>