<script setup>
import { Codemirror } from 'vue-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { css } from '@codemirror/lang-css';
import { vue } from '@codemirror/lang-vue';
import { oneDark } from '@codemirror/theme-one-dark';
import { screenWidth } from "@/store/index.js";
import { useUnit } from "@/store/rem.js";

const props = defineProps({
    language: {
        type: String,
        default: 'css'
    },
    height: {
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
});
const emit = defineEmits(['change']);

const { language, disabled, style } = toRefs(props);

const lang = ref(null);
const extensions = ref(null);

watch(() => language.value, () => {
    lang.value = { javascript, css, vue }[language.value];
    extensions.value = [lang.value(), oneDark];
}, { immediate: true });

const code = defineModel();

const { px2rem } = useUnit();
const comStyle = computed(() => ({ ...style.value, ...{ height: screenWidth.value > 768 ? props.height + 'px' : px2rem(props.height) } }));

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