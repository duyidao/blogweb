<script setup>
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
    <IframeItemModel title="图片裁剪">
      <div class="tailor">
        <div class="tailor-upload">
          <myUpload @change="onChangeFn" />
        </div>
        <div>
          原图：
          <img :src="imgUrl"
            ref="imgRef" />
        </div>
        <div v-show="imgUrl">
          裁剪：
          <canvas ref="canvasRef"
            height="100"
            width="200"></canvas>
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
      color: var(--primary-info);
      margin: 20px 0;
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
        margin: 1.25rem 0;
      }
    }
  }
</style>