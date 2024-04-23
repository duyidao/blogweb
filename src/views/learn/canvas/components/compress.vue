<script setup>
import { saveAs } from 'file-saver'

const imgUrl = ref('')
const imgInfo = ref({
    size: 0,
    blobsize: 0
})
const imgRef = ref(null)
const compress = ref(null)

// 获取图片
const onChangeFn = e => {
    // 获取用户上传的文件
    const file = e.target.files[0]

    // 预览文件
    let fr = new FileReader()
    fr.readAsDataURL(file)

    // 获取图片读完的图片结果（非同步，需要在onload获取）
    fr.onload = (e) => {
        imgInfo.value.size = file.size
        imgUrl.value = fr.result

        // 创建canvas真实dom元素
        let canvas = document.createElement('canvas')

        setTimeout(() => {
            canvas.height = imgRef.value.height
            canvas.width = imgRef.value.width

            compress.value.appendChild(canvas)

            // 创建2d上下文
            let ctx = canvas.getContext('2d')
            ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height)

            // 把canvas转为blob格式
            canvas.toBlob((blob) => {
                console.log('blob', blob);
                imgInfo.value.blobsize = blob.size
                saveAs(blob, 'img.jpeg')
                let form = new FormData()
                form.append('file', blob)
                // axios.post('xxx', form)
            }, 'image/jpeg', 0.4)
        }, 1000);
    }
}
</script>

<template>
    <div ref="compress"
        class="compress">
        <myUpload />
        <input type="file"
            @change="onChangeFn" />
        <div class="info transition-color">原图大小：{{ imgInfo.size }}，压缩后大小：{{ imgInfo.blobsize || 0 }}</div>
        <img ref="imgRef"
            :src="imgUrl" />
    </div>
</template>

<style lang="less" scoped>
.compress {
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
    .compress {

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