<script setup>
const {searchAction} = defineProps({
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
}
</script>

<template>
  <input v-if="type !== 'textarea'"
    class="transition-color"
    :type="type"
    :value="msg"
    :maxlength="maxlength"
    placeholder="请输入内容"
    @input="inputFn"
    @change="changeFn"
    @focus="focusFn"
    @blur="blurFn">
  <textarea v-else
    class="transition-color"
    name=""
    :value="msg"
    :maxlength="maxlength"
    placeholder="请输入内容"
    @input="inputFn"
    @change="changeFn"
    @focus="focusFn"
    @blur="blurFn"
    cols="30"
    rows="10"></textarea>
</template>

<style lang="less" scoped>
input, textarea {
  border: 1px solid var(--primary-border);
  padding: 4px 8px;
  background-color: var(--catalogue-bg);
  color: var(--catalogue-word);
}
</style>