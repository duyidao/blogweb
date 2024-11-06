<script setup>
import methods from '@/utils/customMethod';

const props = defineProps({
  list: {
    type: Array,
    default: () => ([]),
  }
});

const handleClick = (to, i) => {
  if (i === props.list.length - 1 || !to) return;
  methods.$goRouter(to, '', 'replace');
};
</script>

<template>
  <div class="my-breadcrumb">
    <span v-for="(item, index) in list"
      :key="item.to"
      @click="handleClick(item.to, index)">{{ item.name }}</span>
  </div>
</template>

<style lang="less"
  scoped>
  .my-breadcrumb {
    display: flex;
    align-items: center;

    span {
      font-size: 15px;
      &:last-child {
        opacity: 0.5;
      }

      &:not(:last-child) {
        margin-right: 6px;
        cursor: pointer;

        &::after {
          content: '/';
          margin-left: 6px;
        }
      }
    }
  }
</style>