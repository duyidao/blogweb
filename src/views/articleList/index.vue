<script setup>
import { generateRoutes } from '@/router/index'
import { routeNow } from '@/store/router.js'

const routeList = ref([])

watch(() => routeNow.value, (to, from) => {
  let arr = generateRoutes.filter(item => item.path.includes(to.articleType))
  routeList.value = arr
}, {
  immediate: true,
  deep: true,
})

const type = ref('list')

// 获取要观察的目标元素列表
const articleItemArr = ref([])

// const setComponentRef = (index) => (el) => {
//   if (el) {
//     articleItemArr.value[index] = el
//   }
// }

// const options = {
//   threshold: 0.6, // 重叠面积占被观察者的比例
//   // root: document.querySelector('#scrollArea'), // 观察的根元素
// };

// const callback = (entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       // 元素进入可视区域
//       entry.target.classList.add('article-item-show')
//     } else {
//       // 元素离开可视区域
//       entry.target.classList.remove('article-item-show')
//     }
//   });
// };
// const observer = new IntersectionObserver(callback, options);

// onMounted(() => {
//   // 观察每个目标元素
//   articleItemArr.value.forEach((target) => {
//     observer.observe(target);
//   });
// })

// onBeforeUnmount(() => {
//   // 销毁监听
//   articleItemArr.value.forEach((target) => {
//     observer.unobserve(target);
//   });
// })
</script>

<template>
  <div class="article-list">
    <TypeSwitch :title="`${routeNow.articleType} 相关模块`"
      v-model="type" />
    <div :class="{ 'article-item-list': type === 'list', 'article-item-img': type === 'img' }">
      <div v-for="(item, index) in routeList"
        :key="index"
        class="article-item">
        <router-link class="article-item-link"
          :to="'/blogweb/detail/' + item.path">
          <img src="../../assets/img/css.jpg"
            alt="">
          <div class="content">
            <span class="content-title">{{ item.meta.title }}</span>
            <span class="content-info">{{ item.meta.info }}</span>
            <span class="content-tag">效率</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.article-list {
  width: 100%;
  padding: 100px 10px 20px;

  &:nth-child(2) {
    min-height: calc(100vh - 352px);
  }

  .article-item {
    animation: slide-in .6s .4s backwards;
    will-change: transform;
    visibility: visible;
    overflow: hidden;
    border-radius: 10px;
    background-color: var(--catalogue-bg);
    margin-bottom: 16px;
  }

  .article-item-list {
    display: flex;
    flex-direction: column;

    .article-item-link {
      display: flex;

      img {
        display: block;
        width: 350px;
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
          }
        }
      }
    }
  }

  .article-item-img {
    display: flex;
    flex-wrap: wrap;

    .article-item {
      width: 30%;
      margin-right: 35px;
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

.article-item-show {
  animation-name: slide-up-animation;
  animation-duration: 0.3s;
  /* 设置动画持续时间 */
  animation-delay: .5s;
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