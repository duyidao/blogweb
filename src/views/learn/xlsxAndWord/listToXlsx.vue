<script setup>
import { writeFile, utils } from "xlsx";

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
</script>

<template>
    <div class="xlsx">
        <div class="input transition-color">
            <label for="name">
                名称：
                <input v-model="info.name"
                    class="transition-color"
                    type="text"
                    name="name"
                    id="name">
            </label>
            <label for="age">
                年龄：
                <input v-model="info.age"
                    class="transition-color"
                    type="text"
                    name="age"
                    id="age">
            </label>
            <label for="level">
                等级：
                <input v-model="info.level"
                    class="transition-color"
                    type="text"
                    name="level"
                    id="level">
            </label>
            <div class="buttons">
                <button class="transition-color"
                    @click.stop="clickFn">数据添加到表格</button>
                <button class="transition-color"
                    @click.stop="exportFn">表格数据导出xlsx</button>
            </div>
        </div>
        <table ref="tableRef"
            class="table-list transition-color">
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

            label {
                display: flex;
                align-items: center;
                width: 50%;

                &:nth-child(1),
                &:nth-child(2) {
                    margin-bottom: 10px;
                }
            }

            input {
                width: 80%;
                height: 35px;
                border: 1px solid var(--primary-bg);
                margin-right: 20px;
                padding-left: 15px;
                color: var(--primary-info);
                background-color: var(--catalogue-bg);
            }

            .buttons {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50%;

                button {
                    width: 45%;
                    height: 30px;
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

                label {
                    width: 100%;
                    margin-bottom: .625rem;
                }

                input {
                    height: 2.1875rem;
                    border: .0625rem solid var(--primary-bg);
                    margin-right: 1.25rem;
                    padding-left: .9375rem;
                    font-size: .875rem;
                }

                .buttons {
                    width: 90%;

                    button {
                        height: 1.875rem;
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