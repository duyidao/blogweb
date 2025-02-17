import{_ as u}from"./index-CSitwkS-.js";import{_ as l}from"./index-t2gqEJhW.js";import{c as a}from"./effect-DIo5sazc.js";import{_ as v,r as p,q as _,M as g,o as h,h as b,w as f,j as w,a as x}from"./index-zM3bxknP.js";import"./index-DmRA0QTM.js";import"./rem-r5RkVmd6.js";const y={__name:"index",setup(U){const c=p(null),s=t=>new Promise(o=>{const e=document.createElement("canvas"),r=e.getContext("2d");e.width=t.videoWidth,e.height=t.videoHeight,r.drawImage(t,0,0,e.width,e.height),e.toBlob(n=>{o({blob:n,url:URL.createObjectURL(n)})})}),i=t=>{const o=document.createElement("img");o.src=t,c.value.appendChild(o)},m=(t,o=0)=>new Promise(e=>{const r=document.createElement("video");r.currentTime=o,r.muted=!0,r.autoplay=!0,r.oncanplay=()=>{setTimeout(async()=>{const n=await s(r);e(n)},1e3)},r.src=URL.createObjectURL(t)}),d=async t=>{if(t)for(let o=0;o<10;o++){const e=await m(t,(o+50)*1);i(e.url)}};return _(()=>{a.value=[`const drawVideo = vdo => {
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
}`]}),g(()=>{a.value=[""]}),(t,o)=>{const e=l,r=u;return h(),b(r,{title:"画面帧",class:"iframe-box box"},{default:f(()=>[w(e,{onChange:d}),x("div",{ref_key:"box",ref:c,class:"box-img"},null,512)]),_:1})}}},E=v(y,[["__scopeId","data-v-5210974e"]]);export{E as default};
