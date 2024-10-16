<script setup>
    
    import ifComp from './components/if.vue';
    import methodComp from './components/method.vue';
    import jsxComp from './components/jsx.vue';
    import mapComp from './components/map.vue';
</script>

<template>
    <div class="ifrname-box jsx-comp">
        <IframeItem title="v-if"
            :needCode="false"
            column
            class="box">
            <ifComp />
        </IframeItem>
        <IframeItem title="函数返回"
            :needCode="false"
            column
            class="box">
            <methodComp />
        </IframeItem>
        <IframeItem title="jsx"
            :needCode="false"
            column
            class="box">
            <jsxComp />
        </IframeItem>
        <IframeItem title="修改源数据"
            :needCode="false"
            column
            class="box">
            <mapComp />
        </IframeItem>
    </div>
</template>

<style scoped>
.box {
    width: 100%;
}
</style>