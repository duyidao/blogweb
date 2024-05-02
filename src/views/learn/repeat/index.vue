<script setup lang="jsx">
import {signProp} from './dialog.jsx'

const clickFn = () => {
    signProp('我是内容文本', {
        confirm: () => {},
        cancel: () => {}
    })
}
</script>

<template>
  <button @click="clickFn">click me</button>
</template>

<style scoped>

</style>