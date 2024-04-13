<script setup>
defineProps({
    //xlink:href属性值的前缀
    prefix: {
        type: String,
        default: '#icon-'
    },
    //svg矢量图的名字
    name: String,
    //svg图标的颜色
    color: {
        type: String,
        default: ""
    },
    //svg宽度
    width: {
        type: String,
        default: '16px'
    },
    //svg高度
    height: {
        type: String,
        default: '16px'
    }
})
</script>

<template>
    <svg :style="{ width: width, height: height }">
        <use :xlink:href="prefix + name"
            :fill="color"></use>
    </svg>
</template>

<style scoped>
svg {
    transition: fill .5s cubic-bezier(0.89, 0.04, 0.96, 0.06);
    fill: var(--normal-word);
}
</style>