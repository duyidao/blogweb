import{_ as C}from"./index-Cr8RYIZ3.js";import{_ as x,r as c,o as l,k as B,w as S,a as o,D as k,E as $,u as p,i as U,O as y,c as d,j as A,A as m,F as L}from"./index-Cun0YHcx.js";const N={class:"input"},V={class:"list"},D={class:"item-num"},I={class:"item-word"},g=`const num = ref(120001003);

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
}`,T={__name:"index",setup(j){const a=c(120001003),i=["零","一","二","三","四","五","六","七","八","九"],h=["","十","百","千"],f=["","万","亿"],_=t=>{if(t==="0000"||t==="000"||t==="00"||t==="00"||t==="0")return i[0];let r="";for(let e=0;e<t.length;e++){let n=h[t.length-e-1],s=i[+t[e]];s===i[0]&&(n=""),r+=s+n}return r.replace(/零{2,}/g,"零").replace(/零+$/g,"")},w=t=>{let r="";for(let e=0;e<t.length;e++){const n=t[e];let s=f[t.length-1-e];n===i[0]&&(s=""),r+=n+s}return r.replace(/零{2,}/g,"零").replace(/零+$/g,"")},u=c([]),v=t=>{const r=t.toString().replace(/(?=(\d{4})+$)/g,",").split(",").filter(Boolean);let e=[];for(let s=0;s<r.length;s++){let b=_(r[s]);e.push(b)}const n=w(e);u.value.push({num:t,word:n})},M=()=>{v(a.value)};return(t,r)=>{const e=C;return l(),B(e,{title:"数字转中文",buttonTitle:"源码展示",showCodeButtonTitle:"隐藏源码",modelValue:g,"onUpdate:modelValue":r[1]||(r[1]=n=>g=n),type:"javascript",disabled:"",column:"",class:"iframe-box box"},{default:S(()=>[o("div",N,[k(o("input",{class:"",type:"number","onUpdate:modelValue":r[0]||(r[0]=n=>U(a)?a.value=n:null),name:"num",id:"num",placeholder:"请输入要转化的数字"},null,512),[[$,p(a)]]),o("button",{class:"",onClick:y(M,["stop"])},"转换")]),o("div",V,[(l(!0),d(L,null,A(p(u),(n,s)=>(l(),d("div",{key:s,class:"item"},[o("div",D,"数字："+m(n.num),1),o("div",I,"转换后："+m(n.word),1)]))),128))])]),_:1})}}},O=x(T,[["__scopeId","data-v-7a0978b1"]]);export{O as default};
