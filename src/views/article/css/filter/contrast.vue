<script setup>
const model = defineModel();

const loseDeg = () => {
    model.value -= 20
}

const addDeg = () => {
    model.value += 20
}

const reset = () => {
    model.value = 100
}
</script>

<template>
    <div class="box">
        <div class="btns">
            <button @click="loseDeg">- 20对比度</button>
            <button @click="addDeg">+ 20对比度</button>
            <button @click="reset">恢复</button>
        </div>
        <img src="./firefox-logo.svg"
            :style="{ '--contrast': model + '%' }"
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
            margin-right: 15px;
        }
    }

    img {
        height: 30%;
        width: 30%;
        filter: contrast(var(--contrast));
    }
}
</style>