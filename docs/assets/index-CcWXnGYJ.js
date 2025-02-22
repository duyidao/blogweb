define(["exports","./index-fE1ZY-zZ","./effect-CbHB8Sih","./index-DBYi-z7C","./vender-CF49NVAq","./index-BfVzJLus"],function(a,m,l,n,e,u){"use strict";const s=e.defineComponent({name:"瀑布流"}),p={__name:"index",setup(g){const i={flexCode:`<template>
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
</style>`},c=n.getDict("css.waterfall"),d=e.ref([]);return d.value=c.map(t=>({...t,model:i[t.name+"Code"],component:Object.freeze(n.cssChildData.value[t.name])})),e.onMounted(()=>{l.codeList.value=c.map(t=>({name:t.title+"源码",value:i[t.name+"Code"]})),l.modelInfo.value={...l.modelInfo.value,type:"vue",activeIndex:0}}),e.onUnmounted(()=>{l.codeList.value=[""],l.modelInfo.value={...l.modelInfo.value,type:"javascript",activeIndex:0}}),(t,f)=>{const r=m.__unplugin_components_0;return e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),o=>(e.openBlock(),e.createBlock(r,{key:o.name,type:"css",title:o.title},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(o.component)))]),_:2},1032,["title"]))),128)}}};a.componentOptions=s,a.default=p,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
