<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
import xlsxComp from './xlsx.vue';
import listToXlsxComp from './listToXlsx.vue';
import xlsxRead from './xlsxRead.vue';
import wordComp from './word.vue';
import wordMannon from './wordMannon.vue';
</script>

<template>
    <div class="ifrname-box xlsx-word">
        <IframeBoxItem
            class="box"
            :needCode="false"
            title="excel转为表格">
            <xlsxComp />
        </IframeBoxItem>
        <IframeBoxItem
            class="box"
            :needCode="false"
            title="表格转为excel">
            <listToXlsxComp />
        </IframeBoxItem>
        <IframeBoxItem
            class="box"
            :needCode="false"
            title="在线预览excel"
            subtitle="选择一个xlsx，模拟前端从后端接口获取xlsx数据">
            <xlsxRead />
        </IframeBoxItem>
        <IframeBoxItem
            class="box"
            :needCode="false"
            title="word组件预览">
            <wordComp />
        </IframeBoxItem>
        <IframeBoxItem
            class="box"
            :needCode="false"
            title="word mammon预览">
            <wordMannon />
        </IframeBoxItem>
    </div>
</template>

<style lang="less" scoped>
.box {
    margin-bottom: 30px;
}
</style>