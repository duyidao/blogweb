<script setup>

import FileComp from "./components/copy.vue";
import PasteComp from "./components/paste.vue";
import AddTextComp from "./components/addText.vue";
import NotCopyComp from "./components/notCopy.vue";
</script>

<template>
  <div class="ifrname-box">
    <IframeItem title="不允许复制并写入自定义内容" :needCode="false">
      <NotCopyComp />
    </IframeItem>
    <IframeItem title="复制一段话后面加内容" :needCode="false">
      <AddTextComp />
    </IframeItem>
    <IframeItem title="刷新后粘贴剪切板内容" :needCode="false">
      <PasteComp />
    </IframeItem>
    <IframeItem title="粘贴文件" :needCode="false">
      <FileComp />
    </IframeItem>
  </div>
</template>

<style scoped></style>
