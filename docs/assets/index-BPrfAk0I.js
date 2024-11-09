import{_ as x}from"./index-C8Gud45B.js";import{c as h}from"./effect-CHfcYbuv.js";import{_,o as g,c as f,r as v,v as y,P as b,h as F,w as B,a as o,E as c,u,j as m,k as p}from"./index-CelIiyEc.js";const k=["type","value","maxlength"],N=["value","maxlength"],S={__name:"input",props:{msg:{type:[String,Number],default:"hello"},type:{type:String,default:"text",validator:a=>["text","password","number","email","textarea"].includes(a)},maxlength:{type:Number,default:100},searchAction:{type:[Boolean,String],default:!1}},emits:["update:msg","input","change","focus","blur","search"],setup(a,{emit:e}){const t=e,i=s=>{t("update:msg",s.target.value),t("input",s.target.value)},n=s=>{t("change",s.target.value)},r=s=>{t("focus",s.target.value)},l=s=>{t("blur",s.target.value)};return(s,$)=>a.type!=="textarea"?(g(),f("input",{key:0,class:"",type:a.type,value:a.msg,maxlength:a.maxlength,placeholder:"请输入内容",onInput:i,onChange:n,onFocus:r,onBlur:l},null,40,k)):(g(),f("textarea",{key:1,class:"",name:"",value:a.msg,maxlength:a.maxlength,placeholder:"请输入内容",onInput:i,onChange:n,onFocus:r,onBlur:l,cols:"30",rows:"10"},null,40,N))}},d=_(S,[["__scopeId","data-v-2d9fe520"]]),w={class:"input-info-item"},A={class:""},I={class:"input-info-item"},C={class:""},U={class:"input-info-item"},V={class:""},E={__name:"index",setup(a){const e=v("daodao"),t=v(11);return y(()=>{h.value=[`const {searchAction} = defineProps({
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
}`]}),b(()=>{h.value=[""]}),(i,n)=>{const r=x;return g(),F(r,{title:"input组件封装",class:"input-info"},{default:B(()=>[o("div",w,[o("span",A,"文本输入框，父组件内容 "+c(u(e)),1),m(d,{msg:u(e),"onUpdate:msg":n[0]||(n[0]=l=>p(e)?e.value=l:null)},null,8,["msg"])]),o("div",I,[o("span",C,"多行文本框，父组件内容 "+c(u(e)),1),m(d,{type:"textarea",msg:u(e),"onUpdate:msg":n[1]||(n[1]=l=>p(e)?e.value=l:null)},null,8,["msg"])]),o("div",U,[o("span",V,"数字框，父组件内容 "+c(u(t)),1),m(d,{type:"number",msg:u(t),"onUpdate:msg":n[2]||(n[2]=l=>p(t)?t.value=l:null)},null,8,["msg"])])]),_:1})}}},j=_(E,[["__scopeId","data-v-8b39e8e9"]]);export{j as default};
