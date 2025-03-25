<script setup>
import { useRoute } from 'vue-router'
import { nextTick } from 'vue'
const route = useRoute()
const target = route.query.target

watchEffect(() => {
  if (target) {
    nextTick(() => {
      const targetEl = document.getElementById(target)
      console.log(targetEl);
      

      targetEl?.scrollIntoView({
        behavior: 'smooth', // 平滑滚动
        block: 'start', // 滚动到顶部 start | center | end
      })
    })
  }
})
</script>

<template>
  <div class="scrollBy">
    <nav>
      <button @click.stop="$router.replace({ query: { target: 'part1' } })">美妆</button>
      <button @click.stop="$router.replace({ query: { target: 'part2' } })">数码</button>
      <button @click.stop="$router.replace({ query: { target: 'part3' } })">黄金</button>
      <button @click.stop="$router.replace({ query: { target: 'part4' } })">家居</button>
      <button @click.stop="$router.replace({ query: { target: 'part5' } })">美食</button>
    </nav>
    <div class="home"
      id="home">
      <div class="part"
        id="part1">美妆</div>
      <div class="part"
        id="part2">数码</div>
      <div class="part"
        id="part3">黄金</div>
      <div class="part"
        id="part4">家居</div>
      <div class="part"
        id="part5">美食</div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .scrollBy {
    width: 100%;
    text-align: center;

    nav {
      display: flex;
      justify-content: space-around;

      button {
        width: 200px;
        height: 50px;
      }
    }

    .home {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 600px;
      overflow-y: auto;
      margin-top: 20px;

      .part {
        width: 100%;
        height: 200px;
        line-height: 200px;
        background-color: aquamarine;
        margin-top: 20px;

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
</style>