<script setup>
import { ref } from 'vue'

const colorVal = ref('')
const spanRef = ref(null)

const clickFn = () => {
  // 判断浏览器是否支持
  if (!window.EyeDropper) {
    colorVal.value = "你的浏览器不支持 EyeDropper API";
    return;
  }

  colorVal.value = "正在打开拾色器，请稍等...";

  const eyeDropper = new EyeDropper();
  console.log('eyeDropper', eyeDropper);
  const abortController = new AbortController();
  console.log('abortController', abortController);

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      console.log('result', result);
      colorVal.value = result.sRGBHex;
      spanRef.value.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      console.log('error', e);
      colorVal.value = e;
    });

  setTimeout(() => {
    abortController.abort();
  }, 2000);
}
</script>

<template>
  <div class="ifrname-box box">
    <button @click.stop="clickFn">打开拾色器</button>
    <span ref="spanRef">{{ colorVal }}</span>
  </div>
</template>

<style lang="less" scoped>
button {
  border: 1px solid var(--primary-bg);
  padding: 5px 10px;
  color: var(--catalogue-word);
}

span {
  font-size: 13px;
  margin-left: 15px;
  color: var(--catalogue-word);
}
</style>