<script setup>
import { scrollProgress, scrollAngle, light } from "@/store/index";
</script>

<template>
  <!-- 滚动条 -->
  <div v-if="!isNaN(scrollProgress)"
    id="scroll-angle"
    :style="{
      background: `conic-gradient(from 0deg, #008eff 0%, orange ${scrollAngle}deg, ${light.value ? '#000' : '#616161'
        } ${scrollAngle}deg`,
    }">
    {{ scrollProgress }}
  </div>
</template>

<style scoped></style>