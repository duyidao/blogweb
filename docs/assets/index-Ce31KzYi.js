import{_ as O}from"./index-BzuYxTjm.js";import{_ as k}from"./index-CojrT2g5.js";import{_ as R,r,o as v,h as N,w as V,j as B,a as c,u as m,c as F,N as S,k as T,p as U,d as D}from"./index-ZQOAdrIW.js";import"./index-DVw0P2ud.js";import"./index-Bl1iBRpS.js";const b=n=>(U("data-v-4eab2deb"),n=n(),D(),n),H={class:"box"},L={class:"box-item"},W=b(()=>c("p",null,"未压缩",-1)),G=["src"],M={class:"box-item"},Y=b(()=>c("p",null,"压缩后",-1)),A=["src"],$={__name:"index",props:{quality:{type:Number,default:90}},emits:["update:quality"],setup(n,{emit:C}){const g=n,j=C,I=r(null);let i=r({});const w={"image/jpeg":"image/jpeg","image/jpg":"image/jpg"},x=e=>{if(i.value=e,!i.value||!w[i.value.type])return h(),alert("请选择正确格式的图片");if(i.value.type==="image/png")return h(),alert("png格式的图片暂不适用");E(i.value)},s=r(""),l=r(""),u=new FileReader,E=e=>{e instanceof File&&(u.onload=async()=>{s.value=u.result,await q({imgSrc:s.value,type:e.type}),console.log("originImgSrc.value",s.value.length,"compressedImgSrc.value",l.value.length)},u.readAsDataURL(e))},q=({imgSrc:e,type:a})=>{const t=document.createElement("canvas"),o=document.createElement("img"),d=t.getContext("2d");return o.src=e,new Promise(P=>{o.onload=()=>{const y=o.width,f=o.height;t.width=y,t.height=f,d.drawImage(o,0,0,y,f),_(t,e,a),P(!0)}})},_=(e,a,t)=>{l.value=e.toDataURL(t,g.quality/100),l.value.length>=a.length&&g.quality>=10&&(j("update:quality",g.quality-10),_(e,a,t))},h=()=>{I.value.value="",i.value=null,l.value="",s.value=""},p=r(`const props = defineProps({
  // 压缩质量
  quality: {
    type: Number,
    default: 90,
  },
})
const emit = defineEmits(['update:quality'])

// 获取文件选择器ref组件
const imgFile = ref(null)
// 图片上传的数据对象
let imgFileObj = ref({})
// 图片格式字段枚举
const IMG_TYPE = {
  "image/jpeg": "image/jpeg",
  "image/jpg": "image/jpg",
}

// 选择文件
const changeFn = (e) => {
  imgFileObj.value = e;

  // 文件格式不正确
  if (!imgFileObj.value || !IMG_TYPE[imgFileObj.value.type]) {
    setImgFileEmptyFn()
    return alert('请选择正确格式的图片')
  }
  else if (imgFileObj.value.type === 'image/png') {
    setImgFileEmptyFn()
    return alert('png格式的图片暂不适用')
  }
  else {
    // 文件格式正确
    setImgPreview(imgFileObj.value)
  }

}

const originImgSrc = ref('')
const compressedImgSrc = ref('')
const reader = new FileReader() // 文件读取器
const setImgPreview = (imgFile) => {
  if (imgFile instanceof File) {
    reader.onload = async () => {
      originImgSrc.value = reader.result // 原来的图片base64
      await createCompressedImg({
        imgSrc: originImgSrc.value,
        type: imgFile.type,
      }) // 转换后的图片base64
      console.log('originImgSrc.value', originImgSrc.value.length, 'compressedImgSrc.value', compressedImgSrc.value.length);
    }
    reader.readAsDataURL(imgFile)
  }
}

/*
1.需要一个画布
2.需要一个图片并转为base64
3.把图片画到canvas中
4.把canvas质量缩小
*/
const createCompressedImg = ({
  imgSrc,
  type,
}) => {
  const oCan = document.createElement('canvas')
  const oImg = document.createElement('img')
  const ctx = oCan.getContext('2d')

  oImg.src = imgSrc

  return new Promise((resolve) => {
    oImg.onload = () => {
      const imgWidth = oImg.width
      const imgHeight = oImg.height

      oCan.width = imgWidth
      oCan.height = imgHeight

      ctx.drawImage(oImg, 0, 0, imgWidth, imgHeight)

      doCompress(oCan, imgSrc, type)
      resolve(true);
    }
  })
}

const doCompress = (canvas, imgSrc, type) => {
  compressedImgSrc.value = canvas.toDataURL(type, props.quality / 100)
  if (compressedImgSrc.value.length >= imgSrc.length && props.quality >= 10) {
    emit('update:quality', props.quality - 10)
    doCompress(canvas, imgSrc, type)
  }
}

// 文件不符合要求时，隐藏图片组件，清空默认保存的文件数据
const setImgFileEmptyFn = () => {
  imgFile.value.value = ''
  imgFileObj.value = null
  compressedImgSrc.value = ''
  originImgSrc.value = ''
}`);return(e,a)=>{const t=k,o=O;return v(),N(o,{title:"图片压缩",subtitle:"请选择jpg格式图片",class:"iframe-box",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:m(p),"onUpdate:modelValue":a[0]||(a[0]=d=>T(p)?p.value=d:null),disabled:""},{default:V(()=>[B(t,{id:"imgFile",placeholder:"请选择图片",ref_key:"imgFile",ref:I,onChange:x},null,512),c("div",H,[c("div",L,[W,m(s)?(v(),F("img",{key:0,src:m(s),title:"未压缩",alt:"未压缩"},null,8,G)):S("",!0)]),c("div",M,[Y,m(l)?(v(),F("img",{key:0,src:m(l),title:"压缩后",alt:"压缩后"},null,8,A)):S("",!0)])])]),_:1},8,["modelValue"])}}},Z=R($,[["__scopeId","data-v-4eab2deb"]]);export{Z as default};
