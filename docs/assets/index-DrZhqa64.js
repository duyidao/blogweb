define(["exports","./index-fE1ZY-zZ","./effect-CbHB8Sih","./index-DBYi-z7C","./index-BfVzJLus","./vender-CF49NVAq"],function(a,d,o,n,m,e){"use strict";var i=document.createElement("style");i.textContent=`.scrollbar[data-v-184fcb67]{height:2000px}.scrollbar[data-v-184fcb67] .iframe-item-model{position:fixed;width:96.5%}.scrollbar[data-v-184fcb67] .iframe-item-model:last-child{top:420px}.scrollbar[data-v-184fcb67] .iframe-item-model .iframe-item-model__content,.scrollbar[data-v-184fcb67] .iframe-item-model .iframe-item-model__content__info{min-height:auto}.scrollbar[data-v-184fcb67] .iframe-item-model .iframe-item-model__content__info{height:130px}
`,document.head.appendChild(i);const p={class:"scrollbar"},u={__name:"index",setup(_){const r={linearBorderCode:`<template>
  <!-- 滚动条 -->
  <div v-if="!isNaN(scrollProgress)"
    id="scroll-angle"
    :style="{
      background: \`conic-gradient(from 0deg, #008eff 0%, orange \${scrollAngle}deg, \${light.value ? '#000' : '#616161'
        } \${scrollAngle}deg\`,
    }">
    {{ scrollProgress }}
  </div>
</template>

<style lang="less" scoped>
#scroll-angle {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  color: var(--catalogue-word);
  margin-right: 15px;
  z-index: 5;

  &::before {
    content: "";
    position: absolute;
    inset: 3px;
    background-color: var(--body-bg);
    z-index: -1;
  }
}

@media screen and (max-width: 768px) {
  #scroll-angle {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: .9375rem;

    &::before {
      inset: .1875rem;
      z-index: -1;
    }
  }
}
</style>`,rippleCode:`<template>
  <div class="ripple"
    :style="{ '--completion': scrollProgress + '%' }">
    <output name="result"
      for="completion">{{ scrollProgress }}</output>
  </div>
</template>

<style lang="less"
  scoped>
  .ripple {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid #000;
    background-color: transparent;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: calc(100% - var(--completion));
      display: block;
      width: 200%;
      height: 200%;
      translate: -50% 0;
      background-color: #fff;
      border-radius: 25px;
      animation: spin 5s linear infinite;
      z-index: -1;
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>`},c=n.getDict("css.scrollBar"),s=e.ref([]);return s.value=c.map(t=>({...t,model:r[t.name+"Code"],component:Object.freeze(n.cssChildData.value[t.name])})),e.onMounted(()=>{o.codeList.value=c.map(t=>({name:t.title+"源码",value:r[t.name+"Code"]})),o.modelInfo.value={...o.modelInfo.value,type:"vue",activeIndex:0}}),e.onUnmounted(()=>{o.codeList.value=[""],o.modelInfo.value={...o.modelInfo.value,type:"javascript",activeIndex:0}}),(t,b)=>{const g=d.__unplugin_components_0;return e.openBlock(),e.createElementBlock("div",p,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s),l=>(e.openBlock(),e.createBlock(g,{key:l.name,title:l.title},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(l.component)))]),_:2},1032,["title"]))),128))])}}},f=m._export_sfc(u,[["__scopeId","data-v-184fcb67"]]);a.default=f,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
