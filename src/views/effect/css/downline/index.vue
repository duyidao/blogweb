<script setup>
import flowImg from '@/assets/img/drawbed/css/downline.png'
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表

const divRef = ref(null);
onMounted(() => {
  codeList.value = [`background-size: 100% 2px;
background-position: left bottom;`];
  modelInfo.value = {
    type: 'css',
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

const handleMouseEnter = () => {
  divRef.value.style.cssText = codeList.value[0];
};

const handleMouseLeave = () => {
  divRef.value.style.cssText = '';
};
</script>

<template>
  <div class="iframe-box banner">
    <IframeItemModel title="下划线动画" :flowImg="flowImg">
      <div class="line-title"
        ref="divRef"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
        前端搬砖人每天都努力
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .line-title {
    display: inline-block;
    padding-bottom: 5px;
    background: linear-gradient(to right, #7e2f2b, #146429) no-repeat right bottom;
    transition: background-size .5s;
    background-size: 0 2px;
    cursor: pointer;
    font-size: 20px;
    color: #7e2f2b;
  }

  @media screen and (max-width: 768px) {
    .line-title {
      padding-bottom: .3125rem;
      background-size: 0 .125rem;
      font-size: 1.25rem;
    }
  }
</style>