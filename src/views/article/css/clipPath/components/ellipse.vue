<script setup>
import methods from '@/utils/customMethod.js';

const props = defineProps({
  styleCode: String,
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
  <div class="box"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave">
    <img ref="imgRef"
      :style="{ '--ellipse': styleValue }"
      src="@/assets/img/cat.png"
      alt="ellipse img">
  </div>
</template>

<style lang="less"
  scoped>
  .box {
    width: 200px;
    height: 200px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      clip-path: ellipse(50% 40% at 50% 50%);
      transition: all .3s;

      &.enter {
        clip-path: var(--ellipse);
      }
    }
  }

  @keyframes wink {
    15% {
      clip-path: ellipse(50% 1% at 50% 50%);
    }

    30% {
      clip-path: ellipse(50% 19% at 50% 50%);
    }

    45% {
      clip-path: ellipse(50% 1% at 50% 50%);
    }

    70% {
      clip-path: ellipse(50% 40% at 50% 50%);
    }

    1000% {
      clip-path: ellipse(100% 40% at 50% 50%);
    }
  }

  @media screen and (max-width: 600px) {
    .box {
      width: 12.5rem;
      height: 12.5rem;
    }
  }
</style>