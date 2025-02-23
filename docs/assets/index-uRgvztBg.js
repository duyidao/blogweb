import{_ as x}from"./index-M8MeMDs0.js";import{c as f}from"./effect-a2W-tOnW.js";import{_}from"./index-N5uH88Uw.js";import{o as d,a as h,r as v,C as y,P as b,B as F,s as B,b as u,t as c,u as l,q as m,x as p}from"./vender-BxpIRFvU.js";const w="/blogweb/assets/input-SE_B98cv.png",I=["type","value","maxlength"],S=["value","maxlength"],N={__name:"input",props:{msg:{type:[String,Number],default:"hello"},type:{type:String,default:"text",validator:a=>["text","password","number","email","textarea"].includes(a)},maxlength:{type:Number,default:100},searchAction:{type:[Boolean,String],default:!1}},emits:["update:msg","input","change","focus","blur","search"],setup(a,{emit:e}){const t=e,i=s=>{t("update:msg",s.target.value),t("input",s.target.value)},n=s=>{t("change",s.target.value)},r=s=>{t("focus",s.target.value)},o=s=>{t("blur",s.target.value)};return(s,M)=>a.type!=="textarea"?(d(),h("input",{key:0,class:"",type:a.type,value:a.msg,maxlength:a.maxlength,placeholder:"请输入内容",onInput:i,onChange:n,onFocus:r,onBlur:o},null,40,I)):(d(),h("textarea",{key:1,class:"",name:"",value:a.msg,maxlength:a.maxlength,placeholder:"请输入内容",onInput:i,onChange:n,onFocus:r,onBlur:o,cols:"30",rows:"10"},null,40,S))}},g=_(N,[["__scopeId","data-v-9c9e9722"]]),k={class:"input-info-item"},A={class:""},C={class:"input-info-item"},U={class:""},V={class:"input-info-item"},E={class:""},$={__name:"index",setup(a){const e=v("daodao"),t=v(11);return y(()=>{f.value=[`const {searchAction} = defineProps({
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
}`]}),b(()=>{f.value=[""]}),(i,n)=>{const r=x;return d(),F(r,{title:"input组件封装",flowImg:l(w),class:"input-info"},{default:B(()=>[u("div",k,[u("span",A,"文本输入框，父组件内容 "+c(l(e)),1),m(g,{msg:l(e),"onUpdate:msg":n[0]||(n[0]=o=>p(e)?e.value=o:null)},null,8,["msg"])]),u("div",C,[u("span",U,"多行文本框，父组件内容 "+c(l(e)),1),m(g,{type:"textarea",msg:l(e),"onUpdate:msg":n[1]||(n[1]=o=>p(e)?e.value=o:null)},null,8,["msg"])]),u("div",V,[u("span",E,"数字框，父组件内容 "+c(l(t)),1),m(g,{type:"number",msg:l(t),"onUpdate:msg":n[2]||(n[2]=o=>p(t)?t.value=o:null)},null,8,["msg"])])]),_:1},8,["flowImg"])}}},L=_($,[["__scopeId","data-v-9198a73a"]]);export{L as default};
