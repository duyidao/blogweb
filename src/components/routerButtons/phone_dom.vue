<script setup>
import methods from '@/utils/customMethod'

defineProps({
  list: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['handleRouter'])

const handleRouterFn = (item) => {
    methods.$goRouter(item.path, '/detail/');
    emit('handleRouter')
}
</script>

<template>
  <div class="phone-dome__list">
    <div
      v-for="item in list" :key="item.name"
      class="phone-dome__item"
      @click.stop="handleRouterFn(item)"
    >{{ item.meta?.title }}</div>
  </div>
</template>

<style lang="less" scoped>
.phone-dome__list {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .phone-dome__item {
        padding: .625rem 0;
    }
}
</style>
