<script setup>
import {generateArticleRoutes} from '@/router/index.js';

console.log('generateArticleRoutes', generateArticleRoutes);
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'Effect', // 设置组件名称
});

export {componentOptions};
</script>

<template>
  <div class="water-fall">
    <div v-for="item in generateArticleRoutes" :key="item.path" >
      <img :src="item.meta.img" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.water-fall {
  display: flex;
  flex-direction: column;
  height: 1250px;
  flex-wrap: wrap;
  gap: 11px; // [!code ++]
  padding: 11px; // [!code ++]
  overflow: hidden; // [!code ++]

  div {
    width: 25%;

    &:nth-child(4n+1) {
        order: 1;
    }
    &:nth-child(4n+2) {
        order: 2;
    }
    &:nth-child(4n+3) {
        order: 3;
    }
    &:nth-child(4n) {
        order: 4;
    }
  }
}
</style>