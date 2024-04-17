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
    <div class="ifrname-box setProperty-box">
        <div class="item"></div>
    </div>
</template>

<style lang="less" scoped>
.setProperty-box {
    width: 320px;
    height: 100px;
    margin: 100px auto;
    border: 1px solid #000;

    .item {
        width: 30px;
        height: 30px;
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