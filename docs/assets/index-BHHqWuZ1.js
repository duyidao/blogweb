define(["exports","./index-CfXhc3Ls","./index-CQAopa9N","./compress-CsfBFKni","./effect-CbHB8Sih","./index-D2dCyH29","./vender-CF49NVAq","./index-D31hL1yj","./rem-Cqtq43AX"],function(c,g,_,h,d,x,e,U,j){"use strict";var m=document.createElement("style");m.textContent=`.compress[data-v-de6fd2ea]{display:flex;flex-direction:column;align-items:center;width:100%}.compress .compress-upload[data-v-de6fd2ea],.compress img[data-v-de6fd2ea]{width:300px}.compress .info[data-v-de6fd2ea]{display:flex;align-items:center;justify-content:space-evenly;width:100%;color:var(--primary-info);margin:40px 0 20px}.compress .info .info-item[data-v-de6fd2ea]{display:flex;flex-direction:column;align-items:center;flex:1}.compress .info .info-item span[data-v-de6fd2ea]{font-size:16px;font-family:sans;margin-bottom:15px}.compress .info .info-item span.click[data-v-de6fd2ea]{color:red;border-bottom:1px solid red;padding-bottom:4px;cursor:pointer}@media screen and (max-width: 768px){.compress .compress-upload[data-v-de6fd2ea],.compress img[data-v-de6fd2ea]{width:18.75rem}.compress .info[data-v-de6fd2ea]{flex-direction:column;margin:2.5rem 0 0}.compress .info .info-item[data-v-de6fd2ea]{margin-bottom:1.25rem}.compress .info .info-item span[data-v-de6fd2ea]{font-size:1.25rem;margin-bottom:.9375rem}.compress .info .info-item span.click[data-v-de6fd2ea]{border-bottom-width:.0625rem;padding-bottom:.25rem}}
`,document.head.appendChild(m);const b=s=>(e.pushScopeId("data-v-de6fd2ea"),s=s(),e.popScopeId(),s),v={class:"iframe-box box"},w={class:"compress"},y={class:"compress-upload"},I={class:"info"},z={class:"info-item"},B=["src"],R=b(()=>e.createBaseVNode("span",null,"(点击下载图片)",-1)),N={__name:"index",setup(s){const r=e.ref(""),i=e.ref({size:0,blobsize:0}),a=e.ref(null),f=e.ref(null);let t=null;const C=n=>{let o=new FileReader;o.readAsDataURL(n),o.onload=l=>{r.value=o.result,i.value.size=l.total,t=document.createElement("canvas"),setTimeout(()=>{t.height=a.value.height,t.width=a.value.width,f.value.appendChild(t),t.getContext("2d").drawImage(a.value,0,0,a.value.width,a.value.height),t.toBlob(u=>{i.value.blobsize=u.size,new FormData().append("file",u)},"image/jpeg",.4)},1e3)}},k=()=>{const n=t.toDataURL("image/jpeg");let o=document.createElement("a");o.href=n,o.download="img.jpeg",o.click()};return e.onMounted(()=>{d.codeList.value=[`const imgUrl = ref('')
const imgInfo = ref({
  size: 0,
  blobsize: 0
})
const imgRef = ref(null)
const compress = ref(null)
// 获取图片
const onChangeFn = e => {
  // 预览文件
  let fr = new FileReader()
  fr.readAsDataURL(e)
  // 获取图片读完的图片结果（非同步，需要在onload获取）
  fr.onload = (e) => {
    imgUrl.value = fr.result
    imgInfo.value.size = e.total
    // 创建canvas真实dom元素
    let canvas = document.createElement('canvas')
    setTimeout(() => {
      canvas.height = imgRef.value.height
      canvas.width = imgRef.value.width
      compress.value.appendChild(canvas)
      // 创建2d上下文
      let ctx = canvas.getContext('2d')
      ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height)
      // 把canvas转为blob格式
      canvas.toBlob((blob) => {
        imgInfo.value.blobsize = blob.size
        // saveAs(blob, 'img.jpeg')
        let form = new FormData()
        form.append('file', blob)
        // axios.post('xxx', form)
      }, 'image/jpeg', 0.4)
    }, 1000);
  }
}`]}),e.onUnmounted(()=>{d.codeList.value=[""]}),(n,o)=>{const l=_.__unplugin_components_0,p=g.__unplugin_components_0;return e.openBlock(),e.createElementBlock("div",v,[e.createVNode(p,{title:"图片压缩",flowImg:e.unref(h.flowImg)},{default:e.withCtx(()=>[e.createBaseVNode("div",w,[e.createBaseVNode("div",y,[e.createVNode(l,{onChange:C})]),e.createBaseVNode("div",I,[e.createBaseVNode("div",z,[e.createBaseVNode("span",null,"原图大小："+e.toDisplayString(e.unref(i).size),1),e.createBaseVNode("img",{ref_key:"imgRef",ref:a,src:e.unref(r)},null,8,B)]),e.createBaseVNode("div",{class:"info-item",ref_key:"compress",ref:f},[e.createBaseVNode("span",{class:"click",onClick:k},[e.createTextVNode(" 压缩后大小："+e.toDisplayString(e.unref(i).blobsize||0)+" ",1),R])],512)])])]),_:1},8,["flowImg"])])}}},V=x._export_sfc(N,[["__scopeId","data-v-de6fd2ea"]]);c.default=V,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
