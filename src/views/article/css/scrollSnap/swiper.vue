<script setup>
</script>

<template>
  <div class="box">
    <div v-for="item in 3"
      :key="item"
      class="item">{{ item }}</div>
  </div>
</template>

<style lang="less" scoped>
.box {
  display: flex;
  width: 100%;
  height: 128px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;

  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: yellowgreen;
    color: #fff;
    font-size: 40px;
    scroll-snap-align: center;
    scroll-snap-stop: always;

    &:first-child {
      background-color: skyblue;
    }

    &:last-child {
      background-color: orange;
    }
  }
}

@media screen and (max-width: 768px) {
  .box {
    height: 8rem;

    .item {
      font-size: 2.5rem;
    }
  }
}
</style>