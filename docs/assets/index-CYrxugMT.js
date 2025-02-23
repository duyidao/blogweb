define(["exports","./index-CfXhc3Ls","./index-CQAopa9N","./filter-wvxObu7Z","./effect-CbHB8Sih","./index-D2dCyH29","./vender-CF49NVAq","./index-D31hL1yj","./rem-Cqtq43AX"],function(f,u,p,h,s,_,e,E,U){"use strict";var m=document.createElement("style");m.textContent=`.filter[data-v-a17fcd47]{display:flex;flex-direction:column;align-items:center;width:100%}.filter .filter-upload[data-v-a17fcd47]{width:300px}.filter button[data-v-a17fcd47]{margin:20px}.filter img[data-v-a17fcd47]{width:300px}.filter .info[data-v-a17fcd47]{display:flex;align-items:center;justify-content:space-evenly;width:100%;color:var(--primary-info);margin:40px 0 20px}.filter .info .info-item[data-v-a17fcd47]{display:flex;flex-direction:column;align-items:center;flex:1}.filter .info .info-item span[data-v-a17fcd47]{font-size:16px;font-family:sans;margin-bottom:15px}.filter .info .info-item span.click[data-v-a17fcd47]{color:red;border-bottom:1px solid red;padding-bottom:4px;cursor:pointer}@media screen and (max-width: 768px){.filter .filter-upload[data-v-a17fcd47]{width:18.75rem}.filter button[data-v-a17fcd47]{margin:1.25rem}.filter img[data-v-a17fcd47]{width:18.75rem}.filter .info[data-v-a17fcd47]{flex-direction:column;margin:2.5rem 0 0}.filter .info .info-item[data-v-a17fcd47]{margin-bottom:1.25rem}.filter .info .info-item span[data-v-a17fcd47]{font-size:1.25rem;margin-bottom:.9375rem}.filter .info .info-item span.click[data-v-a17fcd47]{border-bottom-width:.0625rem;padding-bottom:.25rem}}
`,document.head.appendChild(m);const r=n=>(e.pushScopeId("data-v-a17fcd47"),n=n(),e.popScopeId(),n),x={class:"iframe-box box"},v={class:"filter"},w={class:"filter-upload"},C={class:"info"},R={class:"info-item"},b=r(()=>e.createBaseVNode("span",null,"原图效果",-1)),y=["src"],I=r(()=>e.createBaseVNode("span",null,"(点击下载图片)",-1)),k={__name:"index",setup(n){const c=e.ref(""),a=e.ref(null),g=e.ref(null);let o=null;const N=()=>{o=document.createElement("canvas"),o.height=a.value.height||"400px",o.width=a.value.width,g.value.appendChild(o);let i=o.getContext("2d");i.drawImage(a.value,0,0,a.value.width,a.value.height);let t=i.getImageData(0,0,a.value.width,a.value.height),d=t.data.length;for(let l=0;l<d;l++)l%2===0&&(t.data[l]=0);i.clearRect(0,0,a.value.width,a.value.height),i.putImageData(t,0,0)},V=i=>{let t=new FileReader;t.readAsDataURL(i),t.onload=()=>{c.value=t.result,setTimeout(()=>{N()},1e3)}},D=()=>{const i=o.toDataURL("image/jpeg");let t=document.createElement("a");t.href=i,t.download="img.jpeg",t.click()};return e.onMounted(()=>{s.codeList.value=[`const addFn = () => {
  const filterCanvas = document.createElement('canvas')
  filterCanvas.height = imgRef.value.height || '400px'
  filterCanvas.width = imgRef.value.width
  filterRef.value.appendChild(filterCanvas)

  let ctx = filterCanvas.getContext('2d')
  ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height)

  // 获取像素值
  let imageData = ctx.getImageData(0, 0, imgRef.value.width, imgRef.value.height)
  let _len = imageData.data.length
  for (let i = 0; i < _len; i++) {
    if (i % 2 === 0) {
      imageData.data[i] = 0
    }
  }

  // 清空 canvas
  ctx.clearRect(0, 0, imgRef.value.width, imgRef.value.height)

  // 重新绘制像素
  ctx.putImageData(imageData, 0, 0)
}`]}),e.onUnmounted(()=>{s.codeList.value=[""]}),(i,t)=>{const d=p.__unplugin_components_0,l=u.__unplugin_components_0;return e.openBlock(),e.createElementBlock("div",x,[e.createVNode(l,{title:"图片滤镜",flowImg:e.unref(h.flowImg)},{default:e.withCtx(()=>[e.createBaseVNode("div",v,[e.createBaseVNode("div",w,[e.createVNode(d,{onChange:V})]),e.createBaseVNode("div",C,[e.createBaseVNode("div",R,[b,e.unref(c)?(e.openBlock(),e.createElementBlock("img",{key:0,src:e.unref(c),ref_key:"imgRef",ref:a},null,8,y)):e.createCommentVNode("",!0)]),e.createBaseVNode("div",{class:"info-item",ref_key:"filter",ref:g},[e.createBaseVNode("span",{class:"click",onClick:D},[e.createTextVNode(" 过滤效果 "),I])],512)])])]),_:1},8,["flowImg"])])}}},B=_._export_sfc(k,[["__scopeId","data-v-a17fcd47"]]);f.default=B,Object.defineProperty(f,Symbol.toStringTag,{value:"Module"})});
