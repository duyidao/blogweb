<script setup>
import { light, screenWidth, scrollAngle, scrollProgress, labelShow } from "@/store/index";
import { routerBtnList } from '@/store/router.js';
import methods from '@/utils/customMethod';

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
  if (!item.base || !item.path) return;
  methods.$goRouter(item.path, item.base);
  showItemFn(index, false);
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
        } ${scrollAngle}deg`}"
    >
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
        :class="{ 'active': !light, 'dark': light }"
        @click.stop="changeLightFn"></div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
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
        transform: translate(-50%, -60%) scale(0.0001);
        padding: 10px 20px 10px;
        background-color: #eaeaea;
        opacity: 0;
        transition: all 0.3s;
        will-change: transform;
        z-index: 900;

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
</style>
