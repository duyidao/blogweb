<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';

import Blur from './blur.vue';
import Contrast from './contrast.vue';
import DropShadow from './drop-shadow.vue';
import Grayscale from './grayscale.vue';
import HueRotate from './hue-rotate.vue';

// 对比度相关代码和比例
const contrastCode = ref('filter: contrast(100%)');
const contrast = computed(() => {
    return contrastCode.value.replace('filter: contrast(', '').replace(')', '');
});

// 色相旋转相关代码和比例
const degCode = ref('filter: hue-rotate(0deg)');
const deg = computed(() => {
    return degCode.value.replace('filter: hue-rotate(', '').replace(')', '');
});

// 模糊相关代码和比例
const blurCode = ref('filter: blur(15px)');
const blur = computed(() => {
    return blurCode.value.replace('filter: blur(', '').replace(')', '');
});

// 灰度值相关代码和比例
const grayscaleCode = ref('filter: grayscale(0%)');
const grayscale = computed(() => {
    return grayscaleCode.value.replace('filter: grayscale(', '').replace(')', '');
});

// 灰度值相关代码和比例
const dropShadowCode = ref(`filter: drop-shadow(15px 15px 15px orange)`);
const dropShadow = computed(() => {
    return dropShadowCode.value.replace('filter: drop-shadow(', '').replace(')', '');
});
</script>

<template>
    <div class="ifrname-box"
        id="ifrname-box">
        <IframeBoxItem
            v-model="contrastCode"
            title="对比度"
            :subtitle="`当前对比度：${ contrast }`"
        >
            <Contrast :styleCode="contrastCode" />
        </IframeBoxItem>
        <IframeBoxItem
            v-model="degCode"
            title="色相旋转"
            :subtitle="`当前度数：${ deg }`"
        >
            <HueRotate :styleCode="degCode" />
        </IframeBoxItem>
        <IframeBoxItem
            v-model="blurCode"
            title="模糊"
            :subtitle="`当前模糊度：${ blur }`"
        >
            <Blur :styleCode="blurCode" />
        </IframeBoxItem>
        <IframeBoxItem
            v-model="grayscaleCode"
            title="灰度图"
            :subtitle="`当前灰度值：${ grayscale }`"
        >
            <Grayscale :styleCode="grayscaleCode" />
        </IframeBoxItem>
        <IframeBoxItem
            v-model="dropShadowCode"
            title="轮廓阴影"
            :subtitle="`当前阴影值：${ dropShadow }`"
        >
            <DropShadow :styleCode="dropShadowCode" />
        </IframeBoxItem>
    </div>
</template>

<style scoped></style>