<script setup>
import flowImg from '@/assets/img/drawbed/canvas/video.png'
import { codeList } from '@/store/effect.js'; // 引入代码列表
const box = ref(null);

const drawVideo = vdo => {
  return new Promise(resolve => {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');
    cvs.width = vdo.videoWidth;
    cvs.height = vdo.videoHeight;
    ctx.drawImage(vdo, 0, 0, cvs.width, cvs.height);
    cvs.toBlob(blob => {
      resolve({
        blob,
        url: URL.createObjectURL(blob)
      });
    });
  });
}

const captureImg = frame => {
  const img = document.createElement('img');
  img.src = frame;
  box.value.appendChild(img);
}

/**
 * 获取视频画面帧
 * @params vdoFile: 视频文件
 * @params time: 第几帧
 * @return 返回blob和url
 */
const captureFrame = (vdoFile, time = 0) => {
  return new Promise(resolve => {
    const vdo = document.createElement('video');
    vdo.currentTime = time; // 视频定格
    vdo.muted = true; // 静音播放
    vdo.autoplay = true; // 视频自动播放
    vdo.oncanplay = () => {
      setTimeout(async () => {
        const res = await drawVideo(vdo);
        resolve(res);
      }, 1000);
    }
    vdo.src = URL.createObjectURL(vdoFile); // 把object url赋值给video标签的src，blob:为前缀，复制粘贴到新的网页打开就能看到视频
  });
}

const zhenshu = ref(); // 帧数
const zhenshuList = ref([123, 234, 345, 456, 567, 678, 789]); // 帧数列表

// 获取帧数
const onChangeFn = async e => {
  if (!e) return;
  for (let i = 0; i <= zhenshuList.value.length; i++) {
    const res = await captureFrame(e, zhenshuList.value[i]);
    captureImg(res.url);
  }
}

// 添加帧数
const addZhenshuFn = () => {
  zhenshuList.value.push(zhenshu.value);
  zhenshu.value = null;
}

// 删除帧数
const deleteZhenshuFn = () => {
  zhenshuList.value = []
  if (box.value) {
    while (box.value.firstChild) {
      box.value.removeChild(box.value.firstChild);
    }
  }
}

// 获取视频帧
const keyupFn = e => {
  if (e.key === 'Enter') {
    addZhenshuFn()
  }
}

onMounted(() => {
  codeList.value = [`const drawVideo = vdo => {
  return new Promise(resolve => {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');
    cvs.width = vdo.videoWidth;
    cvs.height = vdo.videoHeight;
    ctx.drawImage(vdo, 0, 0, cvs.width, cvs.height);
    cvs.toBlob(blob => {
      resolve({
        blob,
        url: URL.createObjectURL(blob)
      });
    });
  });
}

const captureImg = frame => {
  const img = document.createElement('img');
  img.src = frame;
  box.value.appendChild(img);
}

/**
 * 获取视频画面帧
 * @params vdoFile: 视频文件
 * @params time: 第几帧
 * @return 返回blob和url
 */
const captureFrame = (vdoFile, time = 0) => {
  return new Promise(resolve => {
    const vdo = document.createElement('video');
    vdo.currentTime = time; // 视频定格
    vdo.muted = true; // 静音播放
    vdo.autoplay = true; // 视频自动播放
    vdo.oncanplay = () => {
      setTimeout(async () => {
        const res = await drawVideo(vdo);
        resolve(res);
      }, 1000);
    }
    vdo.src = URL.createObjectURL(vdoFile); // 把object url赋值给video标签的src，blob:为前缀，复制粘贴到新的网页打开就能看到视频
  });
}

const onChangeFn = async e => {
  if (!e) return;
  for (let i = 0; i < 10; i++) {
    const res = await captureFrame(e, (i + 50) * 1);
    captureImg(res.url);
  }
}`];
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <IframeItemModel title="画面帧"
    :flowImg="flowImg"
    class="iframe-box box">
    <myUpload @change="onChangeFn" />
    <div class="zhenshu-input">
      <myInput v-model="zhenshu"
        type="number"
        placeholder="请输入帧数"
        @keyup="keyupFn" />
      <mouseGlowButton word="获取画面帧"
        @click="addZhenshuFn" />
      <mouseGlowButton word="清空画面帧"
        @click="deleteZhenshuFn" />
    </div>
    <div class="zhenshu-list">
      帧数数组：
      <span v-for="item in zhenshuList"
        :key="item">{{ item }}</span>
    </div>
    <div ref="box"
      class="box-img"></div>
  </IframeItemModel>
</template>

<style lang="less" scoped>
.box {
  :deep(.upload) {
    width: 60%;
  }

  :deep(canvas) {
    display: block;
    width: 100%;
    margin-top: 20px;
    object-fit: cover;
  }

  :deep(.iframe-item-model__content__info) {
    flex-direction: column;
  }

  .zhenshu-input {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    margin-top: 25px;

    :deep(.my-input) {
      margin-right: 20px;
      width: 50%;
    }
  }

  .zhenshu-list {
    margin-top: 25px;
    font-size: 16px;

    span {
      color: var(--catalogue-title);

      &::after {
        content: "、";
      }

      &:last-child::after {
        content: "";
      }
    }
  }

  .box-img {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 20px;

    :deep(img) {
      width: 32%;
      margin-right: 2%;
      margin-bottom: 2%;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .box {
    .box-img {
      flex-direction: column;
      margin-top: 1.25rem;

      :deep(img) {
        width: 100%;
        margin-right: 0;
        margin-bottom: 2%;
      }
    }

    .zhenshu-input {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      width: 60%;
      margin-top: 1.5625rem;

      :deep(.my-input) {
        margin-right: 0;
        width: 100%;
      }

      :deep(.mouse-glow-button) {
        width: 100%;
        margin-top: 1.5625rem;
      }
    }

    .zhenshu-list {
      margin-top: 1.5625rem;
      font-size: 1.125rem;
    }
  }
}
</style>