import{_ as d}from"./index-BQKZimSG.js";import{q as s,M as m,o as c,h as l,w as a,E as u,u as r}from"./index-DiFe4JqO.js";import"./index-CmmZnrMl.js";import"./rem-xC5CoqQM.js";import"./index-DLh32JCa.js";const p="/blogweb/assets/visibilitychange-DOzH5DeN.png",n=`const fn = () => {
  if (document.hidden) {
    document.title = "页面离开咯";
  } else {
    document.title = "页面回来咯";
  }
}
onMounted(() => {
  document.addEventListener("visibilitychange", fn)
})

onUnmounted(() => {
  document.title = '刀刀博客小站'
  document.removeEventListener("visibilitychange", fn)
})`,y={__name:"index",setup(f){const e=()=>{document.hidden?document.title="页面离开咯":document.title="页面回来咯"};return s(()=>{document.addEventListener("visibilitychange",e)}),m(()=>{document.title="刀刀博客小站",document.removeEventListener("visibilitychange",e)}),(_,t)=>{const o=d;return c(),l(o,{title:"页面可见度",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:n,"onUpdate:modelValue":t[0]||(t[0]=i=>n=i),type:"javascript",flowImg:r(p),disabled:""},{default:a(()=>[u(" 页面可见度 ")]),_:1},8,["flowImg"])}}};export{y as default};
