<script setup>

</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'EffectInfo', // 设置组件名称
});

export {componentOptions};
</script>

<template>
  <div class="effect">
    <router-view />
  </div>
</template>

<style scoped>

</style>