<script setup>
const fn = () => {
  if (document.hidden) {
    document.title = "页面离开咯";
  } else {
    document.title = "页面回来咯";
  }
}
onMounted(() => {
    document.addEventListener("visibilitychange", fn)
})

onUnmounted(() => {
    document.title = '刀刀博客小站'
    document.removeEventListener("visibilitychange", fn)
})
</script>

<template>
  <div>页面可见度</div>
</template>

<style scoped>

</style>