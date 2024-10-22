import{_ as p}from"./index-83vho5UX.js";/* empty css                                                             *//* empty css                                                              *//* empty css                                                                *//* empty css                                                                */import{g as f,s as m,U as u,o,c as n,F as v,j as g,k as r,w as _,u as R,l as b}from"./index-csMSZZo1.js";const h={class:"iframe-box"},k={__name:"index",setup(x){const l={addTextCode:`<template>
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
<\/script>`},s=e=>{switch(e){case"addText":return"400";case"notCopy":case"paste":return"200";default:return"300"}},c=f("js.clipboard"),a=m([]);return a.value=c.map(e=>({...e,model:l[e.name+"Code"],component:Object.freeze(u.value[e.name]),height:s(e.name)})),(e,y)=>{const i=p;return o(),n("div",h,[(o(!0),n(v,null,g(R(a),t=>(o(),r(i,{key:t.name,title:t.title,modelValue:t.model,"onUpdate:modelValue":d=>t.model=d,buttonTitle:"源码展示",showButtonTitle:"隐藏源码",type:"vue",height:"400",disabled:""},{default:_(()=>[(o(),r(b(t.component)))]),_:2},1032,["title","modelValue","onUpdate:modelValue"]))),128))])}}};export{k as default};
