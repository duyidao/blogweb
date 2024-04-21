<script setup>
const imgUrl = ref('')
const canvasRef = ref(null)
const imgRef = ref(null)

const whData = ref({
    imgWidth: 0,
    imgHeight: 0,
    canvasWidth: 0,
    canvasHeight: 0,
    scale: 0,
    left: 0,
    top: 0
})
const onChangeFn = e => {
    // 获取用户上传的文件
    const file = e.target.files[0]

    // 预览文件
    let fr = new FileReader()
    fr.readAsDataURL(file)

    // 获取图片读完的图片结果（非同步，需要在onload获取）
    fr.onload = () => {
        console.log('fr', fr);
        imgUrl.value = fr.result

        let ctx = canvasRef.value.getContext('2d')

        setTimeout(() => {
            // 等比计算截取的图片宽高
            console.log('height', imgRef.value.height, imgRef.value.width);
            console.log('naturalHeight', imgRef.value.naturalHeight, imgRef.value.naturalWidth);
            let height = (200 / imgRef.value.height) * imgRef.value.naturalHeight
            let width = (200 / imgRef.value.width) * imgRef.value.naturalWidth
            console.log('height', height, width);

            ctx.drawImage(imgRef.value, 0, 0, width, height, 0, 0, 200, 200)
        }, 1000);
    }
}
</script>

<template>
    <div class="tailor">
        <input type="file"
            @change="onChangeFn" />
        <div>
            原图：
            <img :src="imgUrl"
                ref="imgRef" />
        </div>
        <div v-show="imgUrl">
            裁剪：
            <canvas ref="canvasRef"
                height="200"
                width="200"></canvas>
        </div>
    </div>
</template>

<style lang="less" scoped>
.tailor {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
        margin-bottom: 10px;
    }

    img {
        width: 300px;
    }

    .info {
        color: var(--primary-info);
        margin: 20px 0;
    }
}

@media screen and (max-width: 768px) {
    .tailor {

        input {
            margin-bottom: .625rem;
        }

        img {
            width: 18.75rem;
        }

        .info {
            margin: 1.25rem 0;
        }
    }
}
</style>