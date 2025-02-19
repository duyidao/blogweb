define(["exports","./index-kY_zZjMK","./effect-DvRdfHYc","./vender-qwA9zub-","./index-uafER6--"],function(e,c,a,t,i){"use strict";var o=document.createElement("style");o.textContent=`.tailor[data-v-1e551aa1]{display:flex;flex-direction:column;align-items:center;width:100%}.tailor button[data-v-1e551aa1]{margin-bottom:20px}.tailor img[data-v-1e551aa1]{width:300px}@media screen and (max-width: 768px){.tailor button[data-v-1e551aa1]{margin-bottom:1.25rem}.tailor img[data-v-1e551aa1]{width:18.75rem}}
`,document.head.appendChild(o);const l="/blogweb/assets/screenshot-B2Kn_wFo.png",m={class:"iframe-box box"},r={__name:"index",setup(p){const _=()=>{t.html2canvas(document.body).then(n=>{n.toBlob(s=>{t.FileSaver_minExports.saveAs(s,"screen.png")})})};return t.onMounted(()=>{a.codeList.value=[`import html2canvas from 'html2canvas'
import { saveAs } from 'file-saver'
const saveScreen = () => {
  html2canvas(document.body).then(res => {
    res.toBlob((blob) => {
      saveAs(blob, 'screen.png')
    })
  })
}`]}),t.onUnmounted(()=>{a.codeList.value=[""]}),(n,s)=>{const u=c.__unplugin_components_0;return t.openBlock(),t.createElementBlock("div",m,[t.createVNode(u,{title:"页面截图",flowImg:t.unref(l)},{default:t.withCtx(()=>[t.createBaseVNode("div",{class:"tailor"},[t.createBaseVNode("button",{onClick:_},"截图")])]),_:1},8,["flowImg"])])}}},d=i._export_sfc(r,[["__scopeId","data-v-1e551aa1"]]);e.default=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
