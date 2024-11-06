<script setup>
import { routeNow } from '@/store/router.js';

const show = ref(false);
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'EffectInfo', // 设置组件名称
});

export { componentOptions };
</script>

<template>
  <div class="effect">
    <header class="effect__title">
      <div class="effect__title__text">
        <span>{{ routeNow.title }}</span>
        <div class="back"
          @click="handleBackFn">
          <svg-icon name="zuojiantou" />
        </div>
      </div>
      <h3 class="effect__title__subtext">{{ routeNow.info }}</h3>
      <div class="effect__title__model">
        <div class="effect__title__model__btn">
          <edge-light-button @click="show = true" />
        </div>
      </div>
    </header>

    <router-view :key="$route.fullPath" />

    <my-dialog v-model="show" :title="routeNow.title + '源码展示'">
      <Code class="code"
        :language="type"
        v-model="modelCode"
        :disabled="disabled" />
    </my-dialog>
  </div>
</template>

<style lang="less"
  scoped>
  .effect {
    &__title {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 180px;
      gap: 15px;
      margin-bottom: 20px;
      padding-left: 20px;

      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 2px;
        width: 5px;
        height: 100%;
        background-color: var(--primary-bg);
        border-radius: 5px;
      }

      &__text {
        display: flex;
        align-items: flex-end;
        font-size: 42px;
        font-family: 'black';
        color: var(--effect-info-title);

        .back {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border: 1px solid var(--effect-info-title);
          border-radius: 50%;
          margin: 0 0 6px 10px;
          cursor: pointer;

          svg {
            fill: var(--effect-info-title);
          }
        }
      }

      &__subtext {
        font-size: 15px;
        font-family: 'sans';
        color: var(--effect-info-subtitle);
      }

      &__model {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 2;
        font-size: 24px;
        letter-spacing: 3px;

        &__btn {
          width: 100%;
          height: 50px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .effect {
      &__title {
        grid-template-columns: 1fr 11.25rem;
        gap: .9375rem;
        margin-bottom: 1.25rem;
        padding-left: 1.25rem;

        &::before {
          top: .125rem;
          width: .3125rem;
          border-radius: .3125rem;
        }

        &__text {
          font-size: 2.6875rem;

          .back {
            width: 1.25rem;
            height: 1.25rem;
            border-width: .0625rem;
            margin: 0 0 .375rem .625rem;
          }
        }

        &__subtext {
          font-size: .9375rem;
        }

        &__model {
          font-size: 1.5rem;
          letter-spacing: .1875rem;

          &__btn {
            height: 3.125rem;
          }
        }
      }
    }
  }
</style>