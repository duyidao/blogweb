<script setup>
import Flex from './components/flex.vue';
import ColumnCount from './components/columnCount.vue';
import Grid from './components/grid.vue';
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: '瀑布流', // 设置组件名称
});

export {componentOptions};
</script>

<template>
  <IframeItemModel type="css" title="flex布局">
    <Flex/>
  </IframeItemModel>
  <IframeItemModel type="css" title="columnCount布局">
    <ColumnCount/>
  </IframeItemModel>
  <IframeItemModel type="css" title="grid布局">
    <Grid/>
  </IframeItemModel>
</template>

<style lang="less" scoped>
</style>