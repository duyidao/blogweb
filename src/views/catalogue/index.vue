<script setup>
import { useRoute } from 'vue-router'
import { routes } from '@/router/index'

const route = useRoute()

const routeList = ref([])

watch(route, (to, from) => {
    let arr = routes
        .find(item => item.path === '/blogweb/catalogue')
        .children
        .find(item => to.path.includes(item.path))
        .children
        // .filter(item => item.path !== to.path)
    routeList.value = arr
    console.log('routeList.value', routeList.value);
}, {
    immediate: true,
    deep: true,
})
</script>

<template>
    <div class="catalogue">
        <div class="catalogue-content">
            <router-view></router-view>
        </div>

        <div class="catalogue-aside">
            <!-- 花朵动画 -->
            <div class="flower"></div>

            <!-- 粘性定位 -->
            <div class="sticky">
                <!-- gitee直达 -->
                <div class="gitee">
                    <div class="card">
                        <div class="card-face card-front transition-bg">
                            <div class="card-title">Gitee</div>
                            <div class="card-word">前往码云仓库👉</div>
                            <SvgIcon class="card-svg-cat"
                                name="cat"
                                width="50px"
                                height="50px" />
                            <SvgIcon class="card-svg-dog"
                                name="dog"
                                width="50px"
                                height="50px" />
                        </div>
                        <div class="card-face card-back transition-bg">
                            关注我
                        </div>
                    </div>
                </div>

                <!-- 其他目录列表 -->
                <div class="list transition-bg">
                    <div class="list-title">
                        <SvgIcon name="time" width="30px" height="30px" />
                        <span>其他文章</span>
                    </div>

                    <div class="list-info">
                        <div v-for="(item, index) in routeList"
                            :key="index"
                            class="list-item transition-bg">
                            <div class="list-item-title">{{ item.meta.title }}</div>
                            <div class="list-item-info">
                                <SvgIcon name="article" />
                                <div>{{ item.meta.info }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.catalogue {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .catalogue-content {
        flex: 1;
        margin-right: 1.5rem;
        background-color: red;
    }

    .catalogue-aside {
        width: 18.125rem;

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

            .gitee {
                width: 100%;
                height: 110px;
                margin: 20px 0;
                cursor: pointer;
                transition: all 0.5s;
                perspective: 1000px;

                &:hover {
                    .card {
                        transform: rotateY(-180deg);
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
                        color: var(--normal-word);
                        border-radius: 20px;
                        background-color: var(--primary-bg);
                        overflow: hidden;

                        &.card-front {
                            display: flex;
                            flex-direction: column;
                            justify-content: center;
                            padding-left: 2rem;
                            font-size: 2rem;

                            .card-title {
                                margin-bottom: .5rem;
                            }

                            .card-word {
                                font-size: 1rem;
                            }

                            .card-svg-cat {
                                position: absolute;
                                right: -0.7125rem;
                                bottom: -0.9125rem;
                                transform: rotate(-30deg);
                            }

                            .card-svg-dog {
                                position: absolute;
                                right: -0.7125rem;
                                top: -0.9125rem;
                                transform: rotate(-150deg);
                            }
                        }

                        &.card-back {
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
                height: 30rem;
                padding: .9375rem .625rem;
                color: var(--primary-info);
                border-radius: 1.25rem;
                border: 1px solid var(--primary-border);

                svg {
                    fill: var(--primary-info);
                }

                .list-title {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 3.35rem;

                    span {
                        margin-left: 1rem;
                        font-size: 1.5rem;
                        font-weight: bold;
                    }
                }

                .list-info {
                    display: flex;
                    flex-direction: column;
                    height: calc(100% - 3.35rem);

                    .list-item {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;
                        height: calc(100% / 7);
                        padding: 15px 0 15px 1rem;
                        margin-bottom: 12px;
                        border-radius: .9375rem;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--primary-bg);
                            color: var(--normal-word);
                            
                            svg {
                                fill: var(--normal-word);
                            }
                        }

                        .list-item-title {
                            margin-bottom: .625rem;
                            font-size: 1.2rem;
                        }

                        .list-item-info {
                            display: flex;
                            align-items: center;

                            div {
                                margin-left: .5rem;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1200px) {
    .catalogue {
        .catalogue-content {
            margin-right: 0;
        }

        .catalogue-aside {
            display: none;
        }
    }
}
</style>