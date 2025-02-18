<script setup>
import flowImg from '@/assets/img/drawbed/css/variable.png'
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表
const boxRef = ref(null);

const init = () => {
  const w = boxRef.value?.clientWidth;
  boxRef.value?.style?.setProperty('--w', w + 'px');
};

onMounted(() => {
  init();
  window.addEventListener('resize', () => {
    init();
  });
  codeList.value = [`\<script\>
const init = () => {
  const w = boxRef.value.clientWidth;
  boxRef.value.style.setProperty('--w', w + 'px');
};
\<\/script\>

\<style\>
.item {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    animation: move 3s linear infinite;
  }

  @keyframes move {
    50% {
      transform: translateX(calc(var(--w) - 100%))
    }
  }

  @media screen and (max-width: 768px) {
    .setProperty-box {
      width: 20rem;
      height: 6.25rem;
      margin: 3.125rem auto;
      border: .0625rem solid #000;

      .item {
        width: 1.875rem;
        height: 1.875rem;
      }
    }
  }
\<\/style\>`];
  modelInfo.value = {
    type: 'vue',
    activeIndex: 0,
  };
});

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    init();
  });
  codeList.value = [''];
  modelInfo.value = {
    type: 'javascript',
    activeIndex: 0,
  };
});
</script>

<template>
  <IframeItemModel title="变量计算"
    :flowImg="flowImg"
    class="iframe-box">
    <div ref="boxRef" class="setProperty-box">
      <div class="item"></div>
    </div>
  </IframeItemModel>
</template>

<style lang="less" scoped>
.setProperty-box {
  width: 75%;
  height: 100px;
  margin: 50px auto;
  border: 1px solid #000;

  .item {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    animation: move 3s linear infinite;
  }
}

@keyframes move {
  50% {
    transform: translateX(calc(var(--w) - 100%))
  }
}

@media screen and (max-width: 768px) {
  .setProperty-box {
    width: 20rem;
    height: 6.25rem;
    margin: 3.125rem auto;
    border: .0625rem solid #000;

    .item {
      width: 1.875rem;
      height: 1.875rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .setProperty-box {
    height: 6.25rem;
    width: 95%;
    margin: 3.125rem auto;
    border-width: .0625rem;

    .item {
      width: 1.875rem;
      height: 1.875rem;
    }
  }
}
</style>