<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
  flowImg: {
    type: String,
    default: '',
  }
});

const showFlowImg = ref(false);
const full = ref(true);
</script>

<template>
  <div class="iframe-item-model">
    <main class="iframe-item-model__content">
      <div class="iframe-item-model__content__title">
        <img src="@/assets/img/effect/arrow.png"
          alt="">
        <span>{{ title }}</span>
        <div
          v-show="!showFlowImg"
          class="iframe-item-model__content__btn"
          @click="showFlowImg = true"
        >查看流程图</div>
      </div>
      <div class="iframe-item-model__content__info">
        <slot></slot>
      </div>
    </main>
    <aside
      v-show="showFlowImg"
      class="iframe-item-model__flowImg"
      :class="{ 'flowImg-small': !full }"
      @click="full = true"
    >
      <div class="control">
        <span class="iconfont icon-quxiaoquanping" title="缩小" @click.stop="full = false"></span>
        <span class="iconfont icon-guanbi" title="关闭" @click.stop="showFlowImg = false"></span>
      </div>
      <img :src="flowImg" alt="">
      <div class="mask">
        <span class="iconfont icon-quanping1" title="全屏"></span>
        <span>展开全屏</span>
      </div>
    </aside>
  </div>
</template>

<style lang="less"
  scoped>
  .iframe-item-model {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    &__flowImg {
      position: fixed;
      left: 0;
      top: 18vh;
      // width: 50vw;
      max-width: 1400px;
      height: 78vh;
      background-color: var(--body-bg);
      backdrop-filter: blur(10px);
      padding: 15px 20px 20px;
      border-radius: 0 20px 20px 0;
      box-shadow: 0 0 10px var(--effect-info-bg);
      z-index: 9999;
      transition: all .3s;

      &.flowImg-small {
        height: 150px;
        padding: 10px;
        min-width: 100px;

        .control {
          display: none;
        }

        .mask {
          display: flex;
          cursor: pointer;
        }

        img {
          height: 100%;
        }
      }

      .control {
        display: flex;
        align-items: center;
        justify-content: end;
        height: 30px;
        margin-bottom: 10px;

        span {
          margin-left: 15px;
          font-size: 20px;
          cursor: pointer;
        }
      }

      .mask {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        display: none;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(255, 255, 255, .5);
        backdrop-filter: blur(10px);
        cursor: pointer;
        font-size: 14px;

        span:first-child {
          font-size: 32px;
          margin-bottom: 20px;
        }
      }

      img {
        height: calc(100% - 30px);
      }
    }

    &__content {
      background-color: var(--effect-info-bg);
      padding: 6px 6px 15px;
      border: 4px solid transparent;
      border-image: linear-gradient(to bottom, transparent 95%, #0AA9DB) 4;
      border-radius: 4px;
      position: relative;
      z-index: 100;

      &__title {
        position: relative;
        display: flex;
        align-items: center;
        height: 50px;
        margin-bottom: 20px;
        border-bottom: 1px solid transparent;
        border-image: linear-gradient(to right, #fff, transparent) 1;

        &::before {
          content: '';
          position: absolute;
          display: block;
          bottom: -2px;
          left: 0;
          width: 16px;
          height: 3px;
          background: url('@/assets/img/effect/rectangle.png') no-repeat center / 100%;
        }

        img {
          width: 30px;
        }

        span {
          font-size: 18px;
          margin-left: 4px;
          font-family: 'robo';
          letter-spacing: 2px;
        }
      }

      &__btn {
        border: 1px solid var(--primary-font);
        margin-left: 20px;
        padding: 5px 10px;
        border-radius: 8px;
        cursor: pointer;
      }

      &__info {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .iframe-item-model {
      margin-bottom: 1.25rem;

      &__content {
        padding: .375rem .375rem .9375rem;
        border-width: .25rem;
        border-radius: .25rem;

        &__title {
          height: 3.125rem;
          margin-bottom: 1.25rem;
          border-bottom-width: .0625rem;

          &::before {
            bottom: -0.125rem;
            width: 1rem;
            height: .1875rem;
          }

          img {
            width: 1.875rem;
          }

          span {
            font-size: 1.125rem;
            margin-left: .25rem;
            letter-spacing: .125rem;
          }
        }
      }
    }
  }
</style>