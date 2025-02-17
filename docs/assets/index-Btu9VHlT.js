import{_ as g}from"./index-GrhpAljX.js";import{_ as v}from"./index-CUkoVuel.js";import{f as h}from"./toWord-BawPhBEI.js";import{c as f}from"./effect-BKCwPZM9.js";import{_ as b,r as n,q as x,M as w,o as z,c as I,j as u,w as R,a as e,D as p,u as l}from"./index-DiFe4JqO.js";import"./index-DLh32JCa.js";import"./rem-xC5CoqQM.js";const C={class:"iframe-box box"},U={class:"compress"},D={class:"compress-upload"},F={class:"info"},B={class:"info-item"},j=["src"],k={__name:"index",setup(y){const c=n(""),t=n({size:0,blobsize:0}),a=n(null),m=n(null),_=r=>{let s=new FileReader;s.readAsDataURL(r),s.onload=i=>{c.value=s.result,t.value.size=i.total;let o=document.createElement("canvas");setTimeout(()=>{o.height=a.value.height,o.width=a.value.width,m.value.appendChild(o),o.getContext("2d").drawImage(a.value,0,0,a.value.width,a.value.height),o.toBlob(d=>{t.value.blobsize=d.size,new FormData().append("file",d)},"image/jpeg",.4)},1e3)}};return x(()=>{f.value=[`const imgUrl = ref('')
const imgInfo = ref({
  size: 0,
  blobsize: 0
})
const imgRef = ref(null)
const compress = ref(null)
// 获取图片
const onChangeFn = e => {
  // 预览文件
  let fr = new FileReader()
  fr.readAsDataURL(e)
  // 获取图片读完的图片结果（非同步，需要在onload获取）
  fr.onload = (e) => {
    imgUrl.value = fr.result
    imgInfo.value.size = e.total
    // 创建canvas真实dom元素
    let canvas = document.createElement('canvas')
    setTimeout(() => {
      canvas.height = imgRef.value.height
      canvas.width = imgRef.value.width
      compress.value.appendChild(canvas)
      // 创建2d上下文
      let ctx = canvas.getContext('2d')
      ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height)
      // 把canvas转为blob格式
      canvas.toBlob((blob) => {
        imgInfo.value.blobsize = blob.size
        // saveAs(blob, 'img.jpeg')
        let form = new FormData()
        form.append('file', blob)
        // axios.post('xxx', form)
      }, 'image/jpeg', 0.4)
    }, 1000);
  }
}`]}),w(()=>{f.value=[""]}),(r,s)=>{const i=v,o=g;return z(),I("div",C,[u(o,{title:"图片压缩",flowImg:l(h)},{default:R(()=>[e("div",U,[e("div",D,[u(i,{onChange:_})]),e("div",F,[e("div",B,[e("span",null,"原图大小："+p(l(t).size),1),e("img",{ref_key:"imgRef",ref:a,src:l(c)},null,8,j)]),e("div",{class:"info-item",ref_key:"compress",ref:m},[e("span",null,"压缩后大小："+p(l(t).blobsize||0),1)],512)])])]),_:1},8,["flowImg"])])}}},$=b(k,[["__scopeId","data-v-45ec77b4"]]);export{$ as default};
