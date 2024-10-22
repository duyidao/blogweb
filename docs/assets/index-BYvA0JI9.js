import{_ as m}from"./index-CA_JjYCt.js";import{_ as p,r as d,v as u,G as _,o as f,k as x,w,u as h,i as v,H as b,a as c,p as y,d as k}from"./index-w22fhRj8.js";const g=t=>(y("data-v-127cf4e1"),t=t(),k(),t),I=g(()=>c("div",{class:"item"},null,-1)),R=[I],B={__name:"index",setup(t){const n=d(null),a=()=>{var e,o,s;const r=(e=n.value)==null?void 0:e.clientWidth;(s=(o=n.value)==null?void 0:o.style)==null||s.setProperty("--w",r+"px")};u(()=>{window.addEventListener("resize",()=>{a()})}),_(()=>{window.removeEventListener("resize",()=>{a()})});const l=()=>{b(()=>{a()})},i=d(`<script>
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
</style>`);return(r,e)=>{const o=m;return f(),x(o,{title:"变量计算",class:"iframe-box",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:h(i),"onUpdate:modelValue":e[0]||(e[0]=s=>v(i)?i.value=s:null),disabled:"",type:"vue",onClick:l},{default:w(()=>[c("div",{ref_key:"boxRef",ref:n,class:"setProperty-box"},R,512)]),_:1},8,["modelValue"])}}},C=p(B,[["__scopeId","data-v-127cf4e1"]]);export{C as default};
