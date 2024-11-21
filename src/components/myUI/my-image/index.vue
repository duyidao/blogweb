<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '占位图片',
  },
})
</script>

<template>
  <img src="@/assets/img/base/img_load.png"
    v-lazy
    :data-src="src"
    :alt="alt" />
</template>

<style lang="less" scoped>
img {
  width: 100%;
  height: 100%;

  &.fade-in {
    animation: fadeIn .6s ease-in;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>