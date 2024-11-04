<script setup>
defineProps({
  text: {
    type: String,
    default: '暂无数据'
  }
})
</script>

<template>
  <div class="none">
    <svg-icon width="50"
      height="50"
      name="none" />
    <p v-if="!$slots.default"
      class="none-text">{{ text }}</p>
    <slot v-else></slot>
  </div>
</template>

<style lang="less"
  scoped>
  .none {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      fill: var(--primary-info);
    }

    .none-text {
      width: 80%;
      margin-top: 20px;
      font-size: 20px;
      color: var(--primary-info);
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    .none {
      .none-text {
        margin-top: 1.25rem;
        font-size: 1.25rem;
      }
    }
  }
</style>