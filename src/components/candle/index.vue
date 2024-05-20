<script setup>
import {screenWidth, convertToRem} from '@/store/index';

const light = ref(true);

const candleFireStyle = ref({
  height: '0',
  width: '0'
})

const windowResizeFn = () => {
  candleFireStyle.value.width = light.value ? '0' : screenWidth.value > 768 ? '16px' : convertToRem(16)
  candleFireStyle.value.height = light.value ? '0' : screenWidth.value > 768 ? '20px' : convertToRem(20)
}

// 切换模式
const changeLightFn = () => {
  light.value = !light.value;
  setTimeout(windowResizeFn, 200);

  // 根组件设置样式
  if (light.value) {
    document.documentElement.classList.remove('dark');
  } else {
    document.documentElement.classList.add('dark');
  }
};

onMounted(() => {
  window.addEventListener('resize', windowResizeFn)
})

onUnmounted(() => {
  window.removeEventListener('resize', windowResizeFn)
})
</script>

<template>
  <div
    title="切换模式"
    class="candle"
    :class="{ 'light': light, 'dark': !light }"
    @click.stop="changeLightFn"
  >
    <div class="warpper">
      <div class="candles">
        <!-- 蜡烛1 -->
        <div class="candle1">
          <div class="candle1_body">
            <div class="candle1_eyes">
              <span class="candle1_eyes-left"></span>
              <span class="candle1_eyes-right"></span>
              <div class="candle1_stick"></div>
            </div>
            <div class="candle1_mouth"></div>
          </div>
        </div>

        <!-- 蜡烛2 -->
        <div class="candle2">
          <div class="candle2_body">
            <div class="candle2_eyes">
              <span class="candle2_eyes-left"></span>
              <span class="candle2_eyes-right"></span>
            </div>
          </div>
          <div class="candle2_stick"></div>
        </div>

        <div ref="candleFire" :style="candleFireStyle" class="candle2_fire"></div>
        <div class="candle_smoke2"></div>
      </div>

      <div class="floor"></div>

      <div class="div-corner"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import url('./index.less');
</style>