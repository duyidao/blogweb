<script setup>
import { routes } from '@/router/index'
import Candle from '@/components/candle/index.vue'
</script>

<template>
  <div class="blog">
    <Candle />
  <div v-for="item in routes">
    <router-link :to="item.path">{{ item.meta.title }}</router-link>
    <router-link v-for="child in item.children"
      :to="child.path">{{ child.meta.title }}</router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
