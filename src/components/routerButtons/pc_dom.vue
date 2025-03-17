<script setup>
import { light, screenWidth } from "@/store/index";
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

// 点击跳转项目内路由
const goRouter = (item) => {
  const { base, path } = item;

  if (!base && !path) return;
  methods.$goRouter(path, base);
};

const checkIcon = ref(`'\\e60c'`);
const changeLightFn = () => {
  light.value = !light.value;
  checkIcon.value = light.value ? `'\\e60c'` : `'\\e60b'`;
}
</script>

<template>
  <!-- 中间导航 -->
  <div class="router-buttons__list">
    <div v-for="(item, index) in routerBtnList"
      :key="index"
      class="router-buttons__item">
      <div class="router-buttons__item__title">{{ item.name }}</div>
      <div class="item-list">
        <div v-for="(e, i) in item.children"
          :key="i"
          class="item-list__item"
          @click="goRouter(e, index)">
          <i class="iconfont"
            :class="e.icon"></i>
          <span>{{ e.name }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 滚动条 -->
  <scrollAngle />
  <!-- 右侧其他 -->
  <div class="router-buttons__right">
    <i v-if="screenWidth < 950"
      class="iconfont icon-gengduo"></i>
    <div class="router-buttons__btns"
      :class="{ 'm': screenWidth < 950 }">
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
      <div class="router-buttons__dark">
        <p v-if="screenWidth < 950">暗黑模式</p>
        <label class="switch"
          :style="{'--icon': checkIcon}"
          for="darkModeToggle">
          <input :checked="!light"
            ref="checkRef"
            @change="changeLightFn"
            type="checkbox"
            id="darkModeToggle">
          <span class="slider"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>

  .router-buttons__list {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .router-buttons__item {
      position: relative;
      margin-right: 35px;

      &:hover {
        &::after {
          opacity: 1;
          transform: translate(-50%, 0) scale(1);
        }

        .item-list {
          transform: translate(-50%, 0) scale(1);
          opacity: 1;
        }

        .router-buttons__item__title::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2px;
          background-color: var(--primary-bg);
        }
      }

      &__title {
        position: relative;
        height: 45px;
        line-height: 45px;
        font-family: 'dahei';
        font-size: 23px;
        color: var(--primary-bg);
        cursor: context-menu;
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

      &:last-child {
        margin-right: 0;
      }

      .item-list {
        position: absolute;
        top: 43px;
        left: 50%;
        width: 170%;
        transform: translate(-50%, -60%) scale(0.0001);
        padding: 10px 0;
        opacity: 0;
        transition: all 0.3s;
        will-change: transform;
        z-index: 900;

        .item-list__item {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 38px;
          margin-bottom: 10px;
          padding: 0 15px;
          font-family: 'sans';
          font-size: 14px;
          font-weight: 600;
          background-color: var(--normal-word);
          color: var(--primary-bg);
          border: 1px solid var(--primary-bg);
          cursor: pointer;
          border-radius: 12px;

          i {
            margin-right: 5px;
          }

          &:hover {
            background-color: var(--primary-bg);
            color: var(--normal-word);
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .router-buttons__right {
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 10px;
    position: relative;

    &:hover {
      .router-buttons__btns.m {
        transform: translate(0, 0) scale(1);
        opacity: 1;
      }
    }

    .icon-gengduo {
      font-size: 28px;
      cursor: pointer;
    }

    .router-buttons__btns {
      display: flex;
      align-items: center;
      height: 100%;

      // 屏幕不够大，展示更多
      &.m {
        display: flex;
        flex-direction: column-reverse;
        align-items: flex-start;
        position: absolute;
        bottom: -90px;
        right: -5px;
        background-color: var(--catalogue-bg);
        width: auto;
        height: auto;
        padding: 10px 15px;
        border-radius: 14px;
        box-shadow: 0px 2px 8px var(--primary-info);
        transform: translate(20%, -100%) scale(.1);
        opacity: 0;
        transition: all .3s;

        .router-buttons__dark {
          position: relative;
          width: 160px;
          margin-bottom: 20px;

          p {
            font-size: 16px;
          }

          &::after {
            content: '';
            position: absolute;
            bottom: -13.5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary-info);
          }

          .switch {
            width: 50px;
            height: 22px;

            input {
              &:checked+.slider:before {
                transform: translateX(24.5px);
              }
            }

            .slider {
              &::before {
                height: 16px;
                width: 16px;
                left: 4px;
                bottom: 3.5px;
              }
            }
          }
        }

        .router-buttons__link {
          margin-right: 0;

          &__item {
            :deep(.iconfont) {
              font-size: 20px;
            }
          }
        }
      }

      .router-buttons__dark {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .switch {
          position: relative;
          width: 75px;
          height: 28px;
          cursor: pointer;

          input {
            opacity: 0;
            width: 0;
            height: 0;

            &:checked+.slider:before {
              transform: translate(45.5px, -50%);
            }
          }

          .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--primary-check);
            transition: .4s;
            border-radius: 34px;

            &::before {
              position: absolute;
              display: flex;
              align-items: center;
              justify-content: center;
              content: var(--icon, '');
              font-family: 'iconfont';
              height: 24px;
              width: 24px;
              left: 2.7px;
              top: 50%;
              transform: translateY(-50%);
              color: var(--primary-check);
              background-color: var(--normal-word);
              transition: .4s;
              border-radius: 50%;
            }
          }
        }
      }

      .router-buttons__link {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
        margin-right: 14px;

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
  }
</style>
