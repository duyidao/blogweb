<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const box = document.querySelector('.setProperty-box')
    console.log(box)
    const w = box.clientWidth
    box.style.setProperty('--w', w + 'px')
});
</script>

<template>
    <div class="setProperty-box">
        <div class="item"></div>
    </div>
</template>

<style lang="less" scoped>
.setProperty-box {
    width: 20rem;
    height: 6.25rem;
    margin: 6.25rem auto;
    border: 1px solid #000;

    .item {
        width: 1.875rem;
        height: 1.875rem;
        border-radius: 50%;
        background-color: red;
        animation: move 3s linear infinite;
    }
}

@keyframes move {
    50% {
        transform: translateX(calc(var(--w) - 100%))
    }
}
</style>