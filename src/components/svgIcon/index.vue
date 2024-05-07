<script setup>
const {width, height} = defineProps({
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
        type: [String, Number],
        default: '16'
    },
    //svg高度
    height: {
        type: [String, Number],
        default: '16'
    }
})

const svgRef = ref(null)

const widthUnit = computed(() => typeof width === 'string' && width.includes('px') ? width : width / 16 + 'rem')
const heightUnit = computed(() => typeof height === 'string' && height.includes('px') ? height : height / 16 + 'rem')
</script>

<template>
    <svg :style="{'--width': widthUnit, '--height': heightUnit}" ref="svgRef">
        <use :xlink:href="prefix + name"
            :fill="color"></use>
    </svg>
</template>

<style scoped>
svg {
    width: var(--width);
    height: var(--height);
    transition: fill .5s cubic-bezier(0.89, 0.04, 0.96, 0.06);
    fill: var(--normal-word);
}
</style>