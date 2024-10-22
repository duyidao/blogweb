import{_ as d}from"./index-CA_JjYCt.js";import{_ as f,r as t,o as c,k as _,w as m,u as n,i as y,a as p,O as v,c as b,A as k,V as C}from"./index-w22fhRj8.js";const w={__name:"index",setup(x){const e=t(""),l=t(null),u=()=>{if(!window.EyeDropper){e.value="你的浏览器不支持 EyeDropper API",l.value.style.backgroundColor="#000";return}e.value="正在打开拾色器，请稍等...";const s=new EyeDropper,r=new AbortController;s.open({signal:r.signal}).then(o=>{e.value=o.sRGBHex,l.value.style.backgroundColor=o.sRGBHex}).catch(o=>{e.value=o})},a=t(`const clickFn = () => {
  // 判断浏览器是否支持
  if (!window.EyeDropper) {
    colorVal.value = "你的浏览器不支持 EyeDropper API";
    spanRef.value.style.backgroundColor = '#000';
    return;
  }

  colorVal.value = "正在打开拾色器，请稍等...";

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      colorVal.value = result.sRGBHex;
      spanRef.value.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      colorVal.value = e;
    });
}`);return(s,r)=>{const o=d;return c(),_(o,{title:"拾色器",class:"iframe-box",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:n(a),"onUpdate:modelValue":r[0]||(r[0]=i=>y(a)?a.value=i:null),disabled:""},{default:m(()=>[p("button",{onClick:v(u,["stop"])},"打开拾色器"),n(e)?(c(),b("div",{key:0,class:"spanRef",ref_key:"spanRef",ref:l},[p("span",null,k(n(e)),1)],512)):C("",!0)]),_:1},8,["modelValue"])}}},D=f(w,[["__scopeId","data-v-5eb3eab0"]]);export{D as default};
