<script setup>
const list = [
  {
    id: 3,
    name: '刀刀博客',
    url: 'https://duyidao.github.io/',
    logo: 'https://duyidao.github.io/favicon.ico',
    tag: ['Vitepress', 'Vue', 'MarkDown'],
    img: 'https://pic.imgdb.cn/item/674d87e4d0e0a243d4dc03c1.png',
    blog: 'https://duyidao.github.io/',
    intro: '刀刀的博客项目，记录前端知识点、项目经验等内容，包含前端语法框架、前端技术、工作项目重难点、面试等等，仍在持续更新产出。',
  },
  {
    id: 1,
    name: '优医问诊',
    url: 'https://duyidao.github.io/excellent-medical-consultation',
    logo: 'https://raw.githubusercontent.com/duyidao/excellent-medical-consultation/refs/heads/master/public/favicon.ico',
    tag: ['Vue3', 'axios', 'vant', 'typescript'],
    img: 'https://pic.imgdb.cn/item/6749828ed0e0a243d4daf7c6.png',
    blog: 'https://duyidao.github.io/myself/%E4%BC%98%E5%8C%BB%E9%97%AE%E8%AF%8A/',
    intro: 'B站Vue3 + TypeScript项目学习，使用Vant组件库，打造移动端医疗问诊项目',
  },
  {
    id: 2,
    name: '小兔鲜',
    url: 'https://duyidao.github.io/rabit/',
    logo: 'https://raw.githubusercontent.com/duyidao/rabit/refs/heads/master/public/favicon.ico',
    tag: ['Vue3', 'axios', 'element-plus', 'pinia'],
    img: 'https://pic.imgdb.cn/item/67498819d0e0a243d4db0b14.png',
    blog: 'https://duyidao.github.io/myself/%E5%B0%8F%E5%85%94%E9%B2%9C/inweb/all.html',
    intro: 'B站Vue3项目学习，使用ElementPlus组件库，打造桌面端电商平台项目',
  },
]
</script>

<template>
  <div class="project">
    <nav class="project-item"
      v-for="item in list"
      :key="item.id">
      <div class="project-item__info">
        <div class="project-item__info__top">
          <my-image :src="item.logo"/>
          <div class="project-item__name">{{ item.name }}</div>
        </div>
        <div class="project-item__info__msg">
          <span>{{ item.intro }}</span>
          <a class="url"
            :href="item.url"
            title="项目在线地址跳转"
            target="_blank">{{ item.url }}</a>
        </div>
        <div class="project-item__info__tag">
          <span v-for="e in item.tag"
            :key="e">{{ e }}</span>
        </div>
      </div>

      <div class="project-item__intro">
        <a class="url"
          :href="item.url"
          :title="item.blog"
          target="_blank">博客链接跳转</a>
        <img :src="item.img"
          alt="">
      </div>
    </nav>
  </div>
</template>

<style lang="less"
  scoped>
  .project {
    max-width: 1600px;

    .project-item {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 210px;
      margin-bottom: 18px;
      background-image: linear-gradient(to right, var(--article-bg) 0%, var(--normal-word) 51%, transparent 51%);
      border-radius: 2px;
      transition: all .3s;

      &:last-child {
        margin-bottom: 0 !important;
      }

      @media screen and (min-width: 769px) {
        &:hover {
          background-image: linear-gradient(to right, var(--article-bg) 0%, var(--normal-word) 100%);
          box-shadow: 0 0 10px var(--message-success-bg);
          transform: translateY(-3px);

          &:nth-of-type(2n) {
            background-image: linear-gradient(to left, var(--article-bg) 0%, var(--normal-word) 100%);
          }

          .project-item__intro {
            opacity: 1;
            transform: translateX(0) !important;
            z-index: 1;
          }
        }

        &:nth-of-type(2n) {
          flex-direction: row-reverse;
          background-image: linear-gradient(to left, var(--article-bg) 0, var(--normal-word) 51%, transparent 51%);

          .project-item__intro {
            margin-right: 3%;
            margin-left: 0;
          }

          .project-item__intro {
            flex-direction: row-reverse;
            transform: translateX(85%);
          }
        }
      }

      &__info {
        display: grid;
        grid-template-columns: 115px 1fr;
        gap: 10px;
        width: 50%;
        height: 100%;
        padding: 5px 10px;

        &__top,
        &__msg {
          height: 140px;
        }

        &__top {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          img {
            width: 70px;
            height: 70px;
            margin-bottom: 10px;
          }

          div {
            font-size: 22px;
            font-family: 'black';
            color: var(--effect-dialog-svg);
          }
        }

        &__msg {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          font-family: 'sans';
          font-size: 16px;
          letter-spacing: 1.2px;
          line-height: 1.18;

          .url {
            display: block;
            font-size: 13.5px;
            word-wrap: break-word;
            /* 旧的属性，用于兼容旧浏览器 */
            overflow-wrap: break-word;
            /* 新的属性，推荐使用 */
          }
        }

        &__tag {
          display: flex;
          align-items: center;
          grid-column-start: 1;
          grid-column-end: 3;
          height: 40px;
          padding-left: 15px;
          font-size: 16px;
          font-family: 'robo';

          span {
            margin-right: 10px;
            background-color: var(--effect-dialog-text);
            padding: 1px 4px 3px;
            color: var(--normal-word);

            &:last-child {
              margin-right: 0;
            }
          }
        }
      }

      &__intro {
        display: flex;
        justify-content: space-between;
        width: 47%;
        height: 100%;
        margin-left: 3%;
        padding: 10px;
        transform: translateX(-85%);
        z-index: -1;
        opacity: 0;
        transition: all 0.3s;

        img {
          max-width: 70%;
          height: 100%;
          align-self: end;
        }

        .url {
          align-self: center;
          display: block;
          font-size: 13.5px;
          word-wrap: break-word;
          /* 旧的属性，用于兼容旧浏览器 */
          overflow-wrap: break-word;
          /* 新的属性，推荐使用 */
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .project {
      width: 100%;

      .project-item {
        flex-direction: column;
        height: auto;
        margin-bottom: 1.125rem;
        background-image: linear-gradient(to right, var(--article-bg) 0%, var(--normal-word) 100%);

        &:nth-of-type(2n) {
          background-image: linear-gradient(to left, var(--article-bg) 0, var(--normal-word) 100%);

          .project-item__intro {
            flex-direction: row-reverse;
            padding: .625rem 1.25rem .625rem 1rem;
          }

          .project-item__info {
            grid-template-columns: 1fr 7.1875rem;

            &__top {
              grid-column-start: 2;
              grid-column-end: 3;
              grid-row-start: 1;
            }

            &__msg {
              grid-column-start: 1;
              grid-row-start: 1;
              grid-column-end: 2;
            }

            &__tag {
              padding-left: 0;
              padding-right: 0.9375rem;
              justify-content: flex-end;
            }
          }
        }

        &__info {
          width: 100%;
          grid-template-columns: 7.1875rem 1fr;
          gap: .63rem;
          padding: .3125rem .625rem;

          &__top,
          &__msg {
            height: 8.75rem;
          }

          &__top {
            img {
              width: 4.375rem;
              height: 4.375rem;
              margin-bottom: .625rem;
            }

            div {
              font-size: 1.375rem;
            }
          }

          &__msg {
            font-size: 1rem;
            letter-spacing: .075rem;

            .url {
              font-size: .8438rem;
            }
          }

          &__tag {
            height: 2.5rem;
            padding-left: .9375rem;
            font-size: 1rem;

            span {
              margin-right: .625rem;
              padding: .0625rem .25rem .1875rem;
            }
          }
        }

        &__intro {
          width: 100%;
          padding: .625rem 1rem .625rem 1.25rem;
          transform: translate(0, 0);
          margin-left: 0;
          opacity: 1;
          z-index: 1;
          height: 12.875rem;

          img {
            max-width: 100%;
            align-self: center;
          }

          .url {
            align-self: center;
            display: block;
            font-size: 1rem;
          }
        }
      }
    }
  }
</style>