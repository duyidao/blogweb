import{_ as y,o as p,c as d,r as v,d as o,t as c,u as r,b as i,i as m}from"./index-Cg4jYAfR.js";const b=["type","value","maxlength"],F=["value","maxlength"],B={__name:"input",props:{msg:{type:[String,Number],default:"hello"},type:{type:String,default:"text",validator:t=>["text","password","number","email","textarea"].includes(t)},maxlength:{type:Number,default:100},searchAction:{type:Boolean,default:!1}},emits:["update:msg","input","change","focus","blur","search"],setup(t,{emit:n}){const{searchAction:u}=t,s=n,a=e=>{s("update:msg",e.target.value),s("input",e.target.value)},l=e=>{s("change",e.target.value),u&&_(e.target.value)},_=e=>{typeof this.searchAction=="string"?axios.get(this.searchAction,{params:{keyword:e}}).then(x=>{s("search",x.data)}):s("search",e)},h=e=>{s("focus",e.target.value)},f=e=>{s("blur",e.target.value)};return(e,x)=>t.type!=="textarea"?(p(),d("input",{key:0,type:t.type,value:t.msg,maxlength:t.maxlength,placeholder:"请输入内容",onInput:a,onChange:l,onFocus:h,onBlur:f},null,40,b)):(p(),d("textarea",{key:1,name:"",value:t.msg,maxlength:t.maxlength,placeholder:"请输入内容",onInput:a,onChange:l,onFocus:h,onBlur:f,cols:"30",rows:"10"},null,40,F))}},g=y(B,[["__scopeId","data-v-9f5246c1"]]),k={class:"input-info"},N={__name:"index",setup(t){const n=v("daodao"),u=v(11);return(s,a)=>(p(),d("div",k,[o("div",null,[o("span",null,"文本输入框，父组件内容 "+c(r(n)),1),i(g,{msg:r(n),"onUpdate:msg":a[0]||(a[0]=l=>m(n)?n.value=l:null)},null,8,["msg"])]),o("div",null,[o("span",null,"多行文本框，父组件内容 "+c(r(n)),1),i(g,{type:"textarea",msg:r(n),"onUpdate:msg":a[1]||(a[1]=l=>m(n)?n.value=l:null)},null,8,["msg"])]),o("div",null,[o("span",null,"数字框，父组件内容 "+c(r(u)),1),i(g,{type:"number",msg:r(u),"onUpdate:msg":a[2]||(a[2]=l=>m(u)?u.value=l:null)},null,8,["msg"])])]))}},I=y(N,[["__scopeId","data-v-c6ad3584"]]);export{I as default};