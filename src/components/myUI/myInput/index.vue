<script setup>
const model = defineModel();
</script>

<template>
  <input v-model="model" placeholder="请输入内容" type="text" />
</template>

<style scoped>
input {
  min-width: 300px;
  height: 30px;
  border: 1px solid var(--primary-border);
  padding: 0 10px;
  color: var(--catalogue-word);
  background-color: var(--catalogue-bg);
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  input {
    min-width: 18.75rem;
    height: 1.875rem;
    border: 0.0625rem solid var(--primary-border);
    padding: 0 0.625rem;
    font-size: .875rem;
  }
}
</style>
