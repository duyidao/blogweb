<script setup>
import {generateEffectRoutes} from '@/router/index.js';
import methods from '@/utils/customMethod';

const handleInfoFn = item => {
  console.log('item', item);
  methods.$goRouter(item.path, '/info/');
}
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'Effect', // 设置组件名称
});

export {componentOptions};
</script>

<template>
  <div class="effect">
    <div v-for="item in generateEffectRoutes" :key="item.path" @click="handleInfoFn(item)">
      <img :src="item.meta.img" alt="">
      <div>
        {{ item.meta.title }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.effect {
  column-count: 4;
    column-gap: 20px;
    grid-template-rows: masonry;
    gap: 20px;

    > div {
      display: block;
      width: 100%;
      padding: 10px 0;
      cursor: pointer;
    }
}
</style>