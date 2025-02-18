import{_ as l}from"./index-GbGEU4tk.js";import{c as n,m as c}from"./effect-Bt9OKxTa.js";import{_ as m,r as p,q as _,M as f,o as u,h as v,w as x,a as d,u as w,p as h,d as b}from"./index-DA_VNGs7.js";const g="/blogweb/assets/variable-DxCRTgQ4.png",y=e=>(h("data-v-fa93042c"),e=e(),b(),e),I=y(()=>d("div",{class:"item"},null,-1)),k=[I],R={__name:"index",setup(e){const o=p(null),s=()=>{var a,t,i;const r=(a=o.value)==null?void 0:a.clientWidth;(i=(t=o.value)==null?void 0:t.style)==null||i.setProperty("--w",r+"px")};return _(()=>{s(),window.addEventListener("resize",()=>{s()}),n.value=[`<script>
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
</style>`],c.value={type:"vue",activeIndex:0}}),f(()=>{window.removeEventListener("resize",()=>{s()}),n.value=[""],c.value={type:"javascript",activeIndex:0}}),(r,a)=>{const t=l;return u(),v(t,{title:"变量计算",flowImg:w(g),class:"iframe-box"},{default:x(()=>[d("div",{ref_key:"boxRef",ref:o,class:"setProperty-box"},k,512)]),_:1},8,["flowImg"])}}},M=m(R,[["__scopeId","data-v-fa93042c"]]);export{M as default};
