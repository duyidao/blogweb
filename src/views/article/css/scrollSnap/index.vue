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
  <div class="ifrname-box"
    id="ifrname-box">
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