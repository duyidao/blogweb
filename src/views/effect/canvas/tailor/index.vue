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
            <span>裁剪效果</span>
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
    }
  }
</style>