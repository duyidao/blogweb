define(["exports","./index-kY_zZjMK","./index-CRyYTF0v","./effect-DvRdfHYc","./index-uafER6--","./vender-qwA9zub-","./index-DbE11khq","./rem-CCdVRkxl"],function(i,s,l,r,u,a,_,w){"use strict";var d=document.createElement("style");d.textContent=`.box[data-v-42ffc572] .upload{width:60%}.box[data-v-42ffc572] canvas{display:block;width:100%;margin-top:20px;object-fit:cover}.box[data-v-42ffc572] .iframe-item-model__content__info{flex-direction:column}.box .box-img[data-v-42ffc572]{display:flex;flex-wrap:wrap;width:100%;margin-top:20px}.box .box-img[data-v-42ffc572] img{width:32%;margin-right:2%;margin-bottom:2%}.box .box-img[data-v-42ffc572] img:nth-child(3n){margin-right:0}@media screen and (max-width: 768px){.box .box-img[data-v-42ffc572]{flex-direction:column;margin-top:1.25rem}.box .box-img[data-v-42ffc572] img{width:100%;margin-right:0;margin-bottom:2%}}
`,document.head.appendChild(d);const g="/blogweb/assets/video-CiaMsAKY.png",f={__name:"index",setup(y){const m=a.ref(null),p=t=>new Promise(o=>{const e=document.createElement("canvas"),n=e.getContext("2d");e.width=t.videoWidth,e.height=t.videoHeight,n.drawImage(t,0,0,e.width,e.height),e.toBlob(c=>{o({blob:c,url:URL.createObjectURL(c)})})}),x=t=>{const o=document.createElement("img");o.src=t,m.value.appendChild(o)},b=(t,o=0)=>new Promise(e=>{const n=document.createElement("video");n.currentTime=o,n.muted=!0,n.autoplay=!0,n.oncanplay=()=>{setTimeout(async()=>{const c=await p(n);e(c)},1e3)},n.src=URL.createObjectURL(t)}),h=async t=>{if(t)for(let o=0;o<10;o++){const e=await b(t,(o+500)*1);x(e.url)}};return a.onMounted(()=>{r.codeList.value=[`const drawVideo = vdo => {
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
}`]}),a.onUnmounted(()=>{r.codeList.value=[""]}),(t,o)=>{const e=l.__unplugin_components_0,n=s.__unplugin_components_0;return a.openBlock(),a.createBlock(n,{title:"画面帧",flowImg:a.unref(g),class:"iframe-box box"},{default:a.withCtx(()=>[a.createVNode(e,{onChange:h}),a.createBaseVNode("div",{ref_key:"box",ref:m,class:"box-img"},null,512)]),_:1},8,["flowImg"])}}},v=u._export_sfc(f,[["__scopeId","data-v-42ffc572"]]);i.default=v,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
