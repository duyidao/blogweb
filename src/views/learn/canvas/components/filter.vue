<script setup>
const imgUrl = ref('')
const imgRef = ref(null)
const filter = ref(null)

const onChangeFn = e => {
    // 获取用户上传的文件
    const file = e.target.files[0]

    // 预览文件
    let fr = new FileReader()
    fr.readAsDataURL(file)

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
    console.log('imageData', imageData);
    let _len = imageData.data.length
    for (let i = 0; i < _len; i++) {
        if (i % 2 === 0) {
            imageData.data[i] = 0
        }
    }

    // 清空 canvas
    ctx.clearRect(0, 0, imgRef.value.width, imgRef.value.height)

    console.log('imageData', imageData);
    // 重新绘制像素
    ctx.putImageData(imageData, 0, 0)
}
</script>

<template>
    <div ref="filter" class="filter">
        <input type="file"
            @change="onChangeFn" />
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