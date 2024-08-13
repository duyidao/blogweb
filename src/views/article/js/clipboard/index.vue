<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
import FileComp from "./components/copy.vue";
import PasteComp from "./components/paste.vue";
import AddTextComp from "./components/addText.vue";
import NotCopyComp from "./components/notCopy.vue";
</script>

<template>
  <div class="ifrname-box">
    <IframeBoxItem title="不允许复制并写入自定义内容" :needCode="false">
      <NotCopyComp />
    </IframeBoxItem>
    <IframeBoxItem title="复制一段话后面加内容" :needCode="false">
      <AddTextComp />
    </IframeBoxItem>
    <IframeBoxItem title="刷新后粘贴剪切板内容" :needCode="false">
      <PasteComp />
    </IframeBoxItem>
    <IframeBoxItem title="粘贴文件" :needCode="false">
      <FileComp />
    </IframeBoxItem>
  </div>
</template>

<style scoped></style>
