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
    <div v-for="item in generateEffectRoutes" :key="item.path" @click="handleInfoFn(item)">{{ item }}</div>
  </div>
</template>

<style lang="less" scoped>
</style>