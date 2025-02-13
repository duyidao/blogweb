const eventMap = {}

export const hasFlowImg = ref([]); // 是否有图片

export const addFlowImg = (e) => {
  hasFlowImg.value.push(e);
}

export default {
  on(eventType, params) {
    subMap[eventType] = params
  },
  emit(eventType, ...args) {
    subMap[eventType] && subMap[eventType].apply(undefined, ...args)
  }
}