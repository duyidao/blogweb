import{_ as f}from"./index-BUXCVPTV.js";import{_ as v}from"./index-s1AIKHdy.js";import{_ as g,r as s,q as p,M as R,o as w,c as x,j as c,w as C,a as t,E as u,u as d,B as U,R as I}from"./index-boqNHSKg.js";import{c as _}from"./effect-DVGDOVIX.js";import"./index-D1u5yZDJ.js";import"./rem-cCMSN3q_.js";const k={class:"iframe-box box"},B={class:"tailor"},F={class:"tailor-upload"},y=["src"],D={__name:"index",setup(L){const o=s(""),i=s(null),e=s(null),m=r=>{let a=new FileReader;a.readAsDataURL(r),a.onload=()=>{o.value=a.result;let n=i.value.getContext("2d");setTimeout(()=>{let l=100/e.value.height*e.value.naturalHeight,h=200/e.value.width*e.value.naturalWidth;n.drawImage(e.value,0,0,h,l,0,0,200,100)},1e3)}};return p(()=>{_.value=[`const onChangeFn = e => {
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
}`]}),R(()=>{_.value=[""]}),(r,a)=>{const n=v,l=f;return w(),x("div",k,[c(l,{title:"图片裁剪"},{default:C(()=>[t("div",B,[t("div",F,[c(n,{onChange:m})]),t("div",null,[u(" 原图： "),t("img",{src:d(o),ref_key:"imgRef",ref:e},null,8,y)]),U(t("div",null,[u(" 裁剪： "),t("canvas",{ref_key:"canvasRef",ref:i,height:"100",width:"200"},null,512)],512),[[I,d(o)]])])]),_:1})])}}},E=g(D,[["__scopeId","data-v-f77a7314"]]);export{E as default};
