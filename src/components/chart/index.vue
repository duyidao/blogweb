<script setup>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 引入柱状图图表，图表后缀都为 Chart
import { BarChart, PieChart } from 'echarts/charts';
// 引入标题，提示框，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent
} from 'echarts/components';
// 标签自动布局、全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

const props = defineProps({
  option: {
    type: Object,
    default: () => ({}),
  },
});

const myChart = ref(null);
const chartRef = ref(null);
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