import{_ as s}from"./index-DZTgiSRA.js";import{C as d,O as m,o as c,B as l,s as a,M as u,u as r}from"./vender-Dkdm4IfB.js";import"./index-Ej0X0lxb.js";import"./index-DKBlgV4z.js";import"./rem-BfWmjlJA.js";import"./index-CY4hr8E5.js";const p="/blogweb/assets/visibilitychange-DOzH5DeN.png",n=`const fn = () => {
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
})`,x={__name:"index",setup(f){const e=()=>{document.hidden?document.title="页面离开咯":document.title="页面回来咯"};return d(()=>{document.addEventListener("visibilitychange",e)}),m(()=>{document.title="刀刀博客小站",document.removeEventListener("visibilitychange",e)}),(_,t)=>{const o=s;return c(),l(o,{title:"页面可见度",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:n,"onUpdate:modelValue":t[0]||(t[0]=i=>n=i),type:"javascript",flowImg:r(p),disabled:""},{default:a(()=>[u(" 页面可见度 ")]),_:1},8,["flowImg"])}}};export{x as default};
