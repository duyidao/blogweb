define(["exports","./index-yZQ-gSkB","./vender-CF49NVAq","./index-D2dCyH29","./index-Dv65D4QU","./rem-Cqtq43AX","./index-D31hL1yj"],function(a,i,e,p,_,b,g){"use strict";var s=document.createElement("style");s.textContent=`.spanRef[data-v-7d9d563b]{display:flex;justify-content:center;align-items:center;width:100%;height:3.125rem;border-radius:1rem;margin-top:1.25rem}.spanRef span[data-v-7d9d563b]{font-size:13px;color:#fff;mix-blend-mode:difference}
`,document.head.appendChild(s);const u="/blogweb/assets/eyeDropper-BE1GK83Q.png",f={__name:"index",setup(x){const o=e.ref(""),n=e.ref(null),m=()=>{if(!window.EyeDropper){o.value="你的浏览器不支持 EyeDropper API",n.value.style.backgroundColor="#000";return}o.value="正在打开拾色器，请稍等...";const c=new EyeDropper,l=new AbortController;c.open({signal:l.signal}).then(t=>{o.value=t.sRGBHex,n.value.style.backgroundColor=t.sRGBHex}).catch(t=>{o.value=t})},r=e.ref(`const clickFn = () => {
  // 判断浏览器是否支持
  if (!window.EyeDropper) {
    colorVal.value = "你的浏览器不支持 EyeDropper API";
    spanRef.value.style.backgroundColor = '#000';
    return;
  }

  colorVal.value = "正在打开拾色器，请稍等...";

  const eyeDropper = new EyeDropper();
  const abortController = new AbortController();

  eyeDropper
    .open({ signal: abortController.signal })
    .then((result) => {
      colorVal.value = result.sRGBHex;
      spanRef.value.style.backgroundColor = result.sRGBHex;
    })
    .catch((e) => {
      colorVal.value = e;
    });
}`);return(c,l)=>{const t=i.__unplugin_components_0;return e.openBlock(),e.createBlock(t,{title:"拾色器",class:"iframe-box",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",column:"",type:"javascript",modelValue:e.unref(r),"onUpdate:modelValue":l[0]||(l[0]=y=>e.isRef(r)?r.value=y:null),flowImg:e.unref(u),disabled:""},{default:e.withCtx(()=>[e.createBaseVNode("button",{onClick:e.withModifiers(m,["stop"])},"打开拾色器"),e.unref(o)?(e.openBlock(),e.createElementBlock("div",{key:0,class:"spanRef",ref_key:"spanRef",ref:n},[e.createBaseVNode("span",null,e.toDisplayString(e.unref(o)),1)],512)):e.createCommentVNode("",!0)]),_:1},8,["modelValue","flowImg"])}}},d=p._export_sfc(f,[["__scopeId","data-v-7d9d563b"]]);a.default=d,Object.defineProperty(a,Symbol.toStringTag,{value:"Module"})});
