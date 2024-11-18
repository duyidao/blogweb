import{_ as O}from"./index-YhvpI3G0.js";import{e as N,_ as j}from"./index-Czyml8iJ.js";import{c as R,m as w}from"./effect-D8HgqJ1o.js";import{u as L,X as G,Y as X,K as z,y as I,r as u,Z as D,v as T,_ as P,R as V,P as B,o as f,c as d,j as C,w as U,a as m,E as S,F as k,f as A,n as E,N as M}from"./index-DApQOnrR.js";function $(t){return G()?(X(t),!0):!1}function W(t){return typeof t=="function"?t():L(t)}const K=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Y=K?window:void 0;function F(t){var a;const o=W(t);return(a=o==null?void 0:o.$el)!=null?a:o}function Z(){const t=u(!1),a=D();return a&&T(()=>{t.value=!0},a),t}function q(t){const a=Z();return z(()=>(a.value,!!t()))}function H(t,a,o={}){const{window:r=Y,...x}=o;let i;const _=q(()=>r&&"ResizeObserver"in r),g=()=>{i&&(i.disconnect(),i=void 0)},b=z(()=>{const s=W(t);return Array.isArray(s)?s.map(v=>F(v)):[F(s)]}),p=I(b,s=>{if(g(),_.value&&r){i=new ResizeObserver(a);for(const v of s)v&&i.observe(v,x)}},{immediate:!0,flush:"post"}),y=()=>{g(),p()};return $(y),{isSupported:_,stop:y}}const J={class:"line-li-dom"},Q={key:0,class:"line-li-dom__chart"},ee={key:0,class:"line-li-dom__chart__title"},te={class:"title__name"},ae={class:"title__legend"},oe={class:"title__legend__item__name"},ne={class:"line-li-dom__chart__content"},le={__name:"index",props:{data:{type:Array,default:()=>[{name:"正常运行设备数量",color:"rgb(88, 255, 220)",colorStops:["rgb(88, 255, 220)","rgba(88, 255, 220, 0.1)"],data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]},{name:"故障清单设备数量",color:"#ef8a3a",colorStops:["#ef8a3a","rgba(88, 255, 220, 0.1)"],data:[{name:"Mon",value:11},{name:"Tue",value:243},{name:"Wed",value:645},{name:"Thu",value:423},{name:"Fri",value:349},{name:"Sat",value:13},{name:"Sun",value:0}]}]},info:{type:Object,default:()=>({titleShow:!0,yName:"单位：台",splitNumber:5,style:{fontColor:"rgba(255, 255, 255, .7)",white:"rgb(255, 255, 255)",transparent:"rgba(255, 255, 255, .0)"}})}},setup(t){const a=t,{ratio:o}=V(),r=u(""),x=u({}),i=u(0),_=u([]),g=()=>{const n=Math.ceil(Math.max(...a.data.map(l=>l.data.map(h=>{const{value:c}=h;return c??h})).flat(),1)),e=Number((n/a.info.splitNumber).toFixed(1));i.value=e>1?Math.ceil(e):e,_.value=a.data[0]?a.data[0].data.map(l=>l.name):[]},b=()=>{var n;g(),x.value={tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#fff",width:2,type:"solid"}}},grid:{left:"0",right:"0",bottom:"1%",top:"0",containLabel:!0},xAxis:{type:"category",boundaryGap:!0,offset:0,axisTick:{show:!1},axisLabel:{interval:"auto",formatter:(e,l)=>_.value[l],fontSize:14*o.value,color:"#fff",fontFamily:"robo"},axisLine:{show:!1},axisPointer:{type:"shadow",shadowStyle:{color:new N.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fff"},{offset:1,color:"rgba(255, 255, 255, .0)"}],!1),opacity:.3}},data:a.data[0].data.map(e=>(e.name||e)===r.value?{value:e.name||e,textStyle:{color:"#fff",padding:[2*o.value,6*o.value],borderWidth:1*o.value,borderRadius:2*o.value,borderColor:"rgba(255, 255, 255, .7)",backgroundColor:new N.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1F3A5F"},{offset:1,color:"#acc2ef"}],!1)}}:{value:e.name||e,textStyle:{color:"#fff",padding:[2*o.value,6*o.value]}})},yAxis:{type:"value",min:0,max:a.info.splitNumber*i.value,interval:i.value,splitNumber:a.info.splitNumber,splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, 0.25)"}},axisLabel:{show:!1,fontSize:14*o.value,color:a.info.style.fontColor}},series:((n=a.data)==null?void 0:n.map(e=>({...e,type:"line",symbol:"circle",showSymbol:!0,smooth:!0,connectNulls:!0,lineStyle:{color:e.color,width:2*o.value},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:e.colorStops.map((l,h)=>({offset:h,color:l})),global:!1}},data:e.data})))||[]}},p=u(null),y=u(null),s=u(null);H(s,n=>{if(!n)return;const e=n[0],{width:l}=e.contentRect;y.value.style.left=l+8*o.value+"px",p.value.onResize()}),T(()=>{b(),p.value.myChart.on("highlight",({batch:[{dataIndex:n}]})=>{r.value=a.data[0].data[n].name||a.data.data[n]}),p.value.myChart.on("downplay",()=>r.value=""),R.value=[`<script setup>
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
</style>`],w.value={...w.value,type:"vue",activeIndex:0}}),B(()=>{R.value=[""],w.value={...w.value,type:"javascript",activeIndex:0}}),I(()=>r.value,()=>{b()});const v=n=>{const e=i.value,l=e>1||e===1?(n-1)*e:((n-1)*e).toFixed(1);return l==="0.0"?"0":l};return(n,e)=>{const l=j,h=O;return f(),d("div",J,[C(h,null,{default:U(()=>[t.data.length?(f(),d("div",Q,[t.info.titleShow?(f(),d("div",ee,[m("div",te,S(t.info.yName),1),m("div",ae,[(f(!0),d(k,null,A(t.data,c=>(f(),d("div",{key:c.name,class:"title__legend__item"},[m("span",{class:"title__legend__item__icon",style:E({backgroundColor:c.color})},null,4),m("span",oe,S(c.name),1)]))),128))])])):M("",!0),m("div",ne,[m("ul",{ref_key:"yAxixRef",ref:s,class:"content__x-axis"},[(f(!0),d(k,null,A(t.info.splitNumber+1,c=>(f(),d("li",{key:c},S(v(c)),1))),128))],512),m("div",{ref_key:"myChartRef",ref:y},[C(l,{class:"content__canvas",ref_key:"chartRef",ref:p,option:L(x)},null,8,["option"])],512)])])):M("",!0)]),_:1})])}}},ue=P(le,[["__scopeId","data-v-f160e633"]]);export{ue as default};
