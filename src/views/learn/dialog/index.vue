<script setup>
import Dialog from './dialog.vue'

const show = ref(false)
</script>

<template>
    <div class="box">
        <div>
            <button class="transition-color" @click.stop="show = true">点击唤起弹窗</button>
        </div>
        <Dialog v-model:show="show"
            width="600"
            marginTop="200">
            <template #title>
                <div>
                    信息标题
                </div>
            </template>
            <template #content>
                <div>
                    知识应该共享
                </div>
            </template>
        </Dialog>
    </div>
</template>

<style lang="less" scoped>
.box {
    padding: 15px;
}
</style>