<script setup>
import Ellipse from './ellipse.vue';
import Polygon from './polygon.vue';
import Polygons from './polygons.vue';
import Inset from './inset.vue';

const polygonCode = ref('clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);');
const ellipseCode = ref(`clip-path: ellipse(50% 10% at 50% 50%);`);
const insetCode = ref(`clip-path: inset(0% 0% 0% 0%);`);
const polygonsCode = ref('clip-path: polygon(-30% 0, 100% 0, 110% 50%, 100% 100%, -30% 100%);');

const componentList = [
  {
    component: 'Polygon',
    title: '相框显示',
    model: polygonCode.value,
    styleCode: polygonCode.value
  }
]
</script>

<template>
  <div class="ifrname-box"
    id="ifrname-box">
    <IframeItem
      v-for="item in componentList"
      :key="item.component"
      :title="item.title"
      v-model="item.model">
      <component :is="item.component" :styleCode="item.styleCode" />
      <!-- <Polygon :styleCode="polygonCode" /> -->
    </IframeItem>
    <IframeItem title="相框显示"
      v-model="polygonCode">
      <Polygon :styleCode="polygonCode" />
    </IframeItem>
    <IframeItem title="眨眼效果"
      v-model="ellipseCode">
      <Ellipse :styleCode="ellipseCode" />
    </IframeItem>
    <IframeItem title="文字下落"
      v-model="insetCode">
      <Inset :styleCode="insetCode" />
    </IframeItem>
    <IframeItem title="多边形裁剪"
      v-model="polygonsCode">
      <Polygons :styleCode="polygonsCode" />
    </IframeItem>
  </div>
</template>

<style scoped></style>