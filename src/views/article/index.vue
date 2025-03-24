<script setup>
import { generateArticleRoutes } from "@/router/index";
import { routeNow } from "@/store/router.js";
import { type } from "@/store/index.js";
import methods from '@/utils/customMethod';
import TypeSwitch from './components/typeSwitch/index.vue';

const routeList = ref([]);
const currentType = computed(() => routeNow.value.articleType)

// 优化3：使用watchEffect自动追踪依赖
watchEffect(() => {
  if (!routeNow.value.path.includes('article')) return
  
  routeList.value = generateArticleRoutes
    .filter(item => item.path.startsWith(currentType.value))
    .filter(item => !routeNow.value.path.includes(item.path))
})

const routerFn = (item) => {
  methods.$goRouter(item.path, "/detail/");
};
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'ArticleList', // 设置组件名称
});

export { componentOptions };
</script>

<template>
  <div style="width: 100%">
    <div class="article-list">
      <TypeSwitch />
      <div :class="{
        'article-item-list': type === 'list',
        'article-item-img': type === 'img',
      }">
        <div v-for="(item, index) in routeList"
          :key="index"
          v-slide-in
          class="article-item">
          <div class="article-item-link"
            @click.stop="routerFn(item)">
            <my-image :src="item.meta.img"
              alt="封面图片" />
            <div class="content">
              <div>
                <span class="content-title">{{ item.meta.title }}</span>
                <span class="content-info">{{ item.meta.info }}</span>
              </div>
              <div class="content-tag-list">
                <span v-for="(tag, index) in item.meta.tags"
                  :key="index"
                  class="content-tag">
                  <svg-icon name="tuli"></svg-icon>
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .article-list {
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;

    .article-item {
      border-radius: 10px;
      background-color: var(--catalogue-bg);
      margin-bottom: 20px;
      transition: all .3s;
      cursor: pointer;
      overflow: hidden;

      .content-tag-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        width: 100%;
        text-align: right;

        .content-tag {
          display: flex;
          align-items: center;
          font-family: 'sans';
          font-size: 12px !important;
          margin-left: 10px !important;
          color: var(--catalogue-word) !important;

          svg {
            width: 14px;
            height: 14px;
            fill: var(--catalogue-word);
            margin-right: 5px;
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
        box-shadow: 0px 0px 10px -6px var(--primary-border);

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

              &.content-info {
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
        border-radius: 2rem;
        margin: 2.25rem 0 1.65rem;
        overflow: unset;
      }

      .article-item-list {
        display: flex;
        flex-direction: column;

        .article-item-link {
          position: relative;
          width: 90%;
          margin: 0 auto;

          img {
            width: 48%;
            height: 13rem;
            transform: translateY(-1.95rem);
          }

          .content-title {
            position: absolute;
            right: 0;
            top: 1.25rem;
            width: 48%;
            height: calc(13rem - 1.95rem - 1.25rem);
            font-size: 2rem;
            font-family: 'dahei';
            color: var(--catalogue-word);
            letter-spacing: .2rem;
            line-height: 1.1;
            overflow: auto;

            &::-webkit-scrollbar {
              width: 0;
            }
          }

          .content-info {
            display: block;
            width: 100%;
            min-height: 1.75rem;
            font-size: 1.25rem;
            margin-bottom: 1rem;
            color: var(--catalogue-info);
          }

          .content-tag-list {
            margin-bottom: 1.25rem;

            span {
              font-size: 1rem;
            }

            svg {
              width: 1rem;
              height: 1rem;
              margin-right: .3rem;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1300px) {
    .article-list {
      .article-item-img {
        .article-item {
          width: 23.1%;
          margin-right: 2.5%;

          &:nth-child(3n) {
            margin-right: 2.5%;
          }

          &:nth-child(4n) {
            margin-right: 0;
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

  @media screen and (min-width: 1500px) {
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

  @media screen and (min-width: 800px) {
    .article-item {
      &:hover {
        transform: translate(0, -3px);
      }
    }
  }
</style>
