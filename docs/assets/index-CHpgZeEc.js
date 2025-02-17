import{_ as v}from"./index-CSitwkS-.js";import{_ as g}from"./index-t2gqEJhW.js";import{c as f}from"./effect-DIo5sazc.js";import{_ as h,r as n,q as b,M as x,o as w,c as z,j as u,w as R,a as e,D as p,u as i}from"./index-zM3bxknP.js";import"./index-DmRA0QTM.js";import"./rem-r5RkVmd6.js";const I={class:"iframe-box box"},C={class:"compress"},U={class:"compress-upload"},D={class:"info"},F={class:"info-item"},B=["src"],j={__name:"index",setup(k){const c=n(""),t=n({size:0,blobsize:0}),a=n(null),r=n(null),_=m=>{let s=new FileReader;s.readAsDataURL(m),s.onload=l=>{c.value=s.result,t.value.size=l.total;let o=document.createElement("canvas");setTimeout(()=>{o.height=a.value.height,o.width=a.value.width,r.value.appendChild(o),o.getContext("2d").drawImage(a.value,0,0,a.value.width,a.value.height),o.toBlob(d=>{t.value.blobsize=d.size,new FormData().append("file",d)},"image/jpeg",.4)},1e3)}};return b(()=>{f.value=[`const imgUrl = ref('')
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
}`]}),x(()=>{f.value=[""]}),(m,s)=>{const l=g,o=v;return w(),z("div",I,[u(o,{title:"图片压缩"},{default:R(()=>[e("div",C,[e("div",U,[u(l,{onChange:_})]),e("div",D,[e("div",F,[e("span",null,"原图大小："+p(i(t).size),1),e("img",{ref_key:"imgRef",ref:a,src:i(c)},null,8,B)]),e("div",{class:"info-item",ref_key:"compress",ref:r},[e("span",null,"压缩后大小："+p(i(t).blobsize||0),1)],512)])])]),_:1})])}}},q=h(j,[["__scopeId","data-v-8df4dc35"]]);export{q as default};
