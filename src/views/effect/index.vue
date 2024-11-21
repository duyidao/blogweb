<script setup>
import { generateEffectRoutes } from '@/router/index.js';
import methods from '@/utils/customMethod';

const map = ref({});

const handleInfoFn = item => {
  methods.$goRouter(item.path, '/info/');
}

const showAll = ref(false);

const mouseenterFn = (item) => {
  if (showAll.value) return;
  map.value[item.path] = true;
}

const mouseleaveFn = (item) => {
  if (showAll.value) return;
  map.value[item.path] = false;
}

onUnmounted(() => {
  map.value = {};
});

// 侦听全部展示复选框
watch(() => showAll.value, (newVal) => {
  generateEffectRoutes.forEach(item => {
    map.value[item.path] = newVal;
  });
}
);

const effectFilter = ref('all');

const effectList = computed(() => {
  return generateEffectRoutes.filter(item => {
    if (effectFilter.value === 'all') return true;
    return item.path.split('/')[0] === effectFilter.value;
  });
})
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'Effect', // 设置组件名称
});

export { componentOptions };
</script>

<template>
  <div class="effect">
    <div class="effect-control">
      <div class="effect-control__left">
        <label for="showAll">展示全部标题：</label>
        <input v-model="showAll"
          type="checkbox"
          name="showAll"
          id="showAll">
      </div>
      <div class="effect-control__right">
        <label for="filter">筛选：</label>
        <div class="select">
          <svg-icon name="a-guangqi_guolv11x"></svg-icon>
          <select name="filter"
            v-model="effectFilter"
            id="">
            <option value="all">全部</option>
            <option value="css">CSS</option>
            <option value="learn">Learn</option>
            <option value="echart">Echart</option>
          </select>
        </div>
      </div>
    </div>
    <div class="effect-list">
      <div class="effect-item"
        v-for="item in effectList"
        :key="item.path"
        :class="{ 'active': map[item.path] }"
        @click="handleInfoFn(item)"
        @mouseenter="mouseenterFn(item)"
        @mouseleave="mouseleaveFn(item)">
        <p class="effect-item__title">{{ item.meta.title }}</p>
        <my-image :src="item.meta.img"/>
      </div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .effect {
    max-width: 1600px;
    margin: 0 auto;

    .effect-control {
      display: flex;
      justify-content: space-between;
      align-items: center;

      label {
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        font-family: 'black';
        color: var(--catalogue-title);
      }

      &__left {
        display: flex;
        align-items: center;

        input[type="checkbox"] {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border: 2px solid #ccc;
          outline: none;
          cursor: pointer;
          position: relative;
        }

        input[type="checkbox"]:checked::before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          background-color: var(--catalogue-title);
          /* 修改这里的颜色为你想要的勾选颜色 */
          position: absolute;
          top: 0;
          left: 0;
        }
      }

      &__right {
        display: flex;
        align-items: center;

        .select {
          position: relative;

          svg {
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            display: block;
            width: 24px;
            height: 100%;
            background-color: var(--catalogue-title);
            padding: 4px;
            border-radius: 4px 0 0 4px;
          }
        }

        select {
          width: 130px;
          height: 24px;
          padding-left: 24px;
          border-radius: 4px;
          border: 1px solid var(--catalogue-title);
          color: var(--catalogue-title);
          font-size: 14px;
          overflow: hidden;
          cursor: pointer;

          &:focus-visible {
            outline: none;
          }
        }
      }
    }

    .effect-list {
      column-count: 4;
      column-gap: 20px;
      grid-template-rows: masonry;
      gap: 20px;

      .effect-item {
        position: relative;
        display: block;
        width: 100%;
        padding: 20px 0 0;
        cursor: pointer;
        overflow: hidden;

        img {
          width: 100%;
        }

        &.active {
          .effect-item__title {
            transform: translateY(0);
          }
        }

        &__title {
          position: absolute;
          bottom: 0px;
          left: 0;
          transform: translateY(50px);
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          background-color: var(--effect-animate);
          backdrop-filter: blur(10px);
          color: orange;
          transition: all .3s;
          mix-blend-mode: difference;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .effect {
      max-width: 100vw;

      .effect-control {

        label {
          font-size: 1.25rem;
        }

        &__left {

          input[type="checkbox"] {
            width: 1.125rem;
            height: 1.125rem;
            border-width: .125rem;
          }
        }

        &__right {
          .select {
            svg {
              width: 1.5rem;
              padding: .25rem;
              border-radius: .25rem 0 0 .25rem;
            }
          }

          select {
            width: 8.125rem;
            height: 1.5rem;
            padding-left: 1.5rem;
            border-radius: .25rem;
            border-width: .0625rem;
            font-size: .875rem;

          }
        }
      }

      .effect-list {
        column-gap: 1.25rem;
        gap: 1.25rem;

        .effect-item {
          padding: 1.25rem 0 0;

          &__title {
            transform: translateY(3.125rem);
            height: 3.125rem;
            line-height: 3.125rem;
            font-size: 1rem;
            backdrop-filter: blur(.625rem);
          }
        }
      }
    }
  }
</style>