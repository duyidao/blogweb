import{_ as S}from"./index-Cr8RYIZ3.js";import{_ as B}from"./index-BpJAok1o.js";import{_ as w,g as k,s as R,Y as L,r as _,o as v,c as b,e as i,w as g,F as j,j as F,k as y,u as r,a as e,A as d,l as O}from"./index-Cun0YHcx.js";import"./index-Doyg7BzY.js";const I={class:"iframe-box"},U={class:"list-style-circle"},T={class:"flex-column"},V={class:"file"},E={class:"upload-upload"},M={class:"content"},N={class:"flex-column"},J={class:"upload-upload"},Y={class:"content"},$={class:"flex-column"},q={class:"upload-upload"},G={class:"flex-column"},H={class:"flex-column-fileReader"},K={class:"upload-upload"},P={class:"upload-upload"},Q={class:"upload-upload"},W={class:"upload-upload"},X={class:"content-fileReader"},Z={__name:"index",setup(ee){const D={oneAndAllCode:`// 点击提交按钮
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
}`},A=k("learn.upload"),h=R([]);h.value=A.map(o=>({...o,model:D[o.name+"Code"],component:Object.freeze(L.value[o.name])}));const f=_({}),x=o=>{f.value=o},m=_({}),z=o=>{const a=o,t=new Blob([a],{type:a.type});m.value={size:t.size,type:t.type,name:a.name}},u=_({}),C=o=>{u.value=new FormData,u.value.append("file",o),u.value.append("username","John"),u.value.append("age",30),console.log("formData.value",u.value)},c=_(null),p=(o,a)=>{let t=o.target.files[0];const n=new FileReader;switch(n.addEventListener("load",l=>{const s=l.target.result;switch(console.log("fileData",s),a){case"readAsText":c.value=s;break;case"readAsArrayBuffer":c.value={byteLength:s.byteLength,detached:s.detached,maxByteLength:s.maxByteLength};break;case"readAsDataURL":c.value=s;break;case"readAsBinaryString":c.value=s;break}c.value=s}),a){case"readAsText":n.readAsText(t);break;case"readAsArrayBuffer":n.readAsArrayBuffer(t);break;case"readAsDataURL":n.readAsDataURL(t);break;case"readAsBinaryString":n.readAsBinaryString(t);break}};return(o,a)=>{const t=B,n=S;return v(),b("div",I,[i(n,{class:"upload-box",needCode:!1,title:"前置知识"},{default:g(()=>[e("ul",U,[e("li",T,[e("div",V,[e("div",E,[i(t,{info:"上传文件，file类型",onChange:x})]),e("div",M,[e("div",null,"文件名: "+d(r(f).name||"-"),1),e("div",null,"文件类型: "+d(r(f).type||"-"),1),e("div",null,"文件大小: "+d(r(f).size||0)+"bytes",1)])])]),e("li",N,[e("div",null,[e("div",J,[i(t,{info:"上传文件，blob类型",onChange:z})]),e("div",Y,[e("div",null,"文件名: "+d(r(m).name),1),e("div",null,"文件类型: "+d(r(m).type),1),e("div",null,"文件大小: "+d(r(m).size)+"bytes",1)])])]),e("li",$,[e("div",null,[e("div",q,[i(t,{info:"上传文件，formData类型",onChange:C})])])]),e("li",G,[e("div",H,[e("div",K,[i(t,{info:"上传文件，fileReader类型readAsText",onChange:a[0]||(a[0]=l=>p(l,"readAsText"))})]),e("div",P,[i(t,{info:"上传文件，fileReader类型readAsArrayBuffer",onChange:a[1]||(a[1]=l=>p(l,"readAsArrayBuffer"))})]),e("div",Q,[i(t,{info:"上传文件，fileReader类型readAsDataURL",onChange:a[2]||(a[2]=l=>p(l,"readAsDataURL"))})]),e("div",W,[i(t,{info:"上传文件，fileReader类型readAsBinaryString",onChange:a[3]||(a[3]=l=>p(l,"readAsBinaryString"))})]),e("div",X,d(r(c)),1)])])])]),_:1}),(v(!0),b(j,null,F(r(h),l=>(v(),y(n,{key:l.name,title:l.title,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:l.model,"onUpdate:modelValue":s=>l.model=s,type:"javascript",height:"450",disabled:"",column:""},{default:g(()=>[(v(),y(O(l.component)))]),_:2},1032,["title","modelValue","onUpdate:modelValue"]))),128))])}}},se=w(Z,[["__scopeId","data-v-80af5fa7"]]);export{se as default};
