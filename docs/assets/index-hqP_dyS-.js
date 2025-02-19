define(["exports","./index-kY_zZjMK","./index-CRyYTF0v","./vender-qwA9zub-","./effect-DvRdfHYc","./index-uafER6--","./index-DbE11khq","./rem-CCdVRkxl"],function(c,u,p,t,r,g,S,j){"use strict";var m=document.createElement("style");m.textContent=`.tailor[data-v-4577d26f]{display:flex;flex-direction:column;align-items:center;width:100%}.tailor .tailor-upload[data-v-4577d26f]{width:300px;margin-bottom:20px}.tailor img[data-v-4577d26f]{width:300px}.tailor .info[data-v-4577d26f]{display:flex;align-items:center;justify-content:space-evenly;width:100%;color:var(--primary-info);margin:40px 0 20px}.tailor .info .info-item[data-v-4577d26f]{display:flex;flex-direction:column;align-items:center;flex:1}.tailor .info .info-item span[data-v-4577d26f]{font-size:16px;font-family:sans;margin-bottom:15px}.tailor .info .info-item span.click[data-v-4577d26f]{color:red;border-bottom:1px solid red;padding-bottom:4px;cursor:pointer}@media screen and (max-width: 768px){.tailor .tailor-upload[data-v-4577d26f]{width:18.75rem;margin-bottom:1.25rem}.tailor img[data-v-4577d26f]{width:18.75rem}.tailor .info[data-v-4577d26f]{flex-direction:column;margin:1.95rem 0 0}.tailor .info .info-item[data-v-4577d26f]{margin-bottom:1.25rem}.tailor .info .info-item span[data-v-4577d26f]{font-size:1.25rem;margin-bottom:.9375rem}.tailor .info .info-item span.click[data-v-4577d26f]{border-bottom-width:.0625rem;padding-bottom:.25rem}}
`,document.head.appendChild(m);const _="/blogweb/assets/tailor--7XlyPO_.png",f=o=>(t.pushScopeId("data-v-4577d26f"),o=o(),t.popScopeId(),o),h={class:"iframe-box box"},x={class:"tailor"},w={class:"tailor-upload"},v={class:"info"},b={class:"info-item"},y=f(()=>t.createBaseVNode("span",null,"原图效果",-1)),R=["src"],k={class:"info-item"},B=f(()=>t.createBaseVNode("span",null,"(点击下载图片)",-1)),N={__name:"index",setup(o){const i=t.ref(""),n=t.ref(null),a=t.ref(null),I=l=>{let e=new FileReader;e.readAsDataURL(l),e.onload=()=>{i.value=e.result;let d=n.value.getContext("2d");setTimeout(()=>{let s=100/a.value.height*a.value.naturalHeight,U=200/a.value.width*a.value.naturalWidth;d.drawImage(a.value,0,0,U,s,0,0,200,100)},1e3)}},C=()=>{const l=n.value.toDataURL("image/jpeg");let e=document.createElement("a");e.href=l,e.download="img.jpeg",e.click()};return t.onMounted(()=>{r.codeList.value=[`const onChangeFn = e => {
  // 预览文件
  let fr = new FileReader()
  fr.readAsDataURL(e)

  // 获取图片读完的图片结果（非同步，需要在onload获取）
  fr.onload = () => {
    imgUrl.value = fr.result

    let ctx = canvasRef.value.getContext('2d')

    setTimeout(() => {
      // 等比计算截取的图片宽高
      let height = (100 / imgRef.value.height) * imgRef.value.naturalHeight
      let width = (200 / imgRef.value.width) * imgRef.value.naturalWidth

      ctx.drawImage(imgRef.value, 0, 0, width, height, 0, 0, 200, 100)
    }, 1000);
  }
}`]}),t.onUnmounted(()=>{r.codeList.value=[""]}),(l,e)=>{const d=p.__unplugin_components_0,s=u.__unplugin_components_0;return t.openBlock(),t.createElementBlock("div",h,[t.createVNode(s,{title:"图片裁剪",flowImg:t.unref(_)},{default:t.withCtx(()=>[t.createBaseVNode("div",x,[t.createBaseVNode("div",w,[t.createVNode(d,{onChange:I})]),t.createBaseVNode("div",v,[t.createBaseVNode("div",b,[y,t.unref(i)?(t.openBlock(),t.createElementBlock("img",{key:0,src:t.unref(i),ref_key:"imgRef",ref:a},null,8,R)):t.createCommentVNode("",!0)]),t.createBaseVNode("div",k,[t.createBaseVNode("span",{class:"click",onClick:C},[t.createTextVNode(" 裁剪效果 "),B]),t.withDirectives(t.createBaseVNode("canvas",{ref_key:"canvasRef",ref:n,height:"100",width:"200"},null,512),[[t.vShow,t.unref(i)]])])])])]),_:1},8,["flowImg"])])}}},V=g._export_sfc(N,[["__scopeId","data-v-4577d26f"]]);c.default=V,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
