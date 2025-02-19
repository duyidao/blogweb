define(["exports","./index-kY_zZjMK","./index-DuLswRs6","./effect-DvRdfHYc","./vender-qwA9zub-","./rem-CCdVRkxl","./index-uafER6--"],function(p,v,b,r,e,w,S){"use strict";var _=document.createElement("style");_.textContent=`.line-li-dom[data-v-e38ff938]{width:100%;height:100%}.line-li-dom__chart[data-v-e38ff938]{display:flex;flex-direction:column;width:100%;height:420px}.line-li-dom__chart__title[data-v-e38ff938]{display:flex;justify-content:space-between;align-items:center;width:100%;padding:5px 0 25px;font-family:robo;font-size:16px}.line-li-dom__chart__title .title__legend[data-v-e38ff938]{display:flex}.line-li-dom__chart__title .title__legend__item[data-v-e38ff938]{margin-left:10px}.line-li-dom__chart__title .title__legend__item[data-v-e38ff938]:first-child{margin-left:0}.line-li-dom__chart__title .title__legend__item__icon[data-v-e38ff938]{display:inline-block;width:10px;height:10px;border-radius:50%;margin-right:5px}.line-li-dom__chart__content[data-v-e38ff938]{flex:1;position:relative;width:100%}.line-li-dom__chart__content ul[data-v-e38ff938]{display:flex;flex-direction:column-reverse;justify-content:space-between;align-items:center;position:absolute;left:0;top:-5px;height:calc(100% - 16px);margin-bottom:27px;font-size:16px;font-family:robo}.line-li-dom__chart__content>div[data-v-e38ff938]{position:absolute;top:0;left:0;right:0;bottom:0}@media screen and (max-width: 768px){.line-li-dom__chart[data-v-e38ff938]{height:26.25rem}.line-li-dom__chart__title[data-v-e38ff938]{padding:.3125rem 0 1.5625rem;font-size:1rem}.line-li-dom__chart__title .title__legend__item[data-v-e38ff938]{margin-left:.625rem}.line-li-dom__chart__title .title__legend__item__icon[data-v-e38ff938]{width:.625rem;height:.625rem;margin-right:.3125rem}.line-li-dom__chart__content ul[data-v-e38ff938]{top:-.3125rem;height:calc(100% - 1rem);margin-bottom:1.6875rem;font-size:1rem}}
`,document.head.appendChild(_);const N={class:"line-li-dom"},k={key:0,class:"line-li-dom__chart"},C={key:0,class:"line-li-dom__chart__title"},R={class:"title__name"},B={class:"title__legend"},L={class:"title__legend__item__name"},A={class:"line-li-dom__chart__content"},z={__name:"index",props:{data:{type:Array,default:()=>[{name:"正常运行设备数量",color:"rgb(88, 255, 220)",colorStops:["rgb(88, 255, 220)","rgba(88, 255, 220, 0.1)"],data:[{name:"Mon",value:120},{name:"Tue",value:132},{name:"Wed",value:101},{name:"Thu",value:134},{name:"Fri",value:90},{name:"Sat",value:230},{name:"Sun",value:210}]},{name:"故障清单设备数量",color:"#ef8a3a",colorStops:["#ef8a3a","rgba(88, 255, 220, 0.1)"],data:[{name:"Mon",value:11},{name:"Tue",value:243},{name:"Wed",value:645},{name:"Thu",value:423},{name:"Fri",value:349},{name:"Sat",value:13},{name:"Sun",value:0}]}]},info:{type:Object,default:()=>({titleShow:!0,yName:"单位：台",splitNumber:5,style:{fontColor:"rgba(255, 255, 255, .7)",white:"rgb(255, 255, 255)",transparent:"rgba(255, 255, 255, .0)"}})}},setup(s){const l=s,{ratio:i}=w.useUnit(),m=e.ref(""),h=e.ref({}),f=e.ref(0),u=e.ref([]),M=()=>{const a=Math.ceil(Math.max(...l.data.map(o=>o.data.map(c=>{const{value:n}=c;return n??c})).flat(),1)),t=Number((a/l.info.splitNumber).toFixed(1));f.value=t>1?Math.ceil(t):t,u.value=l.data[0]?l.data[0].data.map(o=>o.name):[]},y=()=>{var a;M(),h.value={tooltip:{trigger:"axis",axisPointer:{lineStyle:{color:"#fff",width:2,type:"solid"}}},grid:{left:"0",right:"0",bottom:"2%",top:"0",containLabel:!0},xAxis:{type:"category",boundaryGap:!0,offset:0,axisTick:{show:!1},axisLabel:{interval:"auto",formatter:(t,o)=>u.value[o],fontSize:14*i.value,color:l.info.style.fontColor,fontFamily:"robo"},axisLine:{show:!1},axisPointer:{type:"shadow",shadowStyle:{color:new e.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#fff"},{offset:1,color:"rgba(255, 255, 255, .0)"}],!1),opacity:.3}},data:u.value.map(t=>t===m.value?{value:t,textStyle:{color:"#fff",padding:[2*i.value,6*i.value],borderWidth:1*i.value,borderRadius:2*i.value,borderColor:l.info.style.fontColor,backgroundColor:new e.echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#1F3A5F"},{offset:1,color:"#acc2ef"}],!1)}}:{value:t,textStyle:{color:"#fff",padding:[2*i.value,6*i.value]}})},yAxis:{type:"value",min:0,max:l.info.splitNumber*f.value,interval:f.value,splitNumber:l.info.splitNumber,splitLine:{show:!0,lineStyle:{color:"rgba(255, 255, 255, 0.25)"}},axisLabel:{show:!1,fontSize:14*i.value,color:l.info.style.fontColor}},series:((a=l.data)==null?void 0:a.map(t=>({...t,type:"line",symbol:"circle",showSymbol:!0,smooth:!0,connectNulls:!0,lineStyle:{color:t.color,width:2*i.value},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:t.colorStops.map((o,c)=>({offset:c,color:o})),global:!1}},data:t.data})))||[]}},d=e.ref(null),x=e.ref(null),g=e.ref(null);e.useResizeObserver(g,a=>{if(!a)return;const t=a[0],{width:o}=t.contentRect;x.value.style.left=o+8*i.value+"px",d.value.onResize()}),e.onMounted(()=>{y(),d.value.myChart.on("highlight",({batch:[{dataIndex:a}]})=>{m.value=l.data[0].data[a].name||l.data.data[a]}),d.value.myChart.on("downplay",()=>m.value=""),r.codeList.value=[`<script setup>
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
</style>`],r.modelInfo.value={...r.modelInfo.value,type:"vue",activeIndex:0}}),e.onUnmounted(()=>{r.codeList.value=[""],r.modelInfo.value={...r.modelInfo.value,type:"javascript",activeIndex:0}}),e.watch(()=>[l.data,m.value],()=>{y()},{deep:!0});const I=a=>{const t=f.value,o=t>1||t===1?(a-1)*t:((a-1)*t).toFixed(1);return o==="0.0"?"0":o};return(a,t)=>{const o=b.__unplugin_components_0,c=v.__unplugin_components_0;return e.openBlock(),e.createElementBlock("div",N,[e.createVNode(c,null,{default:e.withCtx(()=>[s.data.length?(e.openBlock(),e.createElementBlock("div",k,[s.info.titleShow?(e.openBlock(),e.createElementBlock("div",C,[e.createBaseVNode("div",R,e.toDisplayString(s.info.yName),1),e.createBaseVNode("div",B,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.data,n=>(e.openBlock(),e.createElementBlock("div",{key:n.name,class:"title__legend__item"},[e.createBaseVNode("span",{class:"title__legend__item__icon",style:e.normalizeStyle({backgroundColor:n.color})},null,4),e.createBaseVNode("span",L,e.toDisplayString(n.name),1)]))),128))])])):e.createCommentVNode("",!0),e.createBaseVNode("div",A,[e.createBaseVNode("ul",{ref_key:"yAxixRef",ref:g,class:"content__x-axis"},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.info.splitNumber+1,n=>(e.openBlock(),e.createElementBlock("li",{key:n},e.toDisplayString(I(n)),1))),128))],512),e.createBaseVNode("div",{ref_key:"myChartRef",ref:x},[e.createVNode(o,{class:"content__canvas",ref_key:"chartRef",ref:d,option:e.unref(h)},null,8,["option"])],512)])])):e.createCommentVNode("",!0)]),_:1})])}}},F=S._export_sfc(z,[["__scopeId","data-v-e38ff938"]]);p.default=F,Object.defineProperty(p,Symbol.toStringTag,{value:"Module"})});
