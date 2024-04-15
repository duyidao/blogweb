<script setup>
import { screenWidth } from '@/store/index.js'

const type = defineModel()

defineProps({
    title: {
        type: String,
        default: ''
    }
})

const width = computed(() => screenWidth.value)

const handleTypeChange = (params) => {

    console.log('width.value', width.value);
    console.log('params', params);
    if (width.value > 768) type.value = params
    else type.value = type.value === 'list' ? 'img' : 'list'
}
</script>

<template>
    <div class="article-type transition-color">
        <div class="article-title transition-color">
            <span v-if="!$slots.default">{{ title }}</span>
            <slot v-else></slot>
        </div>

        <div class="article-change">
            <div :class="{ 'article-change-item': true, 'active': type === 'list' }"
                class="transition-color"
                @click.stop="handleTypeChange('list')">
                <SvgIcon width="15px"
                    height="15px"
                    name="list-type" />
            </div>
            <div :class="{ 'article-change-item': true, 'active': type === 'img' }"
                class="transition-color"
                @click.stop="handleTypeChange('img')">
                <SvgIcon width="15px"
                    height="15px"
                    name="img-type" />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.article-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
    padding: 0 20px 20px;
    border-bottom: 1px solid var(--primary-bg);

    .article-title {
        flex: 1;
        display: flex;
        align-items: center;
        height: 40px;
        font-size: 32px;
        color: var(--catalogue-word);

        span {
            font-weight: bold;
        }
    }

    .article-change {
        display: flex;
        align-items: center;

        .article-change-item {
            cursor: pointer;
            border: 1px solid var(--primary-bg);
            padding: 10px 24px;

            svg {
                fill: var(--catalogue-word);
            }

            &.active {
                svg {
                    fill: var(--normal-word);
                }

                background-color: var(--primary-bg);
            }

            &:first-child {
                border-radius: 20px 0 0 20px;
            }

            &:last-child {
                margin-left: -1px;
                border-radius: 0 20px 20px 0;
            }
        }
    }
}

@media screen and (max-width: 768px) {
    .article-type {
        padding-left: 0 !important;
        padding-right: 0 !important;

        .article-change {
            position: relative;
            display: block;
            width: 40px;
            height: 40px;

            .article-change-item {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 10px;
                z-index: 1;

                &.active {
                    z-index: 5;
                }

                &:first-child,
                &:last-child {
                    border-radius: 20px !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
            }
        }
    }
}
</style>