<script setup>
import flowImg from '@/assets/img/drawbed/canvas/filter.png'
import { codeList } from '@/store/effect.js'; // 引入代码列表
import ColorThief from 'colorthief';
import img1 from '@/assets/img/music/likeme.webp';
import img2 from '@/assets/img/music/peter.webp';
import img3 from '@/assets/img/music/shape.webp';
import img4 from '@/assets/img/music/shi.webp';

const colorThief = new ColorThief();

const imgs = [img1, img2, img3, img4];
const bgColor = ref('transparent');

const hoverIndex = ref(-1);
const handlerMouseEnter = async (img, i) => {
  hoverIndex.value = i;
  let colors = await colorThief.getColor(img, 5);
  bgColor.value = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
}

const handlerMouseLeave = () => {
  hoverIndex.value = -1;
  bgColor.value = 'transparent';
}

onMounted(() => {
  codeList.value = [`import ColorThief from 'colorthief';
import img1 from '@/assets/img/music/likeme.webp';
import img2 from '@/assets/img/music/peter.webp';
import img3 from '@/assets/img/music/shape.webp';
import img4 from '@/assets/img/music/shi.webp';

const colorThief = new ColorThief();

const imgs = [img1, img2, img3, img4];
const bgColor = ref('transparent');

const hoverIndex = ref(-1);
const handlerMouseEnter = async (img, i) => {
  hoverIndex.value = i;
  let colors = await colorThief.getColor(img, 5);
  console.log('colors', colors)
  bgColor.value = \`rgb(\${colors[0]}, \${colors[1]}, \${colors[2]})\`;
  console.log('bgColor.value', bgColor.value);
}

const handlerMouseLeave = () => {
  hoverIndex.value = -1;
  bgColor.value = 'transparent';
}`];
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <div class="iframe-box box">
    <IframeItemModel :flowImg="flowImg">
      <div class="palette-imgs" :style="{'--bg': bgColor}">
        <img v-for="(item, index) in imgs"
          :key="item"
          :src="item"
          :class="{'active': hoverIndex === index, 'unactive': hoverIndex !== -1 && hoverIndex !== index}"
          @mouseenter="handlerMouseEnter($event.target, index)"
          @mouseleave="handlerMouseLeave" />
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less" scoped>
.palette-imgs {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: var(--bg);
  gap: 10px;
  img {
    width: 46%;
    max-width: 400px;
    transition: all .3s;
    opacity: .75;

    &.active {
      transform: translateY(-3px);
      opacity: 1;
      box-shadow: 0 0 7px 0px #333;
    }

    &.unactive {
      opacity: .35;
    }
  }
}
</style>