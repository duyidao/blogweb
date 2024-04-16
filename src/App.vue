<script setup>
import { screenWidth } from '@/store/index.js'

const resizeFn = () => {
  screenWidth.value = document.documentElement.clientWidth || document.body.clientWidth;
}

onMounted(() => {
  window.addEventListener('resize', resizeFn);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeFn);
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
  width: 100vw;
  min-height: 100vh;
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .blog {
    flex-direction: column;
    padding: 1.25rem;
  }
}
</style>
