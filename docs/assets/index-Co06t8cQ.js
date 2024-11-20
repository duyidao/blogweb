import{_ as p}from"./index-BYVcKC9y.js";import{_ as f,g as u,s as m,M as g,o,c as n,F as v,f as _,h as r,w as h,i as R,u as b}from"./index-muLKZLWf.js";import"./index-CU1aD4bP.js";import"./index-D-23Hqg-.js";const x={class:"iframe-box"},C={__name:"index",setup(y){const l={addTextCode:`<template>
  <div ref="pasteRef">.....</div>
</template>

<script>
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

<script>
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

<script>
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

<script>
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
<\/script>`},s=e=>{switch(e){case"addText":return"400";case"notCopy":case"paste":return"200";default:return"300"}},c=u("js.clipboard"),a=m([]);return a.value=c.map(e=>({...e,model:l[e.name+"Code"],component:Object.freeze(g.value[e.name]),height:s(e.name)})),(e,T)=>{const i=p;return o(),n("div",x,[(o(!0),n(v,null,_(b(a),t=>(o(),r(i,{key:t.name,title:t.title,modelValue:t.model,"onUpdate:modelValue":d=>t.model=d,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",type:"vue",height:t.height,disabled:""},{default:h(()=>[(o(),r(R(t.component)))]),_:2},1032,["title","modelValue","onUpdate:modelValue","height"]))),128))])}}},E=f(C,[["__scopeId","data-v-28f7f9e8"]]);export{E as default};
