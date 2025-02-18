<script setup>
import flowImg from '@/assets/img/drawbed/css/shadow.png'
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表

onMounted(() => {
  codeList.value = [`<template>
  <div class="shadow">Hello vue3</div>
</template>

<style lang="less" scoped>
  .shadow {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-family: 'robo';
    color: var(--normal-word);

    &::after {
      content: 'Hello vue3';
      position: absolute;
      top: 0;
      left: 0;
      color: #000;
      transform: translate(-14px, 8px) scaleY(0.5) skew(40deg);
      filter: blur(2px);
      mask: linear-gradient(transparent, #000);
      z-index: -1;
    }
  }
</style>
`];
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
  <IframeItemModel title="文字立起" :flowImg="flowImg">
    <div class="shadow">Hello vue3</div>
  </IframeItemModel>
</template>

<style lang="less"
  scoped>
  .shadow {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-family: 'robo';
    color: var(--normal-word);

    &::after {
      content: 'Hello vue3';
      position: absolute;
      top: 0;
      left: 0;
      color: #000;
      transform: translate(-14px, 8px) scaleY(0.5) skew(40deg);
      filter: blur(2px);
      mask: linear-gradient(transparent, #000);
      z-index: -1;
    }
  }

  @media screen and (max-width: 768px) {
    .shadow {
      font-size: 2.5rem;

      &::after {
        transform: translate(-0.875rem, .5rem) scaleY(0.5) skew(40deg);
        filter: blur(.125rem);
      }
    }
  }
</style>