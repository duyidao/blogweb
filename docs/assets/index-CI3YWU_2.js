import{_ as r}from"./index-gMdTY4AK.js";import{j as e,G as c,a8 as s,o as m,h as u,w as v,a as p}from"./index-Ct9s1DbM.js";import"./index-BUQgu8J8.js";import"./index-CALvWwPD.js";const b=(d,o)=>{let t=document.createElement("div"),n=e("div",{class:"dialog-cover"},[e("div",{class:"dialog-cover-content"},[e("div",{class:"content"},[d]),e("div",{class:"btns"},[e("button",{onClick:()=>{document.body.removeChild(t),o.cancel&&o.cancel()}},[c("不同意")]),e("button",{onClick:()=>{document.body.removeChild(t),o.confirm&&o.confirm()}},[c("确认签署")])])])]);s(n,t),document.body.appendChild(t)},i=`import {render} from 'vue'

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
}`,k={__name:"index",setup(d){const o=()=>{b("我是内容文本",{confirm:()=>{},cancel:()=>{}})};return(t,n)=>{const l=r;return m(),u(l,{title:"重复小组件",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:i,"onUpdate:modelValue":n[0]||(n[0]=a=>i=a),type:"javascript",height:"480",disabled:""},{default:v(()=>[p("button",{onClick:o},"click me")]),_:1})}}};export{k as default};
