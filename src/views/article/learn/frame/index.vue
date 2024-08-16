<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
const box = ref(null);

const drawVideo = vdo => {
    return new Promise(resolve => {
        const cvs = document.createElement('canvas');
        const ctx = cvs.getContext('2d');
        cvs.width = vdo.videoWidth;
        cvs.height = vdo.videoHeight;
        ctx.drawImage(vdo, 0, 0, cvs.width, cvs.height);
        cvs.toBlob(blob => {
            resolve({
                blob,
                url: URL.createObjectURL(blob)
            });
        });
    });
}

const captureImg = frame => {
    const img = document.createElement('img');
    img.src = frame;
    box.value.appendChild(img);
}

/**
 * 获取视频画面帧
 * @params vdoFile: 视频文件
 * @params time: 第几帧
 * @return 返回blob和url
 */
const captureFrame = (vdoFile, time = 0) => {
    return new Promise(resolve => {
        const vdo = document.createElement('video');
        vdo.currentTime = time; // 视频定格
        vdo.muted = true; // 静音播放
        vdo.autoplay = true; // 视频自动播放
        vdo.oncanplay = () => {
            setTimeout(async () => {
                const res = await drawVideo(vdo);
                resolve(res);
            }, 1000);
        }
        vdo.src = URL.createObjectURL(vdoFile); // 把object url赋值给video标签的src，blob:为前缀，复制粘贴到新的网页打开就能看到视频
    });
}

const onChangeFn = async e => {
    if (!e) return;
    for (let i = 0; i < 10; i++) {
        const res = await captureFrame(e, (i + 50) * 1);
        captureImg(res.url);
    }
}
</script>

<template>
    <IframeBoxItem title="画面帧"
        column
        :needCode="false"
        class="ifrname-box box">
        <myUpload @change="onChangeFn" />
        <div ref="box"
            class="box-img"></div>
    </IframeBoxItem>
</template>

<style lang="less"
    scoped>
    .box {
        :deep(.upload) {
            width: 100%;
        }

        :deep(canvas) {
            display: block;
            width: 100%;
            margin-top: 20px;
            object-fit: cover;
        }

        .box-img {
            width: 100%;
        }
    }
</style>