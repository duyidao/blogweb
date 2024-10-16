<script setup>

</script>

<template>
    <div class="ifrname-box box">
        <IframeItem title="fit-content" :needCode="false">
            <div class="title-1">[class$="1"]、[class$="2"]、[class$="3"] 选择所有类名以 "1"、"2" 或 "3" 结尾的元素。$= 表示属性值以指定的字符串结束。</div>
        </IframeItem>
        <IframeItem
            title="max-content"
            subtitle="父组件不能设置width 100%，不然无效果"
            :needCode="false">
            <div class="title-2">[class$="1"]、[class$="2"]、[class$="3"] 选择所有类名以 "1"、"2" 或 "3" 结尾的元素。$= 表示属性值以指定的字符串结束。</div>
        </IframeItem>
        <IframeItem title="min-content" :needCode="false">
            <div class="title-3">[class$="1"]、[class$="2"]、[class$="3"] 选择所有类名以 "1"、"2" 或 "3" 结尾的元素。$= 表示属性值以指定的字符串结束。</div>
        </IframeItem>
    </div>
</template>

<style lang="less" scoped>
.box {
    width: 100%;

    [class^="title-"] {
        background-color: skyblue;
    }

    [class$="1"] {
        width: fit-content;
    }

    [class$="2"] {
        width: max-content;
    }

    [class$="3"] {
        width: min-content;
    }
}
</style>