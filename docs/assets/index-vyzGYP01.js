import{_ as l}from"./index-YhvpI3G0.js";import{c as d}from"./effect-D8HgqJ1o.js";import{j as e,G as i,ab as r,v as s,P as m,o as u,h as v,w as p,a as b}from"./index-DApQOnrR.js";const _=(t,o)=>{let n=document.createElement("div"),c=e("div",{class:"dialog-cover"},[e("div",{class:"dialog-cover-content"},[e("div",{class:"content"},[t]),e("div",{class:"btns"},[e("button",{onClick:()=>{document.body.removeChild(n),o.cancel&&o.cancel()}},[i("不同意")]),e("button",{onClick:()=>{document.body.removeChild(n),o.confirm&&o.confirm()}},[i("确认签署")])])])]);r(c,n),document.body.appendChild(n)},k={__name:"index",setup(t){const o=()=>{_("我是内容文本",{confirm:()=>{},cancel:()=>{}})};return s(()=>{d.value=[`import {render} from 'vue'

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
}`]}),m(()=>{d.value=[""]}),(n,c)=>{const a=l;return u(),v(a,{title:"重复小组件"},{default:p(()=>[b("button",{onClick:o},"click me")]),_:1})}}};export{k as default};