import{_ as r}from"./index-Cr8RYIZ3.js";import{e as o,X as c,a4 as s,o as m,k as u,w as v,a as p}from"./index-Cun0YHcx.js";const b=(d,e)=>{let t=document.createElement("div"),n=o("div",{class:"dialog-cover"},[o("div",{class:"dialog-cover-content"},[o("div",{class:"content"},[d]),o("div",{class:"btns"},[o("button",{onClick:()=>{document.body.removeChild(t),e.cancel&&e.cancel()}},[c("不同意")]),o("button",{onClick:()=>{document.body.removeChild(t),e.confirm&&e.confirm()}},[c("确认签署")])])])]);s(n,t),document.body.appendChild(t)},i=`import {render} from 'vue'

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
}`,f={__name:"index",setup(d){const e=()=>{b("我是内容文本",{confirm:()=>{},cancel:()=>{}})};return(t,n)=>{const l=r;return m(),u(l,{title:"重复小组件",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:i,"onUpdate:modelValue":n[0]||(n[0]=a=>i=a),type:"javascript",height:"480",disabled:""},{default:v(()=>[p("button",{onClick:e},"click me")]),_:1})}}};export{f as default};
