import{_ as w}from"./index-GbGEU4tk.js";import{_ as R}from"./index-C4IbbiTr.js";import{_ as x,r,q as I,M as k,o as _,c as u,j as m,w as C,a as e,u as l,L as U,E as y,B as L,Q as b,p as B,d as D}from"./index-DA_VNGs7.js";import{c as h}from"./effect-Bt9OKxTa.js";import"./index-BIc7GnDJ.js";import"./rem-B8TxZhU6.js";const F="/blogweb/assets/tailor--7XlyPO_.png",f=o=>(B("data-v-4577d26f"),o=o(),D(),o),N={class:"iframe-box box"},S={class:"tailor"},V={class:"tailor-upload"},j={class:"info"},E={class:"info-item"},M=f(()=>e("span",null,"原图效果",-1)),T=["src"],A={class:"info-item"},H=f(()=>e("span",null,"(点击下载图片)",-1)),W={__name:"index",setup(o){const s=r(""),i=r(null),a=r(null),g=n=>{let t=new FileReader;t.readAsDataURL(n),t.onload=()=>{s.value=t.result;let c=i.value.getContext("2d");setTimeout(()=>{let d=100/a.value.height*a.value.naturalHeight,v=200/a.value.width*a.value.naturalWidth;c.drawImage(a.value,0,0,v,d,0,0,200,100)},1e3)}},p=()=>{const n=i.value.toDataURL("image/jpeg");let t=document.createElement("a");t.href=n,t.download="img.jpeg",t.click()};return I(()=>{h.value=[`const onChangeFn = e => {
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
}`]}),k(()=>{h.value=[""]}),(n,t)=>{const c=R,d=w;return _(),u("div",N,[m(d,{title:"图片裁剪",flowImg:l(F)},{default:C(()=>[e("div",S,[e("div",V,[m(c,{onChange:g})]),e("div",j,[e("div",E,[M,l(s)?(_(),u("img",{key:0,src:l(s),ref_key:"imgRef",ref:a},null,8,T)):U("",!0)]),e("div",A,[e("span",{class:"click",onClick:p},[y(" 裁剪效果 "),H]),L(e("canvas",{ref_key:"canvasRef",ref:i,height:"100",width:"200"},null,512),[[b,l(s)]])])])])]),_:1},8,["flowImg"])])}}},z=x(W,[["__scopeId","data-v-4577d26f"]]);export{z as default};
