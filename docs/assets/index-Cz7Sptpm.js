import{_ as i,r as n,o as l,A as u,w as f,a as t,H as d,u as c,c as _,l as m,M as x}from"./index-CwairtzP.js";import k from"./index-D2vhg22B.js";import"./index-COfhrWyd.js";const v={class:"box"},y={__name:"index",setup(b){const e=n(""),a=n(null),p=()=>{if(!window.EyeDropper){e.value="你的浏览器不支持 EyeDropper API",a.value.style.backgroundColor="#000";return}e.value="正在打开拾色器，请稍等...";const r=new EyeDropper,s=new AbortController;r.open({signal:s.signal}).then(o=>{e.value=o.sRGBHex,a.value.style.backgroundColor=o.sRGBHex}).catch(o=>{e.value=o})};return(r,s)=>(l(),u(k,{title:"拾色器",column:"",class:"ifrname-box box",needCode:!1},{default:f(()=>[t("div",v,[t("button",{onClick:d(p,["stop"])},"打开拾色器"),c(e)?(l(),_("div",{key:0,class:"spanRef",ref_key:"spanRef",ref:a},[t("span",null,m(c(e)),1)],512)):x("",!0)])]),_:1}))}},h=i(y,[["__scopeId","data-v-ea583348"]]);export{h as default};