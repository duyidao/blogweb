define(["exports","./index-DlgzzseR","./vender-CF49NVAq","./index-GPVW21Ic","./index-BfVzJLus","./rem-Cqtq43AX","./index-BSjz60gr"],function(t,d,e,s,a,f,r){"use strict";const c="/blogweb/assets/visibilitychange-DOzH5DeN.png",n=`const fn = () => {
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
})`,l={__name:"index",setup(g){const i=()=>{document.hidden?document.title="页面离开咯":document.title="页面回来咯"};return e.onMounted(()=>{document.addEventListener("visibilitychange",i)}),e.onUnmounted(()=>{document.title="刀刀博客小站",document.removeEventListener("visibilitychange",i)}),(_,o)=>{const u=d.__unplugin_components_0;return e.openBlock(),e.createBlock(u,{title:"页面可见度",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:n,"onUpdate:modelValue":o[0]||(o[0]=m=>n=m),type:"javascript",flowImg:e.unref(c),disabled:""},{default:e.withCtx(()=>[e.createTextVNode(" 页面可见度 ")]),_:1},8,["flowImg"])}}};t.default=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
