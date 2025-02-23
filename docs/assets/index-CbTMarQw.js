import{_ as l}from"./index-C62MwHZ0.js";import{r as d,o as p,B as _,s as f,b as o,w as m,t as e,u as n}from"./vender-BxpIRFvU.js";import{_ as v}from"./index-N5uH88Uw.js";import"./index-C3q4FXYV.js";import"./rem-D2iYkbWd.js";import"./index-DLm-h7Ja.js";const g="/blogweb/assets/navigator-EkMrNjBq.png",u={class:"box"},w={class:""},k={class:""},b={class:""},a=`const clickFn = () => {
  if (navigator.onLine) {
    console.log('navigator.connection', navigator.connection);
    info.value = {
      type: navigator.connection.type || navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
      downlink: navigator.connection.downlink
    }
  }
}`,y={__name:"index",setup(x){const t=d({}),c=()=>{navigator.onLine&&(t.value={type:navigator.connection.type||navigator.connection.effectiveType,rtt:navigator.connection.rtt,downlink:navigator.connection.downlink})};return(h,i)=>{const s=l;return p(),_(s,{class:"iframe-box",title:"拾色器",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:a,"onUpdate:modelValue":i[0]||(i[0]=r=>a=r),flowImg:n(g),disabled:""},{default:f(()=>[o("div",u,[o("button",{onClick:m(c,["stop"])},"获取网络状态"),o("div",w,"当前网络环境："+e(n(t).type||"-"),1),o("div",k,"当前延迟："+e(n(t).rtt||0)+"ms",1),o("div",b,"当前带宽速度："+e(n(t).downlink||0),1)])]),_:1},8,["flowImg"])}}},F=v(y,[["__scopeId","data-v-2fba4f0b"]]);export{F as default};
