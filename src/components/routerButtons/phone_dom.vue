<script setup>
import { light, labelShow } from "@/store/index";
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

const emit = defineEmits(['handleRouter']);

const route = useRoute(); // 获取当前路由信息

// 点击功能按钮实现功能操作
const handleFuncFn = (type) => {
  handleLinkFn(type);
  labelShow.value = false;
}

// 点击文章按钮跳往文章页面
const handleRouterFn = (path, front = '/article/') => {
  methods.$goRouter(path, front);
  labelShow.value = false;
  emit('handleRouter');
}
</script>

<template>
  <!-- 移动端 -->
  <div class="router-button__btns__phone">
    <!-- 滚动条 -->
    <scrollAngle />

    <!-- 展开按钮 -->
    <i v-close="true"
      class="iconfont icon-zhankai"
      @click.stop="handleShowFn">
    </i>

    <!-- 右侧弹出层 -->
    <my-dropper v-model="labelShow"
      width="60%">
      <template #default>
        <div class="phone-dom">
          <!-- 列表 -->
          <div v-for="item in routerBtnList"
            :key="item.name">
            <div class="phone-dom__title">{{ item.phoneName }}</div>
            <div class="phone-dome__list">
              <div class="phone-dome__item"
                v-for="e in item.children"
                :key="e.path"
                :class="{ 'active': route.path.includes(e.base + e.path) }"
                @click.stop="handleRouterFn(e.path, e.base)">
                <i class="iconfont"
                  :class="e.icon"></i>
                <span>{{ e.name }}</span>
              </div>
            </div>
          </div>

          <!-- 功能按钮 -->
          <div class="phone-dom__title">功能操作按钮列表</div>
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
              <span>刀刀博客</span>
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
    </my-dropper>
  </div>
</template>

<style lang="less"
  scoped>
  @import "./darkBtn.css";

  .router-button__btns__phone {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    margin-top: 0.125rem;

    :deep(.iconfont) {
      font-size: 1.5625rem !important;
      cursor: pointer;

      &:hover {
        color: var(--primary-bg);
      }
    }

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

      .phone-dom__title {
        width: 100%;
        font-size: 1rem;
        margin-bottom: 1.55rem;
        text-align: left;
      }

      .phone-dome__list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-bottom: 1rem;

        .phone-dome__item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 30%;
          padding: .625rem 0;
          margin-right: 5%;
          margin-bottom: .9375rem;
          border: .0625rem solid var(--primary-font);
          border-radius: .5rem;
          cursor: pointer;

          &.active {
            border: .0625rem solid #303F9F;
            background-color: #303F9F;
            color: #fff;

            i {
              color: #fff !important;
            }
          }

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
    }

    .phone-dom__link__item {
      display: inline-block;
      padding: .3125rem .625rem;
      border: .0625rem solid var(--primary-font);
    }
  }

  #scroll-angle {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.875rem;
    height: 1.875rem;
    color: var(--catalogue-word);
    margin-right: .9375rem;
    z-index: 5;

    &::before {
      content: "";
      position: absolute;
      inset: .1875rem;
      background-color: var(--body-bg);
      z-index: -1;
    }
  }
</style>
