import{_ as l}from"./index-CjhaQ8a5.js";import{c as n,m as c}from"./effect-a-JszUgu.js";import{_ as m}from"./index-CYKq6d_U.js";import{r as p,C as f,P as _,o as u,B as v,s as x,b as d,u as w,y as h,z as b}from"./vender-n0v3V56A.js";const y="/blogweb/assets/variable-DxCRTgQ4.png",g=e=>(h("data-v-fa93042c"),e=e(),b(),e),I=g(()=>d("div",{class:"item"},null,-1)),k=[I],P={__name:"index",setup(e){const o=p(null),s=()=>{var a,t,i;const r=(a=o.value)==null?void 0:a.clientWidth;(i=(t=o.value)==null?void 0:t.style)==null||i.setProperty("--w",r+"px")};return f(()=>{s(),window.addEventListener("resize",()=>{s()}),n.value=[`<script>
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
</style>`],c.value={type:"vue",activeIndex:0}}),_(()=>{window.removeEventListener("resize",()=>{s()}),n.value=[""],c.value={type:"javascript",activeIndex:0}}),(r,a)=>{const t=l;return u(),v(t,{title:"变量计算",flowImg:w(y),class:"iframe-box"},{default:x(()=>[d("div",{ref_key:"boxRef",ref:o,class:"setProperty-box"},k,512)]),_:1},8,["flowImg"])}}},L=m(P,[["__scopeId","data-v-fa93042c"]]);export{L as default};
