<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: "80vw",
  },
});

const show = defineModel();
</script>

<template>
  <div
    class="my-dropper"
    :class="{ show: show }"
    v-close="true"
    :style="{ '--width': width }"
  >
    <i
      class="iconfont icon-guanbi"
      @click.stop="show = false"
    ></i>
    <div v-if="$slots.title" class="my-dropper__title">
      <slot name="title"></slot>
    </div>
    <div class="my-dropper__default">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.my-dropper {
  position: fixed;
  top: 0;
  right: -100%;
  width: var(--width);
  height: 100vh;
  background-color: var(--drop-bg);
  box-shadow: 0 0 0.5rem 0.0625rem var(--drop-shadow);
  z-index: 9999;
  transition: all 0.3s;

  &.show {
    right: 0;
  }

  :deep(.icon-guanbi) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 4rem;
    height: 4rem;
    top: 0;
    left: -4rem;
    font-size: 1.25rem !important;
    background-color: var(--drop-bg);
  }

  &__title {
    padding: 1.75rem;
    font-size: 2rem;
    font-weight: 700;
  }

  &__default {
    padding: 1.75rem;
    height: calc(100% - 3rem);
  }
}
</style>
