<script setup>
import { light } from '@/store/index';
import APlayer from 'aplayer';
import '@/assets/style/APlayer.min.css';
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
import musicSoFar from '@/assets/music/so_far_away.mp3'
import lrcSoFar from '@/assets/music/so far away.js'
import coverSoFar from '@/assets/img/music/so far away.webp'
import musicSomething from '@/assets/music/something.mp3'
import lrcSomething from '@/assets/music/something.js'
import coverSomething from '@/assets/img/music/something.webp'

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
      {
        name: 'So far away',
        artist: 'Martin Garrix',
        url: musicSoFar,
        lrc: lrcSoFar,
        cover: coverSoFar
      },
      {
        name: 'Something just like this',
        artist: 'The Chainsmokers',
        url: musicSomething,
        lrc: lrcSomething,
        cover: coverSomething
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

<style lang="less"
  scoped>
  .home-music {
    width: 100%;
    height: 292px;
    padding: 10px;
    border-radius: 12px;
    font-family: "黑体";
    font-size: 25px;
    box-shadow: 0 0 8px 1px #ccc;
    margin: 0;

    &.aplayer {
      background-color: transparent;
    }

    :deep(.aplayer-info) {
      padding-top: 0;

      .aplayer-music {
        line-height: 20px;
      }

      .aplayer-lrc {
        height: 40px;
      }

      button {
        min-width: 0;
      }
    }

    :deep(.aplayer-list) {
      height: 190px;

      overflow-y: scroll;
    }
  }

  @media screen and (max-width: 768px) {
    .home-music {
      width: 100%;
      height: 17rem;
      padding: .625rem;
      border-radius: .75rem;
      font-size: 1.5625rem;
      box-shadow: 0 0 0.25rem #ccc;
      margin-top: 1.25rem;
      margin-left: 0;

      :deep(.aplayer-body) {
        .aplayer-pic {
          width: 6.625rem;
          height: 6.625rem;
        }

        .aplayer-info {
          height: 6.625rem;
          margin-left: 6.625rem;
          padding: .625rem .4375rem 0;

          .aplayer-music {
            line-height: 1rem;
            margin: 0 0 .8125rem .3125rem;
            padding-bottom: .125rem;
            height: 1.25rem;

            .aplayer-title {
              font-size: .875rem;
            }

            .aplayer-author {
              font-size: .75rem;
            }
          }

          .aplayer-lrc {
            height: 2.875rem;
            margin: -0.625rem 0 .4375rem;

            p {
              font-size: .75rem;
              line-height: 1rem;
              min-height: 1rem;
            }
          }

          .aplayer-controller {
            .aplayer-bar-wrap {
              margin: 0 0 0 .3125rem;
              padding: .25rem 0;
            }

            .aplayer-time {
              bottom: .25rem;
              height: 1.0625rem;
              font-size: .6875rem;
              padding-left: .4375rem;

              .aplayer-icon {
                width: .9375rem;
                height: .9375rem;
                font-size: .75rem;
              }
            }
          }
        }
      }

      :deep(.aplayer-list) {
        height: 11.875rem !important;

        ol {
          max-height: 11.875rem;

          li {
            height: 2rem;
            line-height: 2rem;
            padding: 0 .9375rem;
            font-size: .75rem;

            .aplayer-list-index {
              margin-right: .75rem;
            }
          }
        }
      }
    }
  }
</style>