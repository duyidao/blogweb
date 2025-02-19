define(["exports","./index-kY_zZjMK","./index-CRyYTF0v","./effect-DvRdfHYc","./index-DzAEJEV-","./index-uafER6--","./vender-qwA9zub-","./index-DbE11khq","./rem-CCdVRkxl"],function(f,b,y,m,p,B,e,G,H){"use strict";var x=document.createElement("style");x.textContent=`.flex-column>div[data-v-7188630a]{display:flex;align-items:center}.flex-column>div .upload-upload[data-v-7188630a]{width:300px;margin-right:20px}.flex-column>div.flex-column-fileReader[data-v-7188630a]{display:flex;flex-wrap:wrap}.flex-column>div.flex-column-fileReader>div[data-v-7188630a]{margin-bottom:20px}.flex-column>div.flex-column-fileReader .content-fileReader[data-v-7188630a]{min-height:20px;max-height:300px;overflow-y:auto;word-wrap:break-word;word-break:break-all}.flex-column span[data-v-7188630a]{font-size:16px;margin-bottom:10px;font-weight:600;color:var(--primary-info)}.flex-column .content[data-v-7188630a]{display:flex;flex-direction:column;justify-content:space-between;height:120px;padding:10px 0;font-size:15px;color:var(--primary-info)}.flex-column .content div[data-v-7188630a]{margin-bottom:8px}.flex-column .content div[data-v-7188630a]:last-child{margin-bottom:0}@media screen and (max-width: 768px){.flex-column>div.flex-column-fileReader .flex label[data-v-7188630a]{width:100%;margin-bottom:.625rem}.flex-column>div.flex-column-fileReader .flex label i[data-v-7188630a]{margin-right:.9375rem;padding:.125rem .3125rem}.flex-column span[data-v-7188630a]{font-size:1rem;margin-bottom:.625rem}.flex-column .content[data-v-7188630a]{margin-top:.625rem}.flex-column .content div[data-v-7188630a]{margin-bottom:.5rem}}
`,document.head.appendChild(x);const D={class:"iframe-box"},N={class:"list-style-circle"},V={class:"flex-column"},w={class:"file"},A={class:"upload-upload"},S={class:"content"},z={class:"flex-column"},k={class:"upload-upload"},v={class:"content"},C={class:"flex-column"},R={class:"upload-upload"},L={class:"flex-column"},j={class:"flex-column-fileReader"},O={class:"upload-upload"},F={class:"upload-upload"},I={class:"upload-upload"},U={class:"upload-upload"},T={class:"content-fileReader"},E={__name:"index",setup(K){const g={oneAndAllCode:`// 点击提交按钮
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
}`},_=p.getDict("js.upload"),h=e.shallowRef([]);h.value=_.map(a=>({...a,model:g[a.name+"Code"],component:Object.freeze(p.jsChildData.value[a.name])}));const r=e.ref({}),J=a=>{r.value=a},d=e.ref({}),P=a=>{const t=a,o=new Blob([t],{type:t.type});d.value={size:o.size,type:o.type,name:t.name}},c=e.ref({}),q=a=>{c.value=new FormData,c.value.append("file",a),c.value.append("username","John"),c.value.append("age",30),console.log("formData.value",c.value)},n=e.ref(null),u=(a,t)=>{let o=a.target.files[0];const i=new FileReader;switch(i.addEventListener("load",l=>{const s=l.target.result;switch(console.log("fileData",s),t){case"readAsText":n.value=s;break;case"readAsArrayBuffer":n.value={byteLength:s.byteLength,detached:s.detached,maxByteLength:s.maxByteLength};break;case"readAsDataURL":n.value=s;break;case"readAsBinaryString":n.value=s;break}n.value=s}),t){case"readAsText":i.readAsText(o);break;case"readAsArrayBuffer":i.readAsArrayBuffer(o);break;case"readAsDataURL":i.readAsDataURL(o);break;case"readAsBinaryString":i.readAsBinaryString(o);break}};return e.onMounted(()=>{m.codeList.value=_.map(a=>({name:a.title+"源码",value:g[a.name+"Code"]}))}),e.onUnmounted(()=>{m.codeList.value=[""]}),(a,t)=>{const o=y.__unplugin_components_0,i=b.__unplugin_components_0;return e.openBlock(),e.createElementBlock("div",D,[e.createVNode(i,{class:"upload-box",title:"前置知识"},{default:e.withCtx(()=>[e.createBaseVNode("ul",N,[e.createBaseVNode("li",V,[e.createBaseVNode("div",w,[e.createBaseVNode("div",A,[e.createVNode(o,{info:"上传文件，file类型",onChange:J})]),e.createBaseVNode("div",S,[e.createBaseVNode("div",null,"文件名: "+e.toDisplayString(e.unref(r).name||"-"),1),e.createBaseVNode("div",null,"文件类型: "+e.toDisplayString(e.unref(r).type||"-"),1),e.createBaseVNode("div",null,"文件大小: "+e.toDisplayString(e.unref(r).size||0)+"bytes",1)])])]),e.createBaseVNode("li",z,[e.createBaseVNode("div",null,[e.createBaseVNode("div",k,[e.createVNode(o,{info:"上传文件，blob类型",onChange:P})]),e.createBaseVNode("div",v,[e.createBaseVNode("div",null,"文件名: "+e.toDisplayString(e.unref(d).name),1),e.createBaseVNode("div",null,"文件类型: "+e.toDisplayString(e.unref(d).type),1),e.createBaseVNode("div",null,"文件大小: "+e.toDisplayString(e.unref(d).size)+"bytes",1)])])]),e.createBaseVNode("li",C,[e.createBaseVNode("div",null,[e.createBaseVNode("div",R,[e.createVNode(o,{info:"上传文件，formData类型",onChange:q})])])]),e.createBaseVNode("li",L,[e.createBaseVNode("div",j,[e.createBaseVNode("div",O,[e.createVNode(o,{info:"上传文件，fileReader类型readAsText",onChange:t[0]||(t[0]=l=>u(l,"readAsText"))})]),e.createBaseVNode("div",F,[e.createVNode(o,{info:"上传文件，fileReader类型readAsArrayBuffer",onChange:t[1]||(t[1]=l=>u(l,"readAsArrayBuffer"))})]),e.createBaseVNode("div",I,[e.createVNode(o,{info:"上传文件，fileReader类型readAsDataURL",onChange:t[2]||(t[2]=l=>u(l,"readAsDataURL"))})]),e.createBaseVNode("div",U,[e.createVNode(o,{info:"上传文件，fileReader类型readAsBinaryString",onChange:t[3]||(t[3]=l=>u(l,"readAsBinaryString"))})]),e.createBaseVNode("div",T,e.toDisplayString(e.unref(n)),1)])])])]),_:1}),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(h),l=>(e.openBlock(),e.createBlock(i,{key:l.name,title:l.title},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(l.component)))]),_:2},1032,["title"]))),128))])}}},M=B._export_sfc(E,[["__scopeId","data-v-7188630a"]]);f.default=M,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
