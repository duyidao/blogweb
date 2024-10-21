<script setup>

import Dialog from './dialog.vue';

const show = ref(false);
const full = ref(false);

const showFn = () => {
    show.value = true;
    document.body.style.overflowY = 'hidden';
}
</script>

<template>
    <IframeItem title="弹窗组件" :needCode="false" class="iframe-box">
        <div>
            <button class="" @click.stop="showFn">点击唤起弹窗</button>
        </div>
        <Dialog v-model:show="show"
            v-model:fullDialog="full"
            center
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
    </IframeItem>
</template>

<style lang="less" scoped>
</style>