import{_ as b}from"./index-GbGEU4tk.js";import{_ as w}from"./index-C4IbbiTr.js";import{c as u}from"./effect-Bt9OKxTa.js";import{_ as x,r as i,q as I,M as R,o as z,c as C,j as g,w as U,a as e,D as _,u as c,E as D,p as k,d as j}from"./index-DA_VNGs7.js";import"./index-BIc7GnDJ.js";import"./rem-B8TxZhU6.js";const F="/blogweb/assets/compress-DccebSpH.png",B=s=>(k("data-v-de6fd2ea"),s=s(),j(),s),E={class:"iframe-box box"},S={class:"compress"},y={class:"compress-upload"},L={class:"info"},A={class:"info-item"},M=["src"],N=B(()=>e("span",null,"(点击下载图片)",-1)),T={__name:"index",setup(s){const r=i(""),n=i({size:0,blobsize:0}),t=i(null),d=i(null);let a=null;const v=l=>{let o=new FileReader;o.readAsDataURL(l),o.onload=m=>{r.value=o.result,n.value.size=m.total,a=document.createElement("canvas"),setTimeout(()=>{a.height=t.value.height,a.width=t.value.width,d.value.appendChild(a),a.getContext("2d").drawImage(t.value,0,0,t.value.width,t.value.height),a.toBlob(f=>{n.value.blobsize=f.size,new FormData().append("file",f)},"image/jpeg",.4)},1e3)}},h=()=>{const l=a.toDataURL("image/jpeg");let o=document.createElement("a");o.href=l,o.download="img.jpeg",o.click()};return I(()=>{u.value=[`const imgUrl = ref('')
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
}`]}),R(()=>{u.value=[""]}),(l,o)=>{const m=w,p=b;return z(),C("div",E,[g(p,{title:"图片压缩",flowImg:c(F)},{default:U(()=>[e("div",S,[e("div",y,[g(m,{onChange:v})]),e("div",L,[e("div",A,[e("span",null,"原图大小："+_(c(n).size),1),e("img",{ref_key:"imgRef",ref:t,src:c(r)},null,8,M)]),e("div",{class:"info-item",ref_key:"compress",ref:d},[e("span",{class:"click",onClick:h},[D(" 压缩后大小："+_(c(n).blobsize||0)+" ",1),N])],512)])])]),_:1},8,["flowImg"])])}}},O=x(T,[["__scopeId","data-v-de6fd2ea"]]);export{O as default};
