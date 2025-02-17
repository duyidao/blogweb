import{_ as v}from"./index-GrhpAljX.js";import{_ as p}from"./index-CUkoVuel.js";import{c as d}from"./effect-BKCwPZM9.js";import{_ as w,r as s,q as x,M as R,o as f,c as g,j as u,w as C,a as c,u as r,L as I}from"./index-DiFe4JqO.js";import"./index-DLh32JCa.js";import"./rem-xC5CoqQM.js";const D="/blogweb/assets/filter-DUnKRKzt.png",k={class:"iframe-box box"},b={class:"filter-upload"},U=["src"],y={__name:"index",setup(F){const n=s(""),e=s(null),m=s(null),h=a=>{let t=new FileReader;t.readAsDataURL(a),t.onload=()=>{n.value=t.result}},_=()=>{const a=document.createElement("canvas");a.height=e.value.height||"400px",a.width=e.value.width,m.value.appendChild(a);let t=a.getContext("2d");t.drawImage(e.value,0,0,e.value.width,e.value.height);let l=t.getImageData(0,0,e.value.width,e.value.height),o=l.data.length;for(let i=0;i<o;i++)i%2===0&&(l.data[i]=0);t.clearRect(0,0,e.value.width,e.value.height),t.putImageData(l,0,0)};return x(()=>{d.value=[`const addFn = () => {
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
}`]}),R(()=>{d.value=[""]}),(a,t)=>{const l=p,o=v;return f(),g("div",k,[u(o,{title:"图片滤镜",flowImg:r(D)},{default:C(()=>[c("div",{ref_key:"filter",ref:m,class:"filter"},[c("div",b,[u(l,{onChange:h})]),c("img",{src:r(n),ref_key:"imgRef",ref:e},null,8,U),r(n)?(f(),g("button",{key:0,onClick:_}," 点我添加滤镜 ")):I("",!0)],512)]),_:1},8,["flowImg"])])}}},K=w(y,[["__scopeId","data-v-f782deff"]]);export{K as default};
