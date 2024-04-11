<script setup>
import Layout from '@/components/catalogue/index.vue'
import Candle from '@/components/candle/index.vue'
</script>

<template>
  <div class="blog">
    <div class="content">
      <router-view></router-view>
    </div>
    <Layout />
  </div>
  <Candle />
</template>

<style lang="less" scoped>
.blog {
  display: flex;
  justify-content: space-between;
  width: calc(100vw - 18px);
  height: 200vh;
  padding: 20px;

  .content {
    flex: 1;
    margin-right: 20px;
    background-color: red;
  }
}
</style>
