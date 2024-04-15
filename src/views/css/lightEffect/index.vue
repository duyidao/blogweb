<script setup>
</script>

<template>
    <div class="box">
        <span>C</span>
        <span>O</span>
        <span>L</span>
        <span>O</span>
        <span>R</span>
        <span>F</span>
        <span>U</span>
        <span>L</span>
    </div>
</template>

<style lang="less" scoped>
@keyframes spread {
    to {
        color: skyblue;
        text-shadow: 20px 0 70px skyblue;
    }
}


.box {
    width: 100%;
    height: 100px;
    background-color: #000;
    text-align: center;
    line-height: 100px;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 10px;

    span {
        animation: spread 1s linear infinite alternate;
        color: #fff;
    }

    span:nth-child(1) {
        animation-delay: 0s;
    }

    span:nth-child(2) {
        animation-delay: 0.2s;
    }

    span:nth-child(3) {
        animation-delay: 0.4s;
    }

    span:nth-child(4) {
        animation-delay: 0.6s;
    }

    span:nth-child(5) {
        animation-delay: 0.8s;
    }

    span:nth-child(6) {
        animation-delay: 1s;
    }

    span:nth-child(7) {
        animation-delay: 1.2s;
    }

    span:nth-child(8) {
        animation-delay: 1.4s;
    }
}
</style>