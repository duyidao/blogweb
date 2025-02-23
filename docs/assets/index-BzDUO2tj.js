define(["exports","./index-yZQ-gSkB","./vender-CF49NVAq","./index-D2dCyH29","./index-Dv65D4QU","./rem-Cqtq43AX","./index-D31hL1yj"],function(n,c,t,s,x,v,y){"use strict";var e=document.createElement("style");e.textContent=`.box[data-v-2fba4f0b]{display:flex;flex-direction:column;align-items:center;width:100%}.box button[data-v-2fba4f0b]{margin:0 auto 20px}.box div[data-v-2fba4f0b]{font-size:14px;color:var(--primary-info);margin-bottom:15px}@media screen and (max-width: 768px){.box button[data-v-2fba4f0b]{margin:0 auto 1.25rem}.box div[data-v-2fba4f0b]{font-size:.875rem;margin-bottom:1rem}}
`,document.head.appendChild(e);const l="/blogweb/assets/navigator-EkMrNjBq.png",r={class:"box"},d={class:""},f={class:""},m={class:""},i=`const clickFn = () => {
  if (navigator.onLine) {
    console.log('navigator.connection', navigator.connection);
    info.value = {
      type: navigator.connection.type || navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
      downlink: navigator.connection.downlink
    }
  }
}`,p={__name:"index",setup(w){const o=t.ref({}),b=()=>{navigator.onLine&&(o.value={type:navigator.connection.type||navigator.connection.effectiveType,rtt:navigator.connection.rtt,downlink:navigator.connection.downlink})};return(k,a)=>{const u=c.__unplugin_components_0;return t.openBlock(),t.createBlock(u,{class:"iframe-box",title:"拾色器",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:i,"onUpdate:modelValue":a[0]||(a[0]=_=>i=_),flowImg:t.unref(l),disabled:""},{default:t.withCtx(()=>[t.createBaseVNode("div",r,[t.createBaseVNode("button",{onClick:t.withModifiers(b,["stop"])},"获取网络状态"),t.createBaseVNode("div",d,"当前网络环境："+t.toDisplayString(t.unref(o).type||"-"),1),t.createBaseVNode("div",f,"当前延迟："+t.toDisplayString(t.unref(o).rtt||0)+"ms",1),t.createBaseVNode("div",m,"当前带宽速度："+t.toDisplayString(t.unref(o).downlink||0),1)])]),_:1},8,["flowImg"])}}},g=s._export_sfc(p,[["__scopeId","data-v-2fba4f0b"]]);n.default=g,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
