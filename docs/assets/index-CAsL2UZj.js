define(["exports","./index-DlgzzseR","./index-BfVzJLus","./vender-CF49NVAq","./index-GPVW21Ic","./rem-Cqtq43AX","./index-BSjz60gr"],function(n,i,a,e,g,v,_){"use strict";var l=document.createElement("style");l.textContent=`.iframe-box div[data-v-111f29ab],.iframe-box li[data-v-111f29ab]{color:var(--drop-bg)}
`,document.head.appendChild(l);const r={class:"iframe-box"},d={__name:"index",setup(b){const s={addTextCode:`<template>
  <div ref="pasteRef">.....</div>
</template>

<script setup>
const pasteRef = ref();

onMounted(() => {
  pasteRef.value.addEventListener("copy", function (e) {
    console.log("e", e.target.innerHTML, navigator);
    navigator.clipboard.writeText(
      e.target.innerHTML + '来源：刀刀小站<br/>每天都要更努力'
    );
  });
});
<\/script>`,notCopyCode:`<template>
  <div ref="notcopyRef">.....</div>
</template>

<script setup>
const notcopyRef = ref();

onMounted(() => {
  notcopyRef.value.addEventListener("copy", function (e) {
    e.preventDefault();
    navigator.clipboard.writeText("自定义内容");
  });
});
<\/script>`,pasteCode:`<template>
  <div ref="pasteRef">.....</div>
</template>

<script setup>
const pasteRef = ref();

onMounted(() => {
  console.log("navigator.clipboard", navigator.clipboard);
  navigator.clipboard &&
    navigator.clipboard.readText().then((text) => {
      pasteRef.value.innerHTML = text;
    });
});
<\/script>`,copyCode:`<template>
  <div ref="contentRef" contenteditable>.....</div>
</template>

<script setup>
const contentRef = ref();
onMounted(() => {
  contentRef.value.addEventListener("paste", (e) => {
    console.log("e", e);
    if (e.clipboardData.files.length > 0) {
      e.preventDefault();

      const file = e.clipboardData.files[0];
      console.log("file", file);

      const reader = new FileReader();
      reader.onload = function (e) {
        console.log("reader", e);
        const data = e.target.result;
        console.log("data", data);
        const img = document.createElement("img");
        img.src = data;
        contentRef.value.appendChild(img);
      };
      reader.readAsDataURL(file);
    }
  });
});
<\/script>`},f=a.getDict("js.clipboard"),c=e.shallowRef([]);return c.value=f.map(o=>({...o,model:s[o.name+"Code"],component:Object.freeze(a.jsChildData.value[o.name])})),(o,x)=>{const u=i.__unplugin_components_0;return e.openBlock(),e.createElementBlock("div",r,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(c),t=>(e.openBlock(),e.createBlock(u,{key:t.name,title:t.title,modelValue:t.model,"onUpdate:modelValue":m=>t.model=m,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",type:"vue",height:t.height,flowImg:t.flowImg,disabled:""},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.component)))]),_:2},1032,["title","modelValue","onUpdate:modelValue","height","flowImg"]))),128))])}}},p=a._export_sfc(d,[["__scopeId","data-v-111f29ab"]]);n.default=p,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
