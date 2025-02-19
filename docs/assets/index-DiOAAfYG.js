define(["exports","./index-kY_zZjMK","./filter-wvxObu7Z","./effect-DvRdfHYc","./vender-qwA9zub-","./likeme-DdEjexej","./peter-BnDntd6h","./shi-D8YLNfSw","./index-uafER6--"],function(l,g,p,r,e,f,_,i,d){"use strict";var c=document.createElement("style");c.textContent=`.palette-imgs[data-v-9cd0bf48]{display:flex;flex-wrap:wrap;justify-content:space-evenly;background-color:var(--bg);gap:10px}.palette-imgs img[data-v-9cd0bf48]{width:46%;max-width:400px;transition:all .3s;opacity:.75}.palette-imgs img.active[data-v-9cd0bf48]{transform:translateY(-3px);opacity:1;box-shadow:0 0 7px #333}.palette-imgs img.unactive[data-v-9cd0bf48]{opacity:.35}
`,document.head.appendChild(c);const b={class:"iframe-box box"},h=["src","onMouseenter"],x={__name:"index",setup(k){const w=new e.u,y=[f.coverLike,_.coverPeter,i._imports_0,i._imports_1],a=e.ref("transparent"),o=e.ref(-1),C=async(n,m)=>{o.value=m;let t=await w.getColor(n,5);a.value=`rgb(${t[0]}, ${t[1]}, ${t[2]})`},I=()=>{o.value=-1,a.value="transparent"};return e.onMounted(()=>{r.codeList.value=[`import ColorThief from 'colorthief';
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
}`]}),e.onUnmounted(()=>{r.codeList.value=[""]}),(n,m)=>{const t=g.__unplugin_components_0;return e.openBlock(),e.createElementBlock("div",b,[e.createVNode(t,{flowImg:e.unref(p.flowImg)},{default:e.withCtx(()=>[e.createBaseVNode("div",{class:"palette-imgs",style:e.normalizeStyle({"--bg":e.unref(a)})},[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(y,(u,s)=>e.createBaseVNode("img",{key:u,src:u,class:e.normalizeClass({active:e.unref(o)===s,unactive:e.unref(o)!==-1&&e.unref(o)!==s}),onMouseenter:M=>C(M.target,s),onMouseleave:I},null,42,h)),64))],4)]),_:1},8,["flowImg"])])}}},v=d._export_sfc(x,[["__scopeId","data-v-9cd0bf48"]]);l.default=v,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"})});
