<script setup>
import { nextTick } from 'vue';

const model = defineModel();

defineProps({
  placeholder: {
    type: String,
    default: '请输入内容',
  },
  type: {
    type: String,
    default: 'text',
  }
});

const labelRef = ref(null);
const lineRef = ref(null);

const emits = defineEmits(['focus', 'blur', 'keyup']);

const focus = ref(false);
if (model.value) {
  focus.value = true;
}
const handleFoucsFn = () => {
  focus.value = true;
  emits('focus', model.value);
}

const handleBlurFn = () => {
  if (model.value) return;
  focus.value = false;
  emits('blur', model.value);
}

const handleKeyupFn = (e) => {
  emits('keyup', e);
}
</script>

<template>
  <label class="my-input"
    :class="{ 'focus': focus }">
    <div ref="labelRef"
      class="label">{{ placeholder }}</div>
    <input v-model="model"
      class="input"
      :type="type"
      @focus="handleFoucsFn"
      @blur="handleBlurFn"
      @keyup="handleKeyupFn" />
    <div class="line"
      ref="lineRef"></div>
  </label>
</template>

<style lang="less"
  scoped>
  .my-input {
    display: block;
    position: relative;
    width: 100%;

    &.focus {
      .label {
        left: 0;
        top: -19px;
        font-size: 15px;
      }

      .line {
        width: 100%;
      }
    }

    .input {
      font-size: 16px;
      padding: 5px;
      width: 100%;
      color: var(--detail-input);
    }

    .label {
      font-size: 20px;
      position: absolute;
      left: 5px;
      top: 5px;
      user-select: none;
      transition: left .2s ease-in-out, top .2s ease-in-out;
      font-size: 14px;
      color: var(--detail-input);
      font-weight: 700;
    }

    .line {
      height: 3px;
      width: 15%;
      margin-top: 4px;
      background-color: var(--detail-input);
      transition: width .2s ease-in-out;
    }
  }

  @media screen and (max-width: 768px) {
    .my-input {

      &.focus {
        .label {
          top: -1.1875rem;
          font-size: .9375rem;
        }
      }

      .input {
        font-size: 1rem;
        padding: .3125rem;
      }

      .label {
        font-size: 1.25rem;
        left: .3125rem;
        top: .3125rem;
        font-size: .875rem;
      }

      .line {
        height: .1875rem;
        margin-top: .25rem;
      }
    }
  }
</style>
