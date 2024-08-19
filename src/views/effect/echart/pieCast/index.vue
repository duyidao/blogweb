<script setup>
import IframeBoxItem from '@/views/effect/components/iframeBoxItem/index.vue';
import PieChart from './pieChart.vue';

const data = ref([
  {
    value: 90, name: '货车通行',
    flowValue: '90%', flowName: '货车车流量',
  },
  {
    value: 10, name: '其他车通行',
    flowValue: '10%', flowName: '其他车车流量',
  },
])

const code = ref(``);
</script>

<template>
  <IframeBoxItem title="饼图轮播"
    v-model="code"
    type="javascript">
    <pie-chart :data="data" />
  </IframeBoxItem>
</template>

<style scoped></style>