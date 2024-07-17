<script setup>

</script>

<template>
    <div class="box">
        <img src="../../../assets/img/music/shape.webp"
            alt="">
        <img src="../../../assets/img/music/shi.webp"
            alt="">
    </div>
</template>

<style lang="less" scoped>
.box {
    position: relative;
    width: 100px;
    height: 100px;
    cursor: pointer;

    img {
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        transition: all 0.5s;

        &:nth-child(2) {
            clip-path: polygon(-30% 0, -30% 0, 0% 50%, -30% 100%, -30% 100%);
        }
    }

    &:hover img:nth-child(2) {
        clip-path: polygon(-30% 0, 100% 0, 110% 50%, 100% 100%, -30% 100%);
    }
}
</style>