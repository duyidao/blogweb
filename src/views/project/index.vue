<script setup>
const list = [
{
    id: 1,
    name: '优医问诊',
    url: 'https://duyidao.github.io/excellent-medical-consultation/home',
    logo: 'https://raw.githubusercontent.com/duyidao/excellent-medical-consultation/refs/heads/master/public/favicon.ico',
    tag: ['Vue3', 'axios', 'vant', 'typescript'],
    img: 'https://pic.imgdb.cn/item/6749828ed0e0a243d4daf7c6.png',
    blog: 'https://duyidao.github.io/myself/%E4%BC%98%E5%8C%BB%E9%97%AE%E8%AF%8A/'
  },
  {
    id: 2,
    name: '小兔鲜',
    url: 'https://duyidao.github.io/rabit/',
    logo: 'https://raw.githubusercontent.com/duyidao/rabit/refs/heads/master/public/favicon.ico',
    tag: ['Vue3', 'axios', 'element-plus', 'pinia'],
    img: 'https://pic.imgdb.cn/item/67498819d0e0a243d4db0b14.png',
    blog: 'https://duyidao.github.io/myself/%E5%B0%8F%E5%85%94%E9%B2%9C/inweb/all.html'
  },
]
</script>

<template>
  <div class="project">
    <nav class="project-item" v-for="item in list" :key="item.id">
      <div class="project-item__info">
        <div class="project-item__info__top">
          <img :src="item.logo" alt="">
          <div class="project-item__name">{{ item.name }}</div>
        </div>
        <div class="project-item__info__msg">
        </div>
        <div class="project-item__info__tag">
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

</style>