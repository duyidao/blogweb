import{_ as b}from"./index-M8MeMDs0.js";import{o as w,a as y,b as t,k as f,t as m,w as i,n as x,l as _,d as D,r as g,C as k,P as S,B,s as r,q as F,u as p,x as v}from"./vender-BxpIRFvU.js";import{c as h,m as c}from"./effect-a2W-tOnW.js";import{_ as C}from"./index-N5uH88Uw.js";const I="/blogweb/assets/dialog-D2eGzrqj.png",N={key:0,class:"cover"},T={class:"title"},z={class:"default-title"},$={class:"content"},j={class:"default-content"},M={class:"button"},U={class:"default-button"},V={__name:"dialog",props:{width:[String,Number],marginTop:[String,Number],fullDialog:{type:Boolean,default:!1},center:{type:Boolean,default:!1},show:{type:Boolean,default:!1},content:{type:String,default:"默认内容"},title:{type:String,default:"提示"},url:{type:String,default:""},params:{type:Object,default:()=>({})}},emits:["update:show","update:fullDialog","cancel","comfirm"],setup(e,{emit:n}){const o=e,l=n,d=()=>{l("update:show",!1),l("cancel"),document.body.style.overflowY="auto"},a=()=>{o.url&&(window.location.href=o.url),l("update:show",!1),l("comfirm")},u=()=>{l("update:fullDialog",!o.fullDialog)};return(s,O)=>e.show?(w(),y("div",N,[t("div",{class:x(["dialog",{fullDialog:e.fullDialog,center:e.center}]),style:_({width:e.width+"px",marginTop:e.marginTop+"px"})},[t("div",T,[f(s.$slots,"title",{},()=>[t("div",z,m(e.title),1)],!0),t("span",{class:"full-icon",onClick:i(u,["stop"])},"all"),t("span",{class:"close-icon",onClick:i(d,["stop"])},"×")]),t("div",$,[f(s.$slots,"content",{},()=>[t("div",j,m(e.content),1)],!0)]),t("div",M,[t("div",U,[t("button",{onClick:i(d,["stop"])},"取消"),t("button",{onClick:i(a,["stop"])},"确认")])])],6)])):D("",!0)}},Y=C(V,[["__scopeId","data-v-d9ebc837"]]),q=t("div",null," 信息标题 ",-1),E=t("div",null," 知识应该共享 ",-1),A={__name:"index",setup(e){const n=g(!1),o=g(!1),l=()=>{n.value=!0,document.body.style.overflowY="hidden"};return k(()=>{h.value=[`<script setup>
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
</style>`],c.value={...c.value,type:"vue"}}),S(()=>{h.value=[""],c.value={...c.value,type:"javascript"}}),(d,a)=>{const u=b;return w(),B(u,{title:"弹窗组件",flowImg:p(I),class:"iframe-box"},{default:r(()=>[t("div",null,[t("button",{class:"",onClick:i(l,["stop"])},"点击唤起弹窗")]),F(Y,{show:p(n),"onUpdate:show":a[0]||(a[0]=s=>v(n)?n.value=s:null),fullDialog:p(o),"onUpdate:fullDialog":a[1]||(a[1]=s=>v(o)?o.value=s:null),center:"",width:"600",marginTop:"200"},{title:r(()=>[q]),content:r(()=>[E]),_:1},8,["show","fullDialog"])]),_:1},8,["flowImg"])}}};export{A as default};
