import{_ as m}from"./index-XsxDcAeB.js";import{c as i,m as s}from"./effect-B-ud8mgY.js";import{g as c,c as p}from"./index-B7ij133t.js";import{l as u,r as f,v,P as g,o as a,c as h,f as x,h as r,w as y,i as w,u as _,F as C}from"./index-Ct9s1DbM.js";const R=u({name:"瀑布流"}),b={__name:"index",setup(k){const l={flexCode:`<template>
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
</style>`},n=c("css.waterfall"),o=f([]);return o.value=n.map(e=>({...e,model:l[e.name+"Code"],component:Object.freeze(p.value[e.name])})),v(()=>{i.value=n.map(e=>({name:e.title+"源码",value:l[e.name+"Code"]})),s.value={type:"vue",activeIndex:0}}),g(()=>{i.value=[""],s.value={type:"javascript",activeIndex:0}}),(e,I)=>{const d=m;return a(!0),h(C,null,x(_(o),t=>(a(),r(d,{key:t.name,type:"css",title:t.title},{default:y(()=>[(a(),r(w(t.component)))]),_:2},1032,["title"]))),128)}}};export{R as componentOptions,b as default};
