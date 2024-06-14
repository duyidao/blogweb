<script setup>
defineProps({
    loading: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <div v-if="loading" class="loading">
        <div class="my-loading"></div>
    </div>
</template>

<style lang="less" scoped>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 9999;
}

.my-loading {
    position: relative;
    width: 50px;
    height: 50px;
    border: 2px solid #000;
    border-top-color: rgba(0, 0, 0, 0.2);
    border-right-color: rgba(0, 0, 0, 0.2);
    border-bottom-color: rgba(0, 0, 0, 0.2);
    border-radius: 100%;

    animation: circle infinite 0.75s linear;
}

@keyframes circle {
    0% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
