import { labelShow } from '@/store/index'

// 为dom结构绑定事件
export const changePhoneDomShow = (el, value) => {
  el.addEventListener('click', (e) => {
    e.stopPropagation();
    labelShow.value = value;
  });
}

export default {
  mounted(el, binding) {
    const { value } = binding;
    changePhoneDomShow(el, value);
  },
};