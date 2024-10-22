<script setup>
const width = ref(500)
const handleSizeChange = (size) => {
  width.value = size.width
}

const code = `// 配置监视盒子内容盒或边框盒或者 SVGElement 边界尺寸的变化函数
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    // 运行 entry.target 对应的回调函数
    // 保存映射表对应的方法
    const handler = map.get(entry.target)
    if (handler) {
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      })
    }
  }
})

export default {
  // 监听el元素尺寸变化
  mounted(el, binding) {
    // 保存映射表对应的方法
    map.set(el, binding.value)
    ob.observe(el)
  },
  // 卸载监听
  unmounted(el) {
    ob.unobserve(el)
  },
};`;
</script>

<template>
  <IframeItem title="resize"
    :subtitle="`父组件 宽度为${width}`"
    buttonTitle="源码展示"
    showCodeButtonTitle="隐藏源码"
    column
    type="javascript"
    v-model="code"
    disabled
    v-resize="handleSizeChange"
    class="iframe-box">
    <div class="iframe-box-title"><span class="iframe-box-title-small"></span></div>
    <div class="child"
      :style="{ 'width': width - 20 + 'px' }">
      子组件，宽度为{{ width - 20 }}
    </div>
  </IframeItem>
</template>

<style lang="less" scoped>
.iframe-box .child {
  margin: 0 auto;
  height: 6.25rem;
  background-color: antiquewhite;
  text-align: center;
  line-height: 6.25rem;
  font-size: .875rem;
}
</style>