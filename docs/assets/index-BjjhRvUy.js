import{_ as v}from"./index-CAsVH_nY.js";import{_ as k,o as r,c as d,d as a,j as h,D as y,H as $,I,E as x,r as S,a as C,q as E,g as l,w as R,b as j,e as t,u as g,F as B,f as F,J as M,p as N,l as A,k as D}from"./index-Crz1pKDy.js";const G={class:"none"},L={key:0,class:"none-text"},V={__name:"index",props:{text:{type:String,default:"暂无数据"}},setup(c){return(n,m)=>{const _=v;return r(),d("div",G,[a(_,{width:"50px",height:"50px",name:"none"}),n.$slots.default?y(n.$slots,"default",{key:1},void 0,!0):(r(),d("p",L,h(c.text),1))])}}},q=k(V,[["__scopeId","data-v-2fc6645d"]]),H=$({__name:"index",emits:["back"],setup(c,{emit:n}){const m=I(),_=n,e=()=>{m.back(),_("back")};return(p,s)=>{const o=v;return r(),d("div",{class:"transition-color back",title:"返回",onClick:x(e,["stop"])},[a(o,{width:"25",height:"25",name:"back"})])}}}),J=k(H,[["__scopeId","data-v-b8a1814c"]]),u=c=>(N("data-v-fce16dcc"),c=c(),A(),c),T={class:"catalogue"},z={class:"catalogue-title"},K={class:"catalogue-title-big transition-color"},O={class:"catalogue-title-info transition-color"},P={class:"catalogue-body"},Q={class:"catalogue-content"},U={class:"catalogue-aside"},W=u(()=>t("div",{class:"flower"},null,-1)),X={class:"sticky"},Y={class:"card"},Z={class:"card-face card-front transition-color"},tt=u(()=>t("p",{class:"card-title"},"Gitee",-1)),et=u(()=>t("p",{class:"card-word"},"前往码云仓库👉",-1)),st=u(()=>t("p",{class:"card-face card-back transition-color"}," 关注我 ",-1)),ot={class:"list transition-border"},nt={class:"list-title"},at=u(()=>t("span",{class:"transition-color"},"其他文章",-1)),ct={class:"list-info"},it=["onClick"],lt={class:"list-item-title"},rt={class:"list-item-info"},dt={class:"list-item-content"},_t={__name:"index",setup(c){const n=S([]);function m(e,p){if(p>e.length)throw new RangeError("Cannot extract more elements than available in the array.");const s=[...e];for(let o=s.length-1;o>0;o--){const i=Math.floor(Math.random()*(o+1));[s[o],s[i]]=[s[i],s[o]]}return s.slice(0,p)}C(()=>{E({title:l.value.title+" - 刀刀博客",meta:[{name:"keywords",content:"刀刀,刀刀博客,刀刀小站,vue,js,javascript,css,前端,"+l.value.title},{name:"description",content:`${l.value.title}，主要记录${l.value.info}`}]})}),R(()=>l.value,(e,p)=>{let s=D.filter(o=>o.path.includes(e.articleType)).filter(o=>!e.path.includes(o.path));n.value=s.length>6?m(s,6):s},{immediate:!0,deep:!0});const _=()=>{let e=document.createElement("a");e.href="https://gitee.com/duyidao",e.target="_blank",e.click(),e.remove()};return(e,p)=>{const s=J,o=j("router-view"),i=v,w=q;return r(),d("div",T,[t("div",z,[t("p",K,h(g(l).title),1),t("p",O,h(g(l).info),1),a(s)]),t("div",P,[t("main",Q,[a(o)]),t("aside",U,[W,t("div",X,[t("div",{class:"gitee",onClick:x(_,["stop"])},[t("div",Y,[t("div",Z,[tt,et,a(i,{class:"card-svg-cat",name:"cat",width:"50px",height:"50px"}),a(i,{class:"card-svg-dog",name:"dog",width:"50px",height:"50px"})]),st])]),t("div",ot,[t("div",nt,[a(i,{name:"time",width:"30px",height:"30px"}),at]),t("div",ct,[g(n).length>0?(r(!0),d(B,{key:0},F(g(n),(f,b)=>(r(),d("div",{key:b,class:"list-item",onClick:pt=>e.$goRouter(f.path,"/blogweb/detail/")},[t("p",lt,h(f.meta.title),1),t("div",rt,[a(i,{name:"article",width:"16px",height:"16px"}),t("p",dt,h(f.meta.info),1)])],8,it))),128)):(r(),M(w,{key:1,text:"暂无其他文章，敬请期待更新~"}))])])])])])])}}},mt=k(_t,[["__scopeId","data-v-fce16dcc"]]);export{mt as default};