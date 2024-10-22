<script setup>
import { cssChildData, getDict } from '../../index.js';

const codeData = {
  polygonCode: 'clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);',
  ellipseCode: `clip-path: ellipse(50% 10% at 50% 50%);`,
  insetCode: `clip-path: inset(0% 0% 0% 0%);`,
  polygonsCode: 'clip-path: polygon(-30% 0, 100% 0, 110% 50%, 100% 100%, -30% 100%);',
};

const list = getDict('css.clipPath');
console.log('list', list, cssChildData.value, cssChildData.value[list[0].name]);
const componentList = shallowRef([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(cssChildData.value[item.name]),
}));
</script>

<template>
  <div class="iframe-box"
    id="iframe-box">
    <IframeItem v-for="item in componentList"
      :key="item.name"
      :title="item.title"
      v-model="item.model">
      <component :is="item.component"
        :styleCode="item.model" />
    </IframeItem>
  </div>
</template>

<style scoped></style>