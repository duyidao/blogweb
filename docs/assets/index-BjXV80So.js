import{u as b,W as m,X as y,J as l,x as S,r as g,Y as O,q as W}from"./index-7h_0nA45.js";function h(e){return m()?(y(e),!0):!1}function d(e){return typeof e=="function"?e():b(e)}const M=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const z=M?window:void 0;function f(e){var n;const o=d(e);return(n=o==null?void 0:o.$el)!=null?n:o}function C(){const e=g(!1),n=O();return n&&W(()=>{e.value=!0},n),e}function R(e){const n=C();return l(()=>(n.value,!!e()))}function k(e,n,o={}){const{window:u=z,...p}=o;let t;const i=R(()=>u&&"ResizeObserver"in u),c=()=>{t&&(t.disconnect(),t=void 0)},v=l(()=>{const s=d(e);return Array.isArray(s)?s.map(r=>f(r)):[f(s)]}),w=S(v,s=>{if(c(),i.value&&u){t=new ResizeObserver(n);for(const r of s)r&&t.observe(r,p)}},{immediate:!0,flush:"post"}),a=()=>{c(),w()};return h(a),{isSupported:i,stop:a}}export{k as u};