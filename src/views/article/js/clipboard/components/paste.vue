<script setup lang="ts">
const pasteRef = ref();

onMounted(() => {
  navigator.clipboard &&
    navigator.clipboard.readText().then((text) => {
      pasteRef.value.innerHTML = text;
    }).catch((err) => {
      pasteRef.value.innerHTML = '报错信息：' + err;
    });
});
</script>

<template>
  <div ref="pasteRef" class=""></div>
</template>

<style scoped>
div {
  width: 95%;
  padding: 15px;
  border: 1px solid var(--drop-bg);
  border-radius: 16px;
}

@media screen and (max-width: 768px) {
  div {
    padding: 0.9375rem;
    border-width: .0625rem;
    border-radius: 1rem;
  }
}
</style>
