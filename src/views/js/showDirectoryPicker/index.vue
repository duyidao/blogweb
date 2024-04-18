<script setup>
import File from './file.vue'

const root = ref([])

// 格式化数据
const processHandle = async (handle) => {
    // 添加判断，终止递归，返回文件
    if (handle.kind === 'file') {
        return handle
    }

    handle.children = []
    const iter = await handle.entries() // 获取文件夹中所有内容
    for await (const info of iter) {
        console.log('info', info);
        const subHandle = await processHandle(info[1]) // 返回的是一个数组，返回的内容格式如上所述。通过递归的思想一直获取文件夹内的内容
        handle.children.push(subHandle)
    }

    return handle
}

// 点击获取文件按钮
const showDirectoryPickerFn = async () => {
    try {
        const handle = await showDirectoryPicker()
        root.value = await processHandle(handle)
        console.log('root.value', root.value);
    } catch(err) {
        console.log('err', err);
    }
}

const fileContent = ref('')

// 点击文件，获取文件内容
const clickFn = async (index) => {
    let fileData = root.value
    for (let i = 0; i < index.length; i++) {
        if (i < index.length - 1) fileData = fileData[index[i]].children
        else fileData = fileData[index[i]]
    }
    const file = await fileData.getFile()
    const reader = new FileReader()
    reader.onload = e => {
        console.log('e', e);
        console.log('e.target.result', e.target.result);
        fileContent.value = e.target.result
    }
    reader.readAsText(file, 'utf-8')
}
</script>

<template>
    <div class="ifrname-box box">
        <button @click.stop="showDirectoryPickerFn">获取文件夹</button>
        <div class="box-info">
            <File class="file" :items="root" @click="clickFn" />
            <div class="content">{{ fileContent }}</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.box {
    text-align: center;

    .box-info {
        display: flex;
        justify-content: space-between;

        .file {
            width: 30%;
        }

        .content {
            flex: 1;
            display: block;
            height: 100%;
            background-color: antiquewhite;
        }
    }
}
button {
  border: 1px solid var(--primary-bg);
  padding: 5px 10px;
  margin: 10px auto;
  color: var(--catalogue-word);
}
</style>