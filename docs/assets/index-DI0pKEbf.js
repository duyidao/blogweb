import{_ as w}from"./index-Cr8RYIZ3.js";import{_ as b,o as v,c as y,a as t,S as r,A as p,O as a,M as x,n as _,V as D,r as f,k,w as u,e as S,u as m,i as g}from"./index-Cun0YHcx.js";const B={key:0,class:"cover"},F={class:"title"},C={class:"default-title"},T={class:"content"},N={class:"default-content"},V={class:"button"},$={class:"default-button"},z={__name:"dialog",props:{width:[String,Number],marginTop:[String,Number],fullDialog:{type:Boolean,default:!1},center:{type:Boolean,default:!1},show:{type:Boolean,default:!1},content:{type:String,default:"默认内容"},title:{type:String,default:"提示"},url:{type:String,default:""},params:{type:Object,default:()=>({})}},emits:["update:show","update:fullDialog","cancel","comfirm"],setup(e,{emit:s}){const n=e,i=s,c=()=>{i("update:show",!1),i("cancel"),document.body.style.overflowY="auto"},o=()=>{n.url&&(window.location.href=n.url),i("update:show",!1),i("comfirm")},d=()=>{i("update:fullDialog",!n.fullDialog)};return(l,Y)=>e.show?(v(),y("div",B,[t("div",{class:x(["dialog",{fullDialog:e.fullDialog,center:e.center}]),style:_({width:e.width+"px",marginTop:e.marginTop+"px"})},[t("div",F,[r(l.$slots,"title",{},()=>[t("div",C,p(e.title),1)],!0),t("span",{class:"full-icon",onClick:a(d,["stop"])},"all"),t("span",{class:"close-icon",onClick:a(c,["stop"])},"×")]),t("div",T,[r(l.$slots,"content",{},()=>[t("div",N,p(e.content),1)],!0)]),t("div",V,[t("div",$,[t("button",{onClick:a(c,["stop"])},"取消"),t("button",{onClick:a(o,["stop"])},"确认")])])],6)])):D("",!0)}},I=b(z,[["__scopeId","data-v-252d35d4"]]),O=t("div",null," 信息标题 ",-1),U=t("div",null," 知识应该共享 ",-1),h=`<script setup>
const props = defineProps({
  width: [String, Number],
  marginTop: [String, Number],
  fullDialog: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  show: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    default: '默认内容'
  },
  title: {
    type: String,
    default: '提示'
  },
  url: {
    type: String,
    default: ''
  },
  params: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:show', 'update:fullDialog', 'cancel', 'comfirm'])

// 点击取消或关闭按钮
const cancelFn = () => {
  emit('update:show', false)
  emit('cancel')
  document.body.style.overflowY = 'auto'
}

// 点击确认按钮
const comfirmFn = () => {
  if (props.url) {
    // 模拟发请求
    window.location.href = props.url
  }
  emit('update:show', false)
  emit('comfirm')
}

// 点击全局按钮
const fullFn = () => {
  emit('update:fullDialog', !props.fullDialog)
}
<\/script>

<template>
  <div class="cover"
    v-if="show">
    <!--fullDialog：传递该字段后让弹窗组件全屏显示-->
    <div class="dialog"
      :class="{ fullDialog, center }"
      :style="{ width: width + 'px', marginTop: marginTop + 'px' }">
      <!-- 标题部分 -->
      <div class="title">
        <slot name="title">
          <div class="default-title">
            {{ title }}
          </div>
        </slot>

        <!-- 关闭按钮 -->
        <span class="full-icon"
          @click.stop="fullFn">all</span>
        <!-- 关闭按钮 -->
        <span class="close-icon"
          @click.stop="cancelFn">×</span>
      </div>

      <!-- 内容部分 -->
      <div class="content">
        <slot name="content">
          <div class="default-content">
            {{ content }}
          </div>
        </slot>
      </div>

      <!-- 按钮 -->
      <div class="button">
        <div class="default-button">
          <button @click.stop="cancelFn">取消</button>
          <button @click.stop="comfirmFn">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.dialog {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: #fff;
  width: 50%;
  margin: 50px auto;
}

.dialog.fullDialog {
  width: 100vw !important;
  height: 100vh !important;
  margin: 0 !important;
}

.title {
  position: relative;
  padding: 15px;
}

/* 预制类 */
.center .title,
.center .content {
  text-align: center;
}

.full-icon {
  position: absolute;
  right: 35px;
  top: 10px;
  cursor: pointer;
}

.close-icon {
  position: absolute;
  right: 13px;
  top: 8px;
  font-size: 16px;
  cursor: pointer;
}

.content {
  flex: 1;
  padding: 15px;
}

.button {
  padding: 15px;
}

button {
  margin-right: 15px;
}
</style>`,M={__name:"index",setup(e){const s=f(!1),n=f(!1),i=()=>{s.value=!0,document.body.style.overflowY="hidden"};return(c,o)=>{const d=w;return v(),k(d,{title:"弹窗组件",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:h,"onUpdate:modelValue":o[2]||(o[2]=l=>h=l),type:"vue",disabled:"",class:"iframe-box"},{default:u(()=>[t("div",null,[t("button",{class:"",onClick:a(i,["stop"])},"点击唤起弹窗")]),S(I,{show:m(s),"onUpdate:show":o[0]||(o[0]=l=>g(s)?s.value=l:null),fullDialog:m(n),"onUpdate:fullDialog":o[1]||(o[1]=l=>g(n)?n.value=l:null),center:"",width:"600",marginTop:"200"},{title:u(()=>[O]),content:u(()=>[U]),_:1},8,["show","fullDialog"])]),_:1})}}};export{M as default};
