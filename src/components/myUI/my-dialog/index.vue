<script setup>
import { codeList, modelInfo } from '@/store/effect.js';
import { message } from '@/components/myUI/my-message/index.jsx';

defineProps({
  title: {
    type: String,
    default: '标题',
  },
});

const show = defineModel();

const full = ref(false);
const svgName = ref('fangda');

// 展开全屏
const handleFullFn = () => {
  full.value = !full.value;
  svgName.value = full.value ? 'suoxiao' : 'fangda';
};

// 关闭
const handleCloseFn = () => {
  full.value = false;
  show.value = false;
};

// 复制
const handleCopyFn = () => {
  navigator.clipboard.writeText(codeList.value[modelInfo.value.activeIndex]?.value || codeList.value[modelInfo.value.activeIndex]).then(() => {
    message({
      type: 'success',
      message: '复制成功'
    })
  }, (err) => {
    message({
      type: 'error',
      message: '复制失败。' + err 
    })
  });
}
</script>

<template>
  <div v-show="show"
    class="my-dialog"
    :class="{ full, 'long': codeList.length > 1 }">
    <div v-if="codeList.length > 1"
      class="my-dialog-code-list">
      <div :title="item.name"
        class="my-dialog-code-list-item"
        :class="{'active': modelInfo.activeIndex === index}"
        :style="{ '--w': codeList.length }"
        v-for="(item, index) in codeList"
        :key="index"
        @click.stop="modelInfo.activeIndex = index">{{ item.name }}</div>
    </div>
    <header class="my-dialog-header">
      <div class="title">{{ title }}</div>
      <div class="icon">
        <svg-icon :name="svgName"
          @click="handleFullFn" />
        <svg-icon name="guanbi"
          @click="handleCloseFn" />
      </div>
    </header>
    <main class="my-dialog-content">
      <slot></slot>
    </main>
    <footer class="my-dialog-footer">
      <button @click.stop="handleCopyFn">复制</button>
    </footer>
  </div>
</template>

<style lang="less"
  scoped>
  .my-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 75%;
    height: 75vh;
    padding: 15px;
    transform: translate(-50%, -50%);
    background-color: var(--catalogue-bg);
    box-shadow: 0px 0px 10px -6px var(--primary-border);
    transition: all .5s;
    z-index: 9999;

    &.long {
      height: 600px;

      main {
        height: calc(100% - 130px);
      }
    }

    .my-dialog-code-list {
      display: flex;
      align-items: center;
      height: 35px;

      .my-dialog-code-list-item {
        display: inline-block;
        /* 设置为内联块级元素 */
        white-space: nowrap;
        /* 禁止换行 */
        width: calc(100% / var(--w));
        max-width: 40%;
        height: 100%;
        line-height: 35px;
        overflow: hidden;
        /* 隐藏超出部分 */
        text-overflow: ellipsis;
        /* 超出部分显示省略号 */
        margin-right: 5px;
        padding: 0 10px;
        cursor: pointer;

        &:last-child {
          margin-right: 0;
        }

        &.active {
          color: var(--normal-word);
          background-color: var(--effect-dialog-text);
        }
      }
    }

    &.full {
      width: 100vw;
      height: 100vh !important;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;

      .title {
        font-size: 26px;
        font-family: 'dao';
        color: var(--effect-dialog-text);
      }

      svg {
        width: 21px;
        height: 21px;
        fill: var(--effect-dialog-svg);
        cursor: pointer;

        &:last-child {
          margin-left: 15px;
        }
      }
    }

    main {
      height: calc(100% - 100px);

      :deep(.v-codemirror) {
        height: 100%;

        .cm-editor {
          height: 100%;
        }
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 50px;
    }
  }

  @media screen and (max-width: 768px) {
    .my-dialog {
      height: 31.25rem;
      padding: .9375rem;
      box-shadow: 0px 0px .625rem -0.375rem var(--primary-border);

      &.long {
        height: 37.5rem;

        main {
          height: calc(100% - 8.125rem);
        }
      }

      .my-dialog-code-list {
        height: 2.1875rem;

        .my-dialog-code-list-item {
          line-height: 2.1875rem;
          margin-right: .3125rem;
          padding: 0 .625rem;
        }
      }

      header {
        height: 3.125rem;

        .title {
          font-size: 1.625rem;
        }

        svg {
          width: 1.3125rem;
          height: 1.3125rem;

          &:last-child {
            margin-left: .9375rem;
          }
        }
      }

      main {
        height: calc(100% - 6.25rem);
      }

      footer {
        height: 3.125rem;
      }
    }
  }
</style>