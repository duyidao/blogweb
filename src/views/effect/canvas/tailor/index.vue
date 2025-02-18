<script setup>
import flowImg from '@/assets/img/drawbed/canvas/tailor.png'
import { codeList } from '@/store/effect.js'; // 引入代码列表

const imgUrl = ref('');
const canvasRef = ref(null);
const imgRef = ref(null);

const onChangeFn = e => {
  // 预览文件
  let fr = new FileReader();
  fr.readAsDataURL(e);

  // 获取图片读完的图片结果（非同步，需要在onload获取）
  fr.onload = () => {
    imgUrl.value = fr.result;

    let ctx = canvasRef.value.getContext('2d');

    setTimeout(() => {
      // 等比计算截取的图片宽高
      let height = (100 / imgRef.value.height) * imgRef.value.naturalHeight;
      let width = (200 / imgRef.value.width) * imgRef.value.naturalWidth;

      ctx.drawImage(imgRef.value, 0, 0, width, height, 0, 0, 200, 100);
    }, 1000);
  }
}

const download = () => {
  const dataUrl = canvasRef.value.toDataURL('image/jpeg')
  let a = document.createElement('a')
  a.href = dataUrl
  a.download = 'img.jpeg'
  a.click()
}

onMounted(() => {
  codeList.value = [`const onChangeFn = e => {
  // 预览文件
  let fr = new FileReader()
  fr.readAsDataURL(e)

  // 获取图片读完的图片结果（非同步，需要在onload获取）
  fr.onload = () => {
    imgUrl.value = fr.result

    let ctx = canvasRef.value.getContext('2d')

    setTimeout(() => {
      // 等比计算截取的图片宽高
      let height = (100 / imgRef.value.height) * imgRef.value.naturalHeight
      let width = (200 / imgRef.value.width) * imgRef.value.naturalWidth

      ctx.drawImage(imgRef.value, 0, 0, width, height, 0, 0, 200, 100)
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
    <IframeItemModel title="图片裁剪" :flowImg="flowImg">
      <div class="tailor">
        <div class="tailor-upload">
          <myUpload @change="onChangeFn" />
        </div>
        <div class="info">
          <div class="info-item">
            <span>原图效果</span>
            <img :src="imgUrl"
              v-if="imgUrl"
              ref="imgRef" />
          </div>
          <div class="info-item">
            <span class="click" @click="download">
              裁剪效果
              <span>(点击下载图片)</span>
            </span>
            <canvas ref="canvasRef"
              height="100"
              width="200"
              v-show="imgUrl"></canvas>
          </div>
        </div>
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .tailor {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .tailor-upload {
      width: 300px;
      margin-bottom: 20px;
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
    .tailor {

      .tailor-upload {
        width: 18.75rem;
        margin-bottom: 1.25rem;
      }

      img {
        width: 18.75rem;
      }

      .info {
        flex-direction: column;
        margin: 1.95rem 0 0;

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