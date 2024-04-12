<script setup>
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
