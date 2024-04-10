<script setup>
import { routes } from '@/router/index'
</script>

<template>
  <div v-for="item in routes">
    <template v-if="item.children.length !== 0">
      <router-link :to="item.path">{{ item.meta.title }}</router-link>
      <router-link v-for="child in item.children"
        :to="child.path">{{ child.meta.title }}</router-link>
    </template>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
