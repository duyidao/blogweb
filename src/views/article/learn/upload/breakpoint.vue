<script setup>
const fileObj = ref({}) // 文件上传
const precent = ref(0) // 百分比

const onChangeFn = e => {
    fileObj.value = e
}

const onSubmit = async () => {
    let size = 2 * 1024 * 1024
    let current = localStorage.getItem(fileObj.value.name) || 0
    let formData = new FormData()
    let fileSize = fileObj.value.size
    
    localStorage.setItem(fileObj.value.name, current)
    
    // while(current < fileSize) {
    const timer = setInterval(() => {
        
        formData.append(fileObj.value.name, fileObj.value.slice(current, current + size))
        // 切片上传
        // await axios.post('/upload', formData)
        // 累加文件大小
        current += size
        // 计算百分比
        precent.value = Math.min((current / fileSize) * 100, 100)
    }, 1000);
    // }
}
</script>

<template>
    <div class="iframe-box">
        <div class="upload-upload">
            <myUpload needList @change="onChangeFn" />
        </div>
        <button @click="onSubmit">提交</button>
    </div>
</template>

<style lang="less" scoped>
.iframe-box {
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