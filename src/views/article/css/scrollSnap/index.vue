<script setup>
import Slide from './slide.vue'
import Swiper from './swiper.vue'
</script>

<template>
    <div class="ifrname-box"
        id="ifrname-box">
        <div class="polygon">
            <div class="iframe-box-title">纵向轮播图</div>
            <Slide />
        </div>
        <div class="ellipse">
            <div class="iframe-box-title">
                轮播图
                <span class="iframe-box-title-small">在移动端左右滑动查看效果</span>
            </div>
            <Swiper />
        </div>
    </div>
</template>

<style scoped></style>