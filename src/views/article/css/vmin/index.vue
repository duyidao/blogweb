<script setup>
import { cssChildData, getDict } from '../../index.js';

const codeData = {
  vmaxCode: 'width: 100vmax;',
  vminCode: `width: 100vmin;`,
};

const list = getDict('css.vmin');

const componentList = ref([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(cssChildData.value[item.name]),
}));
</script>

<template>
  <div class="iframe-box box">
    <IframeItemCode v-for="item in componentList"
      :key="item.name"
      :title="item.title"
      v-model="item.model"
      :height="item.height">
      <component :is="item.component"
        :code="item.model" />
    </IframeItemCode>
  </div>
</template>

<style lang="less" scoped>
.box {
  padding: 20px;

  .box-img {
    width: 850px;

    img {
      display: block;
    }
  }
}

@media screen and (max-width: 768px) {
  .box {
    padding: 1.25rem;

    .box-img {
      width: 53.125rem;
    }
  }
}
</style>