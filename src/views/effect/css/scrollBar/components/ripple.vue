<script setup>
import { scrollProgress } from "@/store/index";
</script>

<template>
  <div class="ripple"
    :style="{ '--completion': scrollProgress + '%' }">
    <output name="result"
      for="completion">{{ scrollProgress }}</output>
  </div>
</template>

<style lang="less"
  scoped>
  .ripple {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: transparent;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: calc(100% - var(--completion));
      display: block;
      width: 200%;
      height: 200%;
      translate: -50% 0;
      background-color: #fff;
      border-radius: 25px;
      animation: spin 5s linear infinite;
      z-index: -1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>