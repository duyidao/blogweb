<script setup>
import compress from './components/compress.vue'
import tailor from './components/tailor.vue'
import screenshot from './components/screenshot.vue'
import filterComp from './components/filter.vue'
</script>

<template>
    <div class="ifrname-box box">
        <div class="box-item">
            <div class="iframe-box-title">图片压缩</div>
            <compress />
        </div>
        <div class="box-item">
            <div class="iframe-box-title">页面截图</div>
            <screenshot />
        </div>
        <div class="box-item">
            <div class="iframe-box-title">滤镜</div>
            <filterComp />
        </div>
        <div class="box-item">
            <div class="iframe-box-title">图片裁剪</div>
            <tailor />
        </div>
    </div>
</template>

<style lang="less" scoped>
</style>