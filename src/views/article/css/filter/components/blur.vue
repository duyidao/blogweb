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
  <div class="box">
    <img src="../firefox-logo.svg"
      :style="{ '--blur': styleValue }"
      alt="grayscale img">
  </div>
</template>

<style lang="less"
  scoped>
  .box {
    width: 150px;
    height: 150px;
    cursor: pointer;

    img {
      height: 100%;
      width: 100%;
      background: transparent;
      filter: var(--blur);
    }
  }

  @media screen and (max-width: 768px) {
    .box {
      width: 9.375rem;
      height: 9.375rem;
    }
  }
</style>