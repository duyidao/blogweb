<script setup>
import vueOfficeExcel from '@vue-office/excel'
import '@vue-office/excel/lib/index.css'

const file = ref(null)

const onChangeFn = e => {
  file.value = e // 读取文件数据
}
</script>

<template>
  <div class="xlsx">
    <div class="word-upload">
      <myUpload needList
        @change="onChangeFn" />
    </div>
    <vueOfficeExcel v-if="file"
      :src="file"
      style="height: 500px;" />
  </div>
</template>

<style lang="less"
  scoped>
  .xlsx {
    margin-top: 15px;

    .word-upload {
      width: 300px;
      margin: 0 auto 20px;
    }

    table {
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    .xlsx {
      margin-top: .9375rem;

      .word-upload {
        width: 18.75rem;
        margin-bottom: 1.25rem;
      }

      table {
        margin-top: .9375rem;
      }
    }
  }
</style>