<script setup>
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表
import { learnChildData, getDict } from '../../index.js';

const codeData = {
  compressCode: `const imgUrl = ref('')
    const imgInfo = ref({
      size: 0,
      blobsize: 0
    })
    const imgRef = ref(null)
    const compress = ref(null)

    // 获取图片
    const onChangeFn = e => {
      // 预览文件
      let fr = new FileReader()
      fr.readAsDataURL(e)

      // 获取图片读完的图片结果（非同步，需要在onload获取）
      fr.onload = (e) => {
        imgUrl.value = fr.result
        imgInfo.value.size = e.total

        // 创建canvas真实dom元素
        let canvas = document.createElement('canvas')

        setTimeout(() => {
          canvas.height = imgRef.value.height
          canvas.width = imgRef.value.width

          compress.value.appendChild(canvas)

          // 创建2d上下文
          let ctx = canvas.getContext('2d')
          ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height)

          // 把canvas转为blob格式
          canvas.toBlob((blob) => {
            imgInfo.value.blobsize = blob.size
            // saveAs(blob, 'img.jpeg')
            let form = new FormData()
            form.append('file', blob)
            // axios.post('xxx', form)
          }, 'image/jpeg', 0.4)
        }, 1000);
      }
  }`,
  filterCode: `const addFn = () => {
  const filterCanvas = document.createElement('canvas')
  filterCanvas.height = imgRef.value.height || '400px'
  filterCanvas.width = imgRef.value.width
  filterRef.value.appendChild(filterCanvas)

  let ctx = filterCanvas.getContext('2d')
  ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height)

  // 获取像素值
  let imageData = ctx.getImageData(0, 0, imgRef.value.width, imgRef.value.height)
  let _len = imageData.data.length
  for (let i = 0; i < _len; i++) {
    if (i % 2 === 0) {
      imageData.data[i] = 0
    }
  }

  // 清空 canvas
  ctx.clearRect(0, 0, imgRef.value.width, imgRef.value.height)

  // 重新绘制像素
  ctx.putImageData(imageData, 0, 0)
}`,
screenshotCode: `import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
const saveScreen = () => {
      html2canvas(document.body).then(res => {
        res.toBlob((blob) => {
          saveAs(blob, 'screen.png')
        })
      })
}`,
  tailorCode: `const onChangeFn = e => {
  // 预览文件
  let fr = new FileReader()
  fr.readAsDataURL(e)

  // 获取图片读完的图片结果（非同步，需要在onload获取）
  fr.onload = () => {
    imgUrl.value = fr.result

    let ctx = canvasRef.value.getContext('2d')

    setTimeout(() => {
      // 等比计算截取的图片宽高
      let height = (200 / imgRef.value.height) * imgRef.value.naturalHeight
      let width = (200 / imgRef.value.width) * imgRef.value.naturalWidth

      ctx.drawImage(imgRef.value, 0, 0, width, height, 0, 0, 200, 200)
    }, 1000);
  }
}`,
};

const list = getDict('learn.canvas');
const componentList = shallowRef([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(learnChildData.value[item.name]),
}));

onMounted(() => {
  codeList.value = list.map((item) => ({name: item.title + '源码', value: codeData[item.name + 'Code']}));
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <div class="iframe-box box">
    <IframeItemModel v-for="item in componentList"
      :key="item.name"
      :title="item.title">
      <component :is="item.component"/>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped></style>