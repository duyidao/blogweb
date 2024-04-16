<script setup>

</script>

<template>
    <div class="box">
        <img src="../../../assets/img/cat.png"
            alt="">
    </div>
</template>

<style lang="less" scoped>
.box {
    width: 100px;
    height: 100px;
    cursor: pointer;

    img {
        width: 100%;
        height: 100%;
        display: block;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        transition: .5s;

        &:hover {
            clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%);
        }
    }
}
</style>