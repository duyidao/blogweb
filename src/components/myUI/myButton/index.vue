<script setup lang="ts">
defineProps({
  word: {
    type: String,
    default: "确认",
  },
});

const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};
</script>

<template>
  <button @click.stop="click">{{ word }}</button>
</template>

<style scoped></style>
