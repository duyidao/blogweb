import{_ as l}from"./index-g0ToZY8k.js";import{_ as d,r as p,o as _,h as f,w as v,a as o,C as g,D as e,u as t}from"./index-DA_VNGs7.js";import"./index-D9-zwkGm.js";import"./rem-B8TxZhU6.js";import"./index-BIc7GnDJ.js";const m="/blogweb/assets/navigator-EkMrNjBq.png",u={class:"box"},w={class:""},k={class:""},b={class:""},a=`const clickFn = () => {
  if (navigator.onLine) {
    console.log('navigator.connection', navigator.connection);
    info.value = {
      type: navigator.connection.type || navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
      downlink: navigator.connection.downlink
    }
  }
}`,y={__name:"index",setup(x){const n=p({}),c=()=>{navigator.onLine&&(n.value={type:navigator.connection.type||navigator.connection.effectiveType,rtt:navigator.connection.rtt,downlink:navigator.connection.downlink})};return(h,i)=>{const s=l;return _(),f(s,{class:"iframe-box",title:"拾色器",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:a,"onUpdate:modelValue":i[0]||(i[0]=r=>a=r),flowImg:t(m),disabled:""},{default:v(()=>[o("div",u,[o("button",{onClick:g(c,["stop"])},"获取网络状态"),o("div",w,"当前网络环境："+e(t(n).type||"-"),1),o("div",k,"当前延迟："+e(t(n).rtt||0)+"ms",1),o("div",b,"当前带宽速度："+e(t(n).downlink||0),1)])]),_:1},8,["flowImg"])}}},j=d(y,[["__scopeId","data-v-2fba4f0b"]]);export{j as default};
