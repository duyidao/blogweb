import{_ as C}from"./index-BPSbJa6B.js";import{_ as R,g as r,h as S,o as l,c as s,b as o,d as x,t as f,r as B,w as m,F as N,l as $,e as w,P as F}from"./index-D-FsN0zC.js";const I={class:"upload"},L=["accept","multiple"],V={key:0,class:"transition-color"},M={key:0,class:"upload-list"},P=["onClick"],A={__name:"index",props:{borderRadius:{type:[String,Number],default:"15"},info:{type:String,default:"点击上传文件"},limit:{type:Number,default:9},multiple:{type:Boolean,default:!1},accept:{type:String,default:""},needList:{type:Boolean,default:!1}},emits:["change"],setup(a,{emit:_}){const d=r(null),u=r(null),{borderRadius:h,limit:g,multiple:y,accept:D}=a;S(()=>{u.value.style.setProperty("--bdrd",h+"px")});const i=_,v=()=>{d.value.click()},e=r([]),k=t=>{e.value=Array.from(t.target.files),g===1||!y?i("change",e.value[0]):i("change",e.value)},b=t=>{const p=e.value.findIndex(c=>c.name===t.name);e.value.splice(p,1),i("change",e.value)};return(t,p)=>{const c=C;return l(),s("div",I,[o("div",{ref_key:"uploadRef",ref:u,class:"my-upload transition-color",onClick:m(v,["stop"])},[o("input",{ref_key:"fileRef",ref:d,accept:a.accept,type:"file",name:"",id:"",multiple:a.multiple,onChange:k},null,40,L),x(c,{name:"file",width:"35",height:"35"}),t.$slots.default?B(t.$slots,"default",{key:1},void 0,!0):(l(),s("span",V,f(a.info),1))],512),a.needList?(l(),s("div",M,[(l(!0),s(N,null,$(w(e),n=>(l(),s("div",{key:n.name,class:"upload-item transition-color"},[o("span",null,f(n.name.length<=35?n.name:n.name.slice(0,25)+"....."+n.name.substr(-4)),1),o("span",{class:"icon",onClick:m(E=>b(n),["stop"])},null,8,P)]))),128))])):F("",!0)])}}},q=R(A,[["__scopeId","data-v-8b9955d7"]]);export{q as _};