import{_ as c}from"./index-DaFcaQHa.js";import{c as s}from"./effect-BFrBJKb1.js";import{C as r,O as m,o as l,a as _,q as i,s as p,b as t,u as d,R as f,S as u}from"./vender-Dkdm4IfB.js";import{_ as v}from"./index-DKBlgV4z.js";const b="/blogweb/assets/screenshot-B2Kn_wFo.png",h={class:"iframe-box box"},x={__name:"index",setup(g){const a=()=>{f(document.body).then(e=>{e.toBlob(o=>{u.saveAs(o,"screen.png")})})};return r(()=>{s.value=[`import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
const saveScreen = () => {
  html2canvas(document.body).then(res => {
    res.toBlob((blob) => {
      saveAs(blob, 'screen.png')
    })
  })
}`]}),m(()=>{s.value=[""]}),(e,o)=>{const n=c;return l(),_("div",h,[i(n,{title:"页面截图",flowImg:d(b)},{default:p(()=>[t("div",{class:"tailor"},[t("button",{onClick:a},"截图")])]),_:1},8,["flowImg"])])}}},k=v(x,[["__scopeId","data-v-1e551aa1"]]);export{k as default};
