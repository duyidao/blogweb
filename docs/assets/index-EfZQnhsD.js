import{_ as b}from"./index-lqaWdkyv.js";import{_ as w}from"./index-C7LRcITb.js";import{f as x}from"./compress-DgL6_ikp.js";import{c as u}from"./effect-CPvDC59a.js";import{_ as I}from"./index-R7MN-9XR.js";import{r as i,C as z,P as R,o as C,a as U,q as g,s as k,b as e,t as _,u as c,N as D,y as F,z as j}from"./vender-CcOEkWCz.js";import"./index-B4nPWQvu.js";import"./rem-B0h-CM2v.js";const y=s=>(F("data-v-de6fd2ea"),s=s(),j(),s),B={class:"iframe-box box"},E={class:"compress"},L={class:"compress-upload"},N={class:"info"},S={class:"info-item"},A=["src"],T=y(()=>e("span",null,"(点击下载图片)",-1)),V={__name:"index",setup(s){const r=i(""),n=i({size:0,blobsize:0}),t=i(null),d=i(null);let a=null;const v=l=>{let o=new FileReader;o.readAsDataURL(l),o.onload=m=>{r.value=o.result,n.value.size=m.total,a=document.createElement("canvas"),setTimeout(()=>{a.height=t.value.height,a.width=t.value.width,d.value.appendChild(a),a.getContext("2d").drawImage(t.value,0,0,t.value.width,t.value.height),a.toBlob(p=>{n.value.blobsize=p.size,new FormData().append("file",p)},"image/jpeg",.4)},1e3)}},h=()=>{const l=a.toDataURL("image/jpeg");let o=document.createElement("a");o.href=l,o.download="img.jpeg",o.click()};return z(()=>{u.value=[`const imgUrl = ref('')
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
}`]}),R(()=>{u.value=[""]}),(l,o)=>{const m=w,f=b;return C(),U("div",B,[g(f,{title:"图片压缩",flowImg:c(x)},{default:k(()=>[e("div",E,[e("div",L,[g(m,{onChange:v})]),e("div",N,[e("div",S,[e("span",null,"原图大小："+_(c(n).size),1),e("img",{ref_key:"imgRef",ref:t,src:c(r)},null,8,A)]),e("div",{class:"info-item",ref_key:"compress",ref:d},[e("span",{class:"click",onClick:h},[D(" 压缩后大小："+_(c(n).blobsize||0)+" ",1),T])],512)])])]),_:1},8,["flowImg"])])}}},Q=I(V,[["__scopeId","data-v-de6fd2ea"]]);export{Q as default};
