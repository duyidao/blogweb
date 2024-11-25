import{_ as p}from"./index-Du0G0-ek.js";import{_ as m,r as u,y as _,B as b,o as h,h as f,w as v,a as s,n as x,u as o,D as S,p as w,d as y}from"./index-BI5XnKsv.js";import"./index-C7omlXUe.js";import"./index-kjZbcXqV.js";const z=e=>(w("data-v-720b40ed"),e=e(),y(),e),g=z(()=>s("div",{class:"iframe-box-title"},[s("span",{class:"iframe-box-title-small"})],-1)),n=`// 配置监视盒子内容盒或边框盒或者 SVGElement 边界尺寸的变化函数
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
};`,B={__name:"index",setup(e){const t=u(500),r=i=>{t.value=i.width};return(i,a)=>{const l=p,d=_("resize");return b((h(),f(l,{title:"resize",subtitle:`父组件 宽度为${o(t)}`,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:n,"onUpdate:modelValue":a[0]||(a[0]=c=>n=c),disabled:"",class:"iframe-box"},{default:v(()=>[g,s("div",{class:"child",style:x({width:o(t)-20+"px"})}," 子组件，宽度为"+S(o(t)-20),5)]),_:1},8,["subtitle"])),[[d,r]])}}},k=m(B,[["__scopeId","data-v-720b40ed"]]);export{k as default};
