<script setup>
import { generateRoutes } from "@/router/index";
import { routeNow } from "@/store/router.js";
import { type } from "@/store/index.js";
import { useMeta } from "vue-meta";

const router = useRouter();
const routeList = ref([]);

onMounted(() => {
  useMeta({
    title: "文章列表 - 刀刀博客",
    meta: [
      {
        name: "keywords",
        content: "刀刀,刀刀博客,刀刀小站,vue,js,javascript,css,前端,程序员",
      },
      {
        name: "description",
        content: "文章列表模块，记录着效果或功能实现的方法代码，可上手实操~",
      },
    ],
  });
});

watch(
  () => routeNow.value,
  (to, from) => {
    if (!to.path.includes("article")) return;
    let arr = generateRoutes.filter((item) =>
      item.path.includes(to.articleType)
    );
    routeList.value = arr;
  },
  {
    immediate: true,
    deep: true,
  }
);
// 获取要观察的目标元素列表
const articleItemArr = ref([]);

const routerFn = (item) => {
  router.push({
    path: "/detail/" + item.path,
  });
};
</script>

<template>
  <div style="width: 100%">
    <div class="article-list">
      <TypeSwitch :title="`${routeNow.articleType} 相关模块`" v-model="type" />
      <div
        :class="{
          'article-item-list': type === 'list',
          'article-item-img': type === 'img',
        }"
      >
        <div
          v-for="(item, index) in routeList"
          :key="index"
          class="article-item transition-color transition-transform"
        >
          <div class="article-item-link" @click.stop="routerFn(item)">
            <img :src="item.meta.img" alt="" />
            <div class="content">
              <div>
                <span class="content-title transition-color">{{
                  item.meta.title
                }}</span>
                <span class="content-info transition-color">{{
                  item.meta.info
                }}</span>
              </div>
              <span class="content-tag transition-color">效率</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.article-list {
  width: 100%;

  .article-item {
    animation: slide-in 0.6s 0.4s backwards;
    will-change: transform;
    visibility: visible;
    overflow: hidden;
    border-radius: 10px;
    background-color: var(--catalogue-bg);
    margin-bottom: 20px;
    transition: all .3s;
    cursor: pointer;
  }

  .article-item-list {
    display: flex;
    flex-direction: column;

    .article-item-link {
      display: flex;

      img {
        display: block;
        width: 350px;
        height: 200px;
        border-radius: 10px 0 0 10px;
        overflow: hidden;
        margin-right: 15px;
      }

      .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 12px 0;

        span {
          font-size: 14px;
          color: var(--primary-info);

          &.content-title {
            font-size: 22px;
            height: 25px;
            font-weight: bold;
          }

          &.content-tag {
            height: 20px;
            line-height: 20px;
            text-align: right;
            padding-right: 10px;
            color: var(--catalogue-word);
          }

          &.content-info {
            flex: 1;
            margin: 15px 0;
            font-size: 16px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 6;
            display: -webkit-box;
            -webkit-box-orient: vertical;
          }
        }
      }
    }
  }

  .article-item-img {
    display: flex;
    flex-wrap: wrap;

    .article-item {
      width: 31%;
      margin-right: 3.5%;
      box-shadow: 0px 0px 3px var(--primary-border);

      &:nth-child(3n) {
        margin-right: 0;
      }

      .article-item-link {
        display: block;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 170px;
        }

        .content {
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 150px;

          span {
            font-size: 14px;
            color: var(--primary-info);

            &.content-title {
              font-size: 18px;
              height: 25px;
              font-weight: bold;
            }

            &.content-tag {
              height: 20px;
              line-height: 20px;
              text-align: right;
              padding-right: 10px;
              color: var(--catalogue-word);
            }

            &.content-info {
              flex: 1;
              margin: 12px 0;
              font-size: 16px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 3;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .article-list {
    .article-item {
      margin-bottom: 1.25rem;
    }

    .article-item-list {
      .article-item-link {
        img {
          width: 18rem;
          height: 12.5rem;
          border-radius: 0.625rem 0 0 0.625rem;
          margin-right: 0.9375rem;
        }

        .content {
          padding: 0.75rem 0;

          span {
            font-size: 0.875rem;

            &.content-title {
              font-size: 1.375rem;
              height: 1.5625rem;
            }

            &.content-tag {
              height: 1.25rem;
              line-height: 1.25rem;
              padding-right: 0.625rem;
            }

            &.content-info {
              margin: 0.9375rem 0;
              font-size: 1rem;
            }
          }
        }
      }
    }

    .article-item-img {
      .article-item {
        margin-right: 1.53rem;
        box-shadow: 0px 0px 0.1875rem var(--primary-border);

        .article-item-link {
          img {
            height: 10rem;
          }

          .content {
            padding: 0.625rem;
            min-height: 9.375rem;

            span {
              font-size: 0.875rem;

              &.content-title {
                font-size: 1.125rem;
                height: 1.5625rem;
              }

              &.content-tag {
                height: 1.25rem;
                line-height: 1.25rem;
                padding-right: 0.625rem;
              }

              &.content-info {
                margin: 0.75rem 0;
                font-size: 1rem;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1400px) {
  .article-list {
    .article-item-list {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      .article-item {
        width: 49%;
      }
    }

    .article-item-img {
      .article-item {
        width: 23.1%;
        margin-right: 2.5%;
        box-shadow: 0px 0px 3px var(--primary-border);

        &:nth-child(4n) {
          margin-right: 0;
        }

        &:nth-child(3n) {
          margin-right: 2.5%;
        }

        .article-item-link {
          display: block;
          width: 100%;
          height: 100%;

          img {
            width: 100%;
          }

          .content {
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 150px;

            span {
              font-size: 14px;
              color: var(--primary-info);

              &.content-title {
                font-size: 18px;
                height: 25px;
                font-weight: bold;
              }

              &.content-tag {
                height: 20px;
                line-height: 20px;
                text-align: right;
                padding-right: 10px;
                color: var(--catalogue-word);
              }

              &.content-info {
                flex: 1;
                margin: 12px 0;
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
}

@media screen and (min-width: 1600px) {
  .article-list {
    .article-item-img {
      .article-item {
        width: 18%;

        &:nth-child(5n) {
          margin-right: 0;
        }

        &:nth-child(3n),
        &:nth-child(4n) {
          margin-right: 2.5%;
        }
      }
    }
  }
}

@media screen and (min-width: 1800px) {
  .article-list {
    .article-item-img {
      .article-item {
        width: 14.58%;

        &:nth-child(6n) {
          margin-right: 0 !important;
        }

        &:nth-child(3n),
        &:nth-child(4n),
        &:nth-child(5n) {
          margin-right: 2.5%;
        }
      }
    }
  }
}

@media screen and (min-width: 2100px) {
  .article-list {
    .article-item-list {
      .article-item {
        width: 33%;
      }
    }
  }
}

@media screen and (min-width: 800px) {
  .article-item {
    &:hover {
      transform: translate(0, -3px);
      box-shadow: 0px 0px 3px var(--primary-border);
    }
  }
}

.article-item-show {
  animation-name: slide-up-animation;
  animation-duration: 0.3s;
  /* 设置动画持续时间 */
  animation-delay: 0.5s;
  animation-iteration-count: 1;
}

@keyframes slide-in {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
