<script setup>
import { scrollProgress } from '@/store/index';

const handleToTopFn = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <div v-if="scrollProgress >= 30"
        class="my-toTop"
        title="返回顶部">
        <i class="iconfont icon-fanhuidingbu3"
            @click.stop="handleToTopFn"></i>
    </div>
</template>

<style lang="less" scoped>
.my-toTop {
    position: fixed;
    bottom: 50px;
    right: 50px;
    width: 50px;
    height: 50px;
    background-color: var(--catalogue-bg);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 5px var(--primary-info);
    cursor: pointer;

    i {
        font-size: 30px;
    }
}

@media screen and (max-width: 768px) {
    .my-toTop {
        bottom: 3.125rem;
        right: 3.125rem;
        width: 3.125rem;
        height: 3.125rem;
        box-shadow: 0 0 .3125rem var(--primary-info);

        i {
            font-size: 1.875rem;
        }
    }
}
</style>