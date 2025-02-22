define(["exports","./index-fE1ZY-zZ","./effect-CbHB8Sih","./index-BfVzJLus","./vender-CF49NVAq"],function(t,a,n,s,e){"use strict";var i=document.createElement("style");i.textContent=`.slide-in[data-v-f7bd3723] .iframe-item-model__content__info{flex-direction:column}.slide-in .slide-in-item[data-v-f7bd3723]{display:flex;align-items:center;justify-content:center;width:90%;height:350px;margin-bottom:20px;background-color:azure}@media screen and (max-width: 768px){.slide-in .slide-in-item[data-v-f7bd3723]{height:21.875rem;margin-bottom:1.25rem}}
`,document.head.appendChild(i);const r={class:"slide-in"},c={__name:"index",setup(u){return e.onMounted(()=>{n.codeList.value=[`const DISTANCE = 100; // 初始y轴偏移位置
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
}`]}),e.onUnmounted(()=>{n.codeList.value=[""]}),(_,p)=>{const d=a.__unplugin_components_0,m=e.resolveDirective("slideIn");return e.openBlock(),e.createElementBlock("div",r,[e.createVNode(d,{title:"盒子上升动画"},{default:e.withCtx(()=>[(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(10,o=>e.withDirectives(e.createBaseVNode("div",{class:"slide-in-item",key:o},[e.createTextVNode(e.toDisplayString(o),1)]),[[m]])),64))]),_:1})])}}},l=s._export_sfc(c,[["__scopeId","data-v-f7bd3723"]]);t.default=l,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
