import{r as x,o as r,c as s,a as i,E as f,u,F as l,f as g,j as b,p as h,d as m,_ as v}from"./index-D7Q_uCMS.js";const y=c=>(h("data-v-fb2bbecc"),c=c(),m(),c),D={class:"if-title"},S={class:"if-goods"},j=y(()=>i("img",{src:""},null,-1)),I={__name:"jsx",setup(c){let _=[{title:"热销排行",goodsData:[{price:"100.0",profit:30,src:""},{price:"78.0",profit:20,src:""}]},{title:"利润排行",goodsData:[{price:"30.0",profit:130,src:""},{price:"333.0",profit:55,src:""}]},{title:"热门主题",goodsData:[{price:"137.0",src:""},{price:"78.0",src:""}]},{title:"低价好物",goodsData:[{price:"100.0",profit:30,src:""},{price:"78.0",profit:20,src:""}]}];const n=x(0);function k({title:p,index:a,goods:o}){console.log("执行了。");let e={position:"absolute",bottom:"0",left:"0",width:"100%",height:"25px",lineHeight:"25px",textAlign:"center"},t="";switch(p){case"热销排行":a===0?(e.background="red",e.color="#fff",t="Top1"):(e.background="orange",e.color="#fff",t="Top2");break;case"利润排行":e.background="pink",e.color="#000",t=o.profit+"%";break;case"热门主题":e.display="none";break;case"低价好物":e.background="gray",e.color="#000",t=o.price;break}return b("div",{style:e},[t])}return(p,a)=>(r(),s(l,null,[i("button",{onClick:a[0]||(a[0]=()=>{n.value+=1})}," 点击事件触发，createStyle与createText函数不会触发："+f(u(n)),1),(r(!0),s(l,null,g(u(_),(o,e)=>(r(),s("div",{class:"if",key:e},[i("div",D,f(o.title),1),i("div",S,[(r(!0),s(l,null,g(o.goodsData,(t,d)=>(r(),s("div",{class:"good",key:d},[j,b(k,{title:o.title,index:d,goods:t},null,8,["title","index","goods"])]))),128))])]))),128))],64))}},w=v(I,[["__scopeId","data-v-fb2bbecc"]]);export{w as default};