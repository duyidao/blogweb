<script setup>
import Weather from "./components/weather.vue";
</script>

<template>
  <div class="home">
    <div class="user">
      <div>123</div>
      <Weather />
    </div>
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
