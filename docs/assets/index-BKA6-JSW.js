import{_ as i}from"./index-DaFcaQHa.js";import{c as l}from"./effect-BFrBJKb1.js";import{g as f,j as d}from"./index-D87shbtD.js";import{_ as p}from"./index-DKBlgV4z.js";import{H as m,C as x,O as _,o as t,a as r,F as h,v as b,B as c,s as w,K as v,u as C}from"./vender-Dkdm4IfB.js";const F={class:"iframe-box xlsx-word"},g={__name:"index",setup(k){const n={xlsxCode:`import { read, utils } from "xlsx";

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
}`,listToXlsxCode:`import { writeFile, utils } from "xlsx";

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
}`,xlsxReadCode:`import vueOfficeExcel from '@vue-office/excel'
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
}`,wordCode:`import vueOfficeWord from '@vue-office/docx'

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
}`,wordMannonCode:`import { renderAsync } from 'docx-preview'

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
}`},s=f("js.xlsxAndWord"),a=m([]);return a.value=s.map(e=>({...e,model:n[e.name+"Code"],component:Object.freeze(d.value[e.name])})),x(()=>{l.value=s.map(e=>({name:e.title+"源码",value:n[e.name+"Code"]}))}),_(()=>{l.value=[""]}),(e,D)=>{const u=i;return t(),r("div",F,[(t(!0),r(h,null,b(C(a),o=>(t(),c(u,{key:o.name,title:o.title},{default:w(()=>[(t(),c(v(o.component)))]),_:2},1032,["title"]))),128))])}}},M=p(g,[["__scopeId","data-v-0617c926"]]);export{M as default};
