<script setup>
import methods from '@/utils/customMethod';

const route = useRoute();
const activeIndex = computed(() => route.path.split('/')[2] === 'css' ? 0 : 1);

const routerList = [
  {
    name: "Css",
    base: "/article/",
    path: "css",
    icon: "icon-css",
    subtitle: '样式效果实现，搭配源码食用；修改属性参数，查看最新效果',
  },
  {
    name: "Javascript",
    base: "/article/",
    path: "js",
    icon: "icon-js",
    subtitle: 'Web API 妙用多，灵活巧用效果现',
  },
]

const handleLinkFn = (item, index) => {
  if (!item.base || !item.path) return;
  methods.$goRouter(item.path, item.base);
}
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'TypeSwitch', // 设置组件名称
});

export { componentOptions };
</script>

<template>
  <div class="article-type ">
    <div class="article-title">
      <p class="article-title-text">刀刀博客效果实现列表</p>
      <p class="article-title-subtext">{{ routerList[activeIndex].subtitle }}</p>

    </div>

    <div class="article-change">
      <div v-for="(item, index) in routerList"
        class="article-change-item"
        :class="{ 'active': activeIndex === index }"
        @click.stop="handleLinkFn(item, index)">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .article-type {
    margin-bottom: 18px;

    .article-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .article-title-text {
        font-size: 26px;
        font-weight: 700;
        color: var(--article-title);
        font-family: 'sans';
      }

      .article-title-subtext {
        font-size: 14px;
        color: #666;
        margin-top: 12px;
        font-family: 'neue';
      }
    }

    .article-change {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 18px;

      .article-change-item {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 50px;
        color: #fff;
        font-size: 16px;
        cursor: pointer;

        &:first-child {
          background: url('@/assets/img/base/left_inactive.webp') no-repeat center / 100%;
          margin-right: 5px;

          &.active {
            background-image: url('@/assets/img/base/left_active.webp');
          }
        }

        &:nth-child(2) {
          background: url('@/assets/img/base/middle_inactive.webp') no-repeat center / 100%;

          &.active {
            background-image: url('@/assets/img/base/middle_active.webp');
          }
        }

        &:last-child {
          background: url('@/assets/img/base/right_inactive.webp') no-repeat center / 100%;
          margin-left: 5px;

          &.active {
            background-image: url('@/assets/img/base/right_active.webp');
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .article-type {
      margin-bottom: 1.125rem;

      .article-title {
        .article-title-text {
          font-size: 1.625rem;
        }

        .article-title-subtext {
          font-size: .875rem;
          margin-top: .75rem;
        }
      }

      .article-change {
        margin-top: 1.125rem;

        .article-change-item {
          width: 9.375rem;
          height: 3.125rem;
          font-size: 1rem;

          &:first-child {
            margin-right: .3125rem;
          }

          &:last-child {
            margin-left: .3125rem;
          }
        }
      }
    }
  }
</style>