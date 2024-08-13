<script setup>
import methods from '@/utils/customMethod.js'

const props = defineProps({
    styleCode: String
});

const styleValue = computed(() => {
    return methods.extractCSSValue(props.styleCode);
});
</script>

<template>
    <div class="box">
        <img src="./firefox-logo.svg"
            :style="{ '--deg': styleValue }"
            alt="hue-rotate img">
    </div>
</template>

<style lang="less" scoped>
.box {
    width: 150px;
    height: 150px;
    cursor: pointer;

    img {
        height: 100%;
        width: 100%;
        filter: var(--deg);
    }
}
</style>