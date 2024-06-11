<script setup>
import { screenWidth } from "@/store/index.js";
import { useMeta } from "vue-meta";

onMounted(() => {
  useMeta({
    title: "刀刀小站效果展示 - 刀刀博客",
    meta: [
      {
        name: "keywords",
        content: "刀刀,刀刀博客,刀刀小站,vue,js,javascript,css,前端,程序员",
      },
      {
        name: "description",
        content:
          "欢迎来到刀刀小站，此模块用于展示博客效果，技术学习永无止尽，做到今天的自己比昨天更优秀，每天都要更努力！",
      },
    ],
  });
});

const resizeFn = () => {
  screenWidth.value =
    document.documentElement.clientWidth || document.body.clientWidth;
  let fontSize = (document.body.clientWidth / 750) * 16;
  document.documentElement.style.fontSize = fontSize + "px";
};

onMounted(() => {
  resizeFn();
  window.addEventListener("resize", resizeFn);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resizeFn);
});
</script>

<template>
  <div class="blog">
    <RouterButtons/>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.blog {
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: calc(100vh - 200px);
  padding: 20px 20px;
}

@media screen and (max-width: 768px) {
  .blog {
    flex-direction: column;
    bottom: 0.125rem;
    padding: 1.25rem 1.25rem;
  }
}
</style>
