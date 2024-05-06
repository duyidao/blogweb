<script setup>
import ArticleNav from './components/articleNav.vue'
</script>

<template>
  <nav class="home">
    <div class="user">首页</div>
    <ArticleNav />
  </nav>
</template>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .user {
    width: 100%;
    height: 200px;
  }
}
</style>