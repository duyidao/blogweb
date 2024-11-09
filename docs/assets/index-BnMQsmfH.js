import{_ as l}from"./index-CidmAMIR.js";import{_ as d,r as _,o as p,h as v,w as f,a as o,D as m,E as t,u as e}from"./index-CelIiyEc.js";import"./index-BRwtI0lh.js";import"./index-DbchxMog.js";const u={class:"box"},g={class:""},k={class:""},w={class:""},a=`const clickFn = () => {
  if (navigator.onLine) {
    console.log('navigator.connection', navigator.connection);
    info.value = {
      type: navigator.connection.type || navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
      downlink: navigator.connection.downlink
    }
  }
}`,y={__name:"index",setup(x){const n=_({}),c=()=>{navigator.onLine&&(n.value={type:navigator.connection.type||navigator.connection.effectiveType,rtt:navigator.connection.rtt,downlink:navigator.connection.downlink})};return(h,i)=>{const s=l;return p(),v(s,{class:"iframe-box",title:"拾色器",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:a,"onUpdate:modelValue":i[0]||(i[0]=r=>a=r),disabled:""},{default:f(()=>[o("div",u,[o("button",{onClick:m(c,["stop"])},"获取网络状态"),o("div",g,"当前网络环境："+t(e(n).type||"-"),1),o("div",k,"当前延迟："+t(e(n).rtt||0)+"ms",1),o("div",w,"当前带宽速度："+t(e(n).downlink||0),1)])]),_:1})}}},I=d(y,[["__scopeId","data-v-7f5f7702"]]);export{I as default};
