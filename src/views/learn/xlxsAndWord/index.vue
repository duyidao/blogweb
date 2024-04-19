<script setup>
import xlsxComp from './xlsx.vue'
import listToXlsxComp from './listToXlsx.vue'
import xlsxRead from './xlsxRead.vue'
import wordComp from './word.vue'
import wordMannon from './wordMannon.vue'
</script>

<template>
    <div class="ifrname-box xlsx-word">
        <div class="box">
            <div class="iframe-box-title transition-color">excel转为表格</div>
            <xlsxComp />
        </div>
        <div class="box">
            <div class="iframe-box-title transition-color">表格转为excel</div>
            <listToXlsxComp />
        </div>
        <div class="box">
            <div class="iframe-box-title transition-color">
                在线预览excel
                <span class="iframe-box-title-small transition-color">选择一个xlsx，模拟前端从后端接口获取xlsx数据</span>
            </div>
            <xlsxRead />
        </div>
        <div class="box">
            <div class="iframe-box-title transition-color">word组件预览</div>
            <wordComp />
        </div>
        <div class="box">
            <div class="iframe-box-title transition-color">word mammon预览</div>
            <wordMannon />
        </div>
    </div>
</template>

<style lang="less" scoped>
.box {
    margin-bottom: 30px;
}
</style>