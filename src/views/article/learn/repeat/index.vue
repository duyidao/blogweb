<script setup
  lang="jsx">
  import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
  import { signProp } from './dialog.jsx'

  const clickFn = () => {
    signProp('我是内容文本', {
      confirm: () => { },
      cancel: () => { }
    })
  }
</script>

<template>
  <IframeBoxItem title="重复小组件" :needCode="false">
    <button @click="clickFn">click me</button>
  </IframeBoxItem>
</template>

<style scoped></style>