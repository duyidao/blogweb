<script setup>
import ArticleNav from "./components/articleNav.vue";
import Weather from "./components/weather.vue";
import RouterButtons from "./components/routerButtons.vue";
</script>

<template>
  <div class="home">
    <RouterButtons/>
    <div class="user">
      <div>123</div>
      <Weather />
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

  .user {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .home {
    .user {
      flex-direction: column;
      justify-content: start;
      width: 100%;
    }
  }
}
</style>
