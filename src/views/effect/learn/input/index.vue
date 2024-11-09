<script setup>
import { codeList } from '@/store/effect.js'; // 引入代码列表
import inputComp from './input.vue';

const inputValue = ref('daodao');
const inputValueNum = ref(11);

onMounted(() => {
  codeList.value = [`const {searchAction} = defineProps({
  // 双向绑定的输入框内容
  msg: {
    type: [String, Number],
    default: 'hello'
  },
  // 输入框类型
  type: {
    type: String,
    default: 'text',
    validator: (value) => {
      return ['text', 'password', 'number', 'email', 'textarea'].includes(value)
    }
  },
  // 输入内容最大长度
  maxlength: {
    type: Number,
    default: 100
  },
  // 是否需要特殊处理搜索结果。为true需要；为false或url路径不需要，内部调用接口返回结果
  searchAction: {
    type: [Boolean, String],
    default: false
  }
})
const emit = defineEmits(['update:msg', 'input', 'change', 'focus', 'blur', 'search'])

// 输入框内容变化时触发
const inputFn = (e) => {
  emit('update:msg', e.target.value)
  emit('input', e.target.value)
}

let timer = null

// 输入框内容变化完毕后触发
const changeFn = (e) => {
  emit('change', e.target.value)
  if (searchAction) {
    if(timer) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        // 需要搜索
        searchFn(e.target.value)
      }, 100);
    }
  }
}

const searchFn = value => {
  if (typeof this.searchAction === "string") {
    // 搜索接口地址
    axios.get(this.searchAction, {
      params: {
        keyword: value
      }
    }).then(res => {
      emit('search', res.data)
    })
  } else {
    emit('search', value)
  }
}

const focusFn = (e) => {
  emit('focus', e.target.value)
}

const blurFn = (e) => {
  emit('blur', e.target.value)
}`];
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <IframeItemModel title="input组件封装"
    class="input-info">
    <div class="input-info-item">
      <span class="">文本输入框，父组件内容 {{ inputValue }}</span>
      <inputComp v-model:msg="inputValue" />
    </div>
    <div class="input-info-item">
      <span class="">多行文本框，父组件内容 {{ inputValue }}</span>
      <inputComp type="textarea"
        v-model:msg="inputValue" />
    </div>
    <div class="input-info-item">
      <span class="">数字框，父组件内容 {{ inputValueNum }}</span>
      <inputComp type="number"
        v-model:msg="inputValueNum" />
    </div>
  </IframeItemModel>
</template>

<style lang="less"
  scoped>
  .input-info {
    margin-top: 20px;
    padding: 0 15px;

    :deep(.iframe-item-model__content__info) {
      flex-direction: column;
    }

    .input-info-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 20px;

      span {
        margin-bottom: 8px;
        color: var(--catalogue-word);
      }
    }
  }
</style>