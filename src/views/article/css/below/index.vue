<script setup>
import { cssChildData, getDict } from '../../index.js';

const codeData = {
  textCode: '-webkit-box-reflect: below 3px linear-gradient(transparent, rgba(0, 0, 0, .5));',
  imgCode: `-webkit-box-reflect: below 15px linear-gradient(transparent, transparent, rgba(0, 0, 0, .5));`,
};

const list = getDict('css.below');

const componentList = ref([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(cssChildData.value[item.name]),
}));
</script>

<template>
  <div class="iframe-box below">
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
.below {
  img {
    width: 250px;
  }

  p {
    width: 250px;
    text-align: center;
    color: var(--normal-word);
  }
}

@media screen and (max-width: 768px) {
  .below {
    img {
      width: 15.625rem;
    }

    p {
      width: 15.625rem;
    }
  }
}
</style>