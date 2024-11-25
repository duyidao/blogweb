<script setup>
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
  console.log('colors', colors)
  bgColor.value = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
  console.log('bgColor.value', bgColor.value);
}

const handlerMouseLeave = () => {
  hoverIndex.value = -1;
  bgColor.value = 'transparent';
}
</script>

<template>
  <div class="iframe-box box">
    <IframeItemModel>
      <div class="palette-imgs" :style="{'--bg': bgColor}">
        <img v-for="(item, index) in imgs"
          :key="item"
          :src="item"
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
  justify-content: space-between;
  background-color: var(--bg);
  img {
    width: 46%;
    margin: 10px 0;
  }
}
</style>