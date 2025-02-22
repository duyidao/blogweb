<script setup>
import flowImg from '@/assets/img/drawbed/js/showDirectoryPicker.png'
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
  } catch (err) {
    console.warn('err', err);
  }
}

const fileContent = ref('');
const fileType = ref('javascript');
const iframeBox = ref(null);
const imgRef = ref(null);
const videoRef = ref(null);
const showImg = ref(false);
const showVideo = ref(false);

const codeMenuList = ['vue', 'css', 'javascript', 'html', 'json', 'jsx']
const imgMenuList = ['png', 'jpg', 'jpeg', 'gif', 'svg', 'avif', 'webp']
const videoMenuList = ['mp4', 'akv', 'rmb', 'mov', 'avi', 'flv', 'wmv', 'mkv']

// 获取代码
const getCode = (file) => {
  showImg.value = false;
  showVideo.value = false;
  const reader = new FileReader();
  reader.onload = e => {
    fileContent.value = e.target.result;
    iframeBox.value.showCode = true;
  }
  reader.readAsText(file, 'utf-8');
}

// 获取图片、视频
const getImg = (file) => {
  iframeBox.value.showCode = false;
  showVideo.value = false;
  showImg.value = false;
  const reader = new FileReader();
  reader.readAsDataURL(file);

  // 获取图片读完的图片结果（非同步，需要在onload获取）
  reader.onload = (e) => {
    console.log('e', e);
    if (imgMenuList.includes(fileType.value)) {
      imgRef.value.src = e.target.result;
      showImg.value = true;
    }
    else {
      showVideo.value = true;
      videoRef.value.src = e.target.result;
      videoRef.value.load();

      // 尝试播放（需用户交互后自动播放）
      videoRef.value.play().catch(error => {
        console.warn('自动播放被阻止:', error);
      });
    }
  }
}

// 点击文件，获取文件内容
const clickFn = async (index) => {
  let fileData = root.value.children;
  for (let i = 0; i < index.length; i++) {
    if (i < index.length - 1) fileData = fileData[index[i]].children;
    else fileData = fileData[index[i]];
  }
  if (!fileData.getFile) return;
  const file = await fileData.getFile();
  console.log('file', file);
  fileType.value = file.type.split('/')[1] || file.name.split('.')[1];
  if (codeMenuList.includes(fileType.value)) {
    getCode(file);
  }
  if (imgMenuList.includes(fileType.value) || videoMenuList.includes(fileType.value)) {
    getImg(file);
  }
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
    :flowImg="flowImg"
    v-model="fileContent">
    <button @click.stop="showDirectoryPickerFn">获取文件夹</button>
    <div class="box-file"
      v-if="!fileFind">
      <div class="box-info"
        v-if="root && root.children && root.children.length"
        :class="{ showImg }">
        <File class="file"
          :items="root.children"
          @click="clickFn" />
      </div>
      <img ref="imgRef"
        src=""
        v-show="showImg" />
      <video ref="videoRef"
        src=""
        v-show="showVideo"></video>
    </div>
    <div v-else
      class="loading">
      加载中，请稍后...
    </div>
  </IframeItemCode>
</template>

<style lang="less" scoped>
.box {
  width: 100%;

  .box-file {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .box-info {
      max-height: 500px;
      overflow-y: scroll;

      &:not(.showImg) {
        width: 100%;
      }

      &.showImg {
        min-width: 35%;
      }

      .file {
        width: 100%;
      }
    }

    img {
      width: 400px;
      height: 400px;
      object-fit: contain;
    }

    video {
      width: 400px;
      height: 400px;
      object-fit: contain;
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

  .box {
    .box-file {
      flex-direction: column;

      .box-info {
        max-height: 31.25rem;
      }

      img {
        width: 25rem;
        height: 25rem;
        margin-top: 2rem;
      }
    }
  }
}
</style>