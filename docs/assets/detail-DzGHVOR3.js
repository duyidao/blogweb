import{_ as b}from"./index-Ba3FVsYc.js";import{_ as $,o as a,c,j as _,E as u,U as C,F as k,f as w,m as I,l as R,J as S,r as A,v as E,x as j,I as n,y as B,K as F,a5 as M,a as t,u as p,D,h as L,p as N,d as G,H as T}from"./index-BMgdCasK.js";const V={class:"none"},q={key:0,class:"none-text"},H={__name:"index",props:{text:{type:String,default:"暂无数据"}},setup(i){return(l,f)=>{const d=b;return a(),c("div",V,[_(d,{width:"50",height:"50",name:"none"}),l.$slots.default?C(l.$slots,"default",{key:1},void 0,!0):(a(),c("p",q,u(i.text),1))])}}},J=$(H,[["__scopeId","data-v-a0d55679"]]),K={class:"my-breadcrumb"},O=["onClick"],U={__name:"index",props:{list:{type:Array,default:()=>[]}},setup(i){const l=i,f=(d,g)=>{g===l.list.length-1||!d||I.$goRouter(d,"","replace")};return(d,g)=>(a(),c("div",K,[(a(!0),c(k,null,w(i.list,(e,h)=>(a(),c("span",{key:e.to,onClick:s=>f(e.to,h)},u(e.name),9,O))),128))]))}},z=$(U,[["__scopeId","data-v-b3983fc2"]]),v=i=>(N("data-v-443492c2"),i=i(),G(),i),P={class:"catalogue"},Q={class:"catalogue-title"},W={class:"catalogue-title-big"},X={class:"catalogue-title-text"},Y={class:"catalogue-title-subtext"},Z={class:"catalogue-body"},tt={class:"catalogue-content"},et={class:"catalogue-aside"},st=v(()=>t("div",{class:"flower"},null,-1)),ot={class:"sticky"},at={class:"card"},nt={class:"card-face card-front"},ct={class:"card-title"},it=v(()=>t("span",null,"Gitee",-1)),lt=v(()=>t("p",{class:"card-word"},"前往码云仓库👉",-1)),dt={class:"card-face card-back"},rt=v(()=>t("span",null,"关注我",-1)),_t={class:"list transition-border"},ut={class:"list-title"},ht=v(()=>t("span",{class:""},"其他文章",-1)),pt={class:"list-info"},mt=["onClick"],vt={class:"list-item-title"},ft={class:"list-item-info"},gt={class:"list-item-content"},bt=R({name:"ArticleDetail"}),yt={__name:"detail",setup(i){S();const l=A([]);function f(e,h){if(h>e.length)throw new RangeError("Cannot extract more elements than available in the array.");const s=[...e];for(let o=s.length-1;o>0;o--){const r=Math.floor(Math.random()*(o+1));[s[o],s[r]]=[s[r],s[o]]}return s.slice(0,h)}E(()=>{j({title:n.value.title+" - 刀刀博客",meta:[{name:"keywords",content:"刀刀,刀刀博客,刀刀小站,vue,js,javascript,css,前端,"+n.value.title},{name:"description",content:`${n.value.title}，主要记录${n.value.info}`}]})}),B(()=>n.value,(e,h)=>{if(!e.path.includes("detail"))return;let s=T.filter(o=>o.path.includes(e.detailType)).filter(o=>!e.path.includes(o.path));l.value=s.length>6?f(s,6):s},{immediate:!0,deep:!0});const d=()=>{let e=document.createElement("a");e.href="https://gitee.com/duyidao",e.target="_blank",e.click(),e.remove()},g=F(()=>[{name:"首页",to:"/"},{name:"文章列表",to:"/article/"+n.value.detailType},{name:n.value.title}]);return(e,h)=>{const s=z,o=M("router-view"),r=b,x=J;return a(),c("div",P,[t("div",Q,[_(s,{class:"catalogue-title-nav",list:p(g)},null,8,["list"]),t("div",W,[t("p",X,u(p(n).title),1),t("p",Y,u(p(n).info),1),t("ul",null,[(a(!0),c(k,null,w(p(n).tags,(m,y)=>(a(),c("li",{key:y},[t("span",null,u(m),1)]))),128))])])]),t("div",Z,[t("main",tt,[_(o)]),t("aside",et,[st,t("div",ot,[t("div",{class:"gitee",onClick:D(d,["stop"])},[t("div",at,[t("div",nt,[t("p",ct,[_(r,{name:"gitee",width:"35",height:"35"}),it]),lt]),t("p",dt,[_(r,{name:"like",width:"35",height:"35"}),rt])])]),t("div",_t,[t("div",ut,[_(r,{name:"time",width:"30",height:"30"}),ht]),t("div",pt,[p(l).length>0?(a(!0),c(k,{key:0},w(p(l),(m,y)=>(a(),c("div",{key:y,class:"list-item",onClick:kt=>e.$goRouter(m.path,"/detail/")},[t("p",vt,u(m.meta.title),1),t("div",ft,[_(r,{name:"article",width:"16",height:"16"}),t("p",gt,u(m.meta.info),1)])],8,mt))),128)):(a(),L(x,{key:1,text:"暂无其他文章，敬请期待更新~"}))])])])])])])}}},xt=$(yt,[["__scopeId","data-v-443492c2"]]);export{bt as componentOptions,xt as default};