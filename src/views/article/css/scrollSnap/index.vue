<script setup>
import { cssChildData, getDict } from '../../index.js';

const codeData = {
  slideCode: 'filter: contrast(100%);',
  swiperCode: `filter: hue-rotate(0deg);`,
};

const list = getDict('css.scrollSnap');

const componentList = ref([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(cssChildData.value[item.name]),
}));
</script>

<template>
  <div class="iframe-box"
    id="iframe-box">
    <IframeItemCode v-for="item in componentList"
      :key="item.name"
      :title="item.title"
      v-model="item.model">
      <component :is="item.component"
        :styleCode="item.model" />
    </IframeItemCode>
  </div>
</template>

<style scoped></style>