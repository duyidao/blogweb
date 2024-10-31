<script setup>
import { generateArticleRoutes } from '@/router/index.js';
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: '瀑布流column布局', // 设置组件名称
});

export { componentOptions };
</script>

<template>
  <div class="water-fall-column">
    <div v-for="item in generateArticleRoutes"
      :key="item.path">
      <img :src="item.meta.img"
        alt="">
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .water-fall-column {
    column-count: 4;
    column-gap: 20px;
    grid-template-rows: masonry;
    gap: 20px;

    div {
      display: block;
      width: 100%;
      padding: 10px 0;
    }
  }
</style>