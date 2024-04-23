<script setup>
const fileRef = ref(null)
const uploadRef = ref(null)

const {borderRadius} = defineProps({
    borderRadius: {
        type: [String, Number],
        default: '15'
    }
})

onMounted(() => {
    uploadRef.value.style.setProperty('--bdrd', borderRadius + 'px')
})

const emit = defineEmits(['change'])

// 点击
const handleUpload = () => {
    fileRef.value.click()
}

// 文件框上传文件事件
const handleChange = (e) => {
    const file = e.target.files[0]
    emit('change', file)
}
</script>

<template>
  <div ref="uploadRef" class="my-upload transition-color" @click.stop="handleUpload">
    <input ref="fileRef" type="file" name="" id="" @change="handleChange">
    <SvgIcon name="file" width="50" height="50" />
    <span v-if="!$slots.default" class="transition-color">点击上传文件</span>
    <template v-else>
        <slot></slot>
    </template>
  </div>
</template>

<style lang="less" scoped>
.my-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 1px dashed var(--primary-bg);
    padding: 20px 0;
    border-radius: var(--bdrd);
    background-color: var(--body-bg);
    cursor: pointer;

    input {
        display: none;
    }

    span {
        font-size: 16px;
        color: var(--primary-bg);
    }
}
</style>