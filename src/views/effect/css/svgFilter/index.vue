<script setup>
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表
import FeTurbulence from './components/feTurbulence.vue';

onMounted(() => {
  codeList.value = [`\<script setup\>
import gsap from 'gsap';

const tbRef = ref(null)
const imgRef = ref(null)
const timer = ref(null)
const val = {
  value: 0
}

const init = () => {
  const tl = new gsap.timeline({
    paused: true,
    onUpdate() {
      tbRef.value.setAttribute('baseFrequency', \`0 \${val.value\}\`)
    }
  });
  tl.to(val, {
    value: 0.00001,
    duration: 0.2,
  })
  tl.to(val, {
    value: 0.4,
    duration: 0.2,
  })
  tl.to(val, {
    value: 0.00001,
    duration: 0.2,
  })
  tl.to(val, {
    value: 0.4,
    duration: 0.2,
  })
  tl.to(val, {
    value: 0.00001,
    duration: 0.2,
  })
  tl.to(val, {
    value: 0,
    duration: 0.2,
  })

  imgRef.value.addEventListener('load', () => {
    tl.play();
  }, { once: true });

  timer.value = setInterval(() => {
    tl.restart();
  }, 5000);
}

onMounted(() => {
  init();
})

onUnmounted(() => {
  clearInterval(timer.value);
  timer.value = null;
})
\<\/script\>

<template>
  <div class="feTurbulence">
    <img ref="imgRef" src="../../../../../assets/img/music/peter.webp"
      alt="">
    <svg style="display: none;">
      <defs>
        <filter id="noise"
          color-interpolation-filters="linearRGB"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse">
          <feTurbulence ref="tbRef" type="turbulence"
            baseFrequency="0 0"
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence" />
          <feDisplacementMap in="SourceGraphic"
            in2="turbulence"
            scale="30"
            xChannelSelector="R"
            yChannelSelector="B"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="displacementMap" />
        </filter>
      </defs>
    </svg>
  </div>
</template>`];
  modelInfo.value = {
    type: 'vue',
    activeIndex: 0,
  };
});

onUnmounted(() => {
  codeList.value = [''];
  modelInfo.value = {
    type: 'javascript',
    activeIndex: 0,
  };
});
</script>

<template>
  <IframeItemModel title="纹理适配">
    <FeTurbulence/>
  </IframeItemModel>
</template>