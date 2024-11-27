<script setup>
import methods from '@/utils/customMethod.js'

const props = defineProps({
  styleCode: String
});

const styleValue = computed(() => {
  return methods.extractCSSValue(props.styleCode);
});
</script>

<template>
  <div class="blur">
    <div :style="{ '--blur': styleValue }"
      class="blur-model"></div>
  </div>
</template>

<style lang="less"
  scoped>
  .blur {
    position: relative;
    width: 100%;
    height: 300px;
    margin: 10px;
    background: url('@/assets/img/music/likeme.webp') no-repeat center center / cover;

    .blur-model {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100px;
      height: 50px;
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: var(--blur);
      -webkit-backdrop-filter: var(--blur);
    }
  }

  @media screen and (max-width: 768px) {
    .blur {
      position: relative;
      height: 18.75rem;
      margin: .625rem;

      .blur-model {
        width: 6.25rem;
        height: 3.125rem;
      }
    }
  }
</style>