<script setup>
import flowImg from '@/assets/img/drawbed/css/lightEffect.png'
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表

onMounted(() => {
  codeList.value = [`@keyframes spread {
  to {
    color: skyblue;
    text-shadow: 20px 0 70px skyblue;
  }
}
.box {
  width: 100%;
  background-color: #000;
  text-align: center;
  line-height: 100px;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 10px;
  span {
    animation: spread 1s linear infinite alternate;
    color: #fff;
  }
  span:nth-child(1) {
    animation-delay: 0s;
  }
  span:nth-child(2) {
    animation-delay: 0.2s;
  }
  span:nth-child(3) {
    animation-delay: 0.4s;
  }
  span:nth-child(4) {
    animation-delay: 0.6s;
  }
  span:nth-child(5) {
    animation-delay: 0.8s;
  }
  span:nth-child(6) {
    animation-delay: 1s;
  }
  span:nth-child(7) {
    animation-delay: 1.2s;
  }
  span:nth-child(8) {
    animation-delay: 1.4s;
  }
}
`];
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
</script>

<template>
  <div class="iframe-box">
    <IframeItemModel title="光影特效" :flowImg="flowImg">
      <div class="box">
        <span>C</span>
        <span>O</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span>F</span>
        <span>U</span>
        <span>L</span>
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  @keyframes spread {
    to {
      color: skyblue;
      text-shadow: 20px 0 70px skyblue;
    }
  }


  .box {
    width: 100%;
    background-color: #000;
    text-align: center;
    line-height: 100px;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 10px;

    span {
      animation: spread 1s linear infinite alternate;
      color: #fff;
    }

    span:nth-child(1) {
      animation-delay: 0s;
    }

    span:nth-child(2) {
      animation-delay: 0.2s;
    }

    span:nth-child(3) {
      animation-delay: 0.4s;
    }

    span:nth-child(4) {
      animation-delay: 0.6s;
    }

    span:nth-child(5) {
      animation-delay: 0.8s;
    }

    span:nth-child(6) {
      animation-delay: 1s;
    }

    span:nth-child(7) {
      animation-delay: 1.2s;
    }

    span:nth-child(8) {
      animation-delay: 1.4s;
    }
  }

  @media screen and (max-width: 768px) {
    .box {
      line-height: 6.25rem;
      font-size: 2rem;
      letter-spacing: .625rem;
    }
  }
</style>