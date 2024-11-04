<script setup>
defineProps({
  code: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="box-img">
    <img title="vmin"
      src="@/assets/img/js/copy.jpg"
      :style="code"
      alt="vmin">
  </div>
</template>

<style lang="less" scoped></style>