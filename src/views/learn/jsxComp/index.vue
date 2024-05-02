<script setup lang="ts">
import ifComp from './components/if.vue';
import methodComp from './components/method.vue';
import jsxComp from './components/jsx.vue';
import mapComp from './components/map.vue';
</script>

<template>
  <div class="ifrname-box jsx-comp">
        <div class="box">
            <div class="iframe-box-title">v-if</div>
            <ifComp />
        </div>
        <div class="box">
            <div class="iframe-box-title">函数返回</div>
            <methodComp />
        </div>
        <div class="box">
            <div class="iframe-box-title">jsx</div>
            <jsxComp />
        </div>
        <div class="box">
            <div class="iframe-box-title">修改源数据</div>
            <mapComp />
        </div>
    </div>
</template>

<style scoped>

</style>