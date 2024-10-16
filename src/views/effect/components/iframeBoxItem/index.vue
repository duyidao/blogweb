<script setup>
// import Code from './code.vue';

defineProps({
    title: {
        type: String,
        default: '标题'
    },
    subtitle: {
        type: String,
        default: ''
    },
    needCode: {
        type: Boolean,
        default: true
    },
    column: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'css'
    },
});

// 双向绑定的代码样式
const code = defineModel();

const showCode = ref(false);
const handleClick = () => {
    showCode.value = !showCode.value;
}

defineExpose({
    showCode,
});
</script>

<script>
// 定义组件选项，包括名称
const componentOptions = defineComponent({
  name: 'IframeItem', // 设置组件名称
});

export {componentOptions};
</script>

<template>
    <div class="iframe-box-item">
        <div class="iframe-box-title">
            <span>{{ title }}</span>
            <span v-if="subtitle"
                class="iframe-box-title-small">{{ subtitle }}</span>
            <my-button v-if="needCode"
                class="iframe-box-button"
                :word="showCode ? '隐藏源码' : '源码展示'"
                @click="handleClick" />
        </div>
        <div class="iframe-box-content">
            <div :class="{ 'effect': true, 'showCode': showCode, 'column': column }">
                <slot></slot>
            </div>
            <Code v-show="showCode"
                class="code"
                :language="type"
                height="400"
                v-model="code">
            </Code>
        </div>
    </div>
</template>

<style lang="less"
    scoped>
    .iframe-box-item {
        width: 100%;

        .iframe-box-title {
            display: flex;
            align-items: center;
            position: relative;
            height: 50px;
            line-height: 50px;
            padding-left: 20px;
            margin: 20px 0;
            font-size: 20px;
            font-weight: bold;
            border-bottom: 1px solid var(--primary-border);
            color: var(--primary-info);

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                width: 8px;
                height: 30px;
                border-radius: 4px;
                background-color: var(--primary-border);
            }

            .iframe-box-title-small {
                font-size: 14px;
                margin-left: 10px;
            }

            .iframe-box-button {
                margin-left: 20px;
                box-shadow: 0 0 11px -6px rgb(35, 167, 243);
            }
        }

        .iframe-box-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;

            :deep(.cm-editor) {
                width: 100%;
            }

            .effect {
                display: flex;
                justify-content: start;
                align-items: center;
                width: 100%;
                height: 100%;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .iframe-box-item {

            .iframe-box-title {
                display: flex;
                align-items: center;
                height: 3.125rem;
                line-height: 3.125rem;
                padding-left: 1.25rem;
                margin: 1.25rem 0;
                font-size: 1.25rem;
                border-bottom-width: .0625rem;

                &::before {
                    width: .5rem;
                    height: 1.875rem;
                    border-radius: .25rem;
                }

                .iframe-box-title-small {
                    font-size: .875rem;
                    margin-left: .625rem;
                }

                .iframe-box-button {
                    margin-left: 1.25rem;
                    box-shadow: 0 0 .6875rem -0.375rem #000;
                }
            }

            .iframe-box-content {
                .effect {
                    &.showCode {
                        justify-content: center;
                        align-items: center;
                        width: 100%;
                        margin-bottom: 1rem;
                    }
                }
            }
        }
    }
</style>