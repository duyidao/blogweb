<script>
import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'

export default {
  setup() {
    const imgUrl = ref('')

    const saveScreen = () => {
      html2canvas(document.body).then(res => {
        res.toBlob((blob) => {
          saveAs(blob, 'screen.png')
        })
      })
    }

    return {
      imgUrl,
      saveScreen
    }
  }
}
</script>

<template>
  <div class="tailor">
    <button @click="saveScreen">截图</button>
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