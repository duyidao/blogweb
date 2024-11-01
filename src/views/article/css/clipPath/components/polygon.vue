<script setup>
import methods from '@/utils/customMethod.js'

const props = defineProps({
  styleCode: String
});

const styleValue = computed(() => {
  return methods.extractCSSValue(props.styleCode);
});

const imgRef = ref(null);

const handleMouseEnter = () => {
  imgRef.value.classList.add('enter');
};

const handleMouseLeave = () => {
  imgRef.value.classList.remove('enter');
};
</script>

<template>
  <div class="box">
    <img ref="imgRef"
      :style="{ '--polygon': styleValue }"
      src="@/assets/img/cat.png"
      alt="polygon img"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave">
  </div>
</template>

<style lang="less"
  scoped>
  .box {
    width: 200px;
    height: 200px;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
      transition: .5s;
      clip-path: var(--polygon);

      &.enter {
        clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%) !important;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .box {
      width: 12.5rem;
      height: 12.5rem;
    }
  }
</style>