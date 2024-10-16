<script setup
  lang="jsx">
  
  import { signProp } from './dialog.jsx'

  const clickFn = () => {
    signProp('我是内容文本', {
      confirm: () => { },
      cancel: () => { }
    })
  }
</script>

<template>
  <IframeItem title="重复小组件" :needCode="false">
    <button @click="clickFn">click me</button>
  </IframeItem>
</template>

<style scoped></style>