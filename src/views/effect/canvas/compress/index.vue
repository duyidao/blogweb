<script setup>
import flowImg from '@/assets/img/drawbed/canvas/compress.png'
import { codeList } from '@/store/effect.js'; // 引入代码列表

const imgUrl = ref('');
const imgInfo = ref({
  size: 0,
  blobsize: 0,
});
const imgRef = ref(null);
const compress = ref(null);
let canvas = null;

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
    canvas = document.createElement('canvas')

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
};

const download = () => {
  const dataUrl = canvas.toDataURL('image/jpeg')
  let a = document.createElement('a')
  a.href = dataUrl
  a.download = 'img.jpeg'
  a.click()
}

onMounted(() => {
  codeList.value = [`const imgUrl = ref('')
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
}`];
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <div class="iframe-box box">
    <IframeItemModel title="图片压缩" :flowImg="flowImg">
      <div class="compress">
        <div class="compress-upload">
          <myUpload @change="onChangeFn" />
        </div>
        <div class="info">
          <div class="info-item">
            <span>原图大小：{{ imgInfo.size }}</span>
            <img ref="imgRef"
              :src="imgUrl" />
          </div>
          <div class="info-item" ref="compress">
            <span class="click" @click="download">
              压缩后大小：{{ imgInfo.blobsize || 0 }}
              <span>(点击下载图片)</span>
            </span>
          </div>
        </div>
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .compress {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .compress-upload {
      width: 300px;
    }

    img {
      width: 300px;
    }

    .info {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      width: 100%;
      color: var(--primary-info);
      margin: 40px 0 20px;

      .info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;

        span {
          font-size: 16px;
          font-family: 'sans';
          margin-bottom: 15px;

          &.click {
            color: red;
            border-bottom: 1px solid red;
            padding-bottom: 4px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .compress {

      .compress-upload {
        width: 18.75rem;
      }

      img {
        width: 18.75rem;
      }

      .info {
        flex-direction: column;
        margin: 2.5rem 0 0;

        .info-item {
          margin-bottom: 1.25rem;

          span {
            font-size: 1.25rem;
            margin-bottom: .9375rem;

            &.click {
              border-bottom-width: .0625rem;
              padding-bottom: .25rem;
            }
          }
        }
      }
    }
  }
</style>