import{_ as p}from"./index-DoVh_sxX.js";import{g as f,s as u,U as m,o as a,c as n,F as g,j as v,k as r,w as h,u as _,l as R}from"./index-oMvnDw21.js";const b={class:"iframe-box"},D={__name:"index",setup(x){const l={addTextCode:`<template>
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
<\/script>`},s=e=>{switch(e){case"addText":return"400";case"notCopy":case"paste":return"200";default:return"300"}},c=f("js.clipboard"),o=u([]);return o.value=c.map(e=>({...e,model:l[e.name+"Code"],component:Object.freeze(m.value[e.name]),height:s(e.name)})),(e,C)=>{const i=p;return a(),n("div",b,[(a(!0),n(g,null,v(_(o),t=>(a(),r(i,{key:t.name,title:t.title,modelValue:t.model,"onUpdate:modelValue":d=>t.model=d,buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",type:"vue",height:t.height,disabled:""},{default:h(()=>[(a(),r(R(t.component)))]),_:2},1032,["title","modelValue","onUpdate:modelValue","height"]))),128))])}}};export{D as default};
