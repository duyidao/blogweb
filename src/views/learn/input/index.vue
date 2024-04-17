<script setup>
import inputComp from './input.vue'

const inputValue = ref('daodao')
const inputValueNum = ref(11)
</script>

<template>
    <div class="input-info">
        <div>
            <span>文本输入框，父组件内容 {{ inputValue }}</span>
            <inputComp v-model:msg="inputValue" />
        </div>
        <div>
            <span>多行文本框，父组件内容 {{ inputValue }}</span>
            <inputComp type="textarea"
                v-model:msg="inputValue" />
        </div>
        <div>
            <span>数字框，父组件内容 {{ inputValueNum }}</span>
            <inputComp type="number"
                v-model:msg="inputValueNum" />
        </div>
    </div>
</template>

<style lang="less"
    scoped>
    .input-info {
        margin-top: 20px;
        padding: 0 15px;

        >div {
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            span {
                margin-bottom: 8px;
            }
        }
    }
</style>