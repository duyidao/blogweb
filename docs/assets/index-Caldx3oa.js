import{_ as d}from"./index-C_NZqyQm.js";import{_ as p,g as f,j as m}from"./index-2pap1gW7.js";import{H as u,o,a as n,F as v,v as g,B as r,s as _,L as b,u as R}from"./vender-CcOEkWCz.js";import"./index-DBr9Gx-g.js";import"./rem-B0h-CM2v.js";import"./index-BvYlPqbK.js";const h={class:"iframe-box"},x={__name:"index",setup(C){const l={addTextCode:`<template>
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
<\/script>`},s=f("js.clipboard"),a=u([]);return a.value=s.map(t=>({...t,model:l[t.name+"Code"],component:Object.freeze(m.value[t.name])})),(t,y)=>{const i=d;return o(),n("div",h,[(o(!0),n(v,null,g(R(a),e=>(o(),r(i,{key:e.name,title:e.title,modelValue:e.model,"onUpdate:modelValue":c=>e.model=c,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",type:"vue",height:e.height,flowImg:e.flowImg,disabled:""},{default:_(()=>[(o(),r(b(e.component)))]),_:2},1032,["title","modelValue","onUpdate:modelValue","height","flowImg"]))),128))])}}},B=p(x,[["__scopeId","data-v-111f29ab"]]);export{B as default};
