import{_}from"./index-BUXCVPTV.js";import{_ as v}from"./index-s1AIKHdy.js";import{c as f}from"./effect-DVGDOVIX.js";import{_ as h,r as s,q as b,M as x,o as w,c as z,j as u,w as R,a as n,D as p,u as i}from"./index-boqNHSKg.js";import"./index-D1u5yZDJ.js";import"./rem-cCMSN3q_.js";const I={class:"iframe-box box"},C={class:"compress-upload"},U={class:"info"},D=["src"],F={__name:"index",setup(B){const c=s(""),o=s({size:0,blobsize:0}),a=s(null),r=s(null),g=m=>{let t=new FileReader;t.readAsDataURL(m),t.onload=l=>{c.value=t.result,o.value.size=l.total;let e=document.createElement("canvas");setTimeout(()=>{e.height=a.value.height,e.width=a.value.width,r.value.appendChild(e),e.getContext("2d").drawImage(a.value,0,0,a.value.width,a.value.height),e.toBlob(d=>{o.value.blobsize=d.size,new FormData().append("file",d)},"image/jpeg",.4)},1e3)}};return b(()=>{f.value=[`const imgUrl = ref('')
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
}`]}),x(()=>{f.value=[""]}),(m,t)=>{const l=v,e=_;return w(),z("div",I,[u(e,{title:"图片压缩"},{default:R(()=>[n("div",{ref_key:"compress",ref:r,class:"compress"},[n("div",C,[u(l,{onChange:g})]),n("div",U,"原图大小："+p(i(o).size)+"，压缩后大小："+p(i(o).blobsize||0),1),n("img",{ref_key:"imgRef",ref:a,src:i(c)},null,8,D)],512)]),_:1})])}}},T=h(F,[["__scopeId","data-v-136e2651"]]);export{T as default};
