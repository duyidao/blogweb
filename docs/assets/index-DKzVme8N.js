import{_ as v}from"./index-BUXCVPTV.js";import{_ as p}from"./index-s1AIKHdy.js";import{c as d}from"./effect-DVGDOVIX.js";import{_ as x,r as s,q as R,M as w,o as m,c as u,j as f,w as C,a as c,u as g,L as D}from"./index-boqNHSKg.js";import"./index-D1u5yZDJ.js";import"./rem-cCMSN3q_.js";const I={class:"iframe-box box"},k={class:"filter-upload"},y=["src"],F={__name:"index",setup(U){const n=s(""),e=s(null),r=s(null),h=a=>{let t=new FileReader;t.readAsDataURL(a),t.onload=()=>{n.value=t.result}},_=()=>{const a=document.createElement("canvas");a.height=e.value.height||"400px",a.width=e.value.width,r.value.appendChild(a);let t=a.getContext("2d");t.drawImage(e.value,0,0,e.value.width,e.value.height);let i=t.getImageData(0,0,e.value.width,e.value.height),o=i.data.length;for(let l=0;l<o;l++)l%2===0&&(i.data[l]=0);t.clearRect(0,0,e.value.width,e.value.height),t.putImageData(i,0,0)};return R(()=>{d.value=[`const addFn = () => {
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
}`]}),w(()=>{d.value=[""]}),(a,t)=>{const i=p,o=v;return m(),u("div",I,[f(o,{title:"图片滤镜"},{default:C(()=>[c("div",{ref_key:"filter",ref:r,class:"filter"},[c("div",k,[f(i,{onChange:h})]),c("img",{src:g(n),ref_key:"imgRef",ref:e},null,8,y),g(n)?(m(),u("button",{key:0,onClick:_}," 点我添加滤镜 ")):D("",!0)],512)]),_:1})])}}},V=x(F,[["__scopeId","data-v-5d2d327c"]]);export{V as default};