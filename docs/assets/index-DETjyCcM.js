import{_ as x,x as I,y as T,z as E,o as p,c as v,r as c,A as g,w as y,e as f,b as e,u as n,i as h,k as R,p as A,d as V}from"./index-BJQdFUCM.js";import{_ as w}from"./index-BfQoC-rC.js";import G from"./index-BpbQJMOa.js";import{_ as B}from"./cat-CkzGrFVi.js";import"./index-B4HB8O45.js";const D={__name:"index",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(s){const t=I(s,"modelValue");return(a,o)=>T((p(),v("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>t.value=r),placeholder:"请输入内容",type:"text"},null,512)),[[E,t.value]])}},M=x(D,[["__scopeId","data-v-eec3366c"]]),i=s=>(A("data-v-8c5b3b1e"),s=s(),V(),s),C={class:"input__list"},X={viewBox:"0 0 500 300"},b={id:"conform"},S=["href"],U=i(()=>e("feColorMatrix",{in:"ORIGIN_IMAGE",type:"saturate",values:"0",result:"GRAY_IMAGE"},null,-1)),N=i(()=>e("feDisplacementMap",{in:"SourceGraphic",in2:"GRAY_IMAGE",scale:"15",xChannelSelector:"R",yChannelSelector:"R",result:"TEXTURED_TEXT"},null,-1)),k=["href"],L=i(()=>e("feColorMatrix",{in:"TEXTURED_TEXT",type:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0",result:"OPACITY_TEXT"},null,-1)),O=i(()=>e("feBlend",{in:"BG",in2:"OPACITY_TEXT",mode:"multiply",result:"BLENDED_TEXT"},null,-1)),Y=["href"],z=["fill"],F={__name:"index",setup(s){const t=c("Logo"),a=c("#ff0000"),o=c(B),r=m=>{const l=new FileReader;l.addEventListener("load",d=>{const _=d.target.result;o.value=_}),l.readAsDataURL(m)};return(m,l)=>{const d=w,_=M;return p(),g(G,{title:"纹理适配",needCode:!1,column:""},{default:y(()=>[f(d,{style:{width:"100%"},onChange:r}),e("div",C,[f(_,{modelValue:n(t),"onUpdate:modelValue":l[0]||(l[0]=u=>h(t)?t.value=u:null)},null,8,["modelValue"]),T(e("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>h(a)?a.value=u:null),type:"color",name:"",id:""},null,512),[[E,n(a)]])]),(p(),v("svg",X,[e("defs",null,[e("filter",b,[e("feImage",{href:n(o),result:"ORIGIN_IMAGE",x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none"},null,8,S),U,N,e("feImage",{href:n(o),in:"TEXTURED_TEXT",x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none",result:"BG"},null,8,k),L,O])]),e("image",{href:n(o),x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none"},null,8,Y),e("text",{x:"50%",y:"50%","font-size":"10em","font-weight":"bold","text-anchor":"middle","alignment-baseline":"middle",fill:n(a),filter:"url(#conform)"},R(n(t)),9,z)]))]),_:1})}}},J=x(F,[["__scopeId","data-v-8c5b3b1e"]]);export{J as default};