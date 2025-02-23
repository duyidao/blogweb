define(["exports","./index-CfXhc3Ls","./vender-CF49NVAq","./effect-CbHB8Sih","./index-D2dCyH29"],function(u,r,t,i,f){"use strict";var p=document.createElement("style");p.textContent=`.cover[data-v-d9ebc837]{position:fixed;left:0;right:0;top:0;bottom:0;background-color:#00000080;z-index:9999}.dialog[data-v-d9ebc837]{display:flex;flex-direction:column;min-width:200px;background-color:#fff;width:50%;margin:50px auto}.dialog.fullDialog[data-v-d9ebc837]{width:100vw!important;height:100vh!important;margin:0!important}.title[data-v-d9ebc837]{position:relative;padding:15px}.center .title[data-v-d9ebc837],.center .content[data-v-d9ebc837]{text-align:center}.full-icon[data-v-d9ebc837]{position:absolute;right:35px;top:10px;cursor:pointer}.close-icon[data-v-d9ebc837]{position:absolute;right:13px;top:8px;font-size:16px;cursor:pointer}.content[data-v-d9ebc837]{flex:1;padding:15px}.button[data-v-d9ebc837]{padding:15px}button[data-v-d9ebc837]{margin-right:15px}
`,document.head.appendChild(p);const m="/blogweb/assets/dialog-D2eGzrqj.png",g={key:0,class:"cover"},h={class:"title"},b={class:"default-title"},w={class:"content"},x={class:"default-content"},y={class:"button"},_={class:"default-button"},v={__name:"dialog",props:{width:[String,Number],marginTop:[String,Number],fullDialog:{type:Boolean,default:!1},center:{type:Boolean,default:!1},show:{type:Boolean,default:!1},content:{type:String,default:"默认内容"},title:{type:String,default:"提示"},url:{type:String,default:""},params:{type:Object,default:()=>({})}},emits:["update:show","update:fullDialog","cancel","comfirm"],setup(o,{emit:a}){const e=o,l=a,c=()=>{l("update:show",!1),l("cancel"),document.body.style.overflowY="auto"},n=()=>{e.url&&(window.location.href=e.url),l("update:show",!1),l("comfirm")},d=()=>{l("update:fullDialog",!e.fullDialog)};return(s,S)=>o.show?(t.openBlock(),t.createElementBlock("div",g,[t.createBaseVNode("div",{class:t.normalizeClass(["dialog",{fullDialog:o.fullDialog,center:o.center}]),style:t.normalizeStyle({width:o.width+"px",marginTop:o.marginTop+"px"})},[t.createBaseVNode("div",h,[t.renderSlot(s.$slots,"title",{},()=>[t.createBaseVNode("div",b,t.toDisplayString(o.title),1)],!0),t.createBaseVNode("span",{class:"full-icon",onClick:t.withModifiers(d,["stop"])},"all"),t.createBaseVNode("span",{class:"close-icon",onClick:t.withModifiers(c,["stop"])},"×")]),t.createBaseVNode("div",w,[t.renderSlot(s.$slots,"content",{},()=>[t.createBaseVNode("div",x,t.toDisplayString(o.content),1)],!0)]),t.createBaseVNode("div",y,[t.createBaseVNode("div",_,[t.createBaseVNode("button",{onClick:t.withModifiers(c,["stop"])},"取消"),t.createBaseVNode("button",{onClick:t.withModifiers(n,["stop"])},"确认")])])],6)])):t.createCommentVNode("",!0)}},B=f._export_sfc(v,[["__scopeId","data-v-d9ebc837"]]),D=t.createBaseVNode("div",null," 信息标题 ",-1),N=t.createBaseVNode("div",null," 知识应该共享 ",-1),k={__name:"index",setup(o){const a=t.ref(!1),e=t.ref(!1),l=()=>{a.value=!0,document.body.style.overflowY="hidden"};return t.onMounted(()=>{i.codeList.value=[`<script setup>
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
</style>`],i.modelInfo.value={...i.modelInfo.value,type:"vue"}}),t.onUnmounted(()=>{i.codeList.value=[""],i.modelInfo.value={...i.modelInfo.value,type:"javascript"}}),(c,n)=>{const d=r.__unplugin_components_0;return t.openBlock(),t.createBlock(d,{title:"弹窗组件",flowImg:t.unref(m),class:"iframe-box"},{default:t.withCtx(()=>[t.createBaseVNode("div",null,[t.createBaseVNode("button",{class:"",onClick:t.withModifiers(l,["stop"])},"点击唤起弹窗")]),t.createVNode(B,{show:t.unref(a),"onUpdate:show":n[0]||(n[0]=s=>t.isRef(a)?a.value=s:null),fullDialog:t.unref(e),"onUpdate:fullDialog":n[1]||(n[1]=s=>t.isRef(e)?e.value=s:null),center:"",width:"600",marginTop:"200"},{title:t.withCtx(()=>[D]),content:t.withCtx(()=>[N]),_:1},8,["show","fullDialog"])]),_:1},8,["flowImg"])}}};u.default=k,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});
