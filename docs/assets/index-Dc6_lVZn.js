import{_ as p}from"./index-C5gWnLVN.js";import{_ as m}from"./index-R7MN-9XR.js";import{r as b,i as u,j as _,o as f,B as h,s as g,b as s,l as v,u as o,t as w,y as x,z}from"./vender-CcOEkWCz.js";import"./index-C3P6xh-k.js";import"./rem-B0h-CM2v.js";import"./index-B4nPWQvu.js";const S="/blogweb/assets/resize-BpHbDmAN.png",y=e=>(x("data-v-0341fb00"),e=e(),z(),e),I=y(()=>s("div",{class:"iframe-box-title"},[s("span",{class:"iframe-box-title-small"})],-1)),n=`// 建立映射表
const map = new WeakMap()

// 配置监视盒子内容盒或边框盒或者 SVGElement 边界尺寸的变化函数
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
};`,B={__name:"index",setup(e){const t=b(500),r=i=>{t.value=i.width};return(i,a)=>{const l=p,d=u("resize");return _((f(),h(l,{title:"resize",subtitle:`父组件 宽度为${o(t)}`,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:n,"onUpdate:modelValue":a[0]||(a[0]=c=>n=c),flowImg:o(S),disabled:"",class:"iframe-box"},{default:g(()=>[I,s("div",{class:"child",style:v({width:o(t)-20+"px"})}," 子组件，宽度为"+w(o(t)-20),5)]),_:1},8,["subtitle","flowImg"])),[[d,r]])}}},T=m(B,[["__scopeId","data-v-0341fb00"]]);export{T as default};
