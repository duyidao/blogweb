import{_ as c}from"./index-BsB2aqRq.js";import{c as i}from"./effect-BiOrmKEt.js";import{g as f,l as g}from"./index-BSkUF_0d.js";import{s as d,v,P as u,o as a,c as s,F as h,f as p,h as m,w as R,i as b,u as x}from"./index-DBcL6Esc.js";const C={class:"iframe-box box"},U={__name:"index",setup(w){const l={compressCode:`const imgUrl = ref('')
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
  }`,filterCode:`const addFn = () => {
  const filterCanvas = document.createElement('canvas')
  filterCanvas.height = imgRef.value.height || '400px'
  filterCanvas.width = imgRef.value.width
  filterRef.value.appendChild(filterCanvas)

  let ctx = filterCanvas.getContext('2d')
  ctx.drawImage(imgRef.value, 0, 0, imgRef.value.width, imgRef.value.height)

  // 获取像素值
  let imageData = ctx.getImageData(0, 0, imgRef.value.width, imgRef.value.height)
  let _len = imageData.data.length
  for (let i = 0; i < _len; i++) {
    if (i % 2 === 0) {
      imageData.data[i] = 0
    }
  }

  // 清空 canvas
  ctx.clearRect(0, 0, imgRef.value.width, imgRef.value.height)

  // 重新绘制像素
  ctx.putImageData(imageData, 0, 0)
}`,screenshotCode:`import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
const saveScreen = () => {
      html2canvas(document.body).then(res => {
        res.toBlob((blob) => {
          saveAs(blob, 'screen.png')
        })
      })
}`,tailorCode:`const onChangeFn = e => {
  // 预览文件
  let fr = new FileReader()
  fr.readAsDataURL(e)

  // 获取图片读完的图片结果（非同步，需要在onload获取）
  fr.onload = () => {
    imgUrl.value = fr.result

    let ctx = canvasRef.value.getContext('2d')

    setTimeout(() => {
      // 等比计算截取的图片宽高
      let height = (200 / imgRef.value.height) * imgRef.value.naturalHeight
      let width = (200 / imgRef.value.width) * imgRef.value.naturalWidth

      ctx.drawImage(imgRef.value, 0, 0, width, height, 0, 0, 200, 200)
    }, 1000);
  }
}`},n=f("learn.canvas"),o=d([]);return o.value=n.map(e=>({...e,model:l[e.name+"Code"],component:Object.freeze(g.value[e.name])})),v(()=>{i.value=n.map(e=>({name:e.title+"源码",value:l[e.name+"Code"]}))}),u(()=>{i.value=[""]}),(e,_)=>{const r=c;return a(),s("div",C,[(a(!0),s(h,null,p(x(o),t=>(a(),m(r,{key:t.name,title:t.title},{default:R(()=>[(a(),m(b(t.component)))]),_:2},1032,["title"]))),128))])}}};export{U as default};
