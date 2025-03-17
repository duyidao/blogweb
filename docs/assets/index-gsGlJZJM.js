import{_ as d}from"./index-C_NZqyQm.js";import{r as n,o as p,B as m,s as f,b as c,w as _,u as l,a as y,t as b,d as v,x as w}from"./vender-CcOEkWCz.js";import{_ as g}from"./index-2pap1gW7.js";import"./index-DBr9Gx-g.js";import"./rem-B0h-CM2v.js";import"./index-BvYlPqbK.js";const C="/blogweb/assets/eyeDropper-BE1GK83Q.png",k={__name:"index",setup(x){const e=n(""),t=n(null),u=()=>{if(!window.EyeDropper){e.value="你的浏览器不支持 EyeDropper API",t.value.style.backgroundColor="#000";return}e.value="正在打开拾色器，请稍等...";const s=new EyeDropper,r=new AbortController;s.open({signal:r.signal}).then(o=>{e.value=o.sRGBHex,t.value.style.backgroundColor=o.sRGBHex}).catch(o=>{e.value=o})},a=n(`const clickFn = () => {
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
}`);return(s,r)=>{const o=d;return p(),m(o,{title:"拾色器",class:"iframe-box",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:l(a),"onUpdate:modelValue":r[0]||(r[0]=i=>w(a)?a.value=i:null),flowImg:l(C),disabled:""},{default:f(()=>[c("button",{onClick:_(u,["stop"])},"打开拾色器"),l(e)?(p(),y("div",{key:0,class:"spanRef",ref_key:"spanRef",ref:t},[c("span",null,b(l(e)),1)],512)):v("",!0)]),_:1},8,["modelValue","flowImg"])}}},h=g(k,[["__scopeId","data-v-7d9d563b"]]);export{h as default};
