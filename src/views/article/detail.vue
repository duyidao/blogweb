<script setup>
import { generateArticleRoutes } from "@/router/index";
import { routeNow } from "@/store/router.js";
import methods from '@/utils/customMethod'; // 按需导入方法

// 优化2：使用更清晰的变量名
const currentRoute = useRoute();
const relatedArticles = ref([]);

// 优化4：使用现代数组方法重构随机排序
const getShuffledArray = (array, count) => {
  return [...array]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
}



// 优化4：使用watchEffect自动追踪依赖
watchEffect(() => {
  if (!routeNow.value.path.includes("detail")) return;
  
  const filtered = generateArticleRoutes
    .filter(item => item.path.includes(routeNow.value.detailType))
    .filter(item => !routeNow.value.path.includes(item.path));
    
  relatedArticles.value = filtered.length > 6 
    ? getShuffledArray(filtered, 6)
    : filtered;
});

// 点击去往gitee
const handleGiteeFn = () => window.open('https://gitee.com/duyidao', '_blank');

const handleBackFn = () => {
  methods.$goRouter(currentRoute.path.split('/')[2], '/article/', 'replace');
}

const breadList = computed(() => ([
  {
    name: "首页",
    to: "/",
  },
  {
    name: "文章列表",
    to: "/article/" + routeNow.value.detailType,
  },
  {
    name: routeNow.value.title,
  },
]));
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'ArticleDetail', // 设置组件名称
});

export { componentOptions };
</script>

<template>
  <div class="catalogue" id="catalogue">
    <header class="catalogue-title" aria-labelledby="pageTitle">
      <my-breadcrumb class="catalogue-title-nav" :list="breadList" />
      <div class="catalogue-title-big">
        <h1 class="catalogue-title-text">{{ routeNow.title }}</h1>
        <p class="catalogue-title-subtext">{{ routeNow.info }}</p>
        <ul>
          <li v-for="(item, index) in routeNow.tags"
            :key="index">
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </header>
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
          <div class="gitee"
            @click.stop="handleGiteeFn">
            <div class="card">
              <div class="card-face card-front ">
                <p class="card-title">
                  <svg-icon name="gitee"
                    width="35"
                    height="35" />
                  <span>Gitee</span>
                </p>
                <p class="card-word">前往码云仓库👉</p>
              </div>
              <p class="card-face card-back ">
                <svg-icon name="like"
                  width="35"
                  height="35" />
                <span>关注我</span>
              </p>
            </div>
          </div>

          <!-- 其他目录列表 -->
          <div class="list transition-border">
            <div class="list-title">
              <svg-icon name="time"
                width="30"
                height="30" />
              <span class="">其他文章</span>
            </div>

            <div class="list-info">
              <template v-if="relatedArticles.length > 0">
                <div v-for="(item, index) in relatedArticles"
                  :key="index"
                  class="list-item"
                  @click="methods.$goRouter(item.path, '/detail/')">
                  <p class="list-item-title">{{ item.meta.title }}</p>
                  <div class="list-item-info">
                    <svg-icon name="article"
                      width="16"
                      height="16" />
                    <p class="list-item-content">{{ item.meta.info }}</p>
                  </div>
                </div>
              </template>
              <my-empty text="暂无其他文章，敬请期待更新~"
                v-else />
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .catalogue {
    width: 100%;
    height: 100%;

    .catalogue-title {
      margin: 0 0 30px;
      color: var(--catalogue-title);

      .catalogue-title-big {
        margin-bottom: 20px;
        text-align: center;

        .catalogue-title-text {
          font-size: 40px;
          font-family: 'black';

          &::after {
            content: '';
            display: block;
            width: 50px;
            height: 1px;
            margin: 10px auto;
            background-color: var(--catalogue-title);
          }
        }

        .catalogue-title-subtext {
        font-size: 14px;
        font-family: 'sans';
        margin-bottom: 10px;
      }

      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;

        li {
          background-color: var(--detail-tag-bg);
          color: var(--detail-tag-word);
          margin-right: 8px;
          padding: 4px 8px;
          font-size: 12px;

          &:last-child {
            margin-right: 0 !important;
           }
        }
      }
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

  @media screen and (max-width: 768px) {
    #catalogue {
      .catalogue-title {
        margin: 0 0 1.875rem;

        ul {
          margin-bottom: .625rem;

          li {
            margin-right: 1rem;
            font-size: .75rem;
            padding: .25rem .5rem;

            svg {
              margin-right: 5px;
            }
          }
        }

        .catalogue-title-big {
          .catalogue-title-text {
            font-size: 2.5rem;
            margin-top: .6rem;

            &::after {
              width: 3.125rem;
              height: .0625rem;
              margin: .625rem auto;
            }
          }

          .catalogue-title-subtext {
            font-size: .875rem;
            margin-bottom: .625rem;
          }
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
      }
    }
  }


  @media screen and (max-width: 1200px) {
    .catalogue-content {
      margin-right: 0 !important;
    }
    .catalogue-aside {
      display: none;
    }
  }
</style>
