import{_ as k}from"./index-BsvsCoN2.js";import{J as h,u as b,r as _,a as x,z as y,o as g,c as E,d as t,b as i,h as v,p as I,l as L,_ as R}from"./index-DfeuEPnb.js";const f=a=>(I("data-v-90c8d62f"),a=a(),L(),a),B={class:"btns-icon"},C=f(()=>t("span",null,"首页",-1)),S=f(()=>t("span",null,"返回",-1)),w=h({__name:"index",emits:["back","home"],setup(a,{emit:d}){const l=b(),m=d,u=e=>{switch(e){case"back":l.back(),m("back");break;case"home":l.replace("/"),m("home");break}},s=_(null),n=_(null),c=(e,o)=>{let r=o.pageX-e.offsetLeft,p=o.pageY-e.offsetTop;e.style.setProperty("--x",r+"px"),e.style.setProperty("--y",p+"px")};return x(()=>{s.value.addEventListener("mousemove",e=>c(s.value,e)),n.value.addEventListener("mousemove",e=>c(n.value,e))}),y(()=>{s.value.removeEventListener("mousemove",e=>c(s.value,e)),n.value.removeEventListener("mousemove",e=>c(n.value,e))}),(e,o)=>{const r=k;return g(),E("div",B,[t("a",{ref_key:"backRef",ref:s,href:"javascript:;",onClick:o[0]||(o[0]=v(p=>u("home"),["stop"]))},[t("p",null,[i(r,{name:"home"}),C])],512),t("a",{ref_key:"homeRef",ref:n,href:"javascript:;",onClick:o[1]||(o[1]=v(p=>u("back"),["stop"]))},[t("p",null,[i(r,{name:"back"}),S])],512)])}}}),F=R(w,[["__scopeId","data-v-90c8d62f"]]);export{F as _};