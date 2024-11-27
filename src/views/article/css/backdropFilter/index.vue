<script setup>
import { cssChildData, getDict, toCamelCase } from '../../index.js';

const codeData = {
  backdropBlurCode: `backdrop-filter: blur(7px);`,
  backdropGrayscaleCode: 'backdrop-filter: grayscale(1);',
};

const list = getDict('css.backdropFilter');

const componentList = ref([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[toCamelCase(item.name) + 'Code'],
  component: Object.freeze(cssChildData.value[item.name]),
}));
</script>

<template>
  <div class="backdrop-filter">
    <IframeItemCode v-for="item in componentList"
      :key="item.name"
      :title="item.title"
      v-model="item.model">
      <component :is="item.component" :styleCode="item.model" />
    </IframeItemCode>
  </div>
</template>

<style scoped>

</style>