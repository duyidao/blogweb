<script setup>
defineProps({
  code: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <img :style="code"
    src="@/assets/img/css/fit.webp"
    alt="图片倒影">
</template>

<style scoped></style>