import{_ as d}from"./index-M8MeMDs0.js";import{c as s,m as t}from"./effect-a2W-tOnW.js";import{g as c,c as p}from"./index-CQsm-A3v.js";import{M as u,r as v,C as f,P as g,o as l,a as h,v as x,B as r,s as y,L as w,u as _,F as C}from"./vender-BxpIRFvU.js";import"./index-N5uH88Uw.js";const R=u({name:"瀑布流"}),b={__name:"index",setup(k){const n={flexCode:`<template>
  <div class="water-fall-flex">
    <div v-for="item in generateArticleRoutes" :key="item.path" >
      <img :src="item.meta.img" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped>
.water-fall-flex {
  display: flex;
  flex-direction: column;
  height: 1250px;
  flex-wrap: wrap;
  gap: 11px;
  padding: 11px;
  overflow: hidden;

  div {
    width: 25%;

    &:nth-child(4n+1) {
        order: 1;
    }
    &:nth-child(4n+2) {
        order: 2;
    }
    &:nth-child(4n+3) {
        order: 3;
    }
    &:nth-child(4n) {
        order: 4;
    }
  }
}
</style>`,gridCode:`<template>
  <div class="water-fall-grid">
    <div v-for="item in generateArticleRoutes"
      :key="item.path">
      <img :src="item.meta.img"
        alt="">
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .water-fall-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: masonry;
    gap: 20px;

    div {
      width: 100%;
    }
  }
</style>`,columnCountCode:`<template>
  <div class="water-fall-column">
    <div v-for="item in generateArticleRoutes"
      :key="item.path">
      <img :src="item.meta.img"
        alt="">
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .water-fall-column {
    column-count: 4;
    column-gap: 20px;
    grid-template-rows: masonry;
    gap: 20px;

    div {
      display: block;
      width: 100%;
      padding: 10px 0;
    }
  }
</style>`},o=c("css.waterfall"),i=v([]);return i.value=o.map(e=>({...e,model:n[e.name+"Code"],component:Object.freeze(p.value[e.name])})),f(()=>{s.value=o.map(e=>({name:e.title+"源码",value:n[e.name+"Code"]})),t.value={...t.value,type:"vue",activeIndex:0}}),g(()=>{s.value=[""],t.value={...t.value,type:"javascript",activeIndex:0}}),(e,I)=>{const m=d;return l(!0),h(C,null,x(_(i),a=>(l(),r(m,{key:a.name,type:"css",title:a.title},{default:y(()=>[(l(),r(w(a.component)))]),_:2},1032,["title"]))),128)}}};export{R as componentOptions,b as default};
