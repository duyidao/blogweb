<script setup>
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表

onMounted(() => {
  codeList.value = [`const DISTANCE = 100; // 初始y轴偏移位置
const DURATION = 500; // 动画持续时间
const map = new WeakMap();

// IntersectionObserver API
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      // 出现在视口中
      console.dir(entry);
      const animation = map.get(entry.target);
      animation && animation.play();
      ob.unobserve(entry.target); // 播放过后就不再播放动画
    }
  }
})

const isBelowViewPort = el => {
  const rect = el.getBoundingClientRect();
  return rect.top - window.innerHeight > 0;
}

export default {
  mounted(el, binding) {
    // 判断当前元素是否在视口之上或者视口内，在的话不需要播放动画
    if (!isBelowViewPort(el)) return;

    // 元素挂载后使用 Web Animation API 来应用动画。写法为el.animate(关键帧, 配置)
    const animation = el.animate([{
      transform: \`translateY(\${DISTANCE}px)\`,
      opacity: 0.5
    }, {
      transform: \`translateY(0)\`,
      opacity: 1
    }], {
      duration: DURATION,
      ease: 'ease-out',
      fill: 'forwards'
    })

    animation.pause(); // 先暂停动画，等待指令的触发
    map.set(el, animation);
    ob.observe(el); // 观察元素是否进入视口
  },
  unmounted(el) {
    ob.unobserve(el); // 元素卸载后断开观察
  }
}`];
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <div class="slide-in">
    <IframeItemModel title="盒子上升动画">
      <div v-slideIn
        class="slide-in-item"
        v-for="item in 10"
        :key="item">{{ item }}</div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .slide-in {

    :deep(.iframe-item-model__content__info) {
      flex-direction: column;
    }

    .slide-in-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 90%;
      height: 350px;
      margin-bottom: 20px;
      background-color: azure;
    }
  }

  @media screen and (max-width: 768px) {
    .slide-in {

      .slide-in-item {
        height: 21.875rem;
        margin-bottom: 1.25rem;
      }
    }
  }
</style>