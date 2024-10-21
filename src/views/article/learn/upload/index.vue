<script setup>

import oneAndAllComp from './oneAndAll.vue';
import slice from './slice.vue';
import breakpoint from './breakpoint.vue';

// file
const selectedFiles = ref({});
const fileChange = e => {
    selectedFiles.value = e;
}

// blob
const blobFiles = ref({});
const blobChange = e => {
    const file = e;
    const blob = new Blob([file], { type: file.type });
    blobFiles.value = { size: blob.size, type: blob.type, name: file.name };
}

// formData
const formData = ref({});
const formDataChange = e => {
    formData.value = new FormData();
    formData.value.append("file", e);
    formData.value.append("username", "John");
    formData.value.append("age", 30);
    console.log('formData.value', formData.value);
}

// fileReader
const result = ref(null);
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
    <div class="iframe-box">
        <IframeItem
            class="upload-box"
            :needCode="false"
            title="前置知识">
            <ul class="list-style-circle">
                <li class="flex-column">
                    <div class="file">
                        <div class="upload-upload">
                            <myUpload info="上传文件，file类型"
                                @change="fileChange" />
                        </div>
                        <div class="content ">
                            <div>文件名: {{ selectedFiles.name || '-' }}</div>
                            <div>文件类型: {{ selectedFiles.type || '-' }}</div>
                            <div>文件大小: {{ selectedFiles.size || 0 }}bytes</div>
                        </div>
                    </div>
                </li>
                <li class="flex-column">
                    <div>
                        <div class="upload-upload">
                            <myUpload info="上传文件，blob类型"
                                @change="blobChange" />
                        </div>
                        <div class="content ">
                            <div>文件名: {{ blobFiles.name }}</div>
                            <div>文件类型: {{ blobFiles.type }}</div>
                            <div>文件大小: {{ blobFiles.size }}bytes</div>
                        </div>
                    </div>
                </li>
                <li class="flex-column">
                    <div>
                        <div class="upload-upload">
                            <myUpload info="上传文件，formData类型"
                                @change="formDataChange" />
                        </div>
                    </div>
                </li>
                <li class="flex-column">
                    <div class="flex-column-fileReader">
                        <div class="upload-upload">
                            <myUpload info="上传文件，fileReader类型readAsText"
                                @change="(e) => fileReaderChange(e, 'readAsText')" />
                        </div>
                        <div class="upload-upload">
                            <myUpload info="上传文件，fileReader类型readAsArrayBuffer"
                                @change="(e) => fileReaderChange(e, 'readAsArrayBuffer')" />
                        </div>
                        <div class="upload-upload">
                            <myUpload info="上传文件，fileReader类型readAsDataURL"
                                @change="(e) => fileReaderChange(e, 'readAsDataURL')" />
                        </div>
                        <div class="upload-upload">
                            <myUpload info="上传文件，fileReader类型readAsBinaryString"
                                @change="(e) => fileReaderChange(e, 'readAsBinaryString')" />
                        </div>
                        <div class="content-fileReader">{{ result }} </div>
                    </div>
                </li>
            </ul>
        </IframeItem>
        <IframeItem
            class="upload-box"
            :needCode="false"
            title="单文件上传">
            <oneAndAllComp />
        </IframeItem>
        <IframeItem
            class="upload-box"
            :needCode="false"
            title="切片上传">
            <slice :size="10 * 1024 * 1024" />
        </IframeItem>
        <IframeItem
            class="upload-box"
            :needCode="false"
            title="断点续传">
            <breakpoint />
        </IframeItem>
    </div>
</template>

<style lang="less" scoped>
.flex-column {
    >div {
        display: flex;
        align-items: center;

        .upload-upload {
            width: 300px;
            margin-right: 20px;
        }

        &.flex-column-fileReader {
            display: flex;
            flex-wrap: wrap;

            > div {
                margin-bottom: 20px;
            }

            .content-fileReader {
                min-height: 20px;
                max-height: 300px;
                overflow-y: auto;
                word-wrap: break-word;
                word-break: break-all;
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 120px;
        padding: 10px 0;
        font-size: 15px;
        color: var(--primary-info);

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