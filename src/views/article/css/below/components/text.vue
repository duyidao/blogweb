<script setup>
defineProps({
  code: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <p :style="code">daodao</p>
</template>

<style scoped>

</style>