<script setup>
import { screenWidth } from '@/store/index';
import { useUnit } from '@/store/rem';

const { px2rem } = useUnit();

const { width, height } = defineProps({
  //xlink:href属性值的前缀
  prefix: {
    type: String,
    default: '#icon-'
  },
  //svg矢量图的名字
  name: String,
  //svg宽度
  width: {
    type: [String, Number],
    default: '16'
  },
  //svg高度
  height: {
    type: [String, Number],
    default: '16'
  }
});

const widthUnit = computed(() => screenWidth.value > 768 ? width + 'px' : px2rem(width));
const heightUnit = computed(() => screenWidth.value > 768 ? height + 'px' : px2rem(height));
</script>

<template>
  <svg v-bind="$attrs" :style="{ '--width': widthUnit, '--height': heightUnit }">
    <use :xlink:href="prefix + name"></use>
  </svg>
</template>

<style scoped>
svg {
  width: var(--width);
  height: var(--height);
  fill: var(--normal-word);
}
</style>