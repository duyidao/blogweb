<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
import inputComp from './input.vue';

const inputValue = ref('daodao');
const inputValueNum = ref(11);
</script>

<template>
    <IframeBoxItem title="input组件封装"
        column
        :needCode="false"
        class="input-info">
        <div class="input-info-item">
            <span class="">文本输入框，父组件内容 {{ inputValue }}</span>
            <inputComp v-model:msg="inputValue" />
        </div>
        <div class="input-info-item">
            <span class="">多行文本框，父组件内容 {{ inputValue }}</span>
            <inputComp type="textarea"
                v-model:msg="inputValue" />
        </div>
        <div class="input-info-item">
            <span class="">数字框，父组件内容 {{ inputValueNum }}</span>
            <inputComp type="number"
                v-model:msg="inputValueNum" />
        </div>
    </IframeBoxItem>
</template>

<style lang="less"
    scoped>
    .input-info {
        margin-top: 20px;
        padding: 0 15px;

        .input-info-item {
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-bottom: 20px;

            span {
                margin-bottom: 8px;
                color: var(--catalogue-word);
            }
        }
    }
</style>