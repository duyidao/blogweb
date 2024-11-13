<script setup>
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表
import { cssChildData, getDict } from '../../index.js';

const codeData = {
  linearBorderCode: `<template>
  <!-- 滚动条 -->
  <div v-if="!isNaN(scrollProgress)"
    id="scroll-angle"
    :style="{
      background: \`conic-gradient(from 0deg, #008eff 0%, orange $\{scrollAngle}deg, \${light.value ? '#000' : '#616161'
        } \${scrollAngle}deg\`,
    }">
    {{ scrollProgress }}
  </div>
</template>

<style lang="less" scoped>
#scroll-angle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: var(--catalogue-word);
  margin-right: 15px;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    inset: 3px;
    background-color: var(--body-bg);
    z-index: -1;
  }
}

@media screen and (max-width: 768px) {
  #scroll-angle {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: .9375rem;

    &::before {
      inset: .1875rem;
      z-index: -1;
    }
  }
}
</style>`,
  rippleCode: `<template>
  <div class="ripple"
    :style="{ '--completion': scrollProgress + '%' }">
    <output name="result"
      for="completion">{{ scrollProgress }}</output>
  </div>
</template>

<style lang="less"
  scoped>
  .ripple {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: transparent;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: calc(100% - var(--completion));
      display: block;
      width: 200%;
      height: 200%;
      translate: -50% 0;
      background-color: #fff;
      border-radius: 25px;
      animation: spin 5s linear infinite;
      z-index: -1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>`,
};

const list = getDict('css.scrollBar');

const componentList = ref([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(cssChildData.value[item.name]),
}));

onMounted(() => {
  codeList.value = list.map((item) => ({name: item.title + '源码', value: codeData[item.name + 'Code']}));
  modelInfo.value = {
    ...modelInfo.value,
    type: 'vue',
    activeIndex: 0,
  };
});

onUnmounted(() => {
  codeList.value = [''];
  modelInfo.value = {
    ...modelInfo.value,
    type: 'javascript',
    activeIndex: 0,
  };
});
</script>

<template>
  <div class="scrollbar">
    <IframeItemModel v-for="item in componentList" :key="item.name" :title="item.title">
    <component :is="item.component"/>
  </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .scrollbar {
    height: 2000px;

    :deep(.iframe-item-model) {
      position: fixed;
      width: 96.5%;

      &:last-child {
        top: 420px;
      }

      .iframe-item-model__content,
      .iframe-item-model__content__info {
        min-height: auto;
      }

      .iframe-item-model__content__info{ 
        height: 130px;
      }
    }
  }
</style>