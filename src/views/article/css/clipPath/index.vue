<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
import Ellipse from './ellipse.vue';
import Polygon from './polygon.vue';
import Polygons from './polygons.vue';
import Inset from './inset.vue';

const polygonCode = ref('polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)');
const ellipseCode = ref(`ellipse(50% 40% at 50% 50%)`);
const insetCode = ref(`inset(0% 0% 0% 0%)`);
const polygonsCode = ref('polygon(-30% 0, 100% 0, 110% 50%, 100% 100%, -30% 100%)');
</script>

<template>
    <div class="ifrname-box"
        id="ifrname-box">
        <IframeBoxItem title="相框显示" v-model="polygonCode">
            <Polygon :style="polygonCode" />
        </IframeBoxItem>
        <IframeBoxItem title="眨眼效果" v-model="ellipseCode">
            <Ellipse :style="ellipseCode" />
        </IframeBoxItem>
        <IframeBoxItem title="文字下落" v-model="insetCode">
            <Inset :style="insetCode" />
        </IframeBoxItem>
        <IframeBoxItem title="多边形裁剪" v-model="polygonsCode">
            <Polygons :style="polygonsCode" />
        </IframeBoxItem>
    </div>
</template>

<style scoped></style>