define(["exports","./index-CfXhc3Ls","./vender-CF49NVAq","./index-D2dCyH29","./rem-Cqtq43AX","./index-DKK21BJ9","./index-CQAopa9N","./effect-CbHB8Sih","./index-D31hL1yj"],function(b,y,e,p,k,B,C,w,U){"use strict";var _=document.createElement("style");_.textContent=`div[data-v-2e0d966d]{position:relative;padding:0 26px;min-width:80px;height:35px;line-height:35px;text-align:center;background-color:var(--catalogue-bg);color:var(--primary-info);border-radius:30px;overflow:hidden;transition:all .5s;cursor:pointer}div.full[data-v-2e0d966d]{background-color:var(--primary-bg);color:var(--catalogue-bg)}div.full i[data-v-2e0d966d],div.full span[data-v-2e0d966d]{color:var(--normal-word)}div.full[data-v-2e0d966d]:hover{color:var(--catalogue-title);text-shadow:0 0 20px var(--catalogue-bg),0 0 50px var(--catalogue-bg)}div.full[data-v-2e0d966d]:before{background:radial-gradient(var(--catalogue-bg),transparent,transparent)}div.full[data-v-2e0d966d]:after{background-color:var(--catalogue-title);border-radius:30px;top:3px;right:3px;bottom:3px;left:3px}div span[data-v-2e0d966d],div i[data-v-2e0d966d]{position:relative;letter-spacing:2px;z-index:5}div span[data-v-2e0d966d]{font-size:14px}div span.hasMargin[data-v-2e0d966d]{margin-left:5px}div[data-v-2e0d966d]:hover{color:var(--catalogue-title);text-shadow:0 0 20px var(--catalogue-title),0 0 50px var(--catalogue-title)}div[data-v-2e0d966d]:hover:before{opacity:1}div[data-v-2e0d966d]:before{content:"";position:absolute;top:var(--y);left:var(--x);transform:translate(-50%,-50%);width:160px;height:160px;opacity:0;background:radial-gradient(var(--catalogue-title),transparent,transparent)}div[data-v-2e0d966d]:after{content:"";position:absolute;background-color:var(--catalogue-bg);border-radius:30px;top:2px;right:2px;bottom:2px;left:2px}@media screen and (max-width: 768px){div[data-v-2e0d966d]{display:flex;align-items:center;justify-content:center;padding:0 1.625rem;min-width:5rem;height:2.1875rem;line-height:2.1875rem;border-radius:1.875rem}div.full[data-v-2e0d966d]:hover{text-shadow:0 0 1.25rem var(--catalogue-bg),0 0 3.125rem var(--catalogue-bg)}div.full[data-v-2e0d966d]:after{border-radius:1.875rem;top:.125rem;right:.125rem;bottom:.125rem;left:.125rem}div span[data-v-2e0d966d],div i[data-v-2e0d966d]{letter-spacing:.125rem}div span[data-v-2e0d966d]{font-size:.875rem}div span.hasMargin[data-v-2e0d966d]{margin-left:.3125rem}div[data-v-2e0d966d]:hover{text-shadow:0 0 1.25rem var(--catalogue-title),0 0 3.125rem var(--catalogue-title)}div[data-v-2e0d966d]:before{width:9.375rem;height:9.375rem}div[data-v-2e0d966d]:after{border-radius:1.875rem;top:.125rem;right:.125rem;bottom:.125rem;left:.125rem}}.box[data-v-56083fa9] .upload{width:60%}.box[data-v-56083fa9] canvas{display:block;width:100%;margin-top:20px;object-fit:cover}.box[data-v-56083fa9] .iframe-item-model__content__info{flex-direction:column}.box .zhenshu-input[data-v-56083fa9]{display:flex;justify-content:space-around;align-items:center;width:60%;margin-top:25px}.box .zhenshu-input[data-v-56083fa9] .my-input{margin-right:20px;width:50%}.box .zhenshu-list[data-v-56083fa9]{margin-top:25px;font-size:16px}.box .zhenshu-list span[data-v-56083fa9]{color:var(--catalogue-title)}.box .zhenshu-list span[data-v-56083fa9]:after{content:"、"}.box .zhenshu-list span[data-v-56083fa9]:last-child:after{content:""}.box .box-img[data-v-56083fa9]{display:flex;flex-wrap:wrap;width:100%;margin-top:20px}.box .box-img[data-v-56083fa9] img{width:32%;margin-right:2%;margin-bottom:2%}.box .box-img[data-v-56083fa9] img:nth-child(3n){margin-right:0}@media screen and (max-width: 768px){.box .box-img[data-v-56083fa9]{flex-direction:column;margin-top:1.25rem}.box .box-img[data-v-56083fa9] img{width:100%;margin-right:0;margin-bottom:2%}.box .zhenshu-input[data-v-56083fa9]{display:flex;justify-content:space-around;align-items:center;flex-direction:column;width:60%;margin-top:1.5625rem}.box .zhenshu-input[data-v-56083fa9] .my-input{margin-right:0;width:100%}.box .zhenshu-input[data-v-56083fa9] .mouse-glow-button{width:100%;margin-top:1.5625rem}.box .zhenshu-list[data-v-56083fa9]{margin-top:1.5625rem;font-size:1.125rem}}
`,document.head.appendChild(_);const z={__name:"index",props:{word:{type:String,default:""},iconName:{type:String,default:""},full:{type:Boolean,default:!1}},emits:["click"],setup(u,{emit:r}){const f=r,x=()=>{f("click")},c=e.ref(null),{ratio:l}=k.useUnit(),d=(n,m)=>{let v=m.pageX-n.getBoundingClientRect().left,g=m.pageY-n.getBoundingClientRect().top;n.style.setProperty("--x",p.screenWidth.value>768?v+"px":v*l.value+"px"),n.style.setProperty("--y",p.screenWidth.value>768?g+"px":g*l.value+"px")};return e.onMounted(()=>{c.value.addEventListener("mousemove",n=>d(c.value,n))}),e.onBeforeUnmount(()=>{c.value.removeEventListener("mousemove",n=>d(c.value,n))}),(n,m)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass([{full:u.full},"mouse-glow-button"]),ref_key:"myButtonRef",ref:c,onClick:e.withModifiers(x,["stop"])},[u.iconName?(e.openBlock(),e.createElementBlock("i",{key:0,class:e.normalizeClass(["iconfont",u.iconName])},null,2)):e.createCommentVNode("",!0),e.createBaseVNode("span",{class:e.normalizeClass({hasMargin:u.iconName})},e.toDisplayString(u.word),3)],2))}},V=p._export_sfc(z,[["__scopeId","data-v-2e0d966d"]]),E="/blogweb/assets/video-CiaMsAKY.png",L={class:"zhenshu-input"},N={class:"zhenshu-list"},F={__name:"index",setup(u){const r=e.ref(null),f=t=>new Promise(a=>{const o=document.createElement("canvas"),i=o.getContext("2d");o.width=t.videoWidth,o.height=t.videoHeight,i.drawImage(t,0,0,o.width,o.height),o.toBlob(s=>{a({blob:s,url:URL.createObjectURL(s)})})}),x=t=>{const a=document.createElement("img");a.src=t,r.value.appendChild(a)},c=(t,a=0)=>new Promise(o=>{const i=document.createElement("video");i.currentTime=a,i.muted=!0,i.autoplay=!0,i.oncanplay=()=>{setTimeout(async()=>{const s=await f(i);o(s)},1e3)},i.src=URL.createObjectURL(t)}),l=e.ref(),d=e.ref([123,234,345,456,567,678,789]),n=async t=>{if(t)for(let a=0;a<=d.value.length;a++){const o=await c(t,d.value[a]);x(o.url)}},m=()=>{d.value.push(l.value),l.value=null},v=()=>{if(d.value=[],r.value)for(;r.value.firstChild;)r.value.removeChild(r.value.firstChild)},g=t=>{t.key==="Enter"&&m()};return e.onMounted(()=>{w.codeList.value=[`const drawVideo = vdo => {
  return new Promise(resolve => {
    const cvs = document.createElement('canvas');
    const ctx = cvs.getContext('2d');
    cvs.width = vdo.videoWidth;
    cvs.height = vdo.videoHeight;
    ctx.drawImage(vdo, 0, 0, cvs.width, cvs.height);
    cvs.toBlob(blob => {
      resolve({
        blob,
        url: URL.createObjectURL(blob)
      });
    });
  });
}

const captureImg = frame => {
  const img = document.createElement('img');
  img.src = frame;
  box.value.appendChild(img);
}

/**
 * 获取视频画面帧
 * @params vdoFile: 视频文件
 * @params time: 第几帧
 * @return 返回blob和url
 */
const captureFrame = (vdoFile, time = 0) => {
  return new Promise(resolve => {
    const vdo = document.createElement('video');
    vdo.currentTime = time; // 视频定格
    vdo.muted = true; // 静音播放
    vdo.autoplay = true; // 视频自动播放
    vdo.oncanplay = () => {
      setTimeout(async () => {
        const res = await drawVideo(vdo);
        resolve(res);
      }, 1000);
    }
    vdo.src = URL.createObjectURL(vdoFile); // 把object url赋值给video标签的src，blob:为前缀，复制粘贴到新的网页打开就能看到视频
  });
}

const onChangeFn = async e => {
  if (!e) return;
  for (let i = 0; i < 10; i++) {
    const res = await captureFrame(e, (i + 50) * 1);
    captureImg(res.url);
  }
}`]}),e.onUnmounted(()=>{w.codeList.value=[""]}),(t,a)=>{const o=C.__unplugin_components_0,i=B.__unplugin_components_0,s=V,R=y.__unplugin_components_0;return e.openBlock(),e.createBlock(R,{title:"画面帧",flowImg:e.unref(E),class:"iframe-box box"},{default:e.withCtx(()=>[e.createVNode(o,{onChange:n}),e.createBaseVNode("div",L,[e.createVNode(i,{modelValue:e.unref(l),"onUpdate:modelValue":a[0]||(a[0]=h=>e.isRef(l)?l.value=h:null),type:"number",placeholder:"请输入帧数",onKeyup:g},null,8,["modelValue"]),e.createVNode(s,{word:"获取画面帧",onClick:m}),e.createVNode(s,{word:"清空画面帧",onClick:v})]),e.createBaseVNode("div",N,[e.createTextVNode(" 帧数数组： "),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(d),h=>(e.openBlock(),e.createElementBlock("span",{key:h},e.toDisplayString(h),1))),128))]),e.createBaseVNode("div",{ref_key:"box",ref:r,class:"box-img"},null,512)]),_:1},8,["flowImg"])}}},I=p._export_sfc(F,[["__scopeId","data-v-56083fa9"]]);b.default=I,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
