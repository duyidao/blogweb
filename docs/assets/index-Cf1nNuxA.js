import{_ as w}from"./index-DaFcaQHa.js";import{_ as R}from"./index-JFGvtYyG.js";import{r,C as x,O as I,o as _,a as m,q as u,s as C,b as e,u as l,d as k,M as U,j as y,N as b,y as N,z as D}from"./vender-Dkdm4IfB.js";import{c as f}from"./effect-BFrBJKb1.js";import{_ as F}from"./index-DKBlgV4z.js";import"./index-CY4hr8E5.js";import"./rem-BfWmjlJA.js";const L="/blogweb/assets/tailor--7XlyPO_.png",h=o=>(N("data-v-4577d26f"),o=o(),D(),o),S={class:"iframe-box box"},V={class:"tailor"},j={class:"tailor-upload"},B={class:"info"},M={class:"info-item"},T=h(()=>e("span",null,"原图效果",-1)),A=["src"],E={class:"info-item"},H=h(()=>e("span",null,"(点击下载图片)",-1)),O={__name:"index",setup(o){const s=r(""),i=r(null),a=r(null),g=n=>{let t=new FileReader;t.readAsDataURL(n),t.onload=()=>{s.value=t.result;let c=i.value.getContext("2d");setTimeout(()=>{let d=100/a.value.height*a.value.naturalHeight,v=200/a.value.width*a.value.naturalWidth;c.drawImage(a.value,0,0,v,d,0,0,200,100)},1e3)}},p=()=>{const n=i.value.toDataURL("image/jpeg");let t=document.createElement("a");t.href=n,t.download="img.jpeg",t.click()};return x(()=>{f.value=[`const onChangeFn = e => {
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
}`]}),I(()=>{f.value=[""]}),(n,t)=>{const c=R,d=w;return _(),m("div",S,[u(d,{title:"图片裁剪",flowImg:l(L)},{default:C(()=>[e("div",V,[e("div",j,[u(c,{onChange:g})]),e("div",B,[e("div",M,[T,l(s)?(_(),m("img",{key:0,src:l(s),ref_key:"imgRef",ref:a},null,8,A)):k("",!0)]),e("div",E,[e("span",{class:"click",onClick:p},[U(" 裁剪效果 "),H]),y(e("canvas",{ref_key:"canvasRef",ref:i,height:"100",width:"200"},null,512),[[b,l(s)]])])])])]),_:1},8,["flowImg"])])}}},J=F(O,[["__scopeId","data-v-4577d26f"]]);export{J as default};
