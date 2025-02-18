import{_ as F}from"./index-GbGEU4tk.js";import{e as w,_ as M}from"./index-CIfA5fEn.js";import{c as S,m as v}from"./effect-Bt9OKxTa.js";import{u as z}from"./index-CLn1PgzA.js";import{u as I}from"./rem-B8TxZhU6.js";import{_ as T,r as n,q as j,M as G,x as W,o as r,c as s,j as N,w as X,a as c,D as _,F as R,f as C,n as D,L as k,u as O}from"./index-DA_VNGs7.js";const P={class:"line-li-dom"},V={key:0,class:"line-li-dom__chart"},U={key:0,class:"line-li-dom__chart__title"},B={class:"title__name"},q={class:"title__legend"},E={class:"title__legend__item__name"},$={class:"line-li-dom__chart__content"},H={__name:"index",props:{data:{type:Array,default:()=>[{name:"正常运行设备数量",color:"rgb(88, 255, 220)",colorStops:["rgb(88, 255, 220)","rgba(88, 255, 220, 0.1)"],data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]},{name:"故障清单设备数量",color:"#ef8a3a",colorStops:["#ef8a3a","rgba(88, 255, 220, 0.1)"],data:[{name:"Mon",value:11},{name:"Tue",value:243},{name:"Wed",value:645},{name:"Thu",value:423},{name:"Fri",value:349},{name:"Sat",value:13},{name:"Sun",value:0}]}]},info:{type:Object,default:()=>({titleShow:!0,yName:"单位：台",splitNumber:5,style:{fontColor:"rgba(255, 255, 255, .7)",white:"rgb(255, 255, 255)",transparent:"rgba(255, 255, 255, .0)"}})}},setup(u){const o=u,{ratio:l}=I(),f=n(""),y=n({}),d=n(0),h=n([]),A=()=>{const t=Math.ceil(Math.max(...o.data.map(a=>a.data.map(m=>{const{value:i}=m;return i??m})).flat(),1)),e=Number((t/o.info.splitNumber).toFixed(1));d.value=e>1?Math.ceil(e):e,h.value=o.data[0]?o.data[0].data.map(a=>a.name):[]},x=()=>{var t;A(),y.value={tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#fff",width:2,type:"solid"}}},grid:{left:"0",right:"0",bottom:"2%",top:"0",containLabel:!0},xAxis:{type:"category",boundaryGap:!0,offset:0,axisTick:{show:!1},axisLabel:{interval:"auto",formatter:(e,a)=>h.value[a],fontSize:14*l.value,color:o.info.style.fontColor,fontFamily:"robo"},axisLine:{show:!1},axisPointer:{type:"shadow",shadowStyle:{color:new w.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fff"},{offset:1,color:"rgba(255, 255, 255, .0)"}],!1),opacity:.3}},data:h.value.map(e=>e===f.value?{value:e,textStyle:{color:"#fff",padding:[2*l.value,6*l.value],borderWidth:1*l.value,borderRadius:2*l.value,borderColor:o.info.style.fontColor,backgroundColor:new w.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1F3A5F"},{offset:1,color:"#acc2ef"}],!1)}}:{value:e,textStyle:{color:"#fff",padding:[2*l.value,6*l.value]}})},yAxis:{type:"value",min:0,max:o.info.splitNumber*d.value,interval:d.value,splitNumber:o.info.splitNumber,splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, 0.25)"}},axisLabel:{show:!1,fontSize:14*l.value,color:o.info.style.fontColor}},series:((t=o.data)==null?void 0:t.map(e=>({...e,type:"line",symbol:"circle",showSymbol:!0,smooth:!0,connectNulls:!0,lineStyle:{color:e.color,width:2*l.value},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:e.colorStops.map((a,m)=>({offset:m,color:a})),global:!1}},data:e.data})))||[]}},p=n(null),g=n(null),b=n(null);z(b,t=>{if(!t)return;const e=t[0],{width:a}=e.contentRect;g.value.style.left=a+8*l.value+"px",p.value.onResize()}),j(()=>{x(),p.value.myChart.on("highlight",({batch:[{dataIndex:t}]})=>{f.value=o.data[0].data[t].name||o.data.data[t]}),p.value.myChart.on("downplay",()=>f.value=""),S.value=[`<script setup>
import echarts from '@/components/chart/index.js';
import { useResizeObserver } from '@vueuse/core';
import { useUnit } from '@/store/rem.js';

const props = defineProps({
  data: {
    type: Array,
    default: () => ([{
      name: '正常运行设备数量',
      color: 'rgb(88, 255, 220)',
      colorStops: ['rgb(88, 255, 220)', 'rgba(88, 255, 220, 0.1)'],
      data: [{ name: 'Mon', value: 120 }, { name: 'Tue', value: 132 }, { name: 'Wed', value: 101 }, { name: 'Thu', value: 134 }, { name: 'Fri', value: 90 }, { name: 'Sat', value: 230 }, { name: 'Sun', value: 210 }],
    }, {
      name: '故障清单设备数量',
      color: '#ef8a3a',
      colorStops: ['#ef8a3a', 'rgba(88, 255, 220, 0.1)'],
      data: [{ name: 'Mon', value: 11 }, { name: 'Tue', value: 243 }, { name: 'Wed', value: 645 }, { name: 'Thu', value: 423 }, { name: 'Fri', value: 349 }, { name: 'Sat', value: 13 }, { name: 'Sun', value: 0 }],
    }]),
  },
  info: {
    type: Object,
    default: () => ({
      titleShow: true, // 是否展示标题
      yName: '单位：台', // y轴坐标单位
      splitNumber: 5, // y轴间隔
      style: {
        fontColor: 'rgba(255, 255, 255, .7)',
        white: 'rgb(255, 255, 255)',
        transparent: 'rgba(255, 255, 255, .0)',
      }
    }),
  },
})

const { ratio } = useUnit();

const highlightXName = ref(''); // 当前悬浮的x轴数据
const option = ref({});

const step = ref(0);
const xAxis = ref([]);
// 处理和转换data，生成一个包含图表配置信息的对象。
const transformData = () => {
  const max = Math.ceil(Math.max(...props.data.map(items => items.data.map(item => {
    const { value } = item;
    return value ?? item;
  })).flat(), 1));

  const s = Number((max / props.info.splitNumber).toFixed(1));
  step.value = s > 1 ? Math.ceil(s) : s;

  xAxis.value = props.data[0] ? props.data[0].data.map(item => item.name) : [];
};
const init = () => {
  transformData();
  option.value = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: '#fff',
          width: 2,
          type: 'solid',
        },
      },
    },
    grid: {
      left: '0',
      right: '0',
      bottom: '1%',
      top: '0',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: true, // 两边是否留白
      offset: 0,
      // 不展示x轴刻度
      axisTick: {
        show: false,
      },
      // 设置x轴刻度字体样式
      axisLabel: {
        interval: 'auto',
        formatter: (_, index) => xAxis.value[index],
        fontSize: 14 * ratio.value,
        color: '#fff',
        fontFamily: 'robo',
      },
      // 不展示x轴底部的黑色横轴
      axisLine: {
        show: false,
      },
      // 鼠标悬浮时展示不透明的柱体
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: '#fff',
              },
              {
                offset: 1,
                color: 'rgba(255, 255, 255, .0)',
              },
            ],
            false
          ),
          opacity: 0.3,
        },
      },
      data: props.data[0].data.map(item => {
        if ((item.name || item) === highlightXName.value) {
          return {
            value: item.name || item,
            // 设置z轴刻度的背景色、边框等样式
            textStyle: {
              color: '#fff',
              padding: [2 * ratio.value, 6 * ratio.value],
              borderWidth: 1 * ratio.value,
              borderRadius: 2 * ratio.value,
              borderColor: 'rgba(255, 255, 255, .7)',
              backgroundColor: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: '#1F3A5F',
                  },
                  {
                    offset: 1,
                    color: '#acc2ef',
                  },
                ],
                false
              ),
            },
          };
        }
        return {
          value: item.name || item,
          textStyle: {
            color: '#fff',
            padding: [2 * ratio.value, 6 * ratio.value],
          }
        }
      }),
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: props.info.splitNumber * step.value,
      interval: step.value,
      splitNumber: props.info.splitNumber,
      // y轴横向echart图线设置与颜色
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.25)',
        },
      },
      // y轴坐标不展示
      axisLabel: {
        show: false,
        fontSize: 14 * ratio.value,
        color: props.info.style.fontColor,
      },
    },
    series: props.data?.map(item => ({
      ...item,
      type: 'line',
      symbol: 'circle',
      showSymbol: true,
      smooth: true, // 平滑曲线
      connectNulls: true, // 连续空值
      lineStyle: {
        color: item.color,
        width: 2 * ratio.value,
      },
      // itemStyle: {
      //   color: 'transparent',
      // },
      // 折线图区域渐变色设置
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: item.colorStops.map((color, index) => ({
            offset: index,
            color,
          })),
          global: false,
        },
      },
      data: item.data,
    })) || [],
  }
}

const chartRef = ref(null);
const myChartRef = ref(null);
const yAxixRef = ref(null);

useResizeObserver(yAxixRef, (newVal) => {
  if (!newVal) return;
  const entry = newVal[0];
  const { width } = entry.contentRect;
  myChartRef.value.style.left = width + 8 * ratio.value + 'px';
  chartRef.value.onResize()
});

onMounted(() => {
  init();
  // 悬浮保存当前选择的x轴坐标名称
  chartRef.value.myChart.on('highlight', ({ batch: [{ dataIndex }] }) => {
    highlightXName.value = props.data[0].data[dataIndex].name || props.data.data[dataIndex];
  });
  chartRef.value.myChart.on('downplay', () => highlightXName.value = '');
})

watch(() => highlightXName.value, () => {
  init();
})

const transformStep = v => {
  const s = step.value;
  const n = (s > 1 || s === 1) ? (v - 1) * s : ((v - 1) * s).toFixed(1);
  return n === '0.0' ? '0' : n;
};
<\/script>

<template>
  <div class="line-li-dom">
    <IframeItemModel>
      <div class="line-li-dom__chart"
        v-if="data.length">
        <div v-if="info.titleShow"
          class="line-li-dom__chart__title">
          <div class="title__name">{{ info.yName }}</div>
          <div class="title__legend">
            <div v-for="item in data"
              :key="item.name"
              class="title__legend__item">
              <span class="title__legend__item__icon"
                :style="{ backgroundColor: item.color }"></span>
              <span class="title__legend__item__name">{{ item.name }}</span>
            </div>
          </div>
        </div>
        <div class="line-li-dom__chart__content">
          <ul ref="yAxixRef"
            class="content__x-axis">
            <li v-for="i in (info.splitNumber + 1)"
              :key="i">
              {{ transformStep(i) }}
            </li>
          </ul>
          <div ref="myChartRef">
            <chart class="content__canvas"
              ref="chartRef"
              :option="option"></chart>
          </div>
        </div>
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .line-li-dom {
    width: 100%;
    height: 100%;

    &__chart {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 420px;

      &__title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 5px 0 25px;
        font-family: 'robo';
        font-size: 16px;

        .title__legend {
          display: flex;

          &__item {
            margin-left: 10px;

            &:first-child {
              margin-left: 0;
            }

            &__icon {
              display: inline-block;
              width: 10px;
              height: 10px;
              border-radius: 50%;
              margin-right: 5px;
            }
          }
        }
      }

      &__content {
        flex: 1;
        position: relative;
        width: 100%;

        ul {
          display: flex;
          flex-direction: column-reverse;
          justify-content: space-between;
          align-items: center;
          position: absolute;
          left: 0;
          top: -5px;
          height: calc(100% - 16px);
          margin-bottom: 27px;
        }

        >div {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
</style>`],v.value={...v.value,type:"vue",activeIndex:0}}),G(()=>{S.value=[""],v.value={...v.value,type:"javascript",activeIndex:0}}),W(()=>[o.data,f.value],()=>{x()},{deep:!0});const L=t=>{const e=d.value,a=e>1||e===1?(t-1)*e:((t-1)*e).toFixed(1);return a==="0.0"?"0":a};return(t,e)=>{const a=M,m=F;return r(),s("div",P,[N(m,null,{default:X(()=>[u.data.length?(r(),s("div",V,[u.info.titleShow?(r(),s("div",U,[c("div",B,_(u.info.yName),1),c("div",q,[(r(!0),s(R,null,C(u.data,i=>(r(),s("div",{key:i.name,class:"title__legend__item"},[c("span",{class:"title__legend__item__icon",style:D({backgroundColor:i.color})},null,4),c("span",E,_(i.name),1)]))),128))])])):k("",!0),c("div",$,[c("ul",{ref_key:"yAxixRef",ref:b,class:"content__x-axis"},[(r(!0),s(R,null,C(u.info.splitNumber+1,i=>(r(),s("li",{key:i},_(L(i)),1))),128))],512),c("div",{ref_key:"myChartRef",ref:g},[N(a,{class:"content__canvas",ref_key:"chartRef",ref:p,option:O(y)},null,8,["option"])],512)])])):k("",!0)]),_:1})])}}},te=T(H,[["__scopeId","data-v-e38ff938"]]);export{te as default};
