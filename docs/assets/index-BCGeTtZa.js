import{_ as i}from"./index-DQnWeQmT.js";import{c as t}from"./effect-qc6A_Llg.js";import{_ as r,q as c,N as l,y as d,o as n,c as o,j as m,w as p,F as u,f as _,B as f,a as v,E as I,D as b}from"./index-BBrB8Wc1.js";const w={class:"slide-in"},y={__name:"index",setup(g){return c(()=>{t.value=[`const DISTANCE = 100; // 初始y轴偏移位置
const DURATION = 500; // 动画持续时间
const map = new WeakMap();

// IntersectionObserver API
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      // 出现在视口中
      console.dir(entry);
      const animation = map.get(entry.target);
      animation && animation.play();
      ob.unobserve(entry.target); // 播放过后就不再播放动画
    }
  }
})

const isBelowViewPort = el => {
  const rect = el.getBoundingClientRect();
  return rect.top - window.innerHeight > 0;
}

export default {
  mounted(el, binding) {
    // 判断当前元素是否在视口之上或者视口内，在的话不需要播放动画
    if (!isBelowViewPort(el)) return;

    // 元素挂载后使用 Web Animation API 来应用动画。写法为el.animate(关键帧, 配置)
    const animation = el.animate([{
      transform: \`translateY(\${DISTANCE}px)\`,
      opacity: 0.5
    }, {
      transform: \`translateY(0)\`,
      opacity: 1
    }], {
      duration: DURATION,
      ease: 'ease-out',
      fill: 'forwards'
    })

    animation.pause(); // 先暂停动画，等待指令的触发
    map.set(el, animation);
    ob.observe(el); // 观察元素是否进入视口
  },
  unmounted(el) {
    ob.unobserve(el); // 元素卸载后断开观察
  }
}`]}),l(()=>{t.value=[""]}),(x,D)=>{const a=i,s=d("slideIn");return n(),o("div",w,[m(a,{title:"盒子上升动画"},{default:p(()=>[(n(),o(u,null,_(10,e=>f(v("div",{class:"slide-in-item",key:e},[I(b(e),1)]),[[s]])),64))]),_:1})])}}},h=r(y,[["__scopeId","data-v-f7bd3723"]]);export{h as default};
