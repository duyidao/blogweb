<script setup>
const screenWidth = ref(document.documentElement.clientWidth || document.body.clientWidth);

onMounted(() => {
  window.addEventListener('resize', () => {
    console.log('window.innerWidth', window.innerWidth);
console.log('document.documentElement.clientWidth', document.documentElement.clientWidth);
console.log('document.body.clientWidth', document.body.clientWidth);
    screenWidth.value = document.documentElement.clientWidth || document.body.clientWidth;
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {
  });
});
</script>

<template>
  <div class="blog">
    <router-view></router-view>
  </div>
  <Candle />
</template>

<style lang="less" scoped>
.blog {
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 25px);
  height: 200vh;
  padding: 20px;
}
</style>
