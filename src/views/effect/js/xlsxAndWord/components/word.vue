<script setup>
import vueOfficeWord from '@vue-office/docx'

const wordSrc = ref(null)

const onChangeFn = e => {
  const fr = new FileReader()
  fr.readAsDataURL(e)
  fr.onload = (e) => {
    wordSrc.value = e.target.result
  }
}
</script>

<template>
  <div class="word">
    <div class="word-upload">
      <myUpload needList
        @change="onChangeFn" />
    </div>
    <vueOfficeWord v-if="wordSrc"
      :src="wordSrc"
      style="height: 500px; overflow-y: auto;" />
  </div>
</template>

<style lang="less"
  scoped>
  .word {
    width: 100%;
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