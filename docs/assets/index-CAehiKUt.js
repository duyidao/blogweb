import{_ as C}from"./index-BeeV0E7N.js";import{_ as x}from"./index-DIr8VFew.js";import{_ as B,r as p,o as u,h as S,w as V,a as s,j as $,u as m,k,D as y,c as d,F as N,f as U,E as g}from"./index-gyAKjcnW.js";import"./index-e3GqB_-z.js";import"./index-BOG-hNrP.js";const L={class:"input"},A={class:"list"},I={class:"item-num"},j={class:"item-word"},h=`const num = ref(120001003);

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
}`,D={__name:"index",setup(E){const a=p(120001003),l=["零","一","二","三","四","五","六","七","八","九"],_=["","十","百","千"],f=["","万","亿"],w=t=>{if(t==="0000"||t==="000"||t==="00"||t==="00"||t==="0")return l[0];let o="";for(let n=0;n<t.length;n++){let r=_[t.length-n-1],e=l[+t[n]];e===l[0]&&(r=""),o+=e+r}return o.replace(/零{2,}/g,"零").replace(/零+$/g,"")},b=t=>{let o="";for(let n=0;n<t.length;n++){const r=t[n];let e=f[t.length-1-n];r===l[0]&&(e=""),o+=r+e}return o.replace(/零{2,}/g,"零").replace(/零+$/g,"")},c=p([]),M=t=>{const o=t.toString().replace(/(?=(\d{4})+$)/g,",").split(",").filter(Boolean);let n=[];for(let e=0;e<o.length;e++){let i=w(o[e]);n.push(i)}const r=b(n);c.value.push({num:t,word:r})},v=()=>{M(a.value)};return(t,o)=>{const n=x,r=C;return u(),S(r,{title:"数字转中文",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:h,"onUpdate:modelValue":o[1]||(o[1]=e=>h=e),type:"javascript",disabled:"",column:"",class:"iframe-box box"},{default:V(()=>[s("div",L,[$(n,{type:"number",modelValue:m(a),"onUpdate:modelValue":o[0]||(o[0]=e=>k(a)?a.value=e:null),name:"num",id:"num",placeholder:"请输入要转化的数字"},null,8,["modelValue"]),s("button",{class:"",onClick:y(v,["stop"])},"转换")]),s("div",A,[(u(!0),d(N,null,U(m(c),(e,i)=>(u(),d("div",{key:i,class:"item"},[s("div",I,"数字："+g(e.num),1),s("div",j,"转换后："+g(e.word),1)]))),128))])]),_:1})}}},G=B(D,[["__scopeId","data-v-12b894bd"]]);export{G as default};
