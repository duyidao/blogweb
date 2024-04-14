<script setup>
import Ellipse from './ellipse.vue'
import Polygon from './polygon.vue'
import Polygons from './polygons.vue'
import Inset from './inset.vue'
</script>

<template>
    <div class="ifrname-box"
        id="ifrname-box">
        <div class="polygon">
            <div class="iframe-box-title transition-color">相框显示</div>
            <Polygon />
        </div>
        <div class="ellipse">
            <div class="iframe-box-title transition-color">眨眼效果</div>
            <Ellipse />
        </div>
        <div class="inset">
            <div class="iframe-box-title transition-color">文字下落</div>
            <Inset />
        </div>
        <div class="polygons">
            <div class="iframe-box-title transition-color">多边形裁剪</div>
            <Polygons />
        </div>
    </div>
</template>

<style scoped></style>