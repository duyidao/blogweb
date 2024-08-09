<script setup>
import { light, labelShow } from "@/store/index";
import methods from '@/utils/customMethod';

const {handleLinkFn} = defineProps({
  handleLinkFn: {
    type: Function,
    default: () => () => { },
  },
  changeLightFn: {
    type: Function,
    default: () => () => { },
  },
});

const emit = defineEmits(['handleRouter']);

// 点击功能按钮实现功能操作
const handleFuncFn = (type) => {
  handleLinkFn(type);
  labelShow.value = false;
}

// 点击文章按钮跳往文章页面
const handleRouterFn = (path) => {
  methods.$goRouter(path, '/article/');
  labelShow.value = false;
  emit('handleRouter');
}
</script>

<template>
  <div class="phone-dom">
    <!-- 文章列表 -->
    <div class="phone-dom__title">文章列表</div>
    <div class="phone-dome__list">
      <div class="phone-dome__item"
        @click.stop="handleRouterFn('css')">
        <i class="iconfont icon-css"></i>
        <span>CSS</span>
      </div>
      <div class="phone-dome__item"
        @click.stop="handleRouterFn('js')">
        <i class="iconfont icon-js"></i>
        <span>Javascript</span>
      </div>
      <div class="phone-dome__item"
        @click.stop="handleRouterFn('learn')">
        <i class="iconfont icon-xuexi"></i>
        <span>Learn</span>
      </div>
    </div>

    <!-- 功能按钮 -->
    <div class="phone-dom__title">功能按钮</div>
    <div class="phone-dome__list">
      <div title="前往随机文章"
        class="phone-dome__item">
        <i class="iconfont icon-suiji"
          @click.stop="handleFuncFn('random')"></i>
        <span>随机文章</span>
      </div>

      <div title="刀刀博客小站"
        class="phone-dome__item">
        <i class="iconfont icon-fujianguanli"
          @click.stop="handleFuncFn('link')"></i>
        <span>刀刀小站外链</span>
      </div>
    </div>

    <!-- 暗黑模式 -->
    <div class="phone-dom__title">模式切换</div>
    <div class="phone-dom__father">
      <div ref="darkBtn"
        title="暗黑模式切换"
        id="dark-btn"
        :class="{ 'active': !light, 'dark': light }"
        @click.stop="changeLightFn">
      </div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  @import "./darkBtn.css";

  .phone-dom {
    height: 100%;

    .phone-dom__father {
      position: relative;
      width: 100%;
      height: 2.5rem;

      #dark-btn {
        position: absolute;
        top: -90%;
        left: -20%;
      }
    }
  }

  .phone-dom__title {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1.55rem;
    text-align: left;
  }

  .phone-dome__list {
    display: flex;
    width: 100%;
    overflow-y: auto;
    margin-bottom: 1.75rem;

    .phone-dome__item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 30%;
      padding: .625rem 0;
      margin-right: 5%;
      border: .0625rem solid var(--primary-font);
      border-radius: .5rem;
      cursor: pointer;

      &:nth-child(3) {
        margin-right: 0;
      }

      &:hover {
        border: .0625rem solid #303F9F;
        background-color: #303F9F;
        color: #fff;

        i {
          color: #fff !important;
        }
      }

      span {
        font-size: 1.15rem;
        margin-top: .75rem;
      }
    }
  }

  .phone-dom__link__item {
    display: inline-block;
    padding: .3125rem .625rem;
    border: .0625rem solid var(--primary-font);
  }
</style>
