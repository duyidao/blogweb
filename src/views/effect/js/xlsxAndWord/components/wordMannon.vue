<script setup>
import { renderAsync } from 'docx-preview'

const wordRef = ref(null)

const onChangeFn = e => {
  renderAsync(e, wordRef.value)
}
</script>

<template>
  <div class="word">
    <div class="word-upload">
      <myUpload needList
        @change="onChangeFn" />
    </div>
    <div class="word-content" ref="wordRef"></div>
  </div>
</template>

<style lang="less"
  scoped>
  .word {
    width: 100%;

    .word-content {
      :deep(section.docx) {
        width: 100% !important;

        * {
          max-width: 100% !important;
        }
      }
    }
  }
  .word-upload {
    width: 300px;
    margin: 0 auto 20px;
  }

  @media screen and (max-width: 768px) {
    .word-upload {
      width: 18.75rem;
      margin-bottom: 1.25rem;
    }
  }
</style>