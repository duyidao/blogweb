<script setup>
import { light, screenWidth, labelShow } from "@/store/index";
import { routerBtnList } from '@/store/router.js';
import methods from '@/utils/customMethod';
import scrollAngle from './scrollAngle.vue';

const { handleLinkFn } = defineProps({
  handleLinkFn: {
    type: Function,
    default: () => () => { },
  },
  changeLightFn: {
    type: Function,
    default: () => () => { },
  },
});

// 按钮列表与是否展示底部内容
const showBtn = ref([false, false, false]);
const showItemFn = (index, type) => {
  showBtn.value[index] = type;
};

// 点击跳转项目内路由
const goRouter = (item, index) => {
  const { base, path } = item.children[0];

  if (!base || !path) return;
  methods.$goRouter(path, base);
};
</script>

<template>
  <!-- 中间导航 -->
  <div class="router-buttons__list">
    <div v-for="(item, index) in routerBtnList"
      :key="index"
      class="router-buttons__item"
      :class="{ 'item-list-active': item.children?.length && showBtn[index] }"
      @mouseenter="showItemFn(index, true)"
      @mouseleave="showItemFn(index, false)">
      <mouse-glow-button :word="item.name"
        :iconName="item.icon"
        @click="goRouter(item, index)" />
    </div>
  </div>

  <!-- 右侧其他 -->
  <div style="display: flex; align-items: center; height: 100%;">
    <!-- 滚动条 -->
    <scrollAngle />

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
        :class="{ 'active': !light, 'dark': light }"
        @click.stop="changeLightFn"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "./darkBtn.css";

.router-buttons__list {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  .router-buttons__item {
    position: relative;
    margin-right: 15px;

    &::before {
      content: "";
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 100%;
      height: 10px;
      background-color: transparent;
    }

    &:last-child {
      margin-right: 0;
    }
  }
}

.router-buttons__btns {
  display: flex;
  align-items: center;
  margin-right: -75px;
  height: 100%;

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
</style>
