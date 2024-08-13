<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
import Slide from './slide.vue'
import Swiper from './swiper.vue'
</script>

<template>
    <div class="ifrname-box"
        id="ifrname-box">
        <IframeBoxItem title="纵向轮播图"
            :needCode="false">
            <Slide />
        </IframeBoxItem>
        <IframeBoxItem title="轮播图"
            subtitle="在移动端左右滑动查看效果"
            :needCode="false">
            <Swiper />
        </IframeBoxItem>
    </div>
</template>

<style scoped></style>