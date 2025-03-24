<script setup>
import { screenWidth, scrollProgress, scrollAngle } from "@/store/index.js";
import { loading } from '@/store/router';
import methods from '@/utils/customMethod';

const route = useRoute();

// 优化1：使用组合式函数封装逻辑
const useResponsive = () => {
  const fontSize = computed(() => (screenWidth.value / 750) * 16)
  
  const updateDimensions = methods.debounce(() => {
    screenWidth.value = document.documentElement.clientWidth || document.body.clientWidth
    document.documentElement.style.fontSize = `${fontSize.value}px`
  }, 200)

  return { updateDimensions }
}

// 优化2：滚动逻辑重构
const useScrollTracking = () => {
  const handleScroll = methods.debounce(() => {
    const scrollTop = document.documentElement.scrollTop
    const total = document.documentElement.scrollHeight - window.innerHeight
    scrollProgress.value = parseInt((scrollTop / total) * 100)
    scrollAngle.value = (window.scrollY / total) * 360
  }, 200)

  return { handleScroll }
}

// 优化3：使用watchEffect管理事件监听
const { updateDimensions } = useResponsive()
const { handleScroll } = useScrollTracking()

onMounted(() => {
  window.addEventListener('resize', updateDimensions)
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateDimensions)
  window.removeEventListener('scroll', handleScroll)
})

// 优化4：页面可见性状态管理
const visibilityHandler = ref(null)
watchEffect((onCleanup) => {
  visibilityHandler.value = () => {
    if (document.hidden) {
      document.title = "诶(ﾟДﾟ*)ﾉ你要离开了吗"
    } else {
      document.title = "嘿(≧∇≦)ﾉ欢迎回来"
      setTimeout(() => (document.title = '刀刀博客小站'), 10000)
    }
  }
  
  document.addEventListener('visibilitychange', visibilityHandler.value)
  onCleanup(() => document.removeEventListener('visibilitychange', visibilityHandler.value))
})

const routeKey = computed(() => `${route.fullPath}?v=${route.hash}`)
</script>

<template>
  <div class="blog" v-close="false">
    <RouterButtons v-if="!route.path.includes('404')" />

    <router-view :key="routeKey" class="content"/>

    <!-- 路由切换进度条 -->
    <my-loading :loading="loading" />

    <!-- 返回顶部 -->
    <my-toTop />
  </div>
</template>

<style lang="less" scoped>
.blog {
  display: flex;
  flex-direction: column;
  width: 100%;

  .content {
    padding: 0 20px 20px;
  }
}

@media screen and (max-width: 768px) {
  .blog .content {
    padding: 0 1.25rem 1.25rem;
  }
}
</style>
