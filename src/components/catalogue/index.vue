<script setup lang="ts">
import { useRoute } from 'vue-router'
import { routes } from '@/router/index'

const route = useRoute()

const routeList = ref([])

watch(route, (to, from) => {
    let arr = routes.find(item => item.path === to.path)
    routeList.value = arr?.children
}, {
    immediate: true,
    deep: true,
})
</script>

<template>
    <div class="catalogue">
        <!-- 花朵动画 -->
        <div class="flower"></div>

        <div class="sticky">
            <!-- gitee直达 -->
            <div class="gitee">
                <div class="card">
                    <div class="card-face card-front">
                        abc
                    </div>
                    <div class="card-face card-back">
                        123
                    </div>
                </div>
            </div>

            <!-- 其他目录列表 -->
            <div class="list"></div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.catalogue {
    display: initial;
    width: 290px;
    height: 100%;

    .flower {
        width: 100%;
        height: 400px;
        border-radius: 20px;
        background-color: aqua;
    }

    .sticky {
        position: sticky;
        top: 20px;
        right: 20px;
    }

    .gitee {
        width: 100%;
        height: 110px;
        border-radius: 20px;
        margin: 20px 0;
        cursor: pointer;
        background-color: aqua;
        transition: all 0.5s;
        perspective: 1000px;

        &:hover {
            .card {
                transform: rotateY(180deg);
            }
        }

        .card {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s;

            .card-face {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;

                &.card-front {
                    background: #f3f3f3;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 2em;
                }

                &.card-back {
                    background: #673C63;
                    color: white;
                    transform: rotateY(180deg);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 2em;
                }
            }
        }
    }

    .list {
        width: 100%;
        height: 400px;
        border-radius: 20px;
        background-color: aqua;
    }
}
</style>