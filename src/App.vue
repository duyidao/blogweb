<script setup>
import { routes } from '@/router/index'
</script>

<template>
  <div v-for="item in routes">
    <router-link :to="item.path">{{ item.meta.title }}</router-link>
    <router-link v-for="child in item.children"
      :to="child.path">{{ child.meta.title }}</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
