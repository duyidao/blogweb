<script setup>
const model = defineModel();

const loseDeg = () => {
    model.value -= 10
}

const addDeg = () => {
    model.value += 10
}

const reset = () => {
    model.value = 0
}
</script>

<template>
    <div class="box">
        <div class="btns">
            <button @click="loseDeg">- 10灰度</button>
            <button @click="addDeg">+ 10灰度</button>
            <button @click="reset">恢复</button>
        </div>
        <img src="./firefox-logo.svg"
            :style="{ '--grayscale': model + '%' }"
            alt="">
    </div>
</template>

<style lang="less" scoped>
.box {
    width: 100%;
    height: 100%;

    .btns {
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        button {
            width: 100px;
            height: 40px;
            background-color: var(--primary-bg);
            color: #fff;
            margin-right: 15px;
        }
    }

    img {
        height: 30%;
        width: 30%;
        filter: grayscale(var(--grayscale));
    }
}
</style>