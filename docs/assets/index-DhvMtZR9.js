import{_ as x}from"./index-lqaWdkyv.js";import{_ as R}from"./index-C7LRcITb.js";import{f as C}from"./filter-B5Dajvdp.js";import{c as f}from"./effect-CPvDC59a.js";import{_ as I}from"./index-R7MN-9XR.js";import{r as d,C as D,P as k,o as u,a as g,q as _,s as U,b as i,u as m,d as y,N,y as E,z as F}from"./vender-CcOEkWCz.js";import"./index-B4nPWQvu.js";import"./rem-B0h-CM2v.js";const h=n=>(E("data-v-a17fcd47"),n=n(),F(),n),V={class:"iframe-box box"},b={class:"filter"},B={class:"filter-upload"},L={class:"info"},S={class:"info-item"},j=h(()=>i("span",null,"原图效果",-1)),M=["src"],T=h(()=>i("span",null,"(点击下载图片)",-1)),q={__name:"index",setup(n){const s=d(""),t=d(null),r=d(null);let o=null;const p=()=>{o=document.createElement("canvas"),o.height=t.value.height||"400px",o.width=t.value.width,r.value.appendChild(o);let a=o.getContext("2d");a.drawImage(t.value,0,0,t.value.width,t.value.height);let e=a.getImageData(0,0,t.value.width,t.value.height),c=e.data.length;for(let l=0;l<c;l++)l%2===0&&(e.data[l]=0);a.clearRect(0,0,t.value.width,t.value.height),a.putImageData(e,0,0)},v=a=>{let e=new FileReader;e.readAsDataURL(a),e.onload=()=>{s.value=e.result,setTimeout(()=>{p()},1e3)}},w=()=>{const a=o.toDataURL("image/jpeg");let e=document.createElement("a");e.href=a,e.download="img.jpeg",e.click()};return D(()=>{f.value=[`const addFn = () => {
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
}`]}),k(()=>{f.value=[""]}),(a,e)=>{const c=R,l=x;return u(),g("div",V,[_(l,{title:"图片滤镜",flowImg:m(C)},{default:U(()=>[i("div",b,[i("div",B,[_(c,{onChange:v})]),i("div",L,[i("div",S,[j,m(s)?(u(),g("img",{key:0,src:m(s),ref_key:"imgRef",ref:t},null,8,M)):y("",!0)]),i("div",{class:"info-item",ref_key:"filter",ref:r},[i("span",{class:"click",onClick:w},[N(" 过滤效果 "),T])],512)])])]),_:1},8,["flowImg"])])}}},O=I(q,[["__scopeId","data-v-a17fcd47"]]);export{O as default};
