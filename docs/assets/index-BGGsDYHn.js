import{_ as R}from"./index-DoVh_sxX.js";import{_ as E,C as A,D as x,E as I,o as f,c as g,r,k as y,w as G,u as o,i as m,e as T,a as e,A as V,p as M,d as C}from"./index-oMvnDw21.js";import{_ as D}from"./index-T6bq87ZE.js";import{_ as X}from"./cat-CkzGrFVi.js";import"./index-CWSTONIR.js";const w={__name:"index",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(i){const l=A(i,"modelValue");return(s,n)=>x((f(),g("input",{"onUpdate:modelValue":n[0]||(n[0]=d=>l.value=d),placeholder:"请输入内容",type:"text"},null,512)),[[I,l.value]])}},B=E(w,[["__scopeId","data-v-eec3366c"]]),u=i=>(M("data-v-3dcc3053"),i=i(),C(),i),U={class:"input__list"},S={viewBox:"0 0 500 300"},N={id:"conform"},O=["href"],Y=u(()=>e("feColorMatrix",{in:"ORIGIN_IMAGE",type:"saturate",values:"0",result:"GRAY_IMAGE"},null,-1)),b=u(()=>e("feDisplacementMap",{in:"SourceGraphic",in2:"GRAY_IMAGE",scale:"15",xChannelSelector:"R",yChannelSelector:"R",result:"TEXTURED_TEXT"},null,-1)),L=["href"],k=u(()=>e("feColorMatrix",{in:"TEXTURED_TEXT",type:"matrix",values:"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0",result:"OPACITY_TEXT"},null,-1)),P=u(()=>e("feBlend",{in:"BG",in2:"OPACITY_TEXT",mode:"multiply",result:"BLENDED_TEXT"},null,-1)),z=["href"],F=["fill"],$={__name:"index",setup(i){const l=r("Logo"),s=r("#ff0000"),n=r(X),d=h=>{const t=new FileReader;t.addEventListener("load",c=>{const p=c.target.result;n.value=p}),t.readAsDataURL(h)},_=r(`<svg viewBox="0 0 500 300">
      <defs>
        <filter id="conform">
          <feImage
            :href="fileValue"
            result="ORIGIN_IMAGE"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          ></feImage>
          <feColorMatrix
            in="ORIGIN_IMAGE"
            type="saturate"
            values="0"
            result="GRAY_IMAGE"
          ></feColorMatrix>
          <feDisplacementMap
            in="SourceGraphic"
            in2="GRAY_IMAGE"
            scale="15"
            xChannelSelector="R"
            yChannelSelector="R"
            result="TEXTURED_TEXT"
          ></feDisplacementMap>
          <feImage
            :href="fileValue"
            in="TEXTURED_TEXT"
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
            result="BG"
          ></feImage>
          <feColorMatrix
            in="TEXTURED_TEXT"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0"
            result="OPACITY_TEXT"
          ></feColorMatrix>
          <feBlend
            in="BG"
            in2="OPACITY_TEXT"
            mode="multiply"
            result="BLENDED_TEXT"
          ></feBlend>
        </filter>
      </defs>
      <image
        :href="fileValue"
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      ></image>
      <text
        x="50%"
        y="50%"
        font-size="10em"
        font-weight="bold"
        text-anchor="middle"
        alignment-baseline="middle"
        :fill="colorValue"
        filter="url(#conform)"
      >
        {{ inputValue }}
      </text>
    </svg>
`);return(h,t)=>{const c=D,p=B,v=R;return f(),y(v,{title:"纹理适配",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:o(_),"onUpdate:modelValue":t[2]||(t[2]=a=>m(_)?_.value=a:null),disabled:"",height:"450",type:"vue",column:""},{default:G(()=>[T(c,{style:{width:"100%"},onChange:d}),e("div",U,[T(p,{modelValue:o(l),"onUpdate:modelValue":t[0]||(t[0]=a=>m(l)?l.value=a:null)},null,8,["modelValue"]),x(e("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>m(s)?s.value=a:null),type:"color",name:"",id:""},null,512),[[I,o(s)]])]),(f(),g("svg",S,[e("defs",null,[e("filter",N,[e("feImage",{href:o(n),result:"ORIGIN_IMAGE",x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none"},null,8,O),Y,b,e("feImage",{href:o(n),in:"TEXTURED_TEXT",x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none",result:"BG"},null,8,L),k,P])]),e("image",{href:o(n),x:"0",y:"0",width:"100%",height:"100%",preserveAspectRatio:"none"},null,8,z),e("text",{x:"50%",y:"50%","font-size":"10em","font-weight":"bold","text-anchor":"middle","alignment-baseline":"middle",fill:o(s),filter:"url(#conform)"},V(o(l)),9,F)]))]),_:1},8,["modelValue"])}}},Q=E($,[["__scopeId","data-v-3dcc3053"]]);export{Q as default};