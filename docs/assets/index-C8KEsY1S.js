import{_ as l}from"./index-DaFcaQHa.js";import{c as d}from"./effect-BFrBJKb1.js";import{q as e,M as i,ak as s,C as r,O as m,o as u,B as v,s as p,b,u as f}from"./vender-Dkdm4IfB.js";import"./index-DKBlgV4z.js";const _="/blogweb/assets/repeat-CjSqASA1.png",C=(t,o)=>{let n=document.createElement("div"),c=e("div",{class:"dialog-cover"},[e("div",{class:"dialog-cover-content"},[e("div",{class:"content"},[t]),e("div",{class:"btns"},[e("button",{onClick:()=>{document.body.removeChild(n),o.cancel&&o.cancel()}},[i("不同意")]),e("button",{onClick:()=>{document.body.removeChild(n),o.confirm&&o.confirm()}},[i("确认签署")])])])]);s(c,n),document.body.appendChild(n)},y={__name:"index",setup(t){const o=()=>{C("我是内容文本",{confirm:()=>{},cancel:()=>{}})};return r(()=>{d.value=[`import {render} from 'vue'

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
}`]}),m(()=>{d.value=[""]}),(n,c)=>{const a=l;return u(),v(a,{title:"重复小组件",flowImg:f(_)},{default:p(()=>[b("button",{onClick:o},"click me")]),_:1},8,["flowImg"])}}};export{y as default};
