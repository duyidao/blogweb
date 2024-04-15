<script setup>
import { useRouter } from 'vue-router'
import { routes } from '@/router/index'
import { routeNow } from '@/store/router.js'

const router = useRouter()
const routeList = ref([])

// 从数组中筛选出6个数据
function getRandomElementsFromArray(arr, n) {
    if (n > arr.length) {
        throw new RangeError("Cannot extract more elements than available in the array.");
    }

    // Create a copy of the original array to avoid modifying it
    const shuffledArray = [...arr];

    // Fisher-Yates (Knuth) shuffle algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }

    // Return the first n elements from the shuffled array
    return shuffledArray.slice(0, n);
}

watch(() => routeNow.value, (to, from) => {
    let arr = routes
        .find(item => item.path === '/blogweb/catalogue')
        .children
        .find(item => to.path.includes(item.path))
        .children
        .filter(item => item.path !== to.path)
    routeList.value = arr.length > 6 ? getRandomElementsFromArray(arr, 6) : arr
}, {
    immediate: true,
    deep: true,
})

// 切换文章
const handleRouter = (item) => {
    router.push(item.path)
}
</script>

<template>
    <div class="catalogue">
        <div class="catalogue-head"></div>

        <div class="catalogue-body">
            <div class="catalogue-content">
                <router-view></router-view>
            </div>

            <div v-if="routeNow.menuOrder !== 1"
                class="catalogue-aside">
                <!-- 花朵动画 -->
                <div class="flower">
                    <!-- <window /> -->
                </div>

                <!-- 粘性定位 -->
                <div class="sticky">
                    <!-- gitee直达 -->
                    <div class="gitee">
                        <div class="card">
                            <div class="card-face card-front transition-color">
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
                            <div class="card-face card-back transition-color">
                                关注我
                            </div>
                        </div>
                    </div>

                    <!-- 其他目录列表 -->
                    <div class="list transition-color">
                        <div class="list-title">
                            <SvgIcon name="time"
                                width="30px"
                                height="30px" />
                            <span>其他文章</span>
                        </div>

                        <div class="list-info">
                            <template v-if="routeList.length > 0">
                                <div v-for="(item, index) in routeList"
                                    :key="index"
                                    class="list-item"
                                    @click="handleRouter(item)"
                                >
                                    <div class="list-item-title">{{ item.meta.title }}</div>
                                    <div class="list-item-info">
                                        <SvgIcon name="article" />
                                        <div>{{ item.meta.info }}</div>
                                    </div>
                                </div>
                            </template>
                            <None text="暂无其他文章，敬请期待更新~" v-else />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.catalogue {
    width: 100%;
    height: 100%;

    .catalogue-head {
        width: 100%;
        height: 150px;
        margin-bottom: 20px;
        background-color: red;
    }
}

.catalogue-body {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    .catalogue-content {
        flex: 1;
        margin-right: 24px;
        background-color: var(--catalogue-bg);
        border-radius: 20px;
        box-shadow: 0 0 5px #ccc;
        transition: background-color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06), color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06);
        overflow: hidden;
    }

    .catalogue-aside {
        width: 290px;

        .flower {
            width: 100%;
            height: 400px;
            border-radius: 20px;
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
                            padding-left: 32px;
                            font-size: 32px;

                            .card-title {
                                margin-bottom: 8px;
                            }

                            .card-word {
                                font-size: 16px;
                            }

                            .card-svg-cat {
                                position: absolute;
                                right: -11.4px;
                                bottom: -14.6px;
                                transform: rotate(-30deg);
                            }

                            .card-svg-dog {
                                position: absolute;
                                right: -11.4px;
                                top: -14.6px;
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
                height: 480px;
                padding: 15px 10px;
                color: var(--primary-info);
                border-radius: 20px;
                border: 1px solid var(--primary-border);

                svg {
                    fill: var(--primary-info);
                }

                .list-title {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    height: 35.6px;
                    padding-left: 15px;

                    span {
                        margin-left: 16px;
                        font-size: 24px;
                        font-weight: bold;
                    }
                }

                .list-info {
                    display: flex;
                    flex-direction: column;
                    height: calc(100% - 35.6px);

                    .list-item {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;
                        height: calc(100% / 7);
                        padding: 15px 0 15px 16px;
                        margin-bottom: 12px;
                        border-radius: 15px;
                        cursor: pointer;

                        &:hover {
                            background-color: var(--primary-bg);
                            color: var(--normal-word);

                            svg {
                                fill: var(--normal-word);
                            }
                        }

                        .list-item-title {
                            margin-bottom: 10px;
                            font-size: 1.32px;
                        }

                        .list-item-info {
                            display: flex;
                            align-items: center;

                            div {
                                margin-left: 8px;
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