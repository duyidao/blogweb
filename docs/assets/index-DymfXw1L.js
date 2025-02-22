define(["exports","./index-fE1ZY-zZ","./effect-CbHB8Sih","./vender-CF49NVAq","./index-BfVzJLus"],function(c,l,n,o,r){"use strict";const a="/blogweb/assets/repeat-CjSqASA1.png",m=(d,e)=>{let t=document.createElement("div"),i=o.createVNode("div",{class:"dialog-cover"},[o.createVNode("div",{class:"dialog-cover-content"},[o.createVNode("div",{class:"content"},[d]),o.createVNode("div",{class:"btns"},[o.createVNode("button",{onClick:()=>{document.body.removeChild(t),e.cancel&&e.cancel()}},[o.createTextVNode("不同意")]),o.createVNode("button",{onClick:()=>{document.body.removeChild(t),e.confirm&&e.confirm()}},[o.createTextVNode("确认签署")])])])]);o.render(i,t),document.body.appendChild(t)},u={__name:"index",setup(d){const e=()=>{m("我是内容文本",{confirm:()=>{},cancel:()=>{}})};return o.onMounted(()=>{n.codeList.value=[`import {render} from 'vue'

export const signProp = (content, handler) => {
  let div = document.createElement('div')
  let pop = <div class="dialog-cover">
  <div class="dialog-cover-content">
    <div class="content">{content}</div>
      <div class="btns">
    	  <button onClick={() => {
          document.body.removeChild(div) // 这里需要真实dom，虚拟dom会报错
          handler.cancel && handler.cancel()
        }}>不同意</button>
        <button onClick={() => {
          document.body.removeChild(div) // 这里需要真实dom，虚拟dom会报错
          handler.confirm && handler.confirm()
        }}>确认签署</button>
      </div>
    </div>
  </div>
  
  // 参数一：要渲染的虚拟dom；参数二，要渲染到那个真实dom上
  render(pop, div)
  document.body.appendChild(div)
}`]}),o.onUnmounted(()=>{n.codeList.value=[""]}),(t,i)=>{const s=l.__unplugin_components_0;return o.openBlock(),o.createBlock(s,{title:"重复小组件",flowImg:o.unref(a)},{default:o.withCtx(()=>[o.createBaseVNode("button",{onClick:e},"click me")]),_:1},8,["flowImg"])}}};c.default=u,Object.defineProperty(c,Symbol.toStringTag,{value:"Module"})});
