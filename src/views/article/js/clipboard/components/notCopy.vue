<script setup lang="ts">
const notcopyRef = ref();

onMounted(() => {
  notcopyRef.value.addEventListener("copy", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("自定义内容");
  });
});
</script>

<template>
  <div ref="notcopyRef" class="">
    此div内的文本不可复制，复制后粘贴会显示 “自定义内容”
  </div>
</template>

<style scoped>
div {
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
