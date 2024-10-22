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
  width: 100%;
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
