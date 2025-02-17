import{_ as w}from"./index-BbQMhX4Q.js";import{_ as x}from"./index-VOCHQR9C.js";import{f as R}from"./filter-B5Dajvdp.js";import{c as f}from"./effect-DmMT9RI3.js";import{_ as I,r as d,q as C,M as D,o as _,c as u,j as h,w as k,a as i,u as m,L as y,p as F,d as U}from"./index-CcjIZO8g.js";import"./index-BisnD9HM.js";import"./rem-DwsRrOGD.js";const g=l=>(F("data-v-a7803688"),l=l(),U(),l),B={class:"iframe-box box"},E={class:"filter"},L={class:"filter-upload"},M={class:"info"},N={class:"info-item"},S=g(()=>i("span",null,"原图效果",-1)),V=["src"],b=g(()=>i("span",null,"过滤效果",-1)),j=[b],q={__name:"index",setup(l){const s=d(""),e=d(null),r=d(null),v=()=>{const a=document.createElement("canvas");a.height=e.value.height||"400px",a.width=e.value.width,r.value.appendChild(a);let t=a.getContext("2d");t.drawImage(e.value,0,0,e.value.width,e.value.height);let o=t.getImageData(0,0,e.value.width,e.value.height),c=o.data.length;for(let n=0;n<c;n++)n%2===0&&(o.data[n]=0);t.clearRect(0,0,e.value.width,e.value.height),t.putImageData(o,0,0)},p=a=>{let t=new FileReader;t.readAsDataURL(a),t.onload=()=>{s.value=t.result,setTimeout(()=>{v()},1e3)}};return C(()=>{f.value=[`const addFn = () => {
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
}`]}),D(()=>{f.value=[""]}),(a,t)=>{const o=x,c=w;return _(),u("div",B,[h(c,{title:"图片滤镜",flowImg:m(R)},{default:k(()=>[i("div",E,[i("div",L,[h(o,{onChange:p})]),i("div",M,[i("div",N,[S,m(s)?(_(),u("img",{key:0,src:m(s),ref_key:"imgRef",ref:e},null,8,V)):y("",!0)]),i("div",{class:"info-item",ref_key:"filter",ref:r},j,512)])])]),_:1},8,["flowImg"])])}}},K=I(q,[["__scopeId","data-v-a7803688"]]);export{K as default};
