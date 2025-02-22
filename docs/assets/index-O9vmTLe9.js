define(["exports","./index-fE1ZY-zZ","./effect-CbHB8Sih","./index-D0E3uHtL","./rem-Cqtq43AX","./index-BfVzJLus","./vender-CF49NVAq"],function(m,_,f,I,b,l,a){"use strict";var g=document.createElement("style");g.textContent=`.pie_chart[data-v-17bcb147]{width:100%;height:380px}@media screen and (max-width: 768px){.pie_chart[data-v-17bcb147]{height:23.75rem}}
`,document.head.appendChild(g);const C={__name:"pieChart",props:{data:{type:Array,default:()=>[]}},setup(w,{expose:d}){const i=w,u=new Map,{ratio:t}=b.useUnit(),p=a.ref({}),W=()=>{p.value={tooltip:{trigger:"item",formatter:e=>`<div>
        <div>
            <span>${e.data.name}</span>
            <span>${e.data.value}%</span>
        </div>
        <div>
            <span>${e.data.flowName}</span>
            <span>${e.data.flowValue}</span>
        </div>
      </div>`},legend:{top:"center",orient:"vertical",left:"right",icon:"circle",align:"left",textStyle:{color:"#7b70f7",rich:{name:{width:l.screenWidth.value>768?70:70*t.value,fontWeight:700,fontSize:l.screenWidth.value>768?14:14*t.value,fontFamily:"fang",align:"left"},value:{width:l.screenWidth.value>768?50:50*t.value,fontSize:l.screenWidth.value>768?14:14*t.value,fontWeight:700,fontFamily:"fang",align:"right"}}},formatter:e=>{if(u.has(e))return`{name|${u.get(e).name}} {value|${u.get(e).value}%}`;let n={name:e,value:i.data.find(c=>c.name===e||e.includes(c.name)).value};return u.set(e,n),`{name|${n.name}} {value|${n.value}%}`}},series:[{name:"货车通行占比（单位：%）",type:"pie",radius:["55%","65%"],center:["35%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"left",normal:{show:!0,position:"center",color:"#4c4a4a",formatter:"{title|"+i.data[0].value+`%}
{car|`+i.data[0].name+i.data[0].flowValue+"辆}",rich:{title:{fontFamily:"sans",fontSize:l.screenWidth.value>768?30:30*t.value,color:"#999",lineHeight:l.screenWidth.value>768?50:50*t.value,fontWeight:500,letterSpace:l.screenWidth.value>768?1.5:1.5*t.value},car:{fontFamily:"sans",fontSize:l.screenWidth.value>768?16:16*t.value,color:"#999",lineHeight:l.screenWidth.value>768?40:40*t.value,fontWeight:500,letterSpace:l.screenWidth.value>768?1.5:1.5*t.value}}},emphasis:{show:!0}},emphasis:{label:{show:!1,fontSize:l.screenWidth.value>768?20:20*t.value,fontWeight:"bold"}},labelLine:{show:!1},data:i.data}]}},r=a.ref(null),s=a.ref(0),h=a.ref(-1),v=()=>{r.value&&(clearInterval(r.value),r.value=null);const e=()=>{if(!o.value)return;o.value.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:s.value}),o.value.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:h.value});const n=i.data[s.value];p.value.series[0].label.normal.formatter="{title|"+n.value+`%}
{car|`+n.name+n.value+"辆}",s.value=s.value>=i.data.length-1?0:s.value+1,h.value=h.value>=i.data.length-1?0:h.value+1};e(),r.value=setInterval(()=>{e()},3e3)},o=a.ref(null),y=()=>{o.value&&(o.value.myChart.on("highlight",function(e){e.name&&(clearInterval(r.value),r.value=null,i.data.forEach((n,c)=>{n.name!==e.name?o.value.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:c}):p.value.series[0].label.normal.formatter="{title|"+n.value+`%}
{car|`+n.name+n.value+"辆}"}))}),o.value.myChart.on("downplay",function(e){e.name&&v()}))};return a.onMounted(()=>{v(),y()}),a.watch(()=>[i.data,l.screenWidth.value,t.value],e=>{u.clear(),s.value=0,h.value=-1,W(),v(),y()},{immediate:!0,deep:!0}),a.onUnmounted(()=>{clearInterval(r.value),r.value=null}),d({pieChart:o}),(e,n)=>{const c=I.__unplugin_components_0;return a.openBlock(),a.createBlock(c,{class:"pie_chart",ref_key:"pieChart",ref:o,option:a.unref(p)},null,8,["option"])}}},x=l._export_sfc(C,[["__scopeId","data-v-17bcb147"]]),S={__name:"index",setup(w){const d=a.ref([{value:90,name:"货车通行",flowValue:"90%",flowName:"货车车流量"},{value:10,name:"其他车通行",flowValue:"10%",flowName:"其他车车流量"}]);return setTimeout(()=>{d.value=[{value:40,name:"货车通行",flowValue:"40%",flowName:"货车车流量"},{value:50,name:"其他车通行",flowValue:"50%",flowName:"其他车车流量"},{value:10,name:"客车通行",flowValue:"10%",flowName:"客车车流量"}]},5e3),a.onMounted(()=>{f.codeList.value=[`const props = defineProps({
  data: {
    type: Array,
    default: () => ([]),
  },
});

const legendMap = new Map();
// echart的option配置项设置
const option = ref({
  tooltip: {
    trigger: 'item',
      formatter: e => {
        return \`<div>
        <div>
            <span>\${e.data.name}</span>
            <span>\${e.data.value}%</span>
        </div>
        <div>
            <span>\${e.data.flowName}</span>
            <span>\${e.data.flowValue}</span>
        </div>
      </div>\`;
        },
  },
  legend: {
  top: 'center',
      orient: 'vertical',
      left: 'right',
      icon: 'circle',
      align: 'left',
      textStyle: {
          color: '#7b70f7',
          rich: {
              name: {
                  width: 70,
                  fontWeight: 700,
                  fontSize: 14,
                  fontFamily: 'fang',
                  align: 'left',
              },
              value: {
                  width: 50,
                  fontSize: 14,
                  fontWeight: 700,
                  fontFamily: 'fang',
                  align: 'right',
              },
          },
      },
      formatter: e => {
          if (legendMap.has(e)) return \`{name|\${legendMap.get(e).name}} {value|\${legendMap.get(e).value}%}\`;

          let obj = { name: e, value: props.data.find(item => item.name === e).value };
          legendMap.set(e, obj);
          return \`{name|\${obj.name}} {value|\${obj.value}%}\`;
      },
  },
  series: [
    {
    name: '货车通行占比（单位：%）',
    type: 'pie',
    radius: ['55%', '65%'],
    center: ['35%', '50%'],
    avoidLabelOverlap: false,
    label: {
        show: false,
        position: 'left',
        normal: {
        show: true,
        position: 'center',
        color: '#4c4a4a',
        formatter: '{title|' + 0 + '%}' + '
' + '{car|货车通行' +0 + '辆}',
        rich: {
          title: {
              fontFamily: 'sans',
              fontSize: 30,
              color: '#000000',
              lineHeight: 30,
              fontWeight: 500,
              letterSpace: 1.5,
            },
            car: {
              fontFamily: 'sans',
              fontSize: 16,
              color: '#000000',
              lineHeight: 40,
              fontWeight: 500,
              letterSpace: 1.5,
            },
          },
        },
        // 中间文字显示
        emphasis: {
            show: true,
        },
    },
      emphasis: {
      label: {
        show: false,
        fontSize: 20,
        fontWeight: 'bold',
      },
      },
      labelLine: {
        show: false,
      },
      data: [],
    },
  ],
})

// 如果data发生变化则重新更新option
watch(
  () => props.data,
  (val) => {
    if (val.length > 0) {
      option.value.series[0].data = val;
      option.value.series[0].label.normal.formatter = '{title|' + val[0].value + '%}' + '
' + '{car|' + val[0].name + val[0].flowValue + '辆}';
    }
  },
  { immediate: true, deep: true }
);

// 开启定时器轮播
const timer = ref(null);
const highlightIndex = ref(0);
const downplayIndex = ref(-1);
const intervalStartFn = () => {
    if (timer.value) {
      clearInterval(timer.value);
      timer.value = null;
    }
    const formatterChange = () => {
      if (!pieChart.value) return;
      pieChart.value.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0, // 第一个系列
          dataIndex: highlightIndex.value,
      });
      pieChart.value.myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0, // 第一个系列
        dataIndex: downplayIndex.value,
      });

      // 中部自定义内容调整
      const obj = props.data[highlightIndex.value];
      option.value.series[0].label.normal.formatter = '{title|' + obj.value + '%}' + '
' + '{car|' + obj.name + obj.value + '辆}';

      // 激活与非激活索引自增1
      highlightIndex.value = highlightIndex.value >= props.data.length - 1 ? 0 : highlightIndex.value + 1;
      downplayIndex.value = downplayIndex.value >= props.data.length - 1 ? 0 : downplayIndex.value + 1;
    };
    formatterChange();
    timer.value = setInterval(() => {
      formatterChange();
    }, 3000);
};

// 为echart绑定图例选中和取消选择事件
const pieChart = ref(null);
const pieChartAddEventFn = () => {
  pieChart.value.myChart.on('highlight', function (params) {
      if (params.name) {
        clearInterval(timer.value);
        timer.value = null;

        props.data.forEach((item, index) => {
          if (item.name !== params.name) {
            pieChart.value.myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0, // 第一个系列
              dataIndex: index,
            });
          }
          else {
            option.value.series[0].label.normal.formatter = '{title|' + item.value + '%}' + '
' + '{car|' + item.name + item.value + '辆}';
          }
        });
      }
  });
  pieChart.value.myChart.on('downplay', function (params) {
    if (params.name) {
      intervalStartFn();
    }
  });
};

onMounted(() => {
  intervalStartFn();
  pieChartAddEventFn();
});

onUnmounted(() => {
  clearInterval(timer.value);
  timer.value = null;
});`]}),a.onUnmounted(()=>{f.codeList.value=[""]}),(i,u)=>{const t=_.__unplugin_components_0;return a.openBlock(),a.createBlock(t,{title:"饼图轮播"},{default:a.withCtx(()=>[a.createVNode(x,{data:a.unref(d)},null,8,["data"])]),_:1})}}};m.default=S,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"})});
