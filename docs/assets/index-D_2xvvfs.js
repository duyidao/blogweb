import{_ as d}from"./index-CBe-F5yK.js";import{_ as f,r as n,o as p,h as m,w as _,a as c,C as y,u as l,c as b,D as v,L as w,k as g}from"./index-CcjIZO8g.js";import"./index-DytGJkIx.js";import"./rem-DwsRrOGD.js";import"./index-BisnD9HM.js";const C="/blogweb/assets/eyeDropper-BE1GK83Q.png",k={__name:"index",setup(D){const e=n(""),t=n(null),u=()=>{if(!window.EyeDropper){e.value="你的浏览器不支持 EyeDropper API",t.value.style.backgroundColor="#000";return}e.value="正在打开拾色器，请稍等...";const s=new EyeDropper,r=new AbortController;s.open({signal:r.signal}).then(o=>{e.value=o.sRGBHex,t.value.style.backgroundColor=o.sRGBHex}).catch(o=>{e.value=o})},a=n(`const clickFn = () => {
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
}`);return(s,r)=>{const o=d;return p(),m(o,{title:"拾色器",class:"iframe-box",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:l(a),"onUpdate:modelValue":r[0]||(r[0]=i=>g(a)?a.value=i:null),flowImg:l(C),disabled:""},{default:_(()=>[c("button",{onClick:y(u,["stop"])},"打开拾色器"),l(e)?(p(),b("div",{key:0,class:"spanRef",ref_key:"spanRef",ref:t},[c("span",null,v(l(e)),1)],512)):w("",!0)]),_:1},8,["modelValue","flowImg"])}}},I=f(k,[["__scopeId","data-v-7d9d563b"]]);export{I as default};
