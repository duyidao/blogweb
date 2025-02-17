import{_}from"./index-BbQMhX4Q.js";import{_ as v}from"./index-VOCHQR9C.js";import{c as f}from"./effect-DmMT9RI3.js";import{_ as h,r as n,q as b,M as w,o as x,c as z,j as u,w as I,a as e,D as p,u as l}from"./index-CcjIZO8g.js";import"./index-BisnD9HM.js";import"./rem-DwsRrOGD.js";const R="/blogweb/assets/compress-DccebSpH.png",C={class:"iframe-box box"},D={class:"compress"},U={class:"compress-upload"},F={class:"info"},B={class:"info-item"},j=["src"],k={__name:"index",setup(y){const c=n(""),a=n({size:0,blobsize:0}),s=n(null),m=n(null),g=r=>{let t=new FileReader;t.readAsDataURL(r),t.onload=i=>{c.value=t.result,a.value.size=i.total;let o=document.createElement("canvas");setTimeout(()=>{o.height=s.value.height,o.width=s.value.width,m.value.appendChild(o),o.getContext("2d").drawImage(s.value,0,0,s.value.width,s.value.height),o.toBlob(d=>{a.value.blobsize=d.size,new FormData().append("file",d)},"image/jpeg",.4)},1e3)}};return b(()=>{f.value=[`const imgUrl = ref('')
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
}`]}),w(()=>{f.value=[""]}),(r,t)=>{const i=v,o=_;return x(),z("div",C,[u(o,{title:"图片压缩",flowImg:l(R)},{default:I(()=>[e("div",D,[e("div",U,[u(i,{onChange:g})]),e("div",F,[e("div",B,[e("span",null,"原图大小："+p(l(a).size),1),e("img",{ref_key:"imgRef",ref:s,src:l(c)},null,8,j)]),e("div",{class:"info-item",ref_key:"compress",ref:m},[e("span",null,"压缩后大小："+p(l(a).blobsize||0),1)],512)])])]),_:1},8,["flowImg"])])}}},q=h(k,[["__scopeId","data-v-f60c43cf"]]);export{q as default};
