define(["exports","./index-kY_zZjMK","./effect-DvRdfHYc","./index-uafER6--","./vender-qwA9zub-"],function(s,l,t,p,e){"use strict";var d=document.createElement("style");d.textContent=`.setProperty-box[data-v-fa93042c]{width:75%;height:100px;margin:50px auto;border:1px solid #000}.setProperty-box .item[data-v-fa93042c]{width:30px;height:30px;border-radius:50%;background-color:red;animation:move-fa93042c 3s linear infinite}@keyframes move-fa93042c{50%{transform:translate(calc(var(--w) - 100%))}}@media screen and (max-width: 768px){.setProperty-box[data-v-fa93042c]{width:20rem;height:6.25rem;margin:3.125rem auto;border:.0625rem solid #000}.setProperty-box .item[data-v-fa93042c]{width:1.875rem;height:1.875rem}}@media screen and (max-width: 768px){.setProperty-box[data-v-fa93042c]{height:6.25rem;width:95%;margin:3.125rem auto;border-width:.0625rem}.setProperty-box .item[data-v-fa93042c]{width:1.875rem;height:1.875rem}}
`,document.head.appendChild(d);const h="/blogweb/assets/variable-DxCRTgQ4.png",x=[(o=>(e.pushScopeId("data-v-fa93042c"),o=o(),e.popScopeId(),o))(()=>e.createBaseVNode("div",{class:"item"},null,-1))],u={__name:"index",setup(o){const i=e.ref(null),r=()=>{var n,a,m;const c=(n=i.value)==null?void 0:n.clientWidth;(m=(a=i.value)==null?void 0:a.style)==null||m.setProperty("--w",c+"px")};return e.onMounted(()=>{r(),window.addEventListener("resize",()=>{r()}),t.codeList.value=[`<script>
const init = () => {
  const w = boxRef.value.clientWidth;
  boxRef.value.style.setProperty('--w', w + 'px');
};
<\/script>

<style>
.item {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: red;
    animation: move 3s linear infinite;
  }

  @keyframes move {
    50% {
      transform: translateX(calc(var(--w) - 100%))
    }
  }

  @media screen and (max-width: 768px) {
    .setProperty-box {
      width: 20rem;
      height: 6.25rem;
      margin: 3.125rem auto;
      border: .0625rem solid #000;

      .item {
        width: 1.875rem;
        height: 1.875rem;
      }
    }
  }
</style>`],t.modelInfo.value={type:"vue",activeIndex:0}}),e.onUnmounted(()=>{window.removeEventListener("resize",()=>{r()}),t.codeList.value=[""],t.modelInfo.value={type:"javascript",activeIndex:0}}),(c,n)=>{const a=l.__unplugin_components_0;return e.openBlock(),e.createBlock(a,{title:"变量计算",flowImg:e.unref(h),class:"iframe-box"},{default:e.withCtx(()=>[e.createBaseVNode("div",{ref_key:"boxRef",ref:i,class:"setProperty-box"},x,512)]),_:1},8,["flowImg"])}}},f=p._export_sfc(u,[["__scopeId","data-v-fa93042c"]]);s.default=f,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
