import{_ as h}from"./index-RQ--UWLt.js";import{_ as m,r as s,o as v,c as f,a,j as g,G as c,u as r,C as p,a3 as w}from"./index-D7Q_uCMS.js";import"./index-ClJLQ0Lc.js";const x={class:"tailor"},R={class:"tailor-upload"},k=["src"],C={__name:"tailor",setup(y){const o=s(""),n=s(null),e=s(null);s({imgWidth:0,imgHeight:0,canvasWidth:0,canvasHeight:0,scale:0,left:0,top:0});const _=i=>{let t=new FileReader;t.readAsDataURL(i),t.onload=()=>{o.value=t.result;let l=n.value.getContext("2d");setTimeout(()=>{let d=200/e.value.height*e.value.naturalHeight,u=200/e.value.width*e.value.naturalWidth;l.drawImage(e.value,0,0,u,d,0,0,200,200)},1e3)}};return(i,t)=>{const l=h;return v(),f("div",x,[a("div",R,[g(l,{onChange:_})]),a("div",null,[c(" 原图： "),a("img",{src:r(o),ref_key:"imgRef",ref:e},null,8,k)]),p(a("div",null,[c(" 裁剪： "),a("canvas",{ref_key:"canvasRef",ref:n,height:"200",width:"200"},null,512)],512),[[w,r(o)]])])}}},U=m(C,[["__scopeId","data-v-4ac56eaa"]]);export{U as default};