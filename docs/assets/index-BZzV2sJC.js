import{_ as d}from"./index-CBe-F5yK.js";import{_ as p,g as f,s as m,K as u,o,c as n,F as g,f as v,h as r,w as _,i as b,u as h}from"./index-CcjIZO8g.js";import"./index-DytGJkIx.js";import"./rem-DwsRrOGD.js";import"./index-BisnD9HM.js";const R={class:"iframe-box"},x={__name:"index",setup(C){const l={addTextCode:`<template>
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
<\/script>`},s=f("js.clipboard"),a=m([]);return a.value=s.map(t=>({...t,model:l[t.name+"Code"],component:Object.freeze(u.value[t.name])})),(t,w)=>{const i=d;return o(),n("div",R,[(o(!0),n(g,null,v(h(a),e=>(o(),r(i,{key:e.name,title:e.title,modelValue:e.model,"onUpdate:modelValue":c=>e.model=c,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",type:"vue",height:e.height,flowImg:e.flowImg,disabled:""},{default:_(()=>[(o(),r(b(e.component)))]),_:2},1032,["title","modelValue","onUpdate:modelValue","height","flowImg"]))),128))])}}},I=p(x,[["__scopeId","data-v-111f29ab"]]);export{I as default};
