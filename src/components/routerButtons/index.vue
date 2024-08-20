<script setup>
import { light, screenWidth, scrollAngle, scrollProgress, labelShow } from "@/store/index";
import { generateArticleRoutes } from "@/router/index";
import methods from '@/utils/customMethod';
import PhoneDom from "./phone_dom.vue";

// logo展示文字还是按钮
const logoHover = ref(true);
const mouseenterFn = () => {
  if (screenWidth.value < 768) return;
  logoHover.value = false;
};
const mouseleaveFn = () => {
  logoHover.value = true;
};

// 按钮列表与是否展示底部内容
const showBtn = ref([false, false, false]);
const routerBtnList = ref([
  {
    name: "文章列表",
    icon: "icon-liebiao",
    children: [
      {
        name: "CSS",
        base: "/article/",
        path: "css",
        icon: "icon-css",
      },
      {
        name: "Javascript",
        base: "/article/",
        path: "js",
        icon: "icon-js",
      },
      {
        name: "Learn",
        base: "/article/",
        path: "learn",
        icon: "icon-xuexi",
      },
    ],
  },
  {
    name: "效果列表",
    icon: 'icon-yonghu',
    children: [
      {
        name: "EChart",
        base: "/effect/",
        path: "echart",
      },
    ],
  },
]);
const showItemFn = (index, type) => {
  showBtn.value[index] = type;
};

// 点击跳转项目内路由
const goRouter = (item, index) => {
  if (!item.base || !item.path) return;
  methods.$goRouter(item.path, item.base);
  showItemFn(index, false);
};

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

const darkBtn = ref(null);
// 切换模式
const changeLightFn = () => {
  light.value = !light.value;
};

watch(
  () => light.value,
  (newVal) => {
    // 根组件设置样式
    if (newVal) {
      darkBtn.value?.classList.remove("active");
      document.documentElement.classList.remove("dark");
    } else {
      darkBtn.value?.classList.add("active");
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

export {componentOptions};
</script>

<template>
  <div class="router-buttons">
    <!-- 左侧logo -->
    <div class="router-buttons__logo"
      @mouseenter="mouseenterFn"
      @mouseleave="mouseleaveFn"
      @click="methods.$goRouter('/')">
      <span v-if="logoHover"
        class="logo__text">刀刀小站</span>
      <my-button v-else
        full
        iconName="icon-shouye"
        @click="methods.$goRouter('/')" />
    </div>

    <!-- 中间导航 -->
    <div class="router-buttons__list">
      <div v-for="(item, index) in routerBtnList"
        :key="index"
        class="router-buttons__item"
        :class="{ 'item-list-active': item.children?.length && showBtn[index] }"
        @mouseenter="showItemFn(index, true)"
        @mouseleave="showItemFn(index, false)">
        <my-button :word="item.name"
          :iconName="item.icon" />
        <div class="item-list">
          <div v-for="(e, i) in item.children"
            :key="i"
            class="item-list__item">
            <my-button :iconName="e.icon"
              :word="e.name"
              @click="goRouter(e, index)" />
          </div>
        </div>
      </div>
    </div>

    <!-- 右侧其他 -->
    <div style="display: flex; align-items: center;">
      <!-- 滚动条 -->
      <div v-if="!isNaN(scrollProgress)"
        ref="scrollAngleRef"
        id="scroll-angle"
        :style="{
          background: `conic-gradient(from 0deg, #008eff 0%, orange ${scrollAngle}deg, ${light.value ? '#000' : '#616161'
            } ${scrollAngle}deg`,
        }">
        {{ scrollProgress }}
      </div>

      <!-- 外链 -->
      <div class="router-buttons__btns">
        <div class="router-buttons__link">
          <div title="前往随机文章"
            class="router-buttons__link__item">
            <i class="iconfont icon-suiji"
              @click.stop="handleLinkFn('random')"></i>
          </div>
          <div title="刀刀博客小站"
            class="router-buttons__link__item">
            <i class="iconfont icon-fujianguanli"
              @click.stop="handleLinkFn('link')"></i>
          </div>
        </div>
        <div ref="darkBtn"
          title="暗黑模式切换"
          id="dark-btn"
          @click.stop="changeLightFn"></div>
      </div>

      <!-- 移动端 -->
      <div class="router-button__btns__phone">
        <i v-close="true"
          class="iconfont icon-zhankai"
          @click.stop="handleShowFn"></i>
        <my-dropper v-model="labelShow"
          width="60%">
          <template #default>
            <PhoneDom :handleLinkFn="handleLinkFn"
              :changeLightFn="changeLightFn" />
          </template>
        </my-dropper>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./darkBtn.css";

.router-buttons {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 0 0 40px;
  background-color: var(--body-bg);
  padding: 0 20px;
  z-index: 9990;

  .router-buttons__logo {
    width: 120px;
    cursor: pointer;

    .logo__text {
      font-family: "dao";
      font-weight: 600;
      font-size: 25px;
      letter-spacing: 2px;
      color: var(--primary-bg);
    }
  }

  .router-buttons__list {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .router-buttons__item {
      position: relative;
      margin-right: 15px;

      &.item-list-active {
        &::after {
          opacity: 1;
          transform: translate(-50%, 0) scale(1);
        }

        .item-list {
          transform: translate(-50%, 0) scale(1);
          opacity: 1;
        }
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: transparent;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 150%) scale(0.1);
        opacity: 0;
        border-bottom: 10px solid #eaeaea;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        transition: all 0.3s;
      }

      &:last-child {
        margin-right: 0;
      }

      .item-list {
        position: absolute;
        top: 43px;
        left: 50%;
        transform: translate(-50%, 60%) scale(0.1);
        padding: 10px 20px 10px;
        background-color: #eaeaea;
        opacity: 0;
        transition: all 0.3s;
        will-change: transform;
        z-index: 999;

        .item-list__item {
          display: inline-block;
          width: 100%;
          margin-right: 15px;
          margin-bottom: 15px;

          &:last-child {
            margin-right: 0;
            margin-bottom: 0;
          }
        }
      }
    }
  }

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

  .router-buttons__btns {
    display: flex;
    align-items: center;
    margin-right: -75px;

    .router-buttons__link {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      margin-right: -65px;

      &__item {
        padding: 5px;
        color: var(--primary-bg);
        border-radius: 8px;
        margin-left: 14px;
        cursor: pointer;

        :deep(.iconfont) {
          font-size: 28px;
        }

        &:first-child {
          margin-left: 0;
        }
      }
    }
  }

  .router-button__btns__phone {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .router-buttons {
    height: 4.5rem;
    padding: 1.25rem 1.25rem;
    margin: 0 0 1.35rem;

    .router-buttons__logo {
      width: 7.5rem;

      .logo__text {
        font-size: 1.5625rem;
        letter-spacing: 0.125rem;
      }
    }

    .router-buttons__list,
    .router-buttons__link,
    .router-buttons__btns {
      display: none;
    }

    .router-button__btns__phone {
      display: block;
      flex: 1;
      margin-top: 0.125rem;
      text-align: right;

      :deep(.iconfont) {
        font-size: 1.5625rem !important;
        cursor: pointer;

        &:hover {
          color: var(--primary-bg);
        }
      }
    }

    #scroll-angle {
      width: 1.875rem;
      height: 1.875rem;
      margin-right: .9375rem;
      font-size: .985rem;
      line-height: 3rem;

      &::before {
        inset: .1875rem;
      }
    }
  }
}
</style>
