import{_ as l}from"./index-C8SelH6X.js";import{_ as d,r as _,o as p,k as v,w as f,a as o,O as u,A as t,u as e}from"./index-B4bBUjY3.js";import"./index-CKO9WkJI.js";const m={class:"box"},g={class:""},k={class:""},w={class:""},a=`const clickFn = () => {
  if (navigator.onLine) {
    console.log('navigator.connection', navigator.connection);
    info.value = {
      type: navigator.connection.type || navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
      downlink: navigator.connection.downlink
    }
  }
}`,y={__name:"index",setup(x){const n=_({}),c=()=>{navigator.onLine&&(n.value={type:navigator.connection.type||navigator.connection.effectiveType,rtt:navigator.connection.rtt,downlink:navigator.connection.downlink})};return(h,i)=>{const s=l;return p(),v(s,{class:"iframe-box",title:"拾色器",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:a,"onUpdate:modelValue":i[0]||(i[0]=r=>a=r),disabled:""},{default:f(()=>[o("div",m,[o("button",{onClick:u(c,["stop"])},"获取网络状态"),o("div",g,"当前网络环境："+t(e(n).type||"-"),1),o("div",k,"当前延迟："+t(e(n).rtt||0)+"ms",1),o("div",w,"当前带宽速度："+t(e(n).downlink||0),1)])]),_:1})}}},T=d(y,[["__scopeId","data-v-7f5f7702"]]);export{T as default};
