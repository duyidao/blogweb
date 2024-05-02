<script setup>

</script>

<template>
  <nav class="home">
    首页
    <router-link to="/articleList/css">css</router-link>
    <router-link to="/articleList/js">js</router-link>
    <router-link to="/articleList/learn">learn</router-link>
  </nav>
</template>

<style lang="less" scoped>
.home {
  width: 100%;
  background-color: aqua;
}
</style>