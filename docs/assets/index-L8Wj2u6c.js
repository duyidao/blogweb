import{_ as B}from"./index-GrhpAljX.js";import{_ as w}from"./index-CUkoVuel.js";import{c as D}from"./effect-BKCwPZM9.js";import{g as L,j as R}from"./index-jA4j3-G_.js";import{_ as j,s as k,r as _,q as F,M as O,o as v,c as y,j as i,w as A,a as e,D as c,u as r,F as I,f as U,h as x,i as M}from"./index-DiFe4JqO.js";import"./index-DLh32JCa.js";import"./rem-xC5CoqQM.js";const T={class:"iframe-box"},E={class:"list-style-circle"},N={class:"flex-column"},V={class:"file"},q={class:"upload-upload"},J={class:"content"},$={class:"flex-column"},G={class:"upload-upload"},H={class:"content"},K={class:"flex-column"},P={class:"upload-upload"},Q={class:"flex-column"},W={class:"flex-column-fileReader"},X={class:"upload-upload"},Y={class:"upload-upload"},Z={class:"upload-upload"},ee={class:"upload-upload"},ae={class:"content-fileReader"},te={__name:"index",setup(se){const h={oneAndAllCode:`// 点击提交按钮
const onSubmit = async () => {
  let _formData = new FormData()
  imageList.value.forEach(item => {
    _formData.append(item.name + 'file', item)
    // axios.post('/xx', _formData)
    console.log('通过axios发请求，文件：', item.name);
  })
}`,sliceCode:`const onSubmit = async () => {
  // let size = 2 * 1024 * 1024
  let current = 0
  let fileSize = fileObj.value.size
  let formData = new FormData()

  // while (current < fileSize) {
  const timer = setInterval(() => {
    formData.append(fileObj.value.name, fileObj.value.slice(current, current + size))
    // 切片上传
    // await axios.post('/upload', formData)

    console.log('共' + fileSize + '大小的文件，已上传了' + current + '大小的文件，占比' + precent.value + '%');

    // 累加文件大小
    current += size
    // 计算百分比
    precent.value = Math.min((current / fileSize) * 100, 100)

    if (current >= fileSize) clearInterval(timer)
  }, 1000);
  // }
}`,breakpointCode:`const onSubmit = async () => {
  let size = 2 * 1024 * 1024
  let current = localStorage.getItem(fileObj.value.name) || 0
  let formData = new FormData()
  let fileSize = fileObj.value.size

  localStorage.setItem(fileObj.value.name, current)

  // while(current < fileSize) {
  const timer = setInterval(() => {

    formData.append(fileObj.value.name, fileObj.value.slice(current, current + size))
    // 切片上传
    // await axios.post('/upload', formData)
    // 累加文件大小
    current += size
    // 计算百分比
    precent.value = Math.min((current / fileSize) * 100, 100)
  }, 1000);
  // }
}`},g=L("js.upload"),b=k([]);b.value=g.map(a=>({...a,model:h[a.name+"Code"],component:Object.freeze(R.value[a.name])}));const f=_({}),z=a=>{f.value=a},m=_({}),C=a=>{const t=a,s=new Blob([t],{type:t.type});m.value={size:s.size,type:s.type,name:t.name}},u=_({}),S=a=>{u.value=new FormData,u.value.append("file",a),u.value.append("username","John"),u.value.append("age",30),console.log("formData.value",u.value)},d=_(null),p=(a,t)=>{let s=a.target.files[0];const n=new FileReader;switch(n.addEventListener("load",o=>{const l=o.target.result;switch(console.log("fileData",l),t){case"readAsText":d.value=l;break;case"readAsArrayBuffer":d.value={byteLength:l.byteLength,detached:l.detached,maxByteLength:l.maxByteLength};break;case"readAsDataURL":d.value=l;break;case"readAsBinaryString":d.value=l;break}d.value=l}),t){case"readAsText":n.readAsText(s);break;case"readAsArrayBuffer":n.readAsArrayBuffer(s);break;case"readAsDataURL":n.readAsDataURL(s);break;case"readAsBinaryString":n.readAsBinaryString(s);break}};return F(()=>{D.value=g.map(a=>({name:a.title+"源码",value:h[a.name+"Code"]}))}),O(()=>{D.value=[""]}),(a,t)=>{const s=w,n=B;return v(),y("div",T,[i(n,{class:"upload-box",title:"前置知识"},{default:A(()=>[e("ul",E,[e("li",N,[e("div",V,[e("div",q,[i(s,{info:"上传文件，file类型",onChange:z})]),e("div",J,[e("div",null,"文件名: "+c(r(f).name||"-"),1),e("div",null,"文件类型: "+c(r(f).type||"-"),1),e("div",null,"文件大小: "+c(r(f).size||0)+"bytes",1)])])]),e("li",$,[e("div",null,[e("div",G,[i(s,{info:"上传文件，blob类型",onChange:C})]),e("div",H,[e("div",null,"文件名: "+c(r(m).name),1),e("div",null,"文件类型: "+c(r(m).type),1),e("div",null,"文件大小: "+c(r(m).size)+"bytes",1)])])]),e("li",K,[e("div",null,[e("div",P,[i(s,{info:"上传文件，formData类型",onChange:S})])])]),e("li",Q,[e("div",W,[e("div",X,[i(s,{info:"上传文件，fileReader类型readAsText",onChange:t[0]||(t[0]=o=>p(o,"readAsText"))})]),e("div",Y,[i(s,{info:"上传文件，fileReader类型readAsArrayBuffer",onChange:t[1]||(t[1]=o=>p(o,"readAsArrayBuffer"))})]),e("div",Z,[i(s,{info:"上传文件，fileReader类型readAsDataURL",onChange:t[2]||(t[2]=o=>p(o,"readAsDataURL"))})]),e("div",ee,[i(s,{info:"上传文件，fileReader类型readAsBinaryString",onChange:t[3]||(t[3]=o=>p(o,"readAsBinaryString"))})]),e("div",ae,c(r(d)),1)])])])]),_:1}),(v(!0),y(I,null,U(r(b),o=>(v(),x(n,{key:o.name,title:o.title},{default:A(()=>[(v(),x(M(o.component)))]),_:2},1032,["title"]))),128))])}}},ue=j(te,[["__scopeId","data-v-7188630a"]]);export{ue as default};
