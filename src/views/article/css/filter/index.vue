<script setup>
import { cssChildData, getDict, toCamelCase } from '../../index.js';

const codeData = {
  contrastCode: 'filter: contrast(100%);',
  hueRotateCode: `filter: hue-rotate(0deg);`,
  blurCode: `filter: blur(15px);`,
  grayscaleCode: 'filter: grayscale(0%);',
  dropShadowCode: `filter: drop-shadow(15px 15px 15px orange);`,
};

const list = getDict('css.filter');

const componentList = ref([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[toCamelCase(item.name) + 'Code'],
  component: Object.freeze(cssChildData.value[item.name]),
}));
</script>

<template>
  <div class="iframe-box"
    id="iframe-box">
    <IframeItemCode v-for="item in componentList"
      :key="item.name"
      :title="item.title"
      :subtitle="item.subtitle + item.model.replace(`filter: ${item.name}(`, '').replace(');', '')"
      v-model="item.model">
      <component :is="item.component"
        :styleCode="item.model" />
    </IframeItemCode>
  </div>
</template>

<style scoped></style>