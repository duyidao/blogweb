import{J as f,T as w,r as p,j as B,x,e as k,L as I,o as c,A as V,u as a,n as M,_ as j,g as z,c as y,a as d,l as h,M as b,E as D,K as N,y as E,Q as O,f as T,q as U}from"./index-CwairtzP.js";import{j as $,c as q,v as A,o as J,T as K}from"./index-COfhrWyd.js";const L={__name:"code",props:f({language:{type:String,default:"css"},disabled:{type:[String,Boolean],default:!1},style:{type:[Object],default:()=>({})}},{modelValue:{},modelModifiers:{}}),emits:f(["change"],["update:modelValue"]),setup(e,{emit:i}){const l=e,t=i,{language:s,disabled:m,style:o}=w(l),n=p(null),u=p(null);B(()=>s.value,r=>{n.value={javascript:$,css:q,vue:A}[s.value],u.value=[n.value(),J]},{immediate:!0});const g=x(e,"modelValue"),_=k(()=>({...o.value,height:I.value>768?"350px":"24.55rem"})),S=r=>{t("change",r)};return(r,v)=>(c(),V(a(K),{disabled:a(m),modelValue:g.value,"onUpdate:modelValue":v[0]||(v[0]=C=>g.value=C),placeholder:"暂无数据...",style:M(a(_)),autofocus:!1,"indent-with-tab":!0,tabSize:2,fullScreen:!0,extensions:a(u),onChange:S},null,8,["disabled","modelValue","style","extensions"]))}},Q={class:"iframe-box-item"},R={class:"iframe-box-title"},W={key:0,class:"iframe-box-title-small"},F={class:"iframe-box-content"},X=z({name:"IframeBoxItem"}),G={__name:"index",props:f({title:{type:String,default:"标题"},subtitle:{type:String,default:""},needCode:{type:Boolean,default:!0},column:{type:Boolean,default:!1},type:{type:String,default:"css"}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e,{expose:i}){const l=x(e,"modelValue"),t=p(!1),s=()=>{t.value=!t.value};return i({showCode:t}),(m,o)=>{const n=U;return c(),y("div",Q,[d("div",R,[d("span",null,h(e.title),1),e.subtitle?(c(),y("span",W,h(e.subtitle),1)):b("",!0),e.needCode?(c(),V(n,{key:1,class:"iframe-box-button",word:a(t)?"隐藏源码":"源码展示",onClick:s},null,8,["word"])):b("",!0)]),d("div",F,[d("div",{class:D({effect:!0,showCode:a(t),column:e.column})},[N(m.$slots,"default",{},void 0,!0)],2),E(T(L,{class:"code",language:e.type,modelValue:l.value,"onUpdate:modelValue":o[0]||(o[0]=u=>l.value=u)},null,8,["language","modelValue"]),[[O,a(t)]])])])}}},Y=j(G,[["__scopeId","data-v-320933a0"]]);export{X as componentOptions,Y as default};