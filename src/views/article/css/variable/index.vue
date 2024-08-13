<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
onMounted(() => {
    const box = document.querySelector('.setProperty-box')
    const w = box.clientWidth
    box.style.setProperty('--w', w + 'px')
});
</script>

<template>
    <IframeBoxItem title="变量计算" class="ifrname-box" :needCode="false">
        <div class="setProperty-box">
            <div class="item"></div>
        </div>
    </IframeBoxItem>
</template>

<style lang="less" scoped>
.setProperty-box {
    width: 320px;
    height: 100px;
    margin: 50px auto;
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

@media screen and (max-width: 768px) {
    .setProperty-box {
        width: 20rem;
        height: 6.25rem;
        margin: 3.125rem auto;
        border: .0625rem solid #000;

        .item {
            width: 1.875rem;
            height: 1.875rem;
        }
    }
}
</style>