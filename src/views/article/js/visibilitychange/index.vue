<script setup>
import flowImg from '@/assets/img/drawbed/js/visibilitychange.png'

const fn = () => {
  if (document.hidden) {
    document.title = "页面离开咯";
  } else {
    document.title = "页面回来咯";
  }
};
onMounted(() => {
  document.addEventListener("visibilitychange", fn);
});

onUnmounted(() => {
  document.title = '刀刀博客小站';
  document.removeEventListener("visibilitychange", fn);
});

const code = `const fn = () => {
  if (document.hidden) {
    document.title = "页面离开咯";
  } else {
    document.title = "页面回来咯";
  }
}
onMounted(() => {
  document.addEventListener("visibilitychange", fn)
})

onUnmounted(() => {
  document.title = '刀刀博客小站'
  document.removeEventListener("visibilitychange", fn)
})`;
</script>

<template>
  <IframeItemCode title="页面可见度"
    buttonTitle="源码展示"
    showCodeButtonTitle="隐藏源码"
    v-model="code"
    type="javascript"
    :flowImg="flowImg"
    disabled>
    页面可见度
  </IframeItemCode>
</template>

<style scoped></style>