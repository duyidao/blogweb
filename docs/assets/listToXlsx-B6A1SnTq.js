import{u as s,w as x}from"./xlsx-ChWuxSKv.js";import{_ as k,r as a,o as i,c as d,a as e,X as r,D as c,E as u,O as v,F as w,j as g,A as p,p as F,d as y}from"./index-oMvnDw21.js";const D={setup(){const n=a({}),l=a([]),_=()=>{Object.keys(n).length!==0&&(l.value.push({...n.value,id:Date.now()}),n.value={})},o=a(null);return{info:n,tableData:l,clickFn:_,exportFn:()=>{if(l.value.length===0)return;const f=s.json_to_sheet(l.value),t=s.book_new();s.book_append_sheet(t,f,"sheet1"),x(t,"test.xlsx");const m=s.table_to_sheet(o.value),b=s.book_new();s.book_append_sheet(b,m,"sheet1"),x(b,"tableTest.xlsx")},tableRef:o}}},S=n=>(F("data-v-1df7590a"),n=n(),y(),n),V={class:"xlsx"},I={class:"input"},T={for:"name"},j={for:"age"},B={for:"level"},U={class:"buttons"},C={ref:"tableRef",class:"table-list"},E=S(()=>e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"年龄"),e("th",null,"等级")])],-1));function M(n,l,_,o,h,f){return i(),d("div",V,[e("div",I,[e("label",T,[r(" 名称： "),c(e("input",{"onUpdate:modelValue":l[0]||(l[0]=t=>o.info.name=t),class:"",type:"text",name:"name",id:"name"},null,512),[[u,o.info.name]])]),e("label",j,[r(" 年龄： "),c(e("input",{"onUpdate:modelValue":l[1]||(l[1]=t=>o.info.age=t),class:"",type:"text",name:"age",id:"age"},null,512),[[u,o.info.age]])]),e("label",B,[r(" 等级： "),c(e("input",{"onUpdate:modelValue":l[2]||(l[2]=t=>o.info.level=t),class:"",type:"text",name:"level",id:"level"},null,512),[[u,o.info.level]])]),e("div",U,[e("button",{class:"",onClick:l[3]||(l[3]=v((...t)=>o.clickFn&&o.clickFn(...t),["stop"]))},"数据添加到表格"),e("button",{class:"",onClick:l[4]||(l[4]=v((...t)=>o.exportFn&&o.exportFn(...t),["stop"]))},"表格数据导出xlsx")])]),e("table",C,[E,e("tbody",null,[(i(!0),d(w,null,g(o.tableData,t=>(i(),d("tr",{key:t.id},[e("td",null,p(t.name),1),e("td",null,p(t.age),1),e("td",null,p(t.level),1)]))),128))])],512)])}const R=k(D,[["render",M],["__scopeId","data-v-1df7590a"]]);export{R as default};