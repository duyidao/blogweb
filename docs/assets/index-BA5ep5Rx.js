import{_ as x}from"./index-GbGEU4tk.js";import{_ as R}from"./index-C4IbbiTr.js";import{f as C}from"./filter-B5Dajvdp.js";import{c as f}from"./effect-Bt9OKxTa.js";import{_ as I,r as d,q as D,M as k,o as u,c as g,j as _,w as U,a as i,u as m,L as E,E as y,p as F,d as L}from"./index-DA_VNGs7.js";import"./index-BIc7GnDJ.js";import"./rem-B8TxZhU6.js";const h=n=>(F("data-v-a17fcd47"),n=n(),L(),n),N={class:"iframe-box box"},V={class:"filter"},j={class:"filter-upload"},B={class:"info"},M={class:"info-item"},S=h(()=>i("span",null,"原图效果",-1)),b=["src"],T=h(()=>i("span",null,"(点击下载图片)",-1)),q={__name:"index",setup(n){const s=d(""),t=d(null),r=d(null);let o=null;const p=()=>{o=document.createElement("canvas"),o.height=t.value.height||"400px",o.width=t.value.width,r.value.appendChild(o);let a=o.getContext("2d");a.drawImage(t.value,0,0,t.value.width,t.value.height);let e=a.getImageData(0,0,t.value.width,t.value.height),c=e.data.length;for(let l=0;l<c;l++)l%2===0&&(e.data[l]=0);a.clearRect(0,0,t.value.width,t.value.height),a.putImageData(e,0,0)},v=a=>{let e=new FileReader;e.readAsDataURL(a),e.onload=()=>{s.value=e.result,setTimeout(()=>{p()},1e3)}},w=()=>{const a=o.toDataURL("image/jpeg");let e=document.createElement("a");e.href=a,e.download="img.jpeg",e.click()};return D(()=>{f.value=[`const addFn = () => {
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
}`]}),k(()=>{f.value=[""]}),(a,e)=>{const c=R,l=x;return u(),g("div",N,[_(l,{title:"图片滤镜",flowImg:m(C)},{default:U(()=>[i("div",V,[i("div",j,[_(c,{onChange:v})]),i("div",B,[i("div",M,[S,m(s)?(u(),g("img",{key:0,src:m(s),ref_key:"imgRef",ref:t},null,8,b)):E("",!0)]),i("div",{class:"info-item",ref_key:"filter",ref:r},[i("span",{class:"click",onClick:w},[y(" 过滤效果 "),T])],512)])])]),_:1},8,["flowImg"])])}}},O=I(q,[["__scopeId","data-v-a17fcd47"]]);export{O as default};
