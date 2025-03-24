import{_ as h}from"./index-DaFcaQHa.js";import{f as b}from"./filter-B5Dajvdp.js";import{c as m}from"./effect-BFrBJKb1.js";import{r as c,C,O as w,o as i,a as u,q as x,s as I,b as g,l as M,u as s,F as $,v as k,n as y,Q as L}from"./vender-Dkdm4IfB.js";import{c as T}from"./likeme-GGPWDbUT.js";import{c as B}from"./peter-mI1k7hEE.js";import{_ as E,a as z}from"./shi-Ch9cTEql.js";import{_ as F}from"./index-DKBlgV4z.js";const N={class:"iframe-box box"},V=["src","onMouseenter"],q={__name:"index",setup(O){const p=new L,f=[T,B,E,z],r=c("transparent"),o=c(-1),_=async(a,n)=>{o.value=n;let e=await p.getColor(a,5);r.value=`rgb(${e[0]}, ${e[1]}, ${e[2]})`},v=()=>{o.value=-1,r.value="transparent"};return C(()=>{m.value=[`import ColorThief from 'colorthief';
import img1 from '@/assets/img/music/likeme.webp';
import img2 from '@/assets/img/music/peter.webp';
import img3 from '@/assets/img/music/shape.webp';
import img4 from '@/assets/img/music/shi.webp';

const colorThief = new ColorThief();

const imgs = [img1, img2, img3, img4];
const bgColor = ref('transparent');

const hoverIndex = ref(-1);
const handlerMouseEnter = async (img, i) => {
  hoverIndex.value = i;
  let colors = await colorThief.getColor(img, 5);
  console.log('colors', colors)
  bgColor.value = \`rgb(\${colors[0]}, \${colors[1]}, \${colors[2]})\`;
  console.log('bgColor.value', bgColor.value);
}

const handlerMouseLeave = () => {
  hoverIndex.value = -1;
  bgColor.value = 'transparent';
}`]}),w(()=>{m.value=[""]}),(a,n)=>{const e=h;return i(),u("div",N,[x(e,{flowImg:s(b)},{default:I(()=>[g("div",{class:"palette-imgs",style:M({"--bg":s(r)})},[(i(),u($,null,k(f,(l,t)=>g("img",{key:l,src:l,class:y({active:s(o)===t,unactive:s(o)!==-1&&s(o)!==t}),onMouseenter:d=>_(d.target,t),onMouseleave:v},null,42,V)),64))],4)]),_:1},8,["flowImg"])])}}},H=F(q,[["__scopeId","data-v-9cd0bf48"]]);export{H as default};
