import{_ as B}from"./index-M8MeMDs0.js";import{_ as L}from"./index-CVOlviAI.js";import{c as y}from"./effect-a2W-tOnW.js";import{g as w,j as R}from"./index-CQsm-A3v.js";import{_ as k}from"./index-N5uH88Uw.js";import{H as j,r as _,C as F,P as O,o as v,a as D,q as i,s as A,b as e,t as c,u as r,F as I,v as U,B as x,L as T}from"./vender-BxpIRFvU.js";import"./index-DLm-h7Ja.js";import"./rem-D2iYkbWd.js";const M={class:"iframe-box"},E={class:"list-style-circle"},N={class:"flex-column"},V={class:"file"},q={class:"upload-upload"},H={class:"content"},J={class:"flex-column"},P={class:"upload-upload"},$={class:"content"},G={class:"flex-column"},K={class:"upload-upload"},Q={class:"flex-column"},W={class:"flex-column-fileReader"},X={class:"upload-upload"},Y={class:"upload-upload"},Z={class:"upload-upload"},ee={class:"upload-upload"},ae={class:"content-fileReader"},te={__name:"index",setup(oe){const h={oneAndAllCode:`// 点击提交按钮
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
}`},b=w("js.upload"),g=j([]);g.value=b.map(a=>({...a,model:h[a.name+"Code"],component:Object.freeze(R.value[a.name])}));const f=_({}),z=a=>{f.value=a},m=_({}),C=a=>{const t=a,o=new Blob([t],{type:t.type});m.value={size:o.size,type:o.type,name:t.name}},u=_({}),S=a=>{u.value=new FormData,u.value.append("file",a),u.value.append("username","John"),u.value.append("age",30),console.log("formData.value",u.value)},d=_(null),p=(a,t)=>{let o=a.target.files[0];const n=new FileReader;switch(n.addEventListener("load",s=>{const l=s.target.result;switch(console.log("fileData",l),t){case"readAsText":d.value=l;break;case"readAsArrayBuffer":d.value={byteLength:l.byteLength,detached:l.detached,maxByteLength:l.maxByteLength};break;case"readAsDataURL":d.value=l;break;case"readAsBinaryString":d.value=l;break}d.value=l}),t){case"readAsText":n.readAsText(o);break;case"readAsArrayBuffer":n.readAsArrayBuffer(o);break;case"readAsDataURL":n.readAsDataURL(o);break;case"readAsBinaryString":n.readAsBinaryString(o);break}};return F(()=>{y.value=b.map(a=>({name:a.title+"源码",value:h[a.name+"Code"]}))}),O(()=>{y.value=[""]}),(a,t)=>{const o=L,n=B;return v(),D("div",M,[i(n,{class:"upload-box",title:"前置知识"},{default:A(()=>[e("ul",E,[e("li",N,[e("div",V,[e("div",q,[i(o,{info:"上传文件，file类型",onChange:z})]),e("div",H,[e("div",null,"文件名: "+c(r(f).name||"-"),1),e("div",null,"文件类型: "+c(r(f).type||"-"),1),e("div",null,"文件大小: "+c(r(f).size||0)+"bytes",1)])])]),e("li",J,[e("div",null,[e("div",P,[i(o,{info:"上传文件，blob类型",onChange:C})]),e("div",$,[e("div",null,"文件名: "+c(r(m).name),1),e("div",null,"文件类型: "+c(r(m).type),1),e("div",null,"文件大小: "+c(r(m).size)+"bytes",1)])])]),e("li",G,[e("div",null,[e("div",K,[i(o,{info:"上传文件，formData类型",onChange:S})])])]),e("li",Q,[e("div",W,[e("div",X,[i(o,{info:"上传文件，fileReader类型readAsText",onChange:t[0]||(t[0]=s=>p(s,"readAsText"))})]),e("div",Y,[i(o,{info:"上传文件，fileReader类型readAsArrayBuffer",onChange:t[1]||(t[1]=s=>p(s,"readAsArrayBuffer"))})]),e("div",Z,[i(o,{info:"上传文件，fileReader类型readAsDataURL",onChange:t[2]||(t[2]=s=>p(s,"readAsDataURL"))})]),e("div",ee,[i(o,{info:"上传文件，fileReader类型readAsBinaryString",onChange:t[3]||(t[3]=s=>p(s,"readAsBinaryString"))})]),e("div",ae,c(r(d)),1)])])])]),_:1}),(v(!0),D(I,null,U(r(g),s=>(v(),x(n,{key:s.name,title:s.title},{default:A(()=>[(v(),x(T(s.component)))]),_:2},1032,["title"]))),128))])}}},fe=k(te,[["__scopeId","data-v-7188630a"]]);export{fe as default};
