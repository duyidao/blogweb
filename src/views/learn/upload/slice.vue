<script setup>
const fileObj = ref({}) // 文件上传
const precent = ref(0) // 百分比

const { size } = defineProps({
    size: {
        type: Number,
        default: 0
    }
})

const onChange = e => {
    fileObj.value = {}
    precent.value = 0
    fileObj.value = e.target.files[0]
}

const onSubmit = async () => {
    // let size = 2 * 1024 * 1024
    let current = 0
    let fileSize = fileObj.value.size
    let formData = new FormData()

    // while (current < fileSize) {
    const timer = setInterval(() => {
        formData.append(fileObj.value.name, fileObj.value.slice(current, current + size))
        // 切片上传
        // await axios.post('/upload', formData)

        console.log('共' + fileSize + '大小的文件，已上传了' + current + '大小的文件，占比' + precent.value + '%');

        // 累加文件大小
        current += size
        // 计算百分比
        precent.value = Math.min((current / fileSize) * 100, 100)

        if(current >= fileSize) clearInterval(timer)
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

        <div class="jindu">
            <div class="progress">
                <div class="progress-bar"
                    :style="{ width: precent.toFixed(2) + '%' }"></div>
            </div>
            <div class="progress-text">{{ precent.toFixed(2) }}%</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.jindu {
    display: flex;
    align-items: center;
    margin-top: 20px;

    .progress {
        width: 100%;
        height: 10px;
        background-color: #ccc;
        border-radius: 5px;

        .progress-bar {
            width: 0;
            height: 100%;
            background-color: #f00;
            border-radius: 5px;
        }
    }

    .progress-text {
        margin-left: 10px;
    }
}

@media screen and (max-width: 768px) {
    .jindu {
        margin-top: 1.25rem;

        .progress-text {
            margin-left: .625rem;
        }
    }
}
</style>