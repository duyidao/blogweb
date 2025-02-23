define(["exports","./index-yZQ-gSkB","./index-DKK21BJ9","./vender-CF49NVAq","./index-D2dCyH29","./index-Dv65D4QU","./rem-Cqtq43AX","./index-D31hL1yj"],function(u,f,p,t,g,k,$,I){"use strict";var m=document.createElement("style");m.textContent=`.box .input[data-v-fd8f6f65]{display:flex;align-items:center;margin-bottom:20px}.box .input button[data-v-fd8f6f65]{margin-left:10px}.box .list .item[data-v-fd8f6f65]{display:flex;align-items:center;margin-bottom:10px}.box .list .item>div[data-v-fd8f6f65]{color:var(--normal-word)}.box .list .item>div.item-num[data-v-fd8f6f65]{min-width:30%}.box .list .item>div.item-word[data-v-fd8f6f65]{margin-left:20px}@media screen and (max-width: 768px){.box .input[data-v-fd8f6f65]{margin-bottom:1.25rem}.box .input button[data-v-fd8f6f65]{margin-left:.625rem}.box .list[data-v-fd8f6f65]{max-height:50rem;overflow-y:auto}.box .list .item[data-v-fd8f6f65]{margin-bottom:.625rem}.box .list .item>div[data-v-fd8f6f65]{font-size:.875rem}.box .list .item>div.item-word[data-v-fd8f6f65]{margin-left:1.25rem}}
`,document.head.appendChild(m);const h="/blogweb/assets/toWord-C45OIqmH.png",x={class:"input"},_={class:"list"},b={class:"item-num"},w={class:"item-word"},d=`const num = ref(120001003);

const numMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const unitMap = ['', '十', '百', '千'];
const bigUnitMap = ['', '万', '亿'];

// 分批次转中文
const wordChange = part => {
  // 为零的情况
  if (part === '0000' || part === '000' || part === '00' || part === '00' || part === '0') return numMap[0];

  let word = '';
  for (let i = 0; i < part.length; i++) {
    let unit = unitMap[part.length - i - 1];
    let num = numMap[+part[i]];

    // 判断是否为零，为零不需要单位
    if (num === numMap[0]) {
      unit = '';
    }
    word += num + unit;
  }
  return word.replace(/零{2,}/g, '零').replace(/零+$/g, '');
}

// 添加大单位
const unitAdd = list => {
  let result = '';
  for (let i = 0; i < list.length; i++) {
    const part = list[i];
    let unit = bigUnitMap[list.length - 1 - i];
    // 如果是零，不设置单位
    if (part === numMap[0]) {
      unit = '';
    }
    result += part + unit;
  }
  return result.replace(/零{2,}/g, '零').replace(/零+$/g, '');
}

const changeList = ref([]);

// 转换函数
const toChineseNumber = num => {
  const nummStr = num
    .toString()
    .replace(/(?=(d{4})+$)/g, ',')
    .split(',')
    .filter(Boolean);

  let arr = [];
  for (let i = 0; i < nummStr.length; i++) {
    let part = wordChange(nummStr[i]);
    arr.push(part);
  }
  const res = unitAdd(arr);
  changeList.value.push({
    num,
    word: res,
  })
}

// 点击转换按钮
const handleChange = () => {
  toChineseNumber(num.value);
}`,C={__name:"index",setup(U){const l=t.ref(120001003),r=["零","一","二","三","四","五","六","七","八","九"],M=["","十","百","千"],y=["","万","亿"],v=e=>{if(e==="0000"||e==="000"||e==="00"||e==="00"||e==="0")return r[0];let i="";for(let o=0;o<e.length;o++){let a=M[e.length-o-1],n=r[+e[o]];n===r[0]&&(a=""),i+=n+a}return i.replace(/零{2,}/g,"零").replace(/零+$/g,"")},V=e=>{let i="";for(let o=0;o<e.length;o++){const a=e[o];let n=y[e.length-1-o];a===r[0]&&(n=""),i+=a+n}return i.replace(/零{2,}/g,"零").replace(/零+$/g,"")},c=t.ref([]),S=e=>{const i=e.toString().replace(/(?=(\d{4})+$)/g,",").split(",").filter(Boolean);let o=[];for(let n=0;n<i.length;n++){let s=v(i[n]);o.push(s)}const a=V(o);c.value.push({num:e,word:a})},N=()=>{S(l.value)};return(e,i)=>{const o=p.__unplugin_components_0,a=f.__unplugin_components_0;return t.openBlock(),t.createBlock(a,{title:"数字转中文",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:d,"onUpdate:modelValue":i[1]||(i[1]=n=>d=n),type:"javascript",disabled:"",column:"",flowImg:t.unref(h),class:"iframe-box box"},{default:t.withCtx(()=>[t.createBaseVNode("div",x,[t.createVNode(o,{type:"number",modelValue:t.unref(l),"onUpdate:modelValue":i[0]||(i[0]=n=>t.isRef(l)?l.value=n:null),name:"num",id:"num",placeholder:"请输入要转化的数字"},null,8,["modelValue"]),t.createBaseVNode("button",{class:"",onClick:t.withModifiers(N,["stop"])},"转换")]),t.createBaseVNode("div",_,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(c),(n,s)=>(t.openBlock(),t.createElementBlock("div",{key:s,class:"item"},[t.createBaseVNode("div",b,"数字："+t.toDisplayString(n.num),1),t.createBaseVNode("div",w,"转换后："+t.toDisplayString(n.word),1)]))),128))])]),_:1},8,["flowImg"])}}},B=g._export_sfc(C,[["__scopeId","data-v-fd8f6f65"]]);u.default=B,Object.defineProperty(u,Symbol.toStringTag,{value:"Module"})});
