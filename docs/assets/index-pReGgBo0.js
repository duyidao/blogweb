import{_ as l}from"./index-Cr8RYIZ3.js";import{_ as d,r as _,o as p,k as v,w as f,a as n,O as u,A as t,u as e}from"./index-Cun0YHcx.js";const g={class:"box"},m={class:""},k={class:""},w={class:""},a=`const clickFn = () => {
  if (navigator.onLine) {
    console.log('navigator.connection', navigator.connection);
    info.value = {
      type: navigator.connection.type || navigator.connection.effectiveType,
      rtt: navigator.connection.rtt,
      downlink: navigator.connection.downlink
    }
  }
}`,y={__name:"index",setup(x){const o=_({}),c=()=>{navigator.onLine&&(o.value={type:navigator.connection.type||navigator.connection.effectiveType,rtt:navigator.connection.rtt,downlink:navigator.connection.downlink})};return(h,i)=>{const s=l;return p(),v(s,{class:"iframe-box",title:"拾色器",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:a,"onUpdate:modelValue":i[0]||(i[0]=r=>a=r),disabled:""},{default:f(()=>[n("div",g,[n("button",{onClick:u(c,["stop"])},"获取网络状态"),n("div",m,"当前网络环境："+t(e(o).type||"-"),1),n("div",k,"当前延迟："+t(e(o).rtt||0)+"ms",1),n("div",w,"当前带宽速度："+t(e(o).downlink||0),1)])]),_:1})}}},C=d(y,[["__scopeId","data-v-7f5f7702"]]);export{C as default};
