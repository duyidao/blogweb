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
  <div class="grayscale">
    <div :style="{ '--grayscale': styleValue }"
      class="grayscale-model"></div>
  </div>
</template>

<style lang="less"
  scoped>
  .grayscale {
    position: relative;
    width: 100%;
    height: 300px;
    margin: 10px;
    background: url('@/assets/img/music/likeme.webp') no-repeat center center / cover;

    &:hover {
      .grayscale-model {
        width: 0;
      }
    }

    .grayscale-model {
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transition: all .5s;
      border-left: 3px solid #000;
      backdrop-filter: var(--grayscale);
      -webkit-backdrop-filter: var(--grayscale);
    }
  }

  @media screen and (max-width: 768px) {
    .grayscale {
      height: 18.75rem;
      margin: .625rem;

      .grayscale-model {
        border-left-width: .1875rem;
      }
    }
  }
</style>