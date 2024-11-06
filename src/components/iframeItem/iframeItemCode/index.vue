<script setup>
import { screenWidth } from '@/store/index.js';
import { useUnit } from '@/store/rem.js';

const { px2rem } = useUnit();

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

const elementHeight = computed(() => screenWidth.value > 768 ? parseFloat(props.height) + 20 + 'px' : px2rem(parseFloat(props.height) + 20));

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
    <header class="iframe-box-title">
      <div>
        <svg-icon width="20" height="20" name="biaotibiankuangtu"></svg-icon>
        <span>{{ title }}</span>
        <span v-if="subtitle"
          class="iframe-box-title-small">{{ subtitle }}</span>
      </div>
      <hover-show-button v-if="needCode"
        :word="showCode ? showCodeButtonTitle : buttonTitle"
        @click="handleClick" />
    </header>
    <main class="iframe-box-content"
      :style="{ '--height': elementHeight }">
      <div :class="{ 'effect': true, 'showCode': showCode, 'column': column }">
        <slot></slot>
      </div>
      <Code v-show="showCode"
        class="code"
        :language="type"
        :height="height"
        v-model="code"
        :disabled="disabled" />
    </main>
  </div>
</template>

<style lang="less"
  scoped>
  .iframe-box-item {
    width: 100%;
    margin-bottom: 20px;

    .iframe-box-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 70px;
      padding: 0 12px;
      margin-bottom: 5px;
      font-size: 20px;
      font-weight: bold;
      border: 10px solid transparent;
      border-image: url('@/assets/img/base/science-title-border.svg') 100 round;
      color: var(--catalogue-title);
      font-family: 'sans';

      >div:first-child {
        display: flex;
        align-items: center;
        height: 100%;
      }

      svg {
        fill: var(--catalogue-title);
        margin-right: 12px;
      }

      .iframe-box-title-small {
        font-size: 14px;
        margin-left: 10px;
      }
    }

    .iframe-box-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: var(--height);
      background: url('./bg.png') no-repeat center center / 100% 100%;
      padding: 10px;

      :deep(.cm-editor) {
        width: 53%;
      }

      .effect {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;

        &.column {
          flex-direction: column;
        }

        &.showCode {
          width: 45%;
          background-color: rgba(#fff, .5);
          clip-path: polygon(100% 0, 100% 100%, 2% 100%, 0 97%, 0 0);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .iframe-box-item {
      margin-bottom: 1.25rem;

      .iframe-box-title {
        height: 4.375rem;
        padding: 0 .75rem;
        margin-bottom: .3125rem;
        font-size: 1.25rem;
        border-width: .625rem;

        svg {
          margin-right: .75rem;
        }

        .iframe-box-title-small {
          font-size: .875rem;
          margin-left: .625rem;
        }
      }

      .iframe-box-content {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        width: 100%;
        padding: .625rem;

        :deep(.cm-editor) {
          width: 100%;
        }

        .effect {
          display: flex;
          align-items: center;
          width: 100%;
          padding: .75rem 0;

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