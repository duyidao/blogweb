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
    <img title="vmax"
      src="@/assets/img/js/copy.jpg"
      :style="code"
      alt="vmax">
  </div>
</template>

<style lang="less" scoped></style>