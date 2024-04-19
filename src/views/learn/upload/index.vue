<script setup>
// file
const selectedFiles = ref({})
const fileChange = e => {
    selectedFiles.value = e.target.files[0]
}

// blob
const blobFiles = ref({})
const blobChange = e => {
    const file = e.target.files[0]
    const blob = new Blob([file], { type: file.type })
    blobFiles.value = {size: blob.size, type: blob.type, name: file.name}
}

// formData
const formDataRef = ref(null)
const formDataChange = e => {
    console.log('formDataRef.value', formDataRef.value);
    const formData = new FormData(e.target.files[0])
    formData.append("username", "John");
    formData.append("age", 30);
    console.log('formData', formData);
}

// fileReader
const fileReaderChange = e => {
    selectedFiles.value = e.target.files[0]
}
</script>

<template>
    <div class="ifrname-box">
        <div class="upload-box">
            <div class="iframe-box-title">前置知识</div>
            <ul class="list-style-circle">
                <li class="flex-column">
                    <div>
                        <span>file</span>
                        <input type="file"
                            name="file"
                            id="file"
                            @change="fileChange">
                        <div class="content">
                            <div>文件名: {{ selectedFiles.name || '-' }}</div>
                            <div>文件类型: {{ selectedFiles.type || '-' }}</div>
                            <div>文件大小: {{ selectedFiles.size || 0 }}bytes</div>
                        </div>
                    </div>
                </li>
                <li class="flex-column">
                    <div>
                        <span>blob</span>
                        <input type="file"
                            name="blob"
                            id="blob"
                            @change="blobChange">
                        <div class="content">
                            <div>文件名: {{ blobFiles.name }}</div>
                            <div>文件类型: {{ blobFiles.type }}</div>
                            <div>文件大小: {{ blobFiles.size }}bytes</div>
                        </div>
                    </div>
                </li>
                <li class="flex-column">
                    <div>
                    <span>formData</span>
                    <input type="file"
                        ref="formDataRef"
                        name="formData"
                        id="formData"
                        @change="formDataChange">
                    <div class="content">
                        <div>文件名:{{ selectedFiles.name }}</div>
                        <div>文件类型:{{ selectedFiles.type }}</div>
                        <div>文件大小:{{ selectedFiles.size }}bytes</div>
                    </div>
                </div>
                </li>
                <li class="flex-column">
                    <div>
                    <span>fileReader</span>
                    <input type="file"
                        name="fileReader"
                        id="fileReader">
                    <div class="content">
                        <div>文件名:{{ selectedFiles.name }}</div>
                        <div>文件类型:{{ selectedFiles.type || '-' }}</div>
                        <div>文件大小:{{ selectedFiles.size || 0 }}bytes</div>
                    </div>
                </div>
                </li>
            </ul>
        </div>
        <div class="upload-box">
            <div class="iframe-box-title">单文件上传</div>
        </div>
        <div class="upload-box">
            <div class="iframe-box-title">切片上传</div>
        </div>
        <div class="upload-box">
            <div class="iframe-box-title">断点续传</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.flex-column {
    >div {
        display: flex;
        flex-direction: column;
    }
    span {
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: 600;
        color: var(--primary-info);
    }

    .content {
        margin-top: 10px;

        div {
            margin-bottom: 8px;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>