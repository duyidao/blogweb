<script setup lang="ts">
import FileComp from "./components/copy.vue";
import PasteComp from "./components/paste.vue";
import AddTextComp from "./components/addText.vue";
import NotCopyComp from "./components/notCopy.vue";
</script>

<template>
  <div class="ifrname-box">
    <div class="box-item">
      <div class="iframe-box-title">不允许复制并写入自定义内容</div>
      <NotCopyComp />
    </div>
    <div class="box-item">
      <div class="iframe-box-title">复制一段话后面加内容</div>
      <AddTextComp />
    </div>
    <div class="box-item">
      <div class="iframe-box-title">刷新后粘贴剪切板内容</div>
      <PasteComp />
    </div>
    <div class="box-item">
      <div class="iframe-box-title">粘贴文件</div>
      <FileComp />
    </div>
  </div>
</template>

<style scoped></style>
