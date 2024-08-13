<script setup>
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { oneDark } from '@codemirror/theme-one-dark';
import { screenWidth } from "@/store/index.js";

const props = defineProps({
    language: {
        type: String,
        default: 'css'
    },
    disabled: {
        type: [String, Boolean],
        default: false
    },
    style: {
        type: [Object],
        default: () => ({})
    }
})
const emit = defineEmits(['change'])

const { language, disabled, style } = toRefs(props)

const lang = { javascript, css }[language.value];
const extensions = [lang(), oneDark]
const code = defineModel()
const comStyle = computed(() => ({ ...style.value, ...{ height: screenWidth.value > 768 ? '300px' : '18.75rem' } }));

const handleChange = e => {
    emit('change', e);
}
</script>

<template>
    <Codemirror :disabled="disabled"
        v-model="code"
        placeholder="暂无数据..."
        :style="comStyle"
        :autofocus="false"
        :indent-with-tab="true"
        :tabSize="2"
        :fullScreen="true"
        :extensions="extensions"
        @change="handleChange">
    </Codemirror>
</template>