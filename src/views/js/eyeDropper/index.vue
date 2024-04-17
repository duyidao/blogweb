<script setup>
import { ref } from 'vue'

const colorVal = ref('')
const spanRef = ref(null)

const clickFn = () => {
  // 判断浏览器是否支持
  if (!window.EyeDropper) {
    colorVal.value = "你的浏览器不支持 EyeDropper API";
    spanRef.value.style.backgroundColor = '#000';
    return;
  }

  colorVal.value = "正在打开拾色器，请稍等...";

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      colorVal.value = result.sRGBHex;
      spanRef.value.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      colorVal.value = e;
    });
}
</script>

<template>
  <div class="ifrname-box box">
    <button @click.stop="clickFn">打开拾色器</button>
    <div class="spanRef" ref="spanRef">
      <span>{{ colorVal }}</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
button {
  border: 1px solid var(--primary-bg);
  padding: 5px 10px;
  color: var(--catalogue-word);
}

.spanRef {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.125rem;
  border-radius: 1rem;
  margin-top: 1.25rem;

  span {
    font-size: 13px;
    color: #fff;
    mix-blend-mode: difference;
  }
}
</style>