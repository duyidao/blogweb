<script>
import { writeFile, utils } from "xlsx";

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
}
</script>

<template>
  <div class="xlsx">
    <div class="input">
      <label for="name">
        <span>名称：</span>
        <my-input v-model="info.name"
          type="text"
          placeholder="请输入名称"/>
      </label>
      <label for="age">
        <span>年龄：</span>
        <my-input v-model="info.age"
          type="text"
          placeholder="请输入年龄"/>
      </label>
      <label for="level">
        <span>等级：</span>
        <my-input v-model="info.level"
          type="text"
          placeholder="请输入等级"/>
      </label>
      <div class="buttons">
        <button class=""
          @click.stop="clickFn">数据添加到表格</button>
        <button class=""
          @click.stop="exportFn">表格数据导出xlsx</button>
      </div>
    </div>
    <table ref="tableRef"
      class="table-list ">
      <thead>
        <tr>
          <th>名称</th>
          <th>年龄</th>
          <th>等级</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData"
          :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.level }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="less"
  scoped>
  .xlsx {
    margin-top: 15px;

    .input {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      color: var(--primary-info);

      > label {
        display: flex;
        align-items: center;
        width: 48%;
        margin-right: 2%;

        span {
          width: 80px;
          font-size: 16px;
          font-family: 'fans';
        }

        &:nth-child(1),
        &:nth-child(2) {
          margin-bottom: 30px;
        }
        &:nth-child(2) {
          margin-right: 0;
        }
      }

      .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48%;

        button {
          width: 42%;
          height: 33.5px;
          margin-right: 15px;

          &:last-child {
            margin: 0;
          }
        }
      }
    }

    table {
      margin-top: 15px;
    }
  }

  @media screen and (max-width: 768px) {
    .xlsx {
      margin-top: .9375rem;

      .input {
        font-size: .875rem;

        > label {
          width: 90%;
          margin-bottom: 1.425rem !important;
          margin-right: 0;

          span {
            width: 5rem;
            font-size: 1rem;
          }
        }

        .buttons {
          width: 90%;
          margin: 0 auto 1rem !important;

          button {
            height: 2.0938rem;
            margin-right: .9375rem;
            font-size: .875rem;
          }
        }


      }

      table {
        margin-top: .9375rem;
      }
    }
  }
</style>