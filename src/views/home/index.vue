<script setup>

</script>

<template>
  <div class="home">
    首页
    <div @click.stop="$goRouter('css', '/blogweb/articleList/')">css</div>
    <div @click.stop="$goRouter('js', '/blogweb/articleList/')">js</div>
    <div @click.stop="$goRouter('learn', '/blogweb/articleList/')">learn</div>
  </div>
</template>

<style lang="less" scoped>
.home {
  width: 100%;
  background-color: aqua;
}
</style>