import{_ as v}from"./index-CBe-F5yK.js";import{_ as x}from"./index-Cp7YBl4K.js";import{_ as B,r as m,o as u,h as I,w as S,a as s,j as V,u as c,k as $,C as k,c as d,F as y,f as N,D as g}from"./index-CcjIZO8g.js";import"./index-DytGJkIx.js";import"./rem-DwsRrOGD.js";import"./index-BisnD9HM.js";const U="/blogweb/assets/toWord-C45OIqmH.png",L={class:"input"},A={class:"list"},j={class:"item-num"},D={class:"item-word"},f=`const num = ref(120001003);

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
}`,F={__name:"index",setup(T){const l=m(120001003),a=["零","一","二","三","四","五","六","七","八","九"],h=["","十","百","千"],_=["","万","亿"],w=t=>{if(t==="0000"||t==="000"||t==="00"||t==="00"||t==="0")return a[0];let o="";for(let n=0;n<t.length;n++){let r=h[t.length-n-1],e=a[+t[n]];e===a[0]&&(r=""),o+=e+r}return o.replace(/零{2,}/g,"零").replace(/零+$/g,"")},b=t=>{let o="";for(let n=0;n<t.length;n++){const r=t[n];let e=_[t.length-1-n];r===a[0]&&(e=""),o+=r+e}return o.replace(/零{2,}/g,"零").replace(/零+$/g,"")},p=m([]),C=t=>{const o=t.toString().replace(/(?=(\d{4})+$)/g,",").split(",").filter(Boolean);let n=[];for(let e=0;e<o.length;e++){let i=w(o[e]);n.push(i)}const r=b(n);p.value.push({num:t,word:r})},M=()=>{C(l.value)};return(t,o)=>{const n=x,r=v;return u(),I(r,{title:"数字转中文",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:f,"onUpdate:modelValue":o[1]||(o[1]=e=>f=e),type:"javascript",disabled:"",column:"",flowImg:c(U),class:"iframe-box box"},{default:S(()=>[s("div",L,[V(n,{type:"number",modelValue:c(l),"onUpdate:modelValue":o[0]||(o[0]=e=>$(l)?l.value=e:null),name:"num",id:"num",placeholder:"请输入要转化的数字"},null,8,["modelValue"]),s("button",{class:"",onClick:k(M,["stop"])},"转换")]),s("div",A,[(u(!0),d(y,null,N(c(p),(e,i)=>(u(),d("div",{key:i,class:"item"},[s("div",j,"数字："+g(e.num),1),s("div",D,"转换后："+g(e.word),1)]))),128))])]),_:1},8,["flowImg"])}}},z=B(F,[["__scopeId","data-v-fd8f6f65"]]);export{z as default};
