import{_ as f}from"./index-CAsVH_nY.js";import{_ as y,B as k,m as w,C as u,o as m,c as p,e as i,j as C,D as V,n as h,E as _,d as g,u as o,G as a}from"./index-Crz1pKDy.js";const $={class:"article-type transition-color"},x={class:"article-title transition-color"},B={key:0},M={class:"article-change"},S={__name:"index",props:k({title:{type:String,default:""}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(l){const e=w(l,"modelValue"),n=t=>{a.value>768?e.value=t:e.value=e.value==="list"?"img":"list"},c=u(()=>a.value>768?"20px":20),r=u(()=>a.value>768?"20px":20);return(t,s)=>{const d=f;return m(),p("div",$,[i("div",x,[t.$slots.default?V(t.$slots,"default",{key:1},void 0,!0):(m(),p("span",B,C(l.title),1))]),i("div",M,[i("div",{class:h([{"article-change-item":!0,active:e.value==="list"},"transition-color"]),onClick:s[0]||(s[0]=_(v=>n("list"),["stop"]))},[g(d,{width:o(c),height:o(r),name:"list-type"},null,8,["width","height"])],2),i("div",{class:h([{"article-change-item":!0,active:e.value==="img"},"transition-color"]),onClick:s[1]||(s[1]=_(v=>n("img"),["stop"]))},[g(d,{width:o(c),height:o(r),name:"img-type"},null,8,["width","height"])],2)])])}}},I=y(S,[["__scopeId","data-v-c30022ff"]]);export{I as _};