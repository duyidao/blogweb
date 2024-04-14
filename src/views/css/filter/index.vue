<script setup>
import Blur from './blur.vue'
import Contrast from './contrast.vue'
import DropShadow from './drop-shadow.vue'
import Grayscale from './grayscale.vue'
import HueRotate from './hue-rotate.vue'

const contrast = ref(100)
const deg = ref(0)
const grayscale = ref(0)
</script>

<template>
    <div class="ifrname-box"
        id="ifrname-box">
        <div class="polygon">
            <div class="iframe-box-title transition-color">对比度
                <span class="iframe-box-title-small">当前对比度：{{ contrast }}%</span>
            </div>
            <Contrast v-model="contrast" />
        </div>
        <div class="polygon">
            <div class="iframe-box-title transition-color">色相旋转
                <span class="iframe-box-title-small">当前度数：{{ deg }}deg</span>
            </div>
            <HueRotate v-model="deg" />
        </div>
        <div class="ellipse">
            <div class="iframe-box-title transition-color">模糊
            </div>
            <Blur />
        </div>
        <div class="inset">
            <div class="iframe-box-title transition-color">灰度图
                <span class="iframe-box-title-small">当前灰度值：{{ grayscale }}%</span>
            </div>
            <Grayscale v-model="grayscale" />
        </div>
        <div class="polygons">
            <div class="iframe-box-title transition-color">轮廓阴影</div>
            <DropShadow />
        </div>
    </div>
</template>

<style scoped></style>