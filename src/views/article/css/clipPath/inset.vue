<script setup>
import methods from '@/utils/customMethod.js'

const props = defineProps({
    styleCode: String
});

const styleValue = computed(() => {
    return methods.extractCSSValue(props.styleCode);
});

const pRef = ref(null);

const handleMouseEnter = () => {
    pRef.value.classList.add('enter');
};

const handleMouseLeave = () => {
    pRef.value.classList.remove('enter');
};
</script>

<template>
    <div class="box"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
        <p ref="pRef"
            class="word"
            :style="{ '--clip': styleValue }">
            A cute cat
        </p>
    </div>
</template>

<style lang="less" scoped>
.box {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    background: url('@/assets/img/cat.png') no-repeat 100%/100%;

    p.word {
        position: relative;
        top: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        color: #fff !important;
        font-size: 30px;
        line-height: 100px;
        transition: all .3s;
        transform: translateY(-100%);
        clip-path: inset(100% 0% 0% 0%);

        &.enter {
            top: 50%;
            transform: translateY(-50%);
            clip-path: var(--clip);
        }
    }
}

@media screen and (max-width: 600px) {
    .box {
        width: 12.5rem;
        height: 12.5rem;

        p.word {
            font-size: 1.875rem;
            line-height: 6.25rem;
        }
    }
}
</style>