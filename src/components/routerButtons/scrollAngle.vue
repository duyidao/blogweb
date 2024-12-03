<script setup>
import { scrollProgress, scrollAngle, light } from "@/store/index";
</script>

<template>
  <!-- 滚动条 -->
  <div v-if="!isNaN(scrollProgress)"
    id="scroll-angle"
    :style="{
      background: `conic-gradient(from 0deg, #5dc0eb 0%, #3D5A80 ${scrollAngle}deg, ${light.value ? '#000' : '#616161'
        } ${scrollAngle}deg`,
    }">
    {{ scrollProgress }}
  </div>
</template>

<style lang="less" scoped>
#scroll-angle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  color: var(--catalogue-word);
  margin-right: 14px;
  z-index: 5;
  font-size: 13px;

  &::before {
    content: "";
    position: absolute;
    inset: 3px;
    background-color: var(--body-bg);
    z-index: -1;
  }
}

@media screen and (max-width: 768px) {
  #scroll-angle {
    width: 1.625rem;
    height: 1.625rem;
    margin-right: .9375rem;
    font-size: .8125rem;

    &::before {
      inset: .1875rem;
      z-index: -1;
    }
  }
}
</style>