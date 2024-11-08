<script setup>
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表
import { cssChildData, getDict } from '../../index.js';

const codeData = {
  flexCode: `<template>
  <div class="water-fall-flex">
    <div v-for="item in generateArticleRoutes" :key="item.path" >
      <img :src="item.meta.img" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.water-fall-flex {
  display: flex;
  flex-direction: column;
  height: 1250px;
  flex-wrap: wrap;
  gap: 11px;
  padding: 11px;
  overflow: hidden;

  div {
    width: 25%;

    &:nth-child(4n+1) {
        order: 1;
    }
    &:nth-child(4n+2) {
        order: 2;
    }
    &:nth-child(4n+3) {
        order: 3;
    }
    &:nth-child(4n) {
        order: 4;
    }
  }
}
</style>`,
  gridCode: `<template>
  <div class="water-fall-grid">
    <div v-for="item in generateArticleRoutes"
      :key="item.path">
      <img :src="item.meta.img"
        alt="">
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .water-fall-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: masonry;
    gap: 20px;

    div {
      width: 100%;
    }
  }
</style>`,
  columnCountCode: `<template>
  <div class="water-fall-column">
    <div v-for="item in generateArticleRoutes"
      :key="item.path">
      <img :src="item.meta.img"
        alt="">
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .water-fall-column {
    column-count: 4;
    column-gap: 20px;
    grid-template-rows: masonry;
    gap: 20px;

    div {
      display: block;
      width: 100%;
      padding: 10px 0;
    }
  }
</style>`,
};

const list = getDict('css.waterfall');

const componentList = ref([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(cssChildData.value[item.name]),
}));

onMounted(() => {
  codeList.value = list.map((item) => ({name: item.title + '源码', value: codeData[item.name + 'Code']}));
  modelInfo.value = {
    type: 'vue',
    activeIndex: 0,
  };
});

onUnmounted(() => {
  codeList.value = [''];
  modelInfo.value = {
    type: 'javascript',
    activeIndex: 0,
  };
});
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: '瀑布流', // 设置组件名称
});

export {componentOptions};
</script>

<template>
  <IframeItemModel v-for="item in componentList" :key="item.name" type="css" :title="item.title">
    <component :is="item.component"/>
  </IframeItemModel>
</template>

<style lang="less" scoped>
</style>