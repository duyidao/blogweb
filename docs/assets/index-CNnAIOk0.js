import{_ as p}from"./index-CA_JjYCt.js";import{_ as u,r as _,W as m,D as b,o as f,k as h,w as v,u as s,a as o,A as x,n as S,p as w,d as z}from"./index-w22fhRj8.js";const g=e=>(w("data-v-6ca93cf1"),e=e(),z(),e),y=g(()=>o("div",{class:"iframe-box-title"},[o("span",{class:"iframe-box-title-small"})],-1)),n=`// 配置监视盒子内容盒或边框盒或者 SVGElement 边界尺寸的变化函数
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    // 运行 entry.target 对应的回调函数
    // 保存映射表对应的方法
    const handler = map.get(entry.target)
    if (handler) {
      handler({
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      })
    }
  }
})

export default {
  // 监听el元素尺寸变化
  mounted(el, binding) {
    // 保存映射表对应的方法
    map.set(el, binding.value)
    ob.observe(el)
  },
  // 卸载监听
  unmounted(el) {
    ob.unobserve(el)
  },
};`,B={__name:"index",setup(e){const t=_(500),r=a=>{t.value=a.width};return(a,i)=>{const l=p,c=m("resize");return b((f(),h(l,{title:"resize",subtitle:`父组件 宽度为${s(t)}`,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:n,"onUpdate:modelValue":i[0]||(i[0]=d=>n=d),disabled:"",class:"iframe-box"},{default:v(()=>[y,o("div",{class:"child",style:S({width:s(t)-20+"px"})}," 子组件，宽度为"+x(s(t)-20),5)]),_:1},8,["subtitle"])),[[c,r]])}}},D=u(B,[["__scopeId","data-v-6ca93cf1"]]);export{D as default};
