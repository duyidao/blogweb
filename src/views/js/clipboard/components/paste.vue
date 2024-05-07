<script setup lang="ts">
const pasteRef = ref()

onMounted(() => {
    console.log('navigator.clipboard', navigator.clipboard);
    navigator.clipboard && navigator.clipboard.readText().then((text) => {
        pasteRef.value.innerHTML = text
    })
})
</script>

<template>
  <div ref="pasteRef" class="transition-color"></div>
</template>

<style scoped>
div {
    padding: .9375rem;
    border: 1px solid var(--primary-info);
    color: var(--primary-info);
    border-radius: 1.25rem;
}
</style>