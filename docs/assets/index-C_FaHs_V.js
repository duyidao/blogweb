define(["exports","./index-fE1ZY-zZ","./effect-CbHB8Sih","./index-DBYi-z7C","./index-BfVzJLus","./vender-CF49NVAq"],function(n,i,l,s,f,e){"use strict";var a=document.createElement("style");a.textContent=`.box[data-v-0617c926]{margin-bottom:30px}
`,document.head.appendChild(a);const d={class:"iframe-box xlsx-word"},p={__name:"index",setup(_){const c={xlsxCode:`import { read, utils } from "xlsx";

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
}`},r=s.getDict("js.xlsxAndWord"),u=e.shallowRef([]);return u.value=r.map(t=>({...t,model:c[t.name+"Code"],component:Object.freeze(s.jsChildData.value[t.name])})),e.onMounted(()=>{l.codeList.value=r.map(t=>({name:t.title+"源码",value:c[t.name+"Code"]}))}),e.onUnmounted(()=>{l.codeList.value=[""]}),(t,h)=>{const m=i.__unplugin_components_0;return e.openBlock(),e.createElementBlock("div",d,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(u),o=>(e.openBlock(),e.createBlock(m,{key:o.name,title:o.title},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.component)))]),_:2},1032,["title"]))),128))])}}},x=f._export_sfc(p,[["__scopeId","data-v-0617c926"]]);n.default=x,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
