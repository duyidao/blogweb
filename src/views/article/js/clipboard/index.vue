<script setup>
import { jsChildData, getDict } from '../../index.js';

const codeData = {
  addTextCode: `<template>
  <div ref="pasteRef">.....</div>
</template>

\<script setup\>
const pasteRef = ref();

onMounted(() => {
  pasteRef.value.addEventListener("copy", function (e) {
    console.log("e", e.target.innerHTML, navigator);
    navigator.clipboard.writeText(
      e.target.innerHTML + '来源：刀刀小站<br/>每天都要更努力'
    );
  });
});
\<\/script\>`,
  notCopyCode: `<template>
  <div ref="notcopyRef">.....</div>
</template>

\<script setup\>
const notcopyRef = ref();

onMounted(() => {
  notcopyRef.value.addEventListener("copy", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("自定义内容");
  });
});
\<\/script\>`,
  pasteCode: `<template>
  <div ref="pasteRef">.....</div>
</template>

\<script setup\>
const pasteRef = ref();

onMounted(() => {
  console.log("navigator.clipboard", navigator.clipboard);
  navigator.clipboard &&
    navigator.clipboard.readText().then((text) => {
      pasteRef.value.innerHTML = text;
    });
});
\<\/script\>`,
  copyCode: `<template>
  <div ref="contentRef" contenteditable>.....</div>
</template>

\<script setup\>
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
\<\/script\>`,
};

const list = getDict('js.clipboard');
const componentList = shallowRef([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(jsChildData.value[item.name]),
}));
</script>

<template>
  <div class="iframe-box">
    <IframeItemCode v-for="item in componentList"
      :key="item.name"
      :title="item.title"
      v-model="item.model"
      buttonTitle="源码展示"
      showCodeButtonTitle="隐藏源码"
      type="vue"
      :height="item.height"
      :flowImg="item.flowImg"
      disabled>
      <component :is="item.component"/>
    </IframeItemCode>
  </div>
</template>

<style lang="less" scoped>
.iframe-box {
  div, li {
    color: var(--drop-bg);
  }
}
</style>
