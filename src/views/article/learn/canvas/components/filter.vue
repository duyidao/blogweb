<script setup>
const imgUrl = ref('')
const imgRef = ref(null)
const filter = ref(null)

const onChangeFn = e => {
    // 预览文件
    let fr = new FileReader()
    fr.readAsDataURL(e)

    // 获取图片读完的图片结果（非同步，需要在onload获取）
    fr.onload = () => {
        imgUrl.value = fr.result
    }
}

const addFn = () => {
    const filterCanvas = document.createElement('canvas')
    filterCanvas.height = imgRef.value.height || '400px'
    filterCanvas.width = imgRef.value.width
    filter.value.appendChild(filterCanvas)

    let ctx = filterCanvas.getContext('2d')
    ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height)

    // 获取像素值
    let imageData = ctx.getImageData(0, 0, imgRef.value.width, imgRef.value.height)
    let _len = imageData.data.length
    for (let i = 0; i < _len; i++) {
        if (i % 2 === 0) {
            imageData.data[i] = 0
        }
    }

    // 清空 canvas
    ctx.clearRect(0, 0, imgRef.value.width, imgRef.value.height)

    // 重新绘制像素
    ctx.putImageData(imageData, 0, 0)
}
</script>

<template>
    <div ref="filter" class="filter">
        <div class="filter-upload">
            <myUpload @change="onChangeFn" />
        </div>
        <img :src="imgUrl"
            ref="imgRef" />
        <button v-if="imgUrl" @click="addFn">
            点我添加滤镜
        </button>
    </div>
</template>

<style lang="less" scoped>
.filter {
    display: flex;
    flex-direction: column;
    align-items: center;

    .filter-upload {
        width: 300px;
    }

    button {
        margin: 20px;
    }

    img {
        width: 300px;
        margin-top: 20px;
    }
}

@media screen and (max-width: 768px) {
    .filter {
        .filter-upload {
            width: 18.75rem;
        }
        
        button {
            margin: 1.25rem;
        }

        img {
            width: 18.75rem;
            margin-top: 1.25rem;
        }
    }
}
</style>