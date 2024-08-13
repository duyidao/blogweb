<script setup lang="ts">
const pasteRef = ref();

onMounted(() => {
  console.log("navigator.clipboard", navigator.clipboard);
  navigator.clipboard &&
    navigator.clipboard.readText().then((text) => {
      pasteRef.value.innerHTML = text;
    });
});
</script>

<template>
  <div ref="pasteRef" class=""></div>
</template>

<style scoped>
div {
  padding: 15px;
  border: 1px solid var(--primary-info);
  color: var(--primary-info);
  border-radius: 20px;
}

@media screen and (max-width: 768px) {
  div {
    padding: 0.9375rem;
    border: .0625rem solid var(--primary-info);
    border-radius: 1.25rem;
  }
}
</style>
