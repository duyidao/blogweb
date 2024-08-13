<script setup>
import methods from '@/utils/customMethod.js'

const props = defineProps({
    styleCode: String
});

const styleValue = computed(() => {
    return methods.extractCSSValue(props.styleCode);
});

const imgRef = ref(null);

const handleMouseEnter = () => {
    imgRef.value.classList.add('enter');
};

const handleMouseLeave = () => {
    imgRef.value.classList.remove('enter');
};
</script>

<template>
    <div class="box"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
        <img src="@/assets/img/music/shape.webp"
            alt="">
        <img src="@/assets/img/music/shi.webp"
            ref="imgRef"
            alt=""
            :style="{'--polygon': styleValue}">
    </div>
</template>

<style lang="less" scoped>
.box {
    position: relative;
    width: 150px;
    height: 150px;
    cursor: pointer;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        transition: all 0.5s;

        &:nth-child(2) {
            clip-path: polygon(-30% 0, -30% 0, 0% 50%, -30% 100%, -30% 100%);
        }
    }

    &:hover img:nth-child(2) {
        clip-path: var(--polygon);
    }
}

@media screen and (max-width: 768px) {
    .box {
        width: 9.375rem;
        height: 9.375rem;
    }
}
</style>