<script setup>
const model = defineModel();

const loseDeg = () => {
    if (model.value <= -360) model.value = 0
    model.value -= 30
}

const addDeg = () => {
    if (model.value >= 360) model.value = 0
    model.value += 30
}

const reset = () => {
    model.value = 0
}
</script>

<template>
    <div class="box">
        <div class="btns">
            <button @click="loseDeg">- 30度</button>
            <button @click="addDeg">+ 30度</button>
            <button @click="reset">恢复</button>
        </div>
        <img src="./firefox-logo.svg"
            :style="{ '--deg': model + 'deg' }"
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
            background-color: #aaa;
            color: #fff;
            margin-right: 15px;
        }
    }

    img {
        height: 30%;
        width: 30%;
        filter: hue-rotate(var(--deg));
    }
}
</style>