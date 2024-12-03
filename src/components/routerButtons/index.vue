<script setup>
import { light, screenWidth } from "@/store/index";
import { generateArticleRoutes } from "@/router/index";
import methods from '@/utils/customMethod';
import PhoneDom from "./phone_dom.vue";
import PCDom from "./pc_dom.vue";

// 点击跳转项目外路由
const handleLinkFn = (type) => {
  switch (type) {
    case "link":
      window.open("https://duyidao.github.io/");
      break;
    case "random":
      const num = Math.floor(Math.random() * generateArticleRoutes.length);
      methods.$goRouter(generateArticleRoutes[num].path, '/detail/');
      break;
    default:
      break;
  }
};

// 切换模式
const changeLightFn = () => {
  light.value = !light.value;
};

watch(
  () => light.value,
  (newVal) => {
    // 根组件设置样式
    if (newVal) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }
);
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'RouterButton', // 设置组件名称
});

export { componentOptions };
</script>

<template>
  <header class="router-buttons">
    <!-- 左侧logo -->
    <div class="router-buttons__logo"
      @click="methods.$goRouter('/')">
      <img src="/favicon.ico"
        alt="">
      <span class="logo__text"
        title="首页">
        刀刀小站
      </span>
    </div>

    <!-- pc端展示 -->
    <PCDom v-if="screenWidth > 768"
      :handleLinkFn="handleLinkFn"
      :changeLightFn="changeLightFn" />

    <!-- 移动端展示 -->
    <PhoneDom v-else
      :handleLinkFn="handleLinkFn"
      :changeLightFn="changeLightFn" />
  </header>
</template>

<style lang="less"
  scoped>
  @import "./darkBtn.css";

  .router-buttons {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    margin: 0 0 20px;
    background-color: var(--body-bg);
    padding: 0 20px;
    z-index: 9990;

    .router-buttons__logo {
      display: flex;
      align-items: center;
      width: 180px;
      cursor: pointer;

      img {
        width: 26px;
        height: 26px;
        margin-right: 10px;
      }

      .logo__text {
        position: relative;
        font-family: "dao";
        font-weight: 600;
        font-size: 30px;
        letter-spacing: 2px;
        color: var(--primary-bg);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .router-buttons {
      height: 4.5rem;
      padding: 1.25rem 1.25rem;
      margin: 0 0 1.25rem;

      .router-buttons__logo {
        width: 11.5rem;

        img {
          width: 1.625rem;
          height: 1.625rem;
          margin-right: .625rem;
        }

        .logo__text {
          font-size: 1.875rem;
          letter-spacing: 0.25rem;
        }
      }
    }
  }
</style>
