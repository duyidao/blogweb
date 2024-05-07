<script setup lang="ts">
const contentRef = ref()
onMounted(() => {
    contentRef.value.addEventListener('paste', (e) => {
        console.log('e', e);
        if(e.clipboardData.files.length > 0) {
            e.preventDefault();
            
            const file = e.clipboardData.files[0];
            console.log('file', file);
            
            const reader = new FileReader();
            reader.onload = function (e) {
                console.log('reader', e);
                const data = e.target.result;
                console.log('data', data);
                const img = document.createElement('img');
                img.src = data;
                contentRef.value.appendChild(img)
            }
            reader.readAsDataURL(file);
        }
    })
})
</script>

<template>
    <div class="transition-color" ref="contentRef" contenteditable></div>
</template>

<style scoped>
div {
    padding: .9375rem;
    border: 1px solid var(--primary-info);
    color: var(--primary-info);
}
</style>