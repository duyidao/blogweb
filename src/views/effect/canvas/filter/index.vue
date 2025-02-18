<script setup>
import flowImg from '@/assets/img/drawbed/canvas/filter.png'
import { codeList } from '@/store/effect.js'; // 引入代码列表

const imgUrl = ref('');
const imgRef = ref(null);
const filter = ref(null);
let filterCanvas = null;

const addFn = () => {
  filterCanvas = document.createElement('canvas');
  filterCanvas.height = imgRef.value.height || '400px';
  filterCanvas.width = imgRef.value.width;
  filter.value.appendChild(filterCanvas);

  let ctx = filterCanvas.getContext('2d');
  ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height);

  // 获取像素值
  let imageData = ctx.getImageData(0, 0, imgRef.value.width, imgRef.value.height);
  let _len = imageData.data.length;
  for (let i = 0; i < _len; i++) {
    if (i % 2 === 0) {
      imageData.data[i] = 0;
    };
  };

  // 清空 canvas
  ctx.clearRect(0, 0, imgRef.value.width, imgRef.value.height);

  // 重新绘制像素
  ctx.putImageData(imageData, 0, 0);
};

/**
 * 处理文件变更的函数
 *
 * @param e - 触发文件变更的事件对象
 */
const onChangeFn = e => {
  // 预览文件
  let fr = new FileReader();
  fr.readAsDataURL(e);

  // 获取图片读完的图片结果（非同步，需要在onload获取）
  fr.onload = () => {
    imgUrl.value = fr.result;
    setTimeout(() => {
      addFn();
    }, 1000);
  };
};

const download = () => {
  const dataUrl = filterCanvas.toDataURL('image/jpeg')
  let a = document.createElement('a')
  a.href = dataUrl
  a.download = 'img.jpeg'
  a.click()
}

onMounted(() => {
  codeList.value = [`const addFn = () => {
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
}`];
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <div class="iframe-box box">
    <IframeItemModel title="图片滤镜" :flowImg="flowImg">
      <div class="filter">
        <div class="filter-upload">
          <myUpload @change="onChangeFn" />
        </div>
        <div class="info">
          <div class="info-item">
            <span>原图效果</span>
            <img :src="imgUrl"
              v-if="imgUrl"
              ref="imgRef" />
          </div>
          <div class="info-item" ref="filter">
            <span class="click" @click="download">
              过滤效果
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
  .filter {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .filter-upload {
      width: 300px;
    }

    button {
      margin: 20px;
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
    .filter {
      .filter-upload {
        width: 18.75rem;
      }

      button {
        margin: 1.25rem;
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