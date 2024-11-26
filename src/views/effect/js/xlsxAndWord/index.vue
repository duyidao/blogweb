<script setup>
import { codeList } from '@/store/effect.js'; // 引入代码列表
import { jsChildData, getDict } from '../../index.js';

const codeData = {
  xlsxCode: `import { read, utils } from "xlsx";

export default {
  setup() {
    const excelHTML = ref('')

    const onChangeFn = e => {
      e.arrayBuffer().then((res) => {
        const wb = read(res) // 读取数据

        const sheet1 = wb.Sheets.sheet1 // 取表，为一个对象

        const data = utils.sheet_to_json(sheet1) // utils的方法，可以把获取到的混乱的数据转为数组的形式
        const html = utils.sheet_to_html(sheet1) // utils的方法，可以把获取到的混乱的数据转为html
        excelHTML.value = html
      })
    }

    return {
      excelHTML,
      onChangeFn
    }
  }
}`,
  listToXlsxCode: `import { writeFile, utils } from "xlsx";

export default {
  setup() {
    const info = ref({})
    const tableData = ref([])

    // 点击添加按钮
    const clickFn = () => {
      if (Object.keys(info).length === 0) return
      tableData.value.push({ ...info.value, id: Date.now() })
      info.value = {}
    }

    const tableRef = ref(null)
    // 点击导出按钮
    const exportFn = () => {
      if (tableData.value.length === 0) return

      const ws = utils.json_to_sheet(tableData.value)
      const wb = utils.book_new()
      utils.book_append_sheet(wb, ws, 'sheet1')
      writeFile(wb, 'test.xlsx')

      // 转换table dom
      const tableWs = utils.table_to_sheet(tableRef.value)
      const wb2 = utils.book_new()
      utils.book_append_sheet(wb2, tableWs, 'sheet1')
      writeFile(wb2, 'tableTest.xlsx')
    }

    return {
      info,
      tableData,
      clickFn,
      exportFn,
      tableRef
    }
  }
}`,
  xlsxReadCode: `import vueOfficeExcel from '@vue-office/excel'
import '@vue-office/excel/lib/index.css'

export default {
  components: {
    vueOfficeExcel
  },
  setup() {
    const file = ref(null)

    const onChangeFn = e => {
      file.value = e // 读取文件数据
    }

    return {
      file,
      onChangeFn
    }
  }
}`,
  wordCode: `import vueOfficeWord from '@vue-office/docx'

export default {
  components: {
    vueOfficeWord
  },
  setup() {
    const wordSrc = ref(null)

    const onChangeFn = e => {
      const fr = new FileReader()
      fr.readAsDataURL(e)
      fr.onload = (e) => {
        wordSrc.value = e.target.result
      }
    }

    return {
      wordSrc,
      onChangeFn
    }
  }
}`,
  wordMannonCode: `import { renderAsync } from 'docx-preview'

export default {
  setup() {
    const wordRef = ref(null)

    const onChangeFn = e => {
      renderAsync(e, wordRef.value)
    }

    return {
      wordRef,
      onChangeFn
    }
  }
}`,
}

const list = getDict('js.xlsxAndWord');
const componentList = shallowRef([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(jsChildData.value[item.name]),
}));

onMounted(() => {
  codeList.value = list.map((item) => ({name: item.title + '源码', value: codeData[item.name + 'Code']}));
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <div class="iframe-box xlsx-word">
    <IframeItemModel v-for="item in componentList"
      :key="item.name"
      :title="item.title">
      <component :is="item.component"/>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .box {
    margin-bottom: 30px;
  }
</style>