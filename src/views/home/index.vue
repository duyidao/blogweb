<script setup>
import ArticleNav from "./components/articleNav.vue";
import Weather from "./components/weather.vue";
</script>

<template>
  <div class="home">
    <div class="user">
      <Weather/>
    </div>
    <ArticleNav />
  </div>
</template>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}
</style>
