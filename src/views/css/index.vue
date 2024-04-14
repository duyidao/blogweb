<script setup>
import { useRouter } from 'vue-router'
import { routes } from '@/router/index'
import { routeNow } from '@/store/router.js'

const router = useRouter()
const routeList = ref([])

watch(() => routeNow.value, (to, from) => {
  let arr = routes
    .find(item => item.path === '/blogweb/catalogue')
    .children
    .find(item => to.path.includes(item.path))
    .children
    .filter(item => item.path !== to.path)
  routeList.value = arr
}, {
  immediate: true,
  deep: true,
})

const type = ref('list')

// 获取要观察的目标元素列表
const articleItemArr = ref([])

const setComponentRef = (index) => (el) => {
  if (el) {
    articleItemArr.value[index] = el
  }
}

const options = {
  threshold: 0.6, // 重叠面积占被观察者的比例
  // root: document.querySelector('#scrollArea'), // 观察的根元素
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 元素进入可视区域
      entry.target.classList.add('article-item-show')
    } else {
      // 元素离开可视区域
      entry.target.classList.remove('article-item-show')
    }
  });
};
const observer = new IntersectionObserver(callback, options);

onMounted(() => {
  // 观察每个目标元素
  articleItemArr.value.forEach((target) => {
    observer.observe(target);
  });
})

onBeforeUnmount(() => {
  // 销毁监听
  articleItemArr.value.forEach((target) => {
    observer.unobserve(target);
  });
})
</script>

<template>
  <div class="css-box">
    <div v-if="routeNow.path === '/blogweb/catalogue/css'"
      class="article-list">
      <TypeSwitch title="CSS 相关模块"
        v-model="type" />
      <div :class="{ 'article-item-list': type === 'list', 'article-item-img': type === 'img' }">
        <div v-for="(item, index) in routeList"
          :key="index"
          :ref="setComponentRef(index)"
          class="article-item">
          <router-link class="article-item-link"
            :to="item.path">
            <img src="../../assets/img/css.jpg"
              alt="">
            <span>{{ item.meta.title }}</span>
          </router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.css-box {
  padding: 1.25rem;

  .article-list {
    &:nth-child(2) {
      min-height: calc(100vh - 22rem);

      .article-item {
        animation: slide-in .6s .4s backwards;
        will-change: transform;
        visibility: visible;
        overflow: hidden;
      }
    }
  }
}

.article-item-show {
  animation-name: slide-up-animation;
  animation-duration: 0.3s;
  /* 设置动画持续时间 */
  animation-delay: .5s;
  animation-iteration-count: 1;
}

@media screen and (max-width: 768px) {
  .article-item-list {
    display: flex;
    flex-direction: column;

    .article-item {
      margin-bottom: 1rem;

      .article-item-link {
        display: flex;

        img {
          display: block;
          width: 6.25rem;
          border-radius: .85rem;
          overflow: hidden;
          margin-right: .85rem;
        }

        span {
          font-size: 1rem;
          margin-top: .35rem;
          color: var(--primary-info);
        }
      }
    }
  }

  .article-item-img {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .article-item {
      width: 48%;
      height: 9.375rem;
      margin-bottom: 1rem;
      border-radius: .85rem;
      box-shadow: 0px 0 3px var(--primary-border);
      transition: box-shadow .5s;

      .article-item-link {
        display: flex;
        flex-direction: column;

        img {
          display: block;
          width: 100%;
          border-radius: .85rem .85rem 0 0;
          overflow: hidden;
        }

        span {
          font-size: 1rem;
          margin-top: .65rem;
          margin-left: .65rem;
          color: var(--primary-info);
        }
      }
    }
  }
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