import{r as d,q as u,M as s}from"./index-boqNHSKg.js";function w(n=750){const e=d(window.innerWidth/n);function t(){e.value=window.innerWidth/n}u(()=>{window.addEventListener("resize",t)}),s(()=>{window.removeEventListener("resize",t)});function i(r,o="rem"){return Number((r/16).toFixed(5))+o}return{px2rem:i,ratio:e}}export{w as u};