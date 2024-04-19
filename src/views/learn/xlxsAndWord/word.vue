<script setup>
import vueOfficeWord from '@vue-office/docx'

const wordSrc = ref(null)

const changeFn = e => {
    const file = e.target.files[0]
    const fr = new FileReader()
    fr.readAsDataURL(file)
    fr.onload = (e) => {
        wordSrc.value = e.target.result
    }
}
</script>

<template>
    <div class="word">
        <input type="file"
            name="file"
            id="file"
            @change="changeFn">
        <vueOfficeWord v-if="wordSrc" :src="wordSrc" style="height: 500px;" />
    </div>
</template>

<style lang="less" scoped>

</style>