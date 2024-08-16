<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
import compress from './components/compress.vue';
import tailor from './components/tailor.vue';
import screenshot from './components/screenshot.vue';
import filterComp from './components/filter.vue';
</script>

<template>
    <div class="ifrname-box box">
        <IframeBoxItem title="图片压缩" :needCode="false">
            <compress />
        </IframeBoxItem>
        <IframeBoxItem title="页面截图" :needCode="false">
            <screenshot />
        </IframeBoxItem>
        <IframeBoxItem title="滤镜" :needCode="false">
            <filterComp />
        </IframeBoxItem>
        <IframeBoxItem title="图片裁剪" :needCode="false">
            <tailor />
        </IframeBoxItem>
    </div>
</template>

<style lang="less" scoped>
</style>