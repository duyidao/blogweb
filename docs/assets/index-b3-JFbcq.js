import{_ as y,H as g,r as h,b as $,o as a,c as o,F as C,f as F,E as k,j as v,n as I,v as b,L as D,M as N,d as w,e as m,u as d,A as x}from"./index-Crz1pKDy.js";const A=g({name:"RenderItems",props:{items:{type:Array,required:!0},parentIndex:{type:Array,default:[]},parentName:String},setup(s,{emit:t}){const c=h(s.items.map(r=>({...r,name:r.name,kind:r.kind,show:!1})));return console.log("data",c),{data:c,handleClick:(r,i)=>{i&&i.kind==="directory"?i.show=!i.show:t("click",r)}}}}),V={class:"file-list"},B=["onClick"],H=["onClick"];function S(s,t,c,f,r,i){const _=$("render-items");return a(),o("div",V,[(a(!0),o(C,null,F(s.data,(e,n)=>(a(),o("div",{key:n,class:"file-item"},[e.kind==="file"?(a(),o("div",{key:0,class:"file-item-file",onClick:k(p=>s.handleClick([...s.parentIndex,n],e),["stop"])}," 文件: "+v(e.name),9,B)):(a(),o("div",{key:1,class:I(["file-item-directory",{active:e.show}]),onClick:k(p=>s.handleClick([...s.parentIndex,n],e),["stop"])},[b(" 文件夹: "+v(e.name)+" ",1),D(w(_,{class:"file-list-child",items:e.children,"parent-index":[...s.parentIndex,n],"parent-name":e.name,onClick:s.handleClick},null,8,["items","parent-index","parent-name","onClick"]),[[N,e.children&&e.show]])],10,H))]))),128))])}const E=y(A,[["render",S],["__scopeId","data-v-79d738e5"]]),L={class:"ifrname-box box"},M={key:0,class:"box-info"},P={class:"content"},R={key:1,class:"loading"},T={__name:"index",setup(s){const t=h([]),c=async e=>{if(e.kind==="file")return e;e.children=[];const n=await e.entries();for await(const p of n){const u=await c(p[1]);e.children.push(u)}return e},f=h(!1),r=async()=>{try{f.value=!0;const e=await showDirectoryPicker();t.value=await c(e),f.value=!1,console.log("root.value",t.value)}catch(e){console.log("err",e)}},i=h(""),_=async e=>{let n=t.value.children;for(let l=0;l<e.length;l++)l<e.length-1?n=n[e[l]].children:n=n[e[l]];const p=await n.getFile(),u=new FileReader;u.onload=l=>{console.log("e",l),i.value=l.target.result},u.readAsText(p,"utf-8")};return(e,n)=>(a(),o("div",L,[m("button",{onClick:k(r,["stop"])},"获取文件夹"),d(f)?(a(),o("div",R," 加载中，请稍后... ")):(a(),o(C,{key:0},[d(t)&&d(t).children&&d(t).children.length?(a(),o("div",M,[w(E,{class:"file",items:d(t).children,onClick:_},null,8,["items"]),m("div",P,v(d(i)),1)])):x("",!0)],64))]))}},q=y(T,[["__scopeId","data-v-705fd748"]]);export{q as default};