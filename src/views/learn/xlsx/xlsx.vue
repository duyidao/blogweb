<script setup>
import { read, utils } from "xlsx";

const excelHTML = ref('')

const onChangeFn = e => {
    e.arrayBuffer().then((res) => {
        const wb = read(res) // 读取数据

        const sheet1 = wb.Sheets.Sheet1 // 取表，为一个对象

        const data = utils.sheet_to_json(sheet1) // utils的方法，可以把获取到的混乱的数据转为数组的形式
        const html = utils.sheet_to_html(sheet1) // utils的方法，可以把获取到的混乱的数据转为html
        excelHTML.value = html
    })
}
</script>

<template>
    <div class="xlsx">
        <div class="word-upload">
            <myUpload needList @change="onChangeFn" />
        </div>
        <div class="xlsx transition-color"
            v-html="excelHTML"></div>
    </div>
</template>

<style lang="less" scoped>
.xlsx {
    margin-top: 20px;

    .word-upload {
        width: 300px;
        margin: 0 auto 20px;
    }
}

@media screen and (max-width: 768px) {
    .word-upload {
        width: 18.75rem;
        margin-bottom: 1.25rem;
    }
    .xlsx {
        margin-top: 1.25rem;
    }
}
</style>