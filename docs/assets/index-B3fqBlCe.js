import{_ as x}from"./index-DERpL5lQ.js";import{_,o as g,c as h,r as f,h as y,w as b,a as o,E as c,u,j as m,k as p}from"./index-D7Q_uCMS.js";import"./index-ClJLQ0Lc.js";const F=["type","value","maxlength"],B=["value","maxlength"],k={__name:"input",props:{msg:{type:[String,Number],default:"hello"},type:{type:String,default:"text",validator:s=>["text","password","number","email","textarea"].includes(s)},maxlength:{type:Number,default:100},searchAction:{type:[Boolean,String],default:!1}},emits:["update:msg","input","change","focus","blur","search"],setup(s,{emit:t}){const a=t,r=l=>{a("update:msg",l.target.value),a("input",l.target.value)},e=l=>{a("change",l.target.value)},i=l=>{a("focus",l.target.value)},n=l=>{a("blur",l.target.value)};return(l,T)=>s.type!=="textarea"?(g(),h("input",{key:0,class:"",type:s.type,value:s.msg,maxlength:s.maxlength,placeholder:"请输入内容",onInput:r,onChange:e,onFocus:i,onBlur:n},null,40,F)):(g(),h("textarea",{key:1,class:"",name:"",value:s.msg,maxlength:s.maxlength,placeholder:"请输入内容",onInput:r,onChange:e,onFocus:i,onBlur:n,cols:"30",rows:"10"},null,40,B))}},d=_(k,[["__scopeId","data-v-2d9fe520"]]),w={class:"input-info-item"},N={class:""},S={class:"input-info-item"},A={class:""},C={class:"input-info-item"},I={class:""},v=`const {searchAction} = defineProps({
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
}`,V={__name:"index",setup(s){const t=f("daodao"),a=f(11);return(r,e)=>{const i=x;return g(),y(i,{title:"input组件封装",column:"",modelValue:v,"onUpdate:modelValue":e[3]||(e[3]=n=>v=n),disabled:"",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",height:"420",class:"input-info"},{default:b(()=>[o("div",w,[o("span",N,"文本输入框，父组件内容 "+c(u(t)),1),m(d,{msg:u(t),"onUpdate:msg":e[0]||(e[0]=n=>p(t)?t.value=n:null)},null,8,["msg"])]),o("div",S,[o("span",A,"多行文本框，父组件内容 "+c(u(t)),1),m(d,{type:"textarea",msg:u(t),"onUpdate:msg":e[1]||(e[1]=n=>p(t)?t.value=n:null)},null,8,["msg"])]),o("div",C,[o("span",I,"数字框，父组件内容 "+c(u(a)),1),m(d,{type:"number",msg:u(a),"onUpdate:msg":e[2]||(e[2]=n=>p(a)?a.value=n:null)},null,8,["msg"])])]),_:1})}}},j=_(V,[["__scopeId","data-v-bcfe5215"]]);export{j as default};
