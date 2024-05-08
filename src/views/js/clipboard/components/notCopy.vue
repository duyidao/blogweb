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
  <div ref="notcopyRef" class="transition-color">
    此div内的文本不可复制，复制后粘贴会显示 “自定义内容”
  </div>
</template>

<style scoped>
div {
  padding: 0.9375rem;
  border: 1px solid var(--primary-info);
  color: var(--primary-info);
  border-radius: 1.25rem;
}
</style>
