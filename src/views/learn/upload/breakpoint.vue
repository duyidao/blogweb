<script setup>
const fileObj = ref({}) // 文件上传
const precent = ref(0) // 百分比

const onChange = e => {
    fileObj.value = e.target.files[0]
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
    <div class="ifrname-box">
        <div class="input">
            <input type="file"
                name=""
                id=""
                multiple
                @change="onChange">
            <button @click="onSubmit">提交</button>
        </div>
    </div>
</template>

<style lang="less" scoped>
</style>