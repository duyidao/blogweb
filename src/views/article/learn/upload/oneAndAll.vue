<script setup>
const imageList = ref([])

// 用户选择图片
const onChangeFn = e => {
    imageList.value = []
    Array.from(e).forEach(item => {
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
    <div class="ifrname-box">
        <div class="upload-upload">
            <myUpload needList multiple @change="onChangeFn" />
        </div>
        <button @click="onSubmit">提交</button>
    </div>
</template>

<style lang="less" scoped>
.ifrname-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .upload-upload {
        width: 300px;
        margin-bottom: 20px;
    }
}

@media screen and (max-width: 768px) {
    .upload-upload {
        width: 18.75rem;
        margin-bottom: 1.25rem;
    }
}
</style>