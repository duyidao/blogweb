import{_ as v,r,h as _,bN as a,g as u,U as f,o as p,c as h,b as e,n as m,u as c,E as w,H as y,q as g,L as l,bO as n,p as k,d as x}from"./index-BJQdFUCM.js";const i=d=>(k("data-v-6f11d4d1"),d=d(),x(),d),E={class:"warpper"},L={class:"candles"},S=g('<div class="candle1" data-v-6f11d4d1><div class="candle1_body" data-v-6f11d4d1><div class="candle1_eyes" data-v-6f11d4d1><span class="candle1_eyes-left" data-v-6f11d4d1></span><span class="candle1_eyes-right" data-v-6f11d4d1></span><div class="candle1_stick" data-v-6f11d4d1></div></div><div class="candle1_mouth" data-v-6f11d4d1></div></div></div><div class="candle2" data-v-6f11d4d1><div class="candle2_body" data-v-6f11d4d1><div class="candle2_eyes" data-v-6f11d4d1><span class="candle2_eyes-left" data-v-6f11d4d1></span><span class="candle2_eyes-right" data-v-6f11d4d1></span></div></div><div class="candle2_stick" data-v-6f11d4d1></div></div>',2),b=i(()=>e("div",{class:"candle_smoke2"},null,-1)),z=i(()=>e("div",{class:"floor"},null,-1)),F={__name:"index",setup(d){const s=r({height:"0",width:"0"}),t=()=>{s.value.width=a.value?"0":l.value>768?"16px":n(16),s.value.height=a.value?"0":l.value>768?"20px":n(20)};_(()=>a.value,()=>{setTimeout(()=>t(),200)},{immediate:!0});const o=()=>{a.value=!a.value,a.value?document.documentElement.classList.remove("dark"):document.documentElement.classList.add("dark")};return u(()=>{window.addEventListener("resize",t)}),f(()=>{window.removeEventListener("resize",t)}),(I,B)=>(p(),h("div",{title:"切换模式",class:w(["candle",{light:c(a),dark:!c(a)}]),onClick:y(o,["stop"])},[e("div",E,[e("div",L,[S,e("div",{ref:"candleFire",style:m(c(s)),class:"candle2_fire"},null,4),b]),z])],2))}},N=v(F,[["__scopeId","data-v-6f11d4d1"]]);export{N as default};