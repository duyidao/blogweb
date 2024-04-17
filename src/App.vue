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
  <footer>
    <Fishpond />
  </footer>
  <Candle />
</template>

<style lang="less" scoped>
.blog {
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 20px 20px 200px;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 200px;
}

@media screen and (max-width: 768px) {
  .blog {
    flex-direction: column;
    padding: 1.25rem 1.25rem 11.855rem;
  }

  footer {
    height: 11.85rem;
  }
}
</style>
