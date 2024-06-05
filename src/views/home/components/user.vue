<script setup lang="ts">

</script>

<template>
  <div class="home-user">Hello vue3</div>
</template>

<style lang="less" scoped>
.home-user {
  width: 49%;
  height: 250px;
  border-radius: 12px;
  box-shadow: 0 0 8px 1px #ccc;
}

@media screen and (max-width: 768px) {
    .home-user {
  width: 100%;
  height: 15.625rem;
  margin-bottom: 1.25rem;
  border-radius: .75rem;
  box-shadow: 0 0 .5rem .0625rem #ccc;
}
}
</style>