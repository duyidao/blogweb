<script setup>

import compress from './components/compress.vue';
import tailor from './components/tailor.vue';
import screenshot from './components/screenshot.vue';
import filterComp from './components/filter.vue';
</script>

<template>
    <div class="ifrname-box box">
        <IframeItem title="图片压缩" :needCode="false">
            <compress />
        </IframeItem>
        <IframeItem title="页面截图" :needCode="false">
            <screenshot />
        </IframeItem>
        <IframeItem title="滤镜" :needCode="false">
            <filterComp />
        </IframeItem>
        <IframeItem title="图片裁剪" :needCode="false">
            <tailor />
        </IframeItem>
    </div>
</template>

<style lang="less" scoped>
</style>