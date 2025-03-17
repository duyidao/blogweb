import{_ as h}from"./index-lqaWdkyv.js";import{f as b}from"./filter-B5Dajvdp.js";import{c as m}from"./effect-CPvDC59a.js";import{r as c,C,P as w,o as i,a as u,q as x,s as I,b as g,l as M,u as s,F as $,v as k,n as y,R as L}from"./vender-CcOEkWCz.js";import{c as T}from"./likeme-GGPWDbUT.js";import{c as B}from"./peter-mI1k7hEE.js";import{_ as E,a as z}from"./shi-Ch9cTEql.js";import{_ as F}from"./index-R7MN-9XR.js";const N={class:"iframe-box box"},P=["src","onMouseenter"],V={__name:"index",setup(q){const p=new L,f=[T,B,E,z],r=c("transparent"),o=c(-1),_=async(a,n)=>{o.value=n;let e=await p.getColor(a,5);r.value=`rgb(${e[0]}, ${e[1]}, ${e[2]})`},v=()=>{o.value=-1,r.value="transparent"};return C(()=>{m.value=[`import ColorThief from 'colorthief';
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
}`]}),w(()=>{m.value=[""]}),(a,n)=>{const e=h;return i(),u("div",N,[x(e,{flowImg:s(b)},{default:I(()=>[g("div",{class:"palette-imgs",style:M({"--bg":s(r)})},[(i(),u($,null,k(f,(l,t)=>g("img",{key:l,src:l,class:y({active:s(o)===t,unactive:s(o)!==-1&&s(o)!==t}),onMouseenter:d=>_(d.target,t),onMouseleave:v},null,42,P)),64))],4)]),_:1},8,["flowImg"])])}}},J=F(V,[["__scopeId","data-v-9cd0bf48"]]);export{J as default};
