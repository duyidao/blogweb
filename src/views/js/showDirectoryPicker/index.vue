<script setup>
const processHandle = async (handle) => {
    // 添加判断，终止递归，返回文件
    if (handle.kind === 'file') {
        return handle
    }

    console.log('handle-------------', handle);
    handle.children = []
    console.log('iter', iter);
    const iter = await handle.entries() // 获取文件夹中所有内容
    for await (const info of iter) {
        console.log('info', info);
        const subHandle = await processHandle(info[1]) // 返回的是一个数组，返回的内容格式如上所述。通过递归的思想一直获取文件夹内的内容
        handle.children.push(subHandle)
    }

    console.log('handle------------', handle);
    return handle
}

const showDirectoryPickerFn = async () => {
    try {
        const handle = await window.showDirectoryPicker()
        const root = await processHandle(handle)
        console.log('root', root);

        // 获取内容
        const file = await root.children[1].getFile()
        const reader = new FileReader()
        console.log('reader', reader);
        reader.onload = e => {
            console.log(e.target.result)
        }
    } catch (err) {
        // ...
        console.log('err', err);
    }
}
</script>

<template>
    <div class="ifrname-box box">
        <button @click.stop="showDirectoryPickerFn">click me</button>
    </div>
</template>

<style scoped>
.box {
    text-align: center;
}
button {
  border: 1px solid var(--primary-bg);
  padding: 5px 10px;
  margin: 10px auto;
  color: var(--catalogue-word);
}
</style>