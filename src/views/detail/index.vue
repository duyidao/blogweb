<script setup>
import { generateRoutes } from "@/router/index";
import { routeNow } from "@/store/router.js";
import { useMeta } from "vue-meta";

const routeList = ref([]);

// 从数组中筛选出6个数据
function getRandomElementsFromArray(arr, n) {
  if (n > arr.length) {
    throw new RangeError(
      "Cannot extract more elements than available in the array."
    );
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

onMounted(() => {
  useMeta({
    title: routeNow.value.title + " - 刀刀博客",
    meta: [
      {
        name: "keywords",
        content:
          "刀刀,刀刀博客,刀刀小站,vue,js,javascript,css,前端," +
          routeNow.value.title,
      },
      {
        name: "description",
        content: `${routeNow.value.title}，主要记录${routeNow.value.info}`,
      },
    ],
  });
});

watch(
  () => routeNow.value,
  (to, from) => {
    if (!to.path.includes("detail")) return;
    let arr = generateRoutes
      .filter((item) => item.path.includes(to.detailType))
      .filter((item) => !to.path.includes(item.path));
    routeList.value = arr.length > 6 ? getRandomElementsFromArray(arr, 6) : arr;
  },
  {
    immediate: true,
    deep: true,
  }
);

// 点击去往gitee
const handleGiteeFn = () => {
  let a = document.createElement("a");
  a.href = "https://gitee.com/duyidao";
  a.target = "_blank";
  a.click();
  a.remove();
};
</script>

<template>
  <div class="catalogue">
    <div class="catalogue-title">
      <p class="catalogue-title-big transition-color">
        {{ routeNow.title }}
      </p>
      <p class="catalogue-title-info transition-color">{{ routeNow.info }}</p>
    </div>
    <div class="catalogue-body">
      <main class="catalogue-content">
        <router-view></router-view>
      </main>

      <aside class="catalogue-aside">
        <!-- 花朵动画 -->
        <div class="flower">
          <!-- <window /> -->
        </div>

        <!-- 粘性定位 -->
        <div class="sticky">
          <!-- gitee直达 -->
          <div class="gitee" @click.stop="handleGiteeFn">
            <div class="card">
              <div class="card-face card-front transition-color">
                <p class="card-title">
                  <SvgIcon name="gitee" width="35px" height="35px" />
                  <span>Gitee</span>
                </p>
                <p class="card-word">前往码云仓库👉</p>
              </div>
              <p class="card-face card-back transition-color">
                <SvgIcon name="like" width="35px" height="35px" />
                <span>关注我</span>
              </p>
            </div>
          </div>

          <!-- 其他目录列表 -->
          <div class="list transition-border">
            <div class="list-title">
              <SvgIcon name="time" width="30px" height="30px" />
              <span class="transition-color">其他文章</span>
            </div>

            <div class="list-info">
              <template v-if="routeList.length > 0">
                <div
                  v-for="(item, index) in routeList"
                  :key="index"
                  class="list-item"
                  @click="$goRouter(item.path, '/detail/')"
                >
                  <p class="list-item-title">{{ item.meta.title }}</p>
                  <div class="list-item-info">
                    <SvgIcon name="article" width="16px" height="16px" />
                    <p class="list-item-content">{{ item.meta.info }}</p>
                  </div>
                </div>
              </template>
              <None text="暂无其他文章，敬请期待更新~" v-else />
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style lang="less" scoped>
.catalogue {
  width: 100%;
  height: 100%;

  .catalogue-title {
    margin: 20px 0 50px;

    .catalogue-title-big {
      font-size: 40px;
      font-weight: bold;
      margin-bottom: 30px;
      color: var(--catalogue-title);
    }

    .catalogue-title-info {
      font-size: 14px;
      font-style: italic;
      color: var(--catalogue-title);
    }
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
    padding: 20px;
    background-color: var(--catalogue-bg);
    border-radius: 20px;
    box-shadow: 0 0 5px #ccc;
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
                display: flex;
                align-items: center;
                margin-bottom: 8px;

                svg {
                  fill: var(--normal-word);
                  margin-right: 8px;
                }

                span {
                  margin-top: 2px;
                }
              }

              .card-word {
                font-size: 16px;
              }
            }

            &.card-back {
              transform: rotateY(180deg);
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 2em;

              svg {
                fill: var(--normal-word);
                margin-right: 8px;
              }
            }
          }
        }
      }

      .list {
        position: relative;
        width: 100%;
        height: 480px;
        padding: 15px 10px;
        color: var(--primary-info);
        background-color: var(--catalogue-bg);
        border-radius: 20px;
        overflow: hidden;
        z-index: 2;

        // &::before {
        //   content: "";
        //   position: absolute;
        //   width: 200%;
        //   height: 200%;
        //   left: -50%;
        //   top: -50%;
        //   background-color: var(--detail-border);
        //   background-image: conic-gradient(
        //     transparent,
        //     var(--detail-animate),
        //     transparent 30%
        //   );
        //   z-index: -2;
        //   animation: rotate 5s linear infinite;
        // }
        // &::after {
        //   content: "";
        //   position: absolute;
        //   inset: 1vmin;
        //   background-color: var(--catalogue-bg);
        //   border-radius: 20px;
        //   z-index: -1;
        // }

        svg {
          fill: var(--primary-info);
        }

        .list-title {
          display: flex;
          align-items: center;
          width: 100%;
          height: 35.6px;
          padding-left: 8px;
          margin-bottom: 10px;

          span {
            margin-left: 16px;
            font-size: 24px;
            font-weight: bold;
          }
        }

        .list-info {
          display: flex;
          flex-direction: column;
          height: calc(100% - 40px);

          .list-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            height: calc(100% / 7);
            padding: 15px 0 15px 15px;
            margin-bottom: 12px;
            border-radius: 15px;
            cursor: pointer;

            &:last-child {
              margin-bottom: 0;
            }

            &:hover {
              background-color: var(--primary-bg);
              color: var(--normal-word);
              transition: none;

              svg {
                fill: var(--normal-word);
                transition: none;
              }
            }

            .list-item-title {
              margin-bottom: 10px;
              font-size: 16px;
            }

            .list-item-info {
              display: flex;
              align-items: center;

              .list-item-content {
                width: 100%;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}

@keyframes rotate {
  to {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 1200px) {
  .catalogue {
    .catalogue-title {
      margin: 1.25rem 0 3.125rem;

      .catalogue-title-big {
        font-size: 2.5rem;
        margin-bottom: 1.875rem;
      }

      .catalogue-title-info {
        font-size: 0.875rem;
      }
    }

    .catalogue-body {
      .catalogue-content {
        margin-right: 0;
        border-radius: 1.25rem;
        padding: 1.25rem;
        box-shadow: 0 0 0.3125rem var(--primary-border);
      }

      .catalogue-aside {
        display: none;
      }
    }
  }
}
</style>
