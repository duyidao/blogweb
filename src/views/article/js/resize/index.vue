<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
const width = ref(500)
const handleSizeChange = (size) => {
    width.value = size.width
}
</script>

<template>
    <IframeBoxItem title="resize"
        :subtitle="`父组件 宽度为${width}`"
        column
        :needCode="false"
        v-resize="handleSizeChange"
        class="ifrname-box">
        <div class="iframe-box-title"><span class="iframe-box-title-small"></span></div>
        <div class="child"
            :style="{ 'width': width - 20 + 'px' }">
            子组件，宽度为{{ width - 20 }}
        </div>
    </IframeBoxItem>
</template>

<style lang="less" scoped>
.ifrname-box .child {
    margin: 0 auto;
    height: 6.25rem;
    background-color: antiquewhite;
    text-align: center;
    line-height: 6.25rem;
    font-size: .875rem;
}
</style>