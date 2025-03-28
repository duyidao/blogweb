import{_ as U}from"./index-DaFcaQHa.js";import{r as g,C as F,D as E,o as d,a as w,n as b,d as V,b as _,t as I,w as N,O as M,B as P,s as j,q as h,u as C,x as z,M as O,F as T,v as S}from"./vender-Dkdm4IfB.js";import{_ as L,s as k}from"./index-DKBlgV4z.js";import{u as W}from"./rem-BfWmjlJA.js";import{_ as $}from"./index-BELXwgsc.js";import{_ as D}from"./index-JFGvtYyG.js";import{c as B}from"./effect-BFrBJKb1.js";import"./index-CY4hr8E5.js";const H={__name:"index",props:{word:{type:String,default:""},iconName:{type:String,default:""},full:{type:Boolean,default:!1}},emits:["click"],setup(u,{emit:a}){const y=a,x=()=>{y("click")},l=g(null),{ratio:r}=W(),c=(n,m)=>{let v=m.pageX-n.getBoundingClientRect().left,p=m.pageY-n.getBoundingClientRect().top;n.style.setProperty("--x",k.value>768?v+"px":v*r.value+"px"),n.style.setProperty("--y",k.value>768?p+"px":p*r.value+"px")};return F(()=>{l.value.addEventListener("mousemove",n=>c(l.value,n))}),E(()=>{l.value.removeEventListener("mousemove",n=>c(l.value,n))}),(n,m)=>(d(),w("div",{class:b([{full:u.full},"mouse-glow-button"]),ref_key:"myButtonRef",ref:l,onClick:N(x,["stop"])},[u.iconName?(d(),w("i",{key:0,class:b(["iconfont",u.iconName])},null,2)):V("",!0),_("span",{class:b({hasMargin:u.iconName})},I(u.word),3)],2))}},K=L(H,[["__scopeId","data-v-2e0d966d"]]),Y="/blogweb/assets/video-CiaMsAKY.png",Z={class:"zhenshu-input"},q={class:"zhenshu-list"},A={__name:"index",setup(u){const a=g(null),y=e=>new Promise(t=>{const o=document.createElement("canvas"),s=o.getContext("2d");o.width=e.videoWidth,o.height=e.videoHeight,s.drawImage(e,0,0,o.width,o.height),o.toBlob(i=>{t({blob:i,url:URL.createObjectURL(i)})})}),x=e=>{const t=document.createElement("img");t.src=e,a.value.appendChild(t)},l=(e,t=0)=>new Promise(o=>{const s=document.createElement("video");s.currentTime=t,s.muted=!0,s.autoplay=!0,s.oncanplay=()=>{setTimeout(async()=>{const i=await y(s);o(i)},1e3)},s.src=URL.createObjectURL(e)}),r=g(),c=g([123,234,345,456,567,678,789]),n=async e=>{if(e)for(let t=0;t<=c.value.length;t++){const o=await l(e,c.value[t]);x(o.url)}},m=()=>{c.value.push(r.value),r.value=null},v=()=>{if(c.value=[],a.value)for(;a.value.firstChild;)a.value.removeChild(a.value.firstChild)},p=e=>{e.key==="Enter"&&m()};return F(()=>{B.value=[`const drawVideo = vdo => {
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
}`]}),M(()=>{B.value=[""]}),(e,t)=>{const o=D,s=$,i=K,R=U;return d(),P(R,{title:"画面帧",flowImg:C(Y),class:"iframe-box box"},{default:j(()=>[h(o,{onChange:n}),_("div",Z,[h(s,{modelValue:C(r),"onUpdate:modelValue":t[0]||(t[0]=f=>z(r)?r.value=f:null),type:"number",placeholder:"请输入帧数",onKeyup:p},null,8,["modelValue"]),h(i,{word:"获取画面帧",onClick:m}),h(i,{word:"清空画面帧",onClick:v})]),_("div",q,[O(" 帧数数组： "),(d(!0),w(T,null,S(C(c),f=>(d(),w("span",{key:f},I(f),1))),128))]),_("div",{ref_key:"box",ref:a,class:"box-img"},null,512)]),_:1},8,["flowImg"])}}},se=L(A,[["__scopeId","data-v-56083fa9"]]);export{se as default};
