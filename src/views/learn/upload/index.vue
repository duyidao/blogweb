<script setup>
import oneAndAllComp from './oneAndAll.vue'
import slice from './slice.vue'
import breakpoint from './breakpoint.vue'

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
    blobFiles.value = { size: blob.size, type: blob.type, name: file.name }
}

// formData
const formData = ref({})
const formDataChange = e => {
    formData.value = new FormData()
    formData.value.append("file", e.target.files[0]);
    formData.value.append("username", "John");
    formData.value.append("age", 30);
}

// fileReader
const result = ref(null)
const fileReaderChange = (e, type) => {
    let file = e.target.files[0];

    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
        // 读取完成后的回调函数
        const fileData = event.target.result;
        console.log('fileData', fileData);
        switch (type) {
            case 'readAsText':
                result.value = fileData
                break;
            case 'readAsArrayBuffer':
                result.value = {
                    byteLength: fileData.byteLength,
                    detached: fileData.detached,
                    maxByteLength: fileData.maxByteLength
                }
                break;
            case 'readAsDataURL':
                result.value = fileData
                break;
            case 'readAsBinaryString':
                result.value = fileData
                break;
            default:
                break;
        }
        result.value = fileData
        // 在这里可以对文件数据进行进一步处理
    });

    switch (type) {
        case 'readAsText':
            reader.readAsText(file);
            break;
        case 'readAsArrayBuffer':
            reader.readAsArrayBuffer(file);
            break;
        case 'readAsDataURL':
            reader.readAsDataURL(file);
            break;
        case 'readAsBinaryString':
            reader.readAsBinaryString(file);
            break;
        default:
            break;
    }
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
                            name="formData"
                            id="formData"
                            @change="formDataChange">
                    </div>
                </li>
                <li class="flex-column">
                    <div class="flex-column-fileReader">
                        <span>fileReader</span>
                        <div class="flex">
                            <label class=""
                                for="readAsText">
                                <i>readAsText</i>
                                <input type="file"
                                    name="readAsText"
                                    id="readAsText"
                                    @change="(e) => fileReaderChange(e, 'readAsText')">
                            </label>
                            <label class=""
                                for="readAsArrayBuffer">
                                <i>readAsArrayBuffer</i>
                                <input type="file"
                                    name="readAsArrayBuffer"
                                    id="readAsArrayBuffer"
                                    @change="(e) => fileReaderChange(e, 'readAsArrayBuffer')">
                            </label>
                            <label class=""
                                for="readAsDataURL">
                                <i>readAsDataURL</i>
                                <input type="file"
                                    name="readAsDataURL"
                                    id="readAsDataURL"
                                    @change="(e) => fileReaderChange(e, 'readAsDataURL')">
                            </label>
                            <label class=""
                                for="readAsBinaryString">
                                <i>readAsBinaryString</i>
                                <input type="file"
                                    name="readAsBinaryString"
                                    id="readAsBinaryString"
                                    @change="(e) => fileReaderChange(e, 'readAsBinaryString')">
                            </label>
                        </div>
                        <div class="content-fileReader">{{ result }} </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="upload-box">
            <div class="iframe-box-title">单文件上传</div>
            <oneAndAllComp />
        </div>
        <div class="upload-box">
            <div class="iframe-box-title">切片上传</div>
            <slice :size="10 * 1024 * 1024" />
        </div>
        <div class="upload-box">
            <div class="iframe-box-title">断点续传</div>
            <breakpoint />
        </div>
    </div>
</template>

<style lang="less" scoped>
.flex-column {
    >div {
        display: flex;
        flex-direction: column;

        &.flex-column-fileReader {
            .flex {
                display: flex;
                flex-wrap: wrap;

                label {
                    display: flex;
                    align-items: center;
                    width: 50%;
                    margin-bottom: 10px;

                    i {
                        color: var(--primary-info);
                        margin-right: 15px;
                        padding: 2px 5px;
                        border-radius: 3px;
                    }
                }
            }

            .content-fileReader {
                min-height: 20px;
                max-height: 300px;
                overflow-y: auto;
                word-wrap:break-word;
                word-break:break-all;
            }
        }
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

@media screen and (max-width: 768px) {
    .flex-column {
        >div {

            &.flex-column-fileReader {
                .flex {

                    label {
                        width: 100%;
                        margin-bottom: .625rem;

                        i {
                            margin-right: .9375rem;
                            padding: .125rem .3125rem;
                        }
                    }
                }
            }
        }

        span {
            font-size: 1rem;
            margin-bottom: .625rem;
        }

        .content {
            margin-top: .625rem;

            div {
                margin-bottom: .5rem;
            }
        }
    }
}
</style>