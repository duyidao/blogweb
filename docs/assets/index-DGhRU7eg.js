import{_ as l}from"./index-C8SelH6X.js";import{_ as u}from"./index-PbwznSNn.js";import{_ as v,r as p,o as _,k as g,w as h,e as b,a as w}from"./index-B4bBUjY3.js";import"./index-CKO9WkJI.js";const a=`const drawVideo = vdo => {
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
}`,f={__name:"index",setup(x){const c=p(null),s=o=>new Promise(e=>{const t=document.createElement("canvas"),r=t.getContext("2d");t.width=o.videoWidth,t.height=o.videoHeight,r.drawImage(o,0,0,t.width,t.height),t.toBlob(n=>{e({blob:n,url:URL.createObjectURL(n)})})}),i=o=>{const e=document.createElement("img");e.src=o,c.value.appendChild(e)},d=(o,e=0)=>new Promise(t=>{const r=document.createElement("video");r.currentTime=e,r.muted=!0,r.autoplay=!0,r.oncanplay=()=>{setTimeout(async()=>{const n=await s(r);t(n)},1e3)},r.src=URL.createObjectURL(o)}),m=async o=>{if(o)for(let e=0;e<10;e++){const t=await d(o,(e+50)*1);i(t.url)}};return(o,e)=>{const t=u,r=l;return _(),g(r,{title:"画面帧",column:"",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:a,"onUpdate:modelValue":e[0]||(e[0]=n=>a=n),type:"javascript",disabled:"",height:"650",class:"iframe-box box"},{default:h(()=>[b(t,{onChange:m}),w("div",{ref_key:"box",ref:c,class:"box-img"},null,512)]),_:1})}}},I=v(f,[["__scopeId","data-v-8c81d000"]]);export{I as default};
