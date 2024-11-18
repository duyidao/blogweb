import{_ as l}from"./index-YhvpI3G0.js";import{c as n,m as c}from"./effect-D8HgqJ1o.js";import{_ as m,r as p,v as _,P as f,o as u,h as v,w as x,a as d,p as h,d as w}from"./index-DApQOnrR.js";const y=e=>(h("data-v-73fafa3a"),e=e(),w(),e),b=y(()=>d("div",{class:"item"},null,-1)),I=[b],g={__name:"index",setup(e){const o=p(null),a=()=>{var s,t,i;const r=(s=o.value)==null?void 0:s.clientWidth;(i=(t=o.value)==null?void 0:t.style)==null||i.setProperty("--w",r+"px")};return _(()=>{a(),window.addEventListener("resize",()=>{a()}),n.value=[`<script>
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
</style>`],c.value={type:"vue",activeIndex:0}}),f(()=>{window.removeEventListener("resize",()=>{a()}),n.value=[""],c.value={type:"javascript",activeIndex:0}}),(r,s)=>{const t=l;return u(),v(t,{title:"变量计算",class:"iframe-box"},{default:x(()=>[d("div",{ref_key:"boxRef",ref:o,class:"setProperty-box"},I,512)]),_:1})}}},B=m(g,[["__scopeId","data-v-73fafa3a"]]);export{B as default};
