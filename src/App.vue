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
  <div class="footer"></div>
</template>

<style lang="less"
  scoped>
  .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: black;
    z-index: 9999;
  }

  .blog {
    display: flex;
    justify-content: space-between;
    width: 100vw;
    min-height: calc(100vh - 200px);
    padding: 20px 20px 205px;
  }

  footer {
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 100vw;
    height: 200px;
  }

  @media screen and (max-width: 768px) {
    .blog {
      flex-direction: column;
      bottom: .125rem;
      padding: 1.25rem 1.25rem 12.8125rem;
    }

    footer {
      height: 12.5rem;
    }
  }
</style>
