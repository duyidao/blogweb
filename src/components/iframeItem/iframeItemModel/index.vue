<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
});
</script>

<template>
  <div class="iframe-item-model">
    <main class="iframe-item-model__content">
      <div class="iframe-item-model__content__title">
        <img src="@/assets/img/effect/arrow.png"
          alt="">
        <span>{{ title }}</span>
      </div>
      <div class="iframe-item-model__content__info">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style lang="less"
  scoped>
  .iframe-item-model {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
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