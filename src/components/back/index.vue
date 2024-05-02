<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()

const emit = defineEmits(['back'])

const click = () => {
    router.back()
    emit('back')
}
</script>

<template>
  <div class="transition-color back" title="返回" @click.stop="click">
    <SvgIcon width="25" height="25" name="back" />
  </div>
</template>

<style lang="less" scoped>
.back {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    margin-top: 20px;
    border: 1px solid var(--catalogue-title);
    border-radius: 50%;
    cursor: pointer;

    svg {
        fill: var(--catalogue-title);
    }
}

@media screen and (max-width: 768px) {
    .back {
        width: 3.75rem;
        height: 3.75rem;
        margin-top: 1.25rem;
        border: .0625rem solid var(--catalogue-title);
    }
}
</style>