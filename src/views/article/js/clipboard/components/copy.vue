<script setup lang="ts">
const contentRef = ref();
onMounted(() => {
  contentRef.value.addEventListener("paste", (e) => {
    console.log("e", e);
    if (e.clipboardData.files.length > 0) {
      e.preventDefault();

      const file = e.clipboardData.files[0];
      console.log("file", file);

      const reader = new FileReader();
      reader.onload = function (e) {
        console.log("reader", e);
        const data = e.target.result;
        console.log("data", data);
        const img = document.createElement("img");
        img.src = data;
        contentRef.value.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
});
</script>

<template>
  <div class="" ref="contentRef" contenteditable></div>
</template>

<style scoped>
div {
  width: 90%;
  padding: 15px;
  border: 1px solid var(--drop-bg);
}

@media screen and (max-width: 768px) {
  div {
    padding: 0.9375rem;
    border-width: .0625rem;
  }
}
</style>
