<script setup>

const width = ref(500)
const handleSizeChange = (size) => {
    width.value = size.width
}
</script>

<template>
    <IframeItem title="resize"
        :subtitle="`父组件 宽度为${width}`"
        column
        :needCode="false"
        v-resize="handleSizeChange"
        class="iframe-box">
        <div class="iframe-box-title"><span class="iframe-box-title-small"></span></div>
        <div class="child"
            :style="{ 'width': width - 20 + 'px' }">
            子组件，宽度为{{ width - 20 }}
        </div>
    </IframeItem>
</template>

<style lang="less" scoped>
.iframe-box .child {
    margin: 0 auto;
    height: 6.25rem;
    background-color: antiquewhite;
    text-align: center;
    line-height: 6.25rem;
    font-size: .875rem;
}
</style>