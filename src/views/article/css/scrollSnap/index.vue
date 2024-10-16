<script setup>

import Slide from './slide.vue'
import Swiper from './swiper.vue'
</script>

<template>
    <div class="ifrname-box"
        id="ifrname-box">
        <IframeItem title="纵向轮播图"
            :needCode="false">
            <Slide />
        </IframeItem>
        <IframeItem title="轮播图"
            subtitle="在移动端左右滑动查看效果"
            :needCode="false">
            <Swiper />
        </IframeItem>
    </div>
</template>

<style scoped></style>