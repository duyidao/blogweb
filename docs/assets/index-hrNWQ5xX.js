import{_ as y}from"./index-WIiNDUx3.js";import g from"./index-D2vhg22B.js";import{_ as A,r as m,o as C,c as D,a as e,f as o,n as k,u as f,l as h,w as x}from"./index-CwairtzP.js";import"./index-BUeQpffe.js";import"./index-COfhrWyd.js";const L={class:"ifrname-box"},S={class:"upload-upload"},z={__name:"oneAndAll",setup(b){const a=m([]),c=u=>{a.value=[],Array.from(u).forEach(s=>{a.value.push(s)})},r=async()=>{let u=new FormData;a.value.forEach(s=>{u.append(s.name+"file",s),console.log("通过axios发请求，文件：",s.name)})};return(u,s)=>{const t=y;return C(),D("div",L,[e("div",S,[o(t,{needList:"",multiple:"",onChange:c})]),e("button",{onClick:r},"提交")])}}},R=A(z,[["__scopeId","data-v-23555382"]]),F={class:"ifrname-box"},$={class:"upload-upload"},w={class:"jindu"},I={class:"progress"},U={class:"progress-text"},T={__name:"slice",props:{size:{type:Number,default:0}},setup(b){const a=m({}),c=m(0),{size:r}=b,u=t=>{a.value={},c.value=0,a.value=t},s=async()=>{let t=0,n=a.value.size,_=new FormData;const p=setInterval(()=>{_.append(a.value.name,a.value.slice(t,t+r)),console.log("共"+n+"大小的文件，已上传了"+t+"大小的文件，占比"+c.value+"%"),t+=r,c.value=Math.min(t/n*100,100),t>=n&&clearInterval(p)},1e3)};return(t,n)=>{const _=y;return C(),D("div",F,[e("div",$,[o(_,{needList:"",onChange:u})]),e("button",{onClick:s},"提交"),e("div",w,[e("div",I,[e("div",{class:"progress-bar",style:k({width:f(c).toFixed(2)+"%"})},null,4)]),e("div",U,h(f(c).toFixed(2))+"%",1)])])}}},E=A(T,[["__scopeId","data-v-8f0f8b57"]]),j={class:"ifrname-box"},N={class:"upload-upload"},M={__name:"breakpoint",setup(b){const a=m({}),c=m(0),r=s=>{a.value=s},u=async()=>{let s=2097152,t=localStorage.getItem(a.value.name)||0,n=new FormData,_=a.value.size;localStorage.setItem(a.value.name,t),setInterval(()=>{n.append(a.value.name,a.value.slice(t,t+s)),t+=s,c.value=Math.min(t/_*100,100)},1e3)};return(s,t)=>{const n=y;return C(),D("div",j,[e("div",N,[o(n,{needList:"",onChange:r})]),e("button",{onClick:u},"提交")])}}},O=A(M,[["__scopeId","data-v-48feb73a"]]),V={class:"ifrname-box"},J={class:"list-style-circle"},q={class:"flex-column"},G={class:"file"},H={class:"upload-upload"},K={class:"content"},P={class:"flex-column"},Q={class:"upload-upload"},W={class:"content"},X={class:"flex-column"},Y={class:"upload-upload"},Z={class:"flex-column"},ee={class:"flex-column-fileReader"},ae={class:"upload-upload"},se={class:"upload-upload"},te={class:"upload-upload"},oe={class:"upload-upload"},ne={class:"content-fileReader"},le={__name:"index",setup(b){const a=m({}),c=p=>{a.value=p},r=m({}),u=p=>{const l=p,i=new Blob([l],{type:l.type});r.value={size:i.size,type:i.type,name:l.name}},s=m({}),t=p=>{s.value=new FormData,s.value.append("file",p),s.value.append("username","John"),s.value.append("age",30),console.log("formData.value",s.value)},n=m(null),_=(p,l)=>{let i=p.target.files[0];const d=new FileReader;switch(d.addEventListener("load",B=>{const v=B.target.result;switch(console.log("fileData",v),l){case"readAsText":n.value=v;break;case"readAsArrayBuffer":n.value={byteLength:v.byteLength,detached:v.detached,maxByteLength:v.maxByteLength};break;case"readAsDataURL":n.value=v;break;case"readAsBinaryString":n.value=v;break}n.value=v}),l){case"readAsText":d.readAsText(i);break;case"readAsArrayBuffer":d.readAsArrayBuffer(i);break;case"readAsDataURL":d.readAsDataURL(i);break;case"readAsBinaryString":d.readAsBinaryString(i);break}};return(p,l)=>{const i=y;return C(),D("div",V,[o(g,{class:"upload-box",needCode:!1,title:"前置知识"},{default:x(()=>[e("ul",J,[e("li",q,[e("div",G,[e("div",H,[o(i,{info:"上传文件，file类型",onChange:c})]),e("div",K,[e("div",null,"文件名: "+h(f(a).name||"-"),1),e("div",null,"文件类型: "+h(f(a).type||"-"),1),e("div",null,"文件大小: "+h(f(a).size||0)+"bytes",1)])])]),e("li",P,[e("div",null,[e("div",Q,[o(i,{info:"上传文件，blob类型",onChange:u})]),e("div",W,[e("div",null,"文件名: "+h(f(r).name),1),e("div",null,"文件类型: "+h(f(r).type),1),e("div",null,"文件大小: "+h(f(r).size)+"bytes",1)])])]),e("li",X,[e("div",null,[e("div",Y,[o(i,{info:"上传文件，formData类型",onChange:t})])])]),e("li",Z,[e("div",ee,[e("div",ae,[o(i,{info:"上传文件，fileReader类型readAsText",onChange:l[0]||(l[0]=d=>_(d,"readAsText"))})]),e("div",se,[o(i,{info:"上传文件，fileReader类型readAsArrayBuffer",onChange:l[1]||(l[1]=d=>_(d,"readAsArrayBuffer"))})]),e("div",te,[o(i,{info:"上传文件，fileReader类型readAsDataURL",onChange:l[2]||(l[2]=d=>_(d,"readAsDataURL"))})]),e("div",oe,[o(i,{info:"上传文件，fileReader类型readAsBinaryString",onChange:l[3]||(l[3]=d=>_(d,"readAsBinaryString"))})]),e("div",ne,h(f(n)),1)])])])]),_:1}),o(g,{class:"upload-box",needCode:!1,title:"单文件上传"},{default:x(()=>[o(R)]),_:1}),o(g,{class:"upload-box",needCode:!1,title:"切片上传"},{default:x(()=>[o(E,{size:10*1024*1024})]),_:1}),o(g,{class:"upload-box",needCode:!1,title:"断点续传"},{default:x(()=>[o(O)]),_:1})])}}},_e=A(le,[["__scopeId","data-v-7483fdf8"]]);export{_e as default};