<script setup>
import flowImg from '@/assets/img/drawbed/canvas/screenshot.png'
import { codeList } from '@/store/effect.js'; // 引入代码列表

import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

const saveScreen = () => {
  html2canvas(document.body).then(res => {
    res.toBlob((blob) => {
      saveAs(blob, 'screen.png');
    });
  });
}

onMounted(() => {
  codeList.value = [`import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
const saveScreen = () => {
  html2canvas(document.body).then(res => {
    res.toBlob((blob) => {
      saveAs(blob, 'screen.png')
    })
  })
}`];
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <div class="iframe-box box">
    <IframeItemModel title="页面截图" :flowImg="flowImg">
      <div class="tailor">
        <button @click="saveScreen">截图</button>
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

    button {
      margin-bottom: 20px;
    }

    img {
      width: 300px;
    }
  }

  @media screen and (max-width: 768px) {
    .tailor {
      button {
        margin-bottom: 1.25rem;
      }

      img {
        width: 18.75rem;
      }
    }
  }
</style>