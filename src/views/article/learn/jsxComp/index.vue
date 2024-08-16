<script setup>
    import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
    import ifComp from './components/if.vue';
    import methodComp from './components/method.vue';
    import jsxComp from './components/jsx.vue';
    import mapComp from './components/map.vue';
</script>

<template>
    <div class="ifrname-box jsx-comp">
        <IframeBoxItem title="v-if"
            :needCode="false"
            column
            class="box">
            <ifComp />
        </IframeBoxItem>
        <IframeBoxItem title="函数返回"
            :needCode="false"
            column
            class="box">
            <methodComp />
        </IframeBoxItem>
        <IframeBoxItem title="jsx"
            :needCode="false"
            column
            class="box">
            <jsxComp />
        </IframeBoxItem>
        <IframeBoxItem title="修改源数据"
            :needCode="false"
            column
            class="box">
            <mapComp />
        </IframeBoxItem>
    </div>
</template>

<style scoped>
.box {
    width: 100%;
}
</style>