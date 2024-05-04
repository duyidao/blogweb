<script setup>

</script>

<template>
  <nav class="home">
    <div class="user">首页</div>
      <div class="nav">
        <router-link class="transition-transform" to="/articleList/css" style="--i: -1">css</router-link>
        <router-link class="transition-transform" to="/articleList/js" style="--i: 0">js</router-link>
        <router-link class="transition-transform" to="/articleList/learn" style="--i: 1">learn</router-link>
      </div>
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

  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 50%;
    height: 240px;
    margin: 35px auto 10px;

    &:active {
      a:not(:active) {
        background-color: #333;
        border-color: #333;
      }
    }

    &:hover {
      a {
        transform: rotate(calc(var(--i) * 10deg)) translate(calc(var(--i) * 120px), -30px);
        box-shadow: 0 0 15px rgba(0, 0, 0, .3);
        color: var(--home-word-hover);
      }
    }

    a {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      height: 100%;
      border-radius: 8px;
      border: 10px solid var(--catalogue-bg);
      background-color: var(--catalogue-bg);
      transform-origin: 50% 100%;
      filter: hue-rotate(calc(var(--i) * 50deg));
      box-shadow: 0 0 15px rgba(0, 0, 0, .1);
      color: var(--home-word-normal);

      &:active {
        translate: calc(var(--i) * 20px) -50px;
        z-index: 9;
      }
    }
  }
}
</style>