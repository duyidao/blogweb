import{_ as w,r as d,o as a,c,b as i,v as C,x as M,f as m,i as k,C as B,F as y,q as S,t as p}from"./index-CH98or-N.js";const $={class:"ifrname-box box"},D={class:"input"},F={class:"list"},L={class:"item-num transition-color"},N={class:"item-word transition-color"},U={__name:"index",setup(V){const l=d(120001003),r=["零","一","二","三","四","五","六","七","八","九"],_=["","十","百","千"],h=["","万","亿"],f=t=>{if(t==="0000"||t==="000"||t==="00"||t==="00"||t==="0")return r[0];let n="";for(let e=0;e<t.length;e++){let s=_[t.length-e-1],o=r[+t[e]];o===r[0]&&(s=""),n+=o+s}return n.replace(/零{2,}/g,"零").replace(/零+$/g,"")},g=t=>{let n="";for(let e=0;e<t.length;e++){const s=t[e];let o=h[t.length-1-e];s===r[0]&&(o=""),n+=s+o}return n.replace(/零{2,}/g,"零").replace(/零+$/g,"")},u=d([]),v=t=>{const n=t.toString().replace(/(?=(\d{4})+$)/g,",").split(",").filter(Boolean);let e=[];for(let o=0;o<n.length;o++){let b=f(n[o]);e.push(b)}const s=g(e);u.value.push({num:t,word:s})},x=()=>{v(l.value)};return(t,n)=>(a(),c("div",$,[i("div",D,[C(i("input",{class:"transition-color",type:"number","onUpdate:modelValue":n[0]||(n[0]=e=>k(l)?l.value=e:null),name:"num",id:"num",placeholder:"请输入要转化的数字"},null,512),[[M,m(l)]]),i("button",{class:"transition-color",onClick:B(x,["stop"])},"转换")]),i("div",F,[(a(!0),c(y,null,S(m(u),(e,s)=>(a(),c("div",{key:s,class:"item"},[i("div",L,"数字："+p(e.num),1),i("div",N,"转换后："+p(e.word),1)]))),128))])]))}},A=w(U,[["__scopeId","data-v-19d19968"]]);export{A as default};