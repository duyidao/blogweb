import{_ as f}from"./index-CWSTONIR.js";import{_ as y,Q as w,C as S,R as u,o as p,c as m,a as i,A as k,S as C,M as h,O as v,e as g,u as a,q as M,T as l}from"./index-oMvnDw21.js";const V={class:"article-type"},x={class:"article-title"},T={key:0},$={class:"article-change"},O=M({name:"TypeSwitch"}),B={__name:"index",props:w({title:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const e=S(o,"modelValue"),n=t=>{l.value>768?e.value=t:e.value=e.value==="list"?"img":"list"},c=u(()=>l.value>768?"20px":20),d=u(()=>l.value>768?"20px":20);return(t,s)=>{const r=f;return p(),m("div",V,[i("div",x,[t.$slots.default?C(t.$slots,"default",{key:1},void 0,!0):(p(),m("span",T,k(o.title),1))]),i("div",$,[i("div",{class:h([{"article-change-item":!0,active:e.value==="list"},""]),onClick:s[0]||(s[0]=v(_=>n("list"),["stop"]))},[g(r,{width:a(c),height:a(d),name:"list-type"},null,8,["width","height"])],2),i("div",{class:h([{"article-change-item":!0,active:e.value==="img"},""]),onClick:s[1]||(s[1]=v(_=>n("img"),["stop"]))},[g(r,{width:a(c),height:a(d),name:"img-type"},null,8,["width","height"])],2)])])}}},q=y(B,[["__scopeId","data-v-6d41f41c"]]);export{O as componentOptions,q as default};