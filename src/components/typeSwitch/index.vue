<script setup>
import { screenWidth } from '@/store/index.js'

const type = defineModel()

defineProps({
    title: {
        type: String,
        default: ''
    }
})

const handleTypeChange = (params) => {
    if (screenWidth.value > 768) type.value = params
    else type.value = type.value === 'list' ? 'img' : 'list'
}

const width = computed(() => screenWidth.value > 768 ? '20px' : 20)
const height = computed(() => screenWidth.value > 768 ? '20px' : 20)
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
                <SvgIcon :width="width"
                    :height="height"
                    name="list-type" />
            </div>
            <div :class="{ 'article-change-item': true, 'active': type === 'img' }"
                class="transition-color"
                @click.stop="handleTypeChange('img')">
                <SvgIcon :width="width"
                    :height="height"
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
    height: 100px;
    margin-bottom: 20px;
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
        height: 5.5rem;
        margin-bottom: 1.25rem;
        border-bottom: .0625rem solid var(--primary-bg);

        .article-title {
            font-size: 2.2rem;
        }

        .article-change {
            position: relative;
            display: block;
            width: 4rem;
            height: 4rem;

            .article-change-item {
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: .625rem;
                z-index: 1;

                &.active {
                    z-index: 5;
                }

                &:first-child,
                &:last-child {
                    border-radius: 50% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
            }
        }
    }
}
</style>