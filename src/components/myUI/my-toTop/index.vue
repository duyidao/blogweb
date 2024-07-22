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
    <div v-if="scrollProgress >= 25"
        class="my-toTop"
        title="返回顶部">
        <i class="iconfont icon-fanhuidingbu3"
            @click.stop="handleToTopFn"></i>
    </div>
</template>

<style lang="less">
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
    transition: all .2s linear;
    transform: translateX(calc(var(--scroll-dynamic) * 135%));

    i {
        font-size: 30px;
    }
}

.debug {
    position: fixed;
    padding: 15px;
    background-color: #fff;
    top: 45%;
    left: 20%;
    counter-reset: scroll-position calc(var(--scroll-position) * 1) scroll-position-delayed calc(var(--scroll-position-delayed) * 1) scroll-velocity calc(var(--scroll-velocity) * 1);
}
[data-id="--scroll-position"]::after {
    content: '----scroll-position:' counter(scroll-position);
}
[data-id="--scroll-position-delayed"]::after {
    content: '----scroll-position-delayed:' counter(scroll-position-delayed);
}
[data-id="--scroll-velocity"]::after {
    content: '----scroll-velocity:' counter(scroll-velocity);
}


@media screen and (max-width: 768px) {
    .my-toTop {
        bottom: 3.125rem;
        right: 3.125rem;
        width: 4.15rem;
        height: 4.15rem;
        box-shadow: 0 0 .3125rem var(--primary-info);

        i {
            font-size: 2rem !important;
        }
    }
}
</style>