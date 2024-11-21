import{_ as d}from"./index-CeUACfS6.js";import{v as m,O as s,o as c,h as u,w as a,G as l}from"./index-B4Ak3llr.js";import"./index-DD8HaGwq.js";import"./index-DSGdWxyF.js";const n=`const fn = () => {
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
})`,b={__name:"index",setup(r){const e=()=>{document.hidden?document.title="页面离开咯":document.title="页面回来咯"};return m(()=>{document.addEventListener("visibilitychange",e)}),s(()=>{document.title="刀刀博客小站",document.removeEventListener("visibilitychange",e)}),(p,t)=>{const o=d;return c(),u(o,{title:"页面可见度",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:n,"onUpdate:modelValue":t[0]||(t[0]=i=>n=i),type:"javascript",disabled:""},{default:a(()=>[l(" 页面可见度 ")]),_:1})}}};export{b as default};
