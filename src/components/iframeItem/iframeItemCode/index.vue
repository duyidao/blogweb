<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  subtitle: {
    type: String,
    default: ''
  },
  needCode: {
    type: Boolean,
    default: true
  },
  column: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'css'
  },
  buttonTitle: {
    type: String,
    default: '让我试试'
  },
  showCodeButtonTitle: {
    type: String,
    default: '保留效果'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  height: {
    type: String,
    default: '300'
  },
  domControl: {
    type: Object,
    default: () => null
  }
});

// 双向绑定的代码样式
const code = defineModel();

const emit = defineEmits(['click']);

const showCode = ref(false);
const handleClick = () => {
  showCode.value = !showCode.value;
  // 是否需要调用slot组件的子组件方法
  if (props.domControl && props.domControl.ref) {
    nextTick(() => {
      props.domControl.ref[props.domControl.chartName]?.onResize();
    });
  }
  emit('click', showCode.value);
}

defineExpose({
  showCode,
});
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'IframeBoxItem', // 设置组件名称
});

export { componentOptions };
</script>

<template>
  <div class="iframe-box-item">
    <div class="iframe-box-title">
      <span>{{ title }}</span>
      <span v-if="subtitle"
        class="iframe-box-title-small">{{ subtitle }}</span>
      <mouse-glow-button v-if="needCode"
        class="iframe-box-button"
        :word="showCode ? showCodeButtonTitle : buttonTitle"
        @click="handleClick" />
    </div>
    <div class="iframe-box-content">
      <div :class="{ 'effect': true, 'showCode': showCode, 'column': column }">
        <slot></slot>
      </div>
      <Code v-show="showCode"
        class="code"
        :language="type"
        :height="height"
        v-model="code"
        :disabled="disabled" />
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .iframe-box-item {
    width: 100%;

    .iframe-box-title {
      display: flex;
      align-items: center;
      position: relative;
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      margin: 20px 0;
      font-size: 20px;
      font-weight: bold;
      border-bottom: 1px solid var(--primary-border);
      color: var(--primary-info);

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 8px;
        height: 30px;
        border-radius: 4px;
        background-color: var(--primary-border);
      }

      .iframe-box-title-small {
        font-size: 14px;
        margin-left: 10px;
      }

      .iframe-box-button {
        margin-left: 20px;
        box-shadow: 0 0 11px -6px rgb(35, 167, 243);
      }
    }

    .iframe-box-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      :deep(.cm-editor) {
        width: 53%;
      }

      .effect {
        display: flex;
        justify-content: start;
        align-items: center;
        width: 100%;
        height: 100%;

        &.column {
          flex-direction: column;
        }

        &.showCode {
          justify-content: center;
          align-items: center;
          width: 43%;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .iframe-box-item {

      .iframe-box-title {
        display: flex;
        align-items: center;
        height: 3.125rem;
        line-height: 3.125rem;
        padding-left: 1.25rem;
        margin: 1.25rem 0;
        font-size: 1.25rem;
        border-bottom-width: .0625rem;

        &::before {
          width: .5rem;
          height: 1.875rem;
          border-radius: .25rem;
        }

        .iframe-box-title-small {
          font-size: .875rem;
          margin-left: .625rem;
        }

        .iframe-box-button {
          margin-left: 1.25rem;
          box-shadow: 0 0 .6875rem -0.375rem #000;
        }
      }

      .iframe-box-content {
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        :deep(.cm-editor) {
          width: 100%;
        }

        .effect {
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100%;
          height: 100%;

          &.showCode {
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
</style>