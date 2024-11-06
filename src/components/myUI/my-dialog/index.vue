<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'javascript',
  },
  title: {
    type: String,
    default: '标题',
  },
});

const show = defineModel();

const full = ref(false);
const svgName = ref('fangda')

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
  navigator.clipboard.writeText(modelCode.value).then(() => {
    console.log('文本已复制到剪贴板');
  }, (err) => {
    console.error('无法复制文本: ', err);
  });
}
</script>

<template>
  <div v-show="show"
    class="my-dialog"
    :class="{ full }">
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
    height: 500px;
    padding: 15px;
    transform: translate(-50%, -50%);
    background-color: var(--catalogue-bg);
    box-shadow: 0px 0px 10px -6px var(--primary-border);
    transition: all .5s;
    z-index: 9999;

    &.full {
      width: 100vw;
      height: 100vh;
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