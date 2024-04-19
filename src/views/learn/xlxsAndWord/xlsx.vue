<script setup>
import { read, utils } from "xlsx";

const excelHTML = ref('')

const changeFn = e => {
    let file = e.target.files[0] // 读取文件数据
    file.arrayBuffer().then((res) => {
        const wb = read(res) // 读取数据

        const sheet1 = wb.Sheets.Sheet1 // 取表，为一个对象

        const data = utils.sheet_to_json(sheet1) // utils的方法，可以把获取到的混乱的数据转为数组的形式
        const html = utils.sheet_to_html(sheet1) // utils的方法，可以把获取到的混乱的数据转为html
        console.log('data', data);
        excelHTML.value = html
    })
}
</script>

<template>
    <div class="xlsx">
        <input type="file"
            name="file"
            id="file"
            @change="changeFn">
        <div class="xlsx transition-color"
            v-html="excelHTML"></div>
    </div>
</template>

<style lang="less" scoped>
.xlsx {
    margin-top: 20px;
}

@media screen and (max-width: 768px) {
    input {
        font-size: .875rem;
    }
    .xlsx {
        margin-top: 1.25rem;
    }
}
</style>