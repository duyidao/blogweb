define(["exports","./index-DlgzzseR","./index-BfVzJLus","./vender-CF49NVAq","./index-GPVW21Ic","./rem-Cqtq43AX","./index-BSjz60gr"],function(i,r,c,e,g,x,w){"use strict";var n=document.createElement("style");n.textContent=`.iframe-box .child[data-v-0341fb00]{margin:0 auto;height:6.25rem;background-color:#faebd7;text-align:center;line-height:6.25rem;font-size:.875rem}
`,document.head.appendChild(n);const d="/blogweb/assets/resize-BpHbDmAN.png",m=(t=>(e.pushScopeId("data-v-0341fb00"),t=t(),e.popScopeId(),t))(()=>e.createBaseVNode("div",{class:"iframe-box-title"},[e.createBaseVNode("span",{class:"iframe-box-title-small"})],-1)),s=`// 建立映射表
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
};`,u={__name:"index",setup(t){const o=e.ref(500),f=a=>{o.value=a.width};return(a,l)=>{const b=r.__unplugin_components_0,_=e.resolveDirective("resize");return e.withDirectives((e.openBlock(),e.createBlock(b,{title:"resize",subtitle:`父组件 宽度为${e.unref(o)}`,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:s,"onUpdate:modelValue":l[0]||(l[0]=h=>s=h),flowImg:e.unref(d),disabled:"",class:"iframe-box"},{default:e.withCtx(()=>[m,e.createBaseVNode("div",{class:"child",style:e.normalizeStyle({width:e.unref(o)-20+"px"})}," 子组件，宽度为"+e.toDisplayString(e.unref(o)-20),5)]),_:1},8,["subtitle","flowImg"])),[[_,f]])}}},p=c._export_sfc(u,[["__scopeId","data-v-0341fb00"]]);i.default=p,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
