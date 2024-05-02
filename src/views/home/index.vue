<script setup>

</script>

<template>
  <nav class="home">
    首页
    <div class="nav">
      <router-link to="/articleList/css">css</router-link>
      <router-link to="/articleList/js">js</router-link>
      <router-link to="/articleList/learn">learn</router-link>
    </div>
  </nav>
</template>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: aqua;

  .nav {
    display: flex;
    width: 100%;
    height: 100px;
    background-color: aquamarine;

    a {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      font-size: 20px;
      font-weight: 700;
      border: 1px solid #000;
      &:hover {
        background-color: #000;
        color: #fff;
      }
      &.router-link-exact-active {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>