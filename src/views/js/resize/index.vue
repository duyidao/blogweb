<script setup>
const width = ref(500)
const handleSizeChange = (size) => {
    width.value = size.width
}
</script>

<template>
    <div v-resize="handleSizeChange"
        class="ifrname-box">
        <div class="iframe-box-title">父组件  <span class="iframe-box-title-small">宽度为{{ width }}</span></div>
        <div class="child" :style="{'width': width - 20 + 'px'}">
            子组件，宽度为{{ width - 20 }}
        </div>
    </div>
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