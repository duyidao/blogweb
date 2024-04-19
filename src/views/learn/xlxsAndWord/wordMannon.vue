<script setup>
import { renderAsync } from 'docx-preview'

const wordRef = ref(null)

const changeFn = e => {
    const file = e.target.files[0]
    renderAsync(file, wordRef.value)
}
</script>

<template>
    <div class="word">
        <input type="file"
            name="file"
            id="file"
            @change="changeFn">
        <div ref="wordRef"></div>
    </div>
</template>

<style lang="less" scoped>

</style>