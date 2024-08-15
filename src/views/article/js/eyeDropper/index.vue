<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';

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
  <IframeBoxItem title="拾色器"
    column
    class="ifrname-box box"
    :needCode="false">
    <div class="box">
      <button @click.stop="clickFn">打开拾色器</button>
      <div class="spanRef"
        v-if="colorVal"
        ref="spanRef">
        <span>{{ colorVal }}</span>
      </div>
    </div>
  </IframeBoxItem>
</template>

<style lang="less" scoped>
.box {
  text-align: center;
  width: 100%;
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