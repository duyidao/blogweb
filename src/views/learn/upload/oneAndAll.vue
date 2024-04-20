<script setup>
const imageList = ref([])

// 用户选择图片
const onChange = e => {
    Array.from(e.target.files).forEach(item => {
        imageList.value.push(item)
    })
}

// 点击提交按钮
const onSubmit = async () => {
    let _formData = new FormData()
    imageList.value.forEach(item => {
        _formData.append(item.name + 'file', item)
        // axios.post('/xx', _formData)
        console.log('通过axios发请求，文件：', item.name);
    })
}
</script>

<template>
    <input type="file"
        name=""
        id=""
        multiple
        @change="onChange">
    <button @click="onSubmit">提交</button>
</template>

<style scoped></style>