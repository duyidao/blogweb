<script setup>
import "@wangeditor/editor/dist/css/style.css";
import { Editor } from "@wangeditor/editor-for-vue";

const value = ref("css");

const editorRef = shallowRef();
const valueHtml = ref(
  `<pre id="w-e-element-18" data-slate-node="element" style="height: 100%;"><code class="language-${value.value}" id="w-e-element-19" data-slate-node="element"></code></pre>`
);

const toolbarConfig = {
  excludeKeys: [],
};
const editorConfig = { placeholder: "请输入内容..." };

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const gradeRef = ref(null);

const clickFn = () => {
  var codeContent = /<code[^>]*>([.\s\S]*?)<\/code>/i.exec(valueHtml.value);
  if (codeContent) {
    var content = codeContent[1];
    // 现在 content 变量中包含了 <code> 标签内的内容
    gradeRef.value.style.cssText = content;
  }
};
</script>

<template>
  <div class="iframe-box">
    <div class="iframe-box-title">
      <span>{{ value.toUpperCase() }}</span>
      <mouse-glow-button @click="clickFn" word="确认" />
    </div>
    <div class="iframe-box-content">
      <Editor
        style="overflow-y: hidden; flex: 1"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        mode="default"
        @onCreated="handleCreated"
      />
      <div ref="gradeRef" class="iframe-box-content__right"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.iframe-box {
  padding: 10px;

  :deep(.w-e-hover-bar) {
    display: none;
  }

  :deep(.w-e-scroll) {
    > div {
      padding-left: 0;
    }
  }

  :deep(p) {
    display: none;
  }

  :deep(.w-e-text-container *) {
    height: 100%;

    code {
      margin: 0;
    }
  }

  :deep(.w-e-text-container) {
    background-color: transparent;
  }

  .iframe-box-title {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .iframe-box-title__left {
      display: flex;
      align-items: center;
    }
  }

  .iframe-box-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 150px;

    .iframe-box-content__right {
      width: 200px;
      height: 100%;
    }
  }
}

@media screen and (max-width: 768px) {
  .iframe-box {
    padding: 0.625rem;

    .iframe-box-content {
      height: 9.375rem;

      .iframe-box-content__right {
        width: 12.5rem;
      }
    }
  }
}
</style>
