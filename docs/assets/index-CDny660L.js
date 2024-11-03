import{_ as d}from"./index-zFnsEwUL.js";import{y as s,R as c,o as m,k as u,w as a,I as l}from"./index-DkCtX0Ob.js";import"./index-AOJ66j9L.js";const n=`const fn = () => {
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
})`,h={__name:"index",setup(r){const e=()=>{document.hidden?document.title="页面离开咯":document.title="页面回来咯"};return s(()=>{document.addEventListener("visibilitychange",e)}),c(()=>{document.title="刀刀博客小站",document.removeEventListener("visibilitychange",e)}),(p,t)=>{const o=d;return m(),u(o,{title:"页面可见度",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:n,"onUpdate:modelValue":t[0]||(t[0]=i=>n=i),type:"javascript",disabled:""},{default:a(()=>[l(" 页面可见度 ")]),_:1})}}};export{h as default};
