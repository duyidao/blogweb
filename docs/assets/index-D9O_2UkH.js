import{_ as M}from"./index-DZTgiSRA.js";import{_ as x}from"./index-BELXwgsc.js";import{r as m,o as u,B,s as I,b as s,q as S,u as c,x as V,w as $,a as d,F as k,v as y,t as g}from"./vender-Dkdm4IfB.js";import{_ as N}from"./index-DKBlgV4z.js";import"./index-Ej0X0lxb.js";import"./rem-BfWmjlJA.js";import"./index-CY4hr8E5.js";const U="/blogweb/assets/toWord-C45OIqmH.png",L={class:"input"},A={class:"list"},q={class:"item-num"},F={class:"item-word"},f=`const num = ref(120001003);

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
}`,T={__name:"index",setup(j){const l=m(120001003),a=["零","一","二","三","四","五","六","七","八","九"],_=["","十","百","千"],h=["","万","亿"],w=t=>{if(t==="0000"||t==="000"||t==="00"||t==="00"||t==="0")return a[0];let o="";for(let n=0;n<t.length;n++){let r=_[t.length-n-1],e=a[+t[n]];e===a[0]&&(r=""),o+=e+r}return o.replace(/零{2,}/g,"零").replace(/零+$/g,"")},b=t=>{let o="";for(let n=0;n<t.length;n++){const r=t[n];let e=h[t.length-1-n];r===a[0]&&(e=""),o+=r+e}return o.replace(/零{2,}/g,"零").replace(/零+$/g,"")},p=m([]),v=t=>{const o=t.toString().replace(/(?=(\d{4})+$)/g,",").split(",").filter(Boolean);let n=[];for(let e=0;e<o.length;e++){let i=w(o[e]);n.push(i)}const r=b(n);p.value.push({num:t,word:r})},C=()=>{v(l.value)};return(t,o)=>{const n=x,r=M;return u(),B(r,{title:"数字转中文",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:f,"onUpdate:modelValue":o[1]||(o[1]=e=>f=e),type:"javascript",disabled:"",column:"",flowImg:c(U),class:"iframe-box box"},{default:I(()=>[s("div",L,[S(n,{type:"number",modelValue:c(l),"onUpdate:modelValue":o[0]||(o[0]=e=>V(l)?l.value=e:null),name:"num",id:"num",placeholder:"请输入要转化的数字"},null,8,["modelValue"]),s("button",{class:"",onClick:$(C,["stop"])},"转换")]),s("div",A,[(u(!0),d(k,null,y(c(p),(e,i)=>(u(),d("div",{key:i,class:"item"},[s("div",q,"数字："+g(e.num),1),s("div",F,"转换后："+g(e.word),1)]))),128))])]),_:1},8,["flowImg"])}}},G=N(T,[["__scopeId","data-v-fd8f6f65"]]);export{G as default};
