import{_ as d}from"./index-BivA_Czy.js";import{c as r}from"./effect-NJTD2hZi.js";import{g as m,l as p}from"./index-DiR3miDv.js";import x from"./word-DKiOcAya.js";import{_,s as h,q as w,N as b,o as t,c,j as i,w as u,F as v,f as C,h as f,i as F,u as g}from"./index-DQOh_Shd.js";import"./index-_dhk-qwc.js";import"./index-B_NYBd2T.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CpkTYwE8.js";const k={class:"iframe-box xlsx-word"},D={__name:"index",setup(R){const n={xlsxCode:`import { read, utils } from "xlsx";

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
}`},s=m("learn.xlsxAndWord"),a=h([]);return a.value=s.map(e=>({...e,model:n[e.name+"Code"],component:Object.freeze(p.value[e.name])})),w(()=>{r.value=s.map(e=>({name:e.title+"源码",value:n[e.name+"Code"]}))}),b(()=>{r.value=[""]}),(e,L)=>{const l=d;return t(),c("div",k,[i(l,{title:"item.title"},{default:u(()=>[i(x)]),_:1}),(t(!0),c(v,null,C(g(a),o=>(t(),f(l,{key:o.name,title:o.title},{default:u(()=>[(t(),f(F(o.component)))]),_:2},1032,["title"]))),128))])}}},E=_(D,[["__scopeId","data-v-535dd8cf"]]);export{E as default};
