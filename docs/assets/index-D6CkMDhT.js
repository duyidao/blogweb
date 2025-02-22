define(["exports","./index-fE1ZY-zZ","./effect-CbHB8Sih","./index-BfVzJLus","./vender-CF49NVAq"],function(r,f,m,p,t){"use strict";var g=document.createElement("style");g.textContent=`input[data-v-9c9e9722],textarea[data-v-9c9e9722]{border:1px solid var(--primary-border);padding:4px 8px;background-color:var(--catalogue-bg);color:var(--catalogue-word)}.input-info[data-v-9198a73a] .iframe-item-model__content__info{flex-direction:column}.input-info .input-info-item[data-v-9198a73a]{display:flex;flex-direction:column;width:100%;margin-bottom:20px}.input-info .input-info-item[data-v-9198a73a]:last-child{margin-bottom:0!important}.input-info .input-info-item span[data-v-9198a73a]{margin-bottom:8px;color:var(--catalogue-word)}@media screen and (max-width: 768px){.input-info .input-info-item[data-v-9198a73a]{margin-bottom:1.25rem}.input-info .input-info-item span[data-v-9198a73a]{margin-bottom:.5rem}}
`,document.head.appendChild(g);const d="/blogweb/assets/input-SE_B98cv.png",h=["type","value","maxlength"],_=["value","maxlength"],x={__name:"input",props:{msg:{type:[String,Number],default:"hello"},type:{type:String,default:"text",validator:n=>["text","password","number","email","textarea"].includes(n)},maxlength:{type:Number,default:100},searchAction:{type:[Boolean,String],default:!1}},emits:["update:msg","input","change","focus","blur","search"],setup(n,{emit:e}){const a=e,c=i=>{a("update:msg",i.target.value),a("input",i.target.value)},o=i=>{a("change",i.target.value)},l=i=>{a("focus",i.target.value)},s=i=>{a("blur",i.target.value)};return(i,V)=>n.type!=="textarea"?(t.openBlock(),t.createElementBlock("input",{key:0,class:"",type:n.type,value:n.msg,maxlength:n.maxlength,placeholder:"请输入内容",onInput:c,onChange:o,onFocus:l,onBlur:s},null,40,h)):(t.openBlock(),t.createElementBlock("textarea",{key:1,class:"",name:"",value:n.msg,maxlength:n.maxlength,placeholder:"请输入内容",onInput:c,onChange:o,onFocus:l,onBlur:s,cols:"30",rows:"10"},null,40,_))}},u=p._export_sfc(x,[["__scopeId","data-v-9c9e9722"]]),y={class:"input-info-item"},b={class:""},v={class:"input-info-item"},B={class:""},N={class:"input-info-item"},w={class:""},F={__name:"index",setup(n){const e=t.ref("daodao"),a=t.ref(11);return t.onMounted(()=>{m.codeList.value=[`const {searchAction} = defineProps({
  // 双向绑定的输入框内容
  msg: {
    type: [String, Number],
    default: 'hello'
  },
  // 输入框类型
  type: {
    type: String,
    default: 'text',
    validator: (value) => {
      return ['text', 'password', 'number', 'email', 'textarea'].includes(value)
    }
  },
  // 输入内容最大长度
  maxlength: {
    type: Number,
    default: 100
  },
  // 是否需要特殊处理搜索结果。为true需要；为false或url路径不需要，内部调用接口返回结果
  searchAction: {
    type: [Boolean, String],
    default: false
  }
})
const emit = defineEmits(['update:msg', 'input', 'change', 'focus', 'blur', 'search'])

// 输入框内容变化时触发
const inputFn = (e) => {
  emit('update:msg', e.target.value)
  emit('input', e.target.value)
}

let timer = null

// 输入框内容变化完毕后触发
const changeFn = (e) => {
  emit('change', e.target.value)
  if (searchAction) {
    if(timer) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        // 需要搜索
        searchFn(e.target.value)
      }, 100);
    }
  }
}

const searchFn = value => {
  if (typeof this.searchAction === "string") {
    // 搜索接口地址
    axios.get(this.searchAction, {
      params: {
        keyword: value
      }
    }).then(res => {
      emit('search', res.data)
    })
  } else {
    emit('search', value)
  }
}

const focusFn = (e) => {
  emit('focus', e.target.value)
}

const blurFn = (e) => {
  emit('blur', e.target.value)
}`]}),t.onUnmounted(()=>{m.codeList.value=[""]}),(c,o)=>{const l=f.__unplugin_components_0;return t.openBlock(),t.createBlock(l,{title:"input组件封装",flowImg:t.unref(d),class:"input-info"},{default:t.withCtx(()=>[t.createBaseVNode("div",y,[t.createBaseVNode("span",b,"文本输入框，父组件内容 "+t.toDisplayString(t.unref(e)),1),t.createVNode(u,{msg:t.unref(e),"onUpdate:msg":o[0]||(o[0]=s=>t.isRef(e)?e.value=s:null)},null,8,["msg"])]),t.createBaseVNode("div",v,[t.createBaseVNode("span",B,"多行文本框，父组件内容 "+t.toDisplayString(t.unref(e)),1),t.createVNode(u,{type:"textarea",msg:t.unref(e),"onUpdate:msg":o[1]||(o[1]=s=>t.isRef(e)?e.value=s:null)},null,8,["msg"])]),t.createBaseVNode("div",N,[t.createBaseVNode("span",w,"数字框，父组件内容 "+t.toDisplayString(t.unref(a)),1),t.createVNode(u,{type:"number",msg:t.unref(a),"onUpdate:msg":o[2]||(o[2]=s=>t.isRef(a)?a.value=s:null)},null,8,["msg"])])]),_:1},8,["flowImg"])}}},S=p._export_sfc(F,[["__scopeId","data-v-9198a73a"]]);r.default=S,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});
