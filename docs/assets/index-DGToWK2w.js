import{_ as v}from"./index-CM9OeQjf.js";import{_ as w}from"./index-B1qkeMhi.js";import{_ as R,r as c,q as x,M as I,o as _,c as u,j as m,w as C,a as e,u as n,L as b,B as U,Q as k,p as y,d as B}from"./index-Sw9qLz3T.js";import{c as h}from"./effect-CO1aAAXF.js";import"./index-CivYiP3p.js";import"./rem-CbSUZWA8.js";const F="/blogweb/assets/tailor--7XlyPO_.png",f=a=>(y("data-v-d0bc4fd4"),a=a(),B(),a),L={class:"iframe-box box"},S={class:"tailor"},D={class:"tailor-upload"},M={class:"info"},N={class:"info-item"},V=f(()=>e("span",null,"原图效果",-1)),A=["src"],H={class:"info-item"},T=f(()=>e("span",null,"裁剪效果",-1)),W={__name:"index",setup(a){const o=c(""),d=c(null),t=c(null),g=r=>{let s=new FileReader;s.readAsDataURL(r),s.onload=()=>{o.value=s.result;let l=d.value.getContext("2d");setTimeout(()=>{let i=100/t.value.height*t.value.naturalHeight,p=200/t.value.width*t.value.naturalWidth;l.drawImage(t.value,0,0,p,i,0,0,200,100)},1e3)}};return x(()=>{h.value=[`const onChangeFn = e => {
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
}`]}),I(()=>{h.value=[""]}),(r,s)=>{const l=w,i=v;return _(),u("div",L,[m(i,{title:"图片裁剪",flowImg:n(F)},{default:C(()=>[e("div",S,[e("div",D,[m(l,{onChange:g})]),e("div",M,[e("div",N,[V,n(o)?(_(),u("img",{key:0,src:n(o),ref_key:"imgRef",ref:t},null,8,A)):b("",!0)]),e("div",H,[T,U(e("canvas",{ref_key:"canvasRef",ref:d,height:"100",width:"200"},null,512),[[k,n(o)]])])])])]),_:1},8,["flowImg"])])}}},X=R(W,[["__scopeId","data-v-d0bc4fd4"]]);export{X as default};
