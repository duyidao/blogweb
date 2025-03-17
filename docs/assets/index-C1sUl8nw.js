import{_ as l}from"./index-lqaWdkyv.js";import{c as e,m as t}from"./effect-CPvDC59a.js";import n from"./feTurbulence-nRw8wepY.js";import{C as r,P as i,o,B as s,s as u,q as c}from"./vender-CcOEkWCz.js";import"./index-R7MN-9XR.js";import"./peter-mI1k7hEE.js";const y={__name:"index",setup(p){return r(()=>{e.value=[`<script setup>
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
      tbRef.value.setAttribute('baseFrequency', \`0 \${val.value}\`)
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
<\/script>

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
</template>`],t.value={type:"vue",activeIndex:0}}),i(()=>{e.value=[""],t.value={type:"javascript",activeIndex:0}}),(m,v)=>{const a=l;return o(),s(a,{title:"纹理适配"},{default:u(()=>[c(n)]),_:1})}}};export{y as default};
