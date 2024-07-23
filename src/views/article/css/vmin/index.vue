<script setup lang="ts">
</script>

<template>
  <div class="ifrname-box box">
    <img title="vmax" src="@/assets/img/cat.png"
      alt="vmax">
    <img title="vmin" src="@/assets/img/cat.png"
      alt="vmin">
  </div>
</template>

<style lang="less" scoped>
.box {
  padding: 20px;

  img:first-child {
    display: block;
    width: 100vmax;
  }

  img:last-child {
    display: block;
    width: 100vmin;
  }
}
</style>