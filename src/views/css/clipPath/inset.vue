<script setup>

</script>

<template>
    <div class="box">
        <p class="word">A cute cat</p>
    </div>
</template>

<style lang="less" scoped>
.box {
    position: relative;
    width: 250px;
    height: 100px;
    background: url(../../../assets/img/cat.png) no-repeat center 100%/100%;

    p.word {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        color: #fff !important;
        font-size: 30px;
        line-height: 100px;
        animation: fall 3s infinite;
    }
}

@keyframes fall {
    0% {
        clip-path: inset(100% 0% 0% 0%);
        transform: translateY(-100%);
    }

    100% {
        clip-path: inset(0% 0% 0% 0%);
    }
}
</style>