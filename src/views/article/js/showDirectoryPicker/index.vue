<script setup>
import File from './components/file.vue';

const root = ref([]);

// 格式化数据
const processHandle = async (handle) => {
  // 添加判断，终止递归，返回文件
  if (handle.kind === 'file') {
    return handle
  }

  handle.children = []
  const iter = await handle.entries() // 获取文件夹中所有内容
  for await (const info of iter) {
    const subHandle = await processHandle(info[1]) // 返回的是一个数组，返回的内容格式如上所述。通过递归的思想一直获取文件夹内的内容
    handle.children.push(subHandle)
  }

  return handle
}

const fileFind = ref(false);
// 点击获取文件按钮
const showDirectoryPickerFn = async () => {
  try {
    fileFind.value = true
    const handle = await showDirectoryPicker()
    root.value = await processHandle(handle)
    fileFind.value = false
    console.log('root.value', root.value);
  } catch (err) {
    console.log('err', err);
  }
}

const fileContent = ref('');
const fileType = ref('javascript');
const iframeBox = ref(null);

// 点击文件，获取文件内容
const clickFn = async (index) => {
  let fileData = root.value.children;
  for (let i = 0; i < index.length; i++) {
    if (i < index.length - 1) fileData = fileData[index[i]].children;
    else fileData = fileData[index[i]];
  }
  const file = await fileData.getFile();
  fileType.value = file.type.split('/')[1] || file.name.split('.')[1];
  const reader = new FileReader();
  reader.onload = e => {
    fileContent.value = e.target.result;
    iframeBox.value.showCode = true;
  }
  reader.readAsText(file, 'utf-8');
}
</script>

<template>
  <IframeItemCode column
    ref="iframeBox"
    class="iframe-box box"
    :needCode="false"
    :type="fileType"
    title="文件夹获取"
    height="600"
    v-model="fileContent">
    <button @click.stop="showDirectoryPickerFn">获取文件夹</button>
    <template v-if="!fileFind">
      <div class="box-info"
        v-if="root && root.children && root.children.length">
        <File class="file"
          :items="root.children"
          @click="clickFn" />
      </div>
    </template>
    <div v-else
      class="loading">
      加载中，请稍后...
    </div>
  </IframeItemCode>
</template>

<style lang="less" scoped>
.box {
  width: 100%;

  .box-info {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .file {
      width: 100%;
    }
  }

  .loading {
    color: var(--primary-info);
  }
}

button {
  margin: 0 auto 20px;
}

@media screen and (max-width: 768px) {
  button {
    margin: 0 auto 1.25rem;
  }
}
</style>