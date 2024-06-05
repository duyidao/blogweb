<script setup>
const router = useRouter();

// logo展示文字还是按钮
const logoHover = ref(true);
const mouseenterFn = () => {
  logoHover.value = false;
};
const mouseleaveFn = () => {
  logoHover.value = true;
};

// 按钮列表与是否展示底部内容
const showBtn = ref([false, false, false]);
const routerBtnList = ref([
  {
    name: "文章列表",
    children: [
      {
        name: "CSS",
        base: "/articleList/",
        path: "css",
      },
      {
        name: "Javascript",
        base: "/articleList/",
        path: "js",
      },
      {
        name: "Learn",
        base: "/articleList/",
        path: "learn",
      },
    ],
  },
  {
    name: "刀刀导航",
  },
]);
const showItemFn = (index) => {
  showBtn.value[index] = !showBtn.value[index];
};

// 点击跳转
const goRouter = (item, index) => {
  if (!item.base || !item.path) return;
  router.push(`${item.base}${item.path}`);
  showItemFn(index)
};
</script>

<template>
  <div class="router-buttons">
    <div
      class="router-buttons__logo"
      @mouseenter="mouseenterFn"
      @mouseleave="mouseleaveFn"
    >
      <span v-if="logoHover" class="logo__text">刀刀博客</span>
      <my-button v-else full showIcon @click="router.replace('/')" />
    </div>
    <div class="router-buttons__list">
      <div
        v-for="(item, index) in routerBtnList"
        :key="index"
        class="router-buttons__item"
        :class="{ 'item-list-active': item.children?.length && showBtn[index] }"
        @mouseenter="showItemFn(index)"
        @mouseleave="showItemFn(index)"
      >
        <my-button :word="item.name" />
        <div class="item-list">
          <div v-for="(e, i) in item.children" :key="i" class="item-list__item">
            <my-button :word="e.name" @click="goRouter(e, index)" />
          </div>
        </div>
      </div>
    </div>
    <div class="router-buttons__link"></div>
  </div>
</template>

<style lang="less" scoped>
.router-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  margin: 0 0 40px;

  .router-buttons__logo {
    width: 120px;
    cursor: pointer;

    .logo__text {
      font-family: "仿宋";
      font-weight: 600;
      font-size: 25px;
      letter-spacing: 2px;
      color: var(--primary-bg);
    }
  }

  .router-buttons__list {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .router-buttons__item {
      position: relative;
      margin-right: 15px;

      &.item-list-active {
        &::after {
          opacity: 1;
          transform: translate(-50%, 0);
        }

        .item-list {
          transform: translate(-50%, 0);
          opacity: 1;
        }
      }

      &::before {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 10px;
        background-color: transparent;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 150%);
        opacity: 0;
        border-bottom: 10px solid #eaeaea;
        border-top: 10px solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        transition: all 0.3s;
      }

      &:last-child {
        margin-right: 0;
      }

      .item-list {
        position: absolute;
        top: 43px;
        left: 50%;
        transform: translate(-50%, 50%);
        padding: 10px 20px 10px;
        background-color: #eaeaea;
        opacity: 0;
        transition: all 0.3s;
        will-change: transform;

        .item-list__item {
          display: inline-block;
          width: 100%;
          margin-right: 15px;
          margin-bottom: 15px;

          &:last-child {
            margin-right: 0;
            margin-bottom: 0;
          }
        }
      }
    }
  }

  .router-buttons__link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 100%;
    background-color: pink;
  }
}

@media screen and (max-width: 768px) {
  .router-buttons {
    height: 3.75rem;
    margin: 0 0 2.5rem;

    .router-buttons__logo {
      width: 7.5rem;

      .logo__text {
        font-size: 1.5625rem;
        letter-spacing: 0.125rem;
      }
    }

    .router-buttons__list {
      .router-buttons__item {
        margin-right: 0.9375rem;

        &.item-list-active {
          &::after {
            bottom: -0.625rem;
          }

          .item-list {
            top: 2.6875rem;
          }
        }

        &::before {
          bottom: -0.625rem;
          height: 0.625rem;
        }

        &::after {
          border-bottom: 0.625rem solid #eaeaea;
          border-top: 0.625rem solid transparent;
          border-left: 0.625rem solid transparent;
          border-right: 0.625rem solid transparent;
        }

        .item-list {
          top: -6.25rem;
          padding: 0.625rem 1.25rem 0.625rem;

          .item-list__item {
            margin-right: 0.625rem;
            margin-bottom: 0.625rem;
          }
        }
      }
    }

    .router-buttons__link {
      width: 9.375rem;
      background-color: pink;
    }
  }
}
</style>
