import{_ as p}from"./index-C0Qkb3aG.js";import{c as l,m as t}from"./effect-DhKjLWT_.js";import{g as m,c as u}from"./index-BcajuRbT.js";import{_ as g,r as f,q as v,N as x,o,c as i,F as _,f as h,h as c,w as b,i as y,u as k}from"./index-BQ62l90Z.js";const w={class:"scrollbar"},C={__name:"index",setup(I){const r={linearBorderCode:`<template>
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
</style>`},n=m("css.scrollBar"),s=f([]);return s.value=n.map(e=>({...e,model:r[e.name+"Code"],component:Object.freeze(u.value[e.name])})),v(()=>{l.value=n.map(e=>({name:e.title+"源码",value:r[e.name+"Code"]})),t.value={...t.value,type:"vue",activeIndex:0}}),x(()=>{l.value=[""],t.value={...t.value,type:"javascript",activeIndex:0}}),(e,z)=>{const d=p;return o(),i("div",w,[(o(!0),i(_,null,h(k(s),a=>(o(),c(d,{key:a.name,title:a.title},{default:b(()=>[(o(),c(y(a.component)))]),_:2},1032,["title"]))),128))])}}},L=g(C,[["__scopeId","data-v-184fcb67"]]);export{L as default};
