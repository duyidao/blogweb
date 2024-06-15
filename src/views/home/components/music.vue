<script setup>
import { light } from '@/store/index'
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import musicShi from '@/assets/music/shi.mp3'
import lrcShi from '@/assets/music/shi.js'
import coverLike from '@/assets/img/music/likeme.webp'
import musicLike from '@/assets/music/likeme.mp3'
import lrcLike from '@/assets/music/likeme.js'
import coverShi from '@/assets/img/music/shi.webp'
import musicPeter from '@/assets/music/peter.mp3'
import coverPeter from '@/assets/img/music/peter.webp'
import musicShape from '@/assets/music/shape.mp3'
import coverShape from '@/assets/img/music/shape.webp'

const musicRef = ref(null);
const ap = ref(null)

onMounted(() => {
    ap.value = new APlayer({
        container: musicRef.value,
        lrcType: 1,
        theme: light.value ? '#fff' : '#555',
        audio: [
            {
                name: '杀死那个石家庄人',
                artist: '万能青年旅店',
                url: musicShi,
                lrc: lrcShi,
                cover: coverShi
            },
            {
                name: 'Peter Pan Was Right',
                artist: 'Anson Seabra',
                url: musicPeter,
                cover: coverPeter
            },
            {
                name: 'Shape of You',
                artist: 'Ed Sheeran',
                url: musicShape,
                cover: coverShape
            },
            {
                name: '像我这样的人',
                artist: '毛不易',
                url: musicLike,
                lrc: lrcLike,
                cover: coverLike
            },
        ]
    });
});

watch(() => light.value, () => {
    ap.value.audio.theme = light.value ? '#fff' : '#555'
})
</script>

<template>
    <div ref="musicRef"
        class="home-music"></div>
</template>

<style lang="less" scoped>
.home-music {
    width: 49%;
    height: 136px;
    padding: 10px;
    margin: 0 0 0 2%;
    border-radius: 12px;
    font-family: "黑体";
    font-size: 25px;
    box-shadow: 0 0 8px 1px #ccc;
    overflow-y: scroll;

    &.aplayer {
        background-color: transparent;
    }

    :deep(.aplayer-info) {
        padding-top: 0;

        .aplayer-music {
            line-height: 20px;
        }


        button {
            min-width: 0;
        }
    }
}

@media screen and (max-width: 768px) {
    .home-music {
        width: 100%;
        height: 8.5rem;
        padding: .625rem;
        border-radius: .75rem;
        font-size: 1.5625rem;
        box-shadow: 0 0 .5rem .0625rem #ccc;
        margin-top: 1.25rem;

        :deep(.aplayer-info) {
            .aplayer-music {
                line-height: 1.25rem;
            }
        }
    }
}
</style>