import{_ as u,o as c,c as s,j as l,a as o,A as d,F as n,n as b,u as k,p as g,d as h}from"./index-oMvnDw21.js";const y=r=>(g("data-v-0d43c826"),r=r(),h(),r),x={class:"if-title"},D={class:"if-goods"},v=y(()=>o("img",{src:""},null,-1)),j={__name:"map",setup(r){let i=[{title:"热销排行",goodsData:[{price:"100.0",profit:30,src:""},{price:"78.0",profit:20,src:""}]},{title:"利润排行",goodsData:[{price:"30.0",profit:130,src:""},{price:"333.0",profit:55,src:""}]},{title:"热门主题",goodsData:[{price:"137.0",src:""},{price:"78.0",src:""}]},{title:"低价好物",goodsData:[{price:"100.0",profit:30,src:""},{price:"78.0",profit:20,src:""}]}];return i.forEach((e,f)=>{switch(e.title){case"热销排行":e.goodsData.forEach((t,a)=>{t.styleObj={background:"red",color:"#fff"},t.text="Top1",a!==0&&(t.styleObj.background="orange",t.text="Top2")});break;case"利润排行":e.goodsData.forEach((t,a)=>{t.styleObj={background:"pink",color:"#000"},t.text=t.profit+"%"});break;case"低价好物":e.goodsData.forEach((t,a)=>{t.styleObj={background:"gray",color:"#000"},t.text=t.price});break}}),(e,f)=>(c(!0),s(n,null,l(k(i),(t,a)=>(c(),s("div",{class:"if",key:a},[o("div",x,d(t.title),1),o("div",D,[(c(!0),s(n,null,l(t.goodsData,(p,_)=>(c(),s("div",{class:"good",key:_},[v,o("div",{class:"info",style:b(p.styleObj)},d(p.text),5)]))),128))])]))),128))}},E=u(j,[["__scopeId","data-v-0d43c826"]]);export{E as default};