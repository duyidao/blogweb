<script setup>
const fitCode = ref(`width: fit-content;`);
const maxCode = ref(`width: max-content;`);
const minCode = ref(`width: min-content;`);
</script>

<template>
  <div class="iframe-box box">
    <IframeItemCode title="fit-content"
      class="iframe-box"
      v-model="fitCode">
      <div class="box-item">
        <div class="title-1" :style="fitCode">[class$="1"]、[class$="2"]、[class$="3"] 选择所有类名以 "1"、"2" 或 "3" 结尾的元素。$= 表示属性值以指定的字符串结束。</div>
      </div>
    </IframeItemCode>
    <IframeItemCode title="max-content"
      class="iframe-box"
      subtitle="父组件不能设置width 100%，不然无效果"
      v-model="maxCode">
      <div class="box-item">
        <div class="title-2" :style="maxCode">[class$="1"]、[class$="2"]、[class$="3"] 选择所有类名以 "1"、"2" 或 "3" 结尾的元素。$= 表示属性值以指定的字符串结束。</div>
      </div>
    </IframeItemCode>
    <IframeItemCode title="min-content"
      class="iframe-box"
      v-model="minCode">
      <div class="box-item">
        <div class="title-3" :style="minCode">[class$="1"]、[class$="2"]、[class$="3"] 选择所有类名以 "1"、"2" 或 "3" 结尾的元素。$= 表示属性值以指定的字符串结束。</div>
      </div>
    </IframeItemCode>
  </div>
</template>

<style lang="less" scoped>
.box {
  width: 100%;

  [class^="title-"] {
    background-color: skyblue;
  }

  // [class$="1"] {
  //   width: fit-content;
  // }

  // [class$="2"] {
  //   width: max-content;
  // }

  // [class$="3"] {
  //   width: min-content;
  // }
}
</style>