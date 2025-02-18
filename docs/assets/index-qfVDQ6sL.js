import{_ as C}from"./index-GbGEU4tk.js";import{c as g}from"./effect-Bt9OKxTa.js";import{_ as S}from"./index-CIfA5fEn.js";import{u as $}from"./rem-B8TxZhU6.js";import{_ as F,r as v,q as w,x as M,P as l,M as y,o as x,h as I,u as _,w as j,j as A}from"./index-DA_VNGs7.js";const W={__name:"pieChart",props:{data:{type:Array,default:()=>[]}},setup(c,{expose:p}){const n=c,r=new Map,{ratio:a}=$(),m=v({}),b=()=>{m.value={tooltip:{trigger:"item",formatter:e=>`<div>
        <div>
            <span>${e.data.name}</span>
            <span>${e.data.value}%</span>
        </div>
        <div>
            <span>${e.data.flowName}</span>
            <span>${e.data.flowValue}</span>
        </div>
      </div>`},legend:{top:"center",orient:"vertical",left:"right",icon:"circle",align:"left",textStyle:{color:"#7b70f7",rich:{name:{width:l.value>768?70:70*a.value,fontWeight:700,fontSize:l.value>768?14:14*a.value,fontFamily:"fang",align:"left"},value:{width:l.value>768?50:50*a.value,fontSize:l.value>768?14:14*a.value,fontWeight:700,fontFamily:"fang",align:"right"}}},formatter:e=>{if(r.has(e))return`{name|${r.get(e).name}} {value|${r.get(e).value}%}`;let t={name:e,value:n.data.find(s=>s.name===e||e.includes(s.name)).value};return r.set(e,t),`{name|${t.name}} {value|${t.value}%}`}},series:[{name:"货车通行占比（单位：%）",type:"pie",radius:["55%","65%"],center:["35%","50%"],avoidLabelOverlap:!1,label:{show:!1,position:"left",normal:{show:!0,position:"center",color:"#4c4a4a",formatter:"{title|"+n.data[0].value+`%}
{car|`+n.data[0].name+n.data[0].flowValue+"辆}",rich:{title:{fontFamily:"sans",fontSize:l.value>768?30:30*a.value,color:"#999",lineHeight:l.value>768?50:50*a.value,fontWeight:500,letterSpace:l.value>768?1.5:1.5*a.value},car:{fontFamily:"sans",fontSize:l.value>768?16:16*a.value,color:"#999",lineHeight:l.value>768?40:40*a.value,fontWeight:500,letterSpace:l.value>768?1.5:1.5*a.value}}},emphasis:{show:!0}},emphasis:{label:{show:!1,fontSize:l.value>768?20:20*a.value,fontWeight:"bold"}},labelLine:{show:!1},data:n.data}]}},i=v(null),u=v(0),d=v(-1),h=()=>{i.value&&(clearInterval(i.value),i.value=null);const e=()=>{if(!o.value)return;o.value.myChart.dispatchAction({type:"highlight",seriesIndex:0,dataIndex:u.value}),o.value.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:d.value});const t=n.data[u.value];m.value.series[0].label.normal.formatter="{title|"+t.value+`%}
{car|`+t.name+t.value+"辆}",u.value=u.value>=n.data.length-1?0:u.value+1,d.value=d.value>=n.data.length-1?0:d.value+1};e(),i.value=setInterval(()=>{e()},3e3)},o=v(null),f=()=>{o.value&&(o.value.myChart.on("highlight",function(e){e.name&&(clearInterval(i.value),i.value=null,n.data.forEach((t,s)=>{t.name!==e.name?o.value.myChart.dispatchAction({type:"downplay",seriesIndex:0,dataIndex:s}):m.value.series[0].label.normal.formatter="{title|"+t.value+`%}
{car|`+t.name+t.value+"辆}"}))}),o.value.myChart.on("downplay",function(e){e.name&&h()}))};return w(()=>{h(),f()}),M(()=>[n.data,l.value,a.value],e=>{r.clear(),u.value=0,d.value=-1,b(),h(),f()},{immediate:!0,deep:!0}),y(()=>{clearInterval(i.value),i.value=null}),p({pieChart:o}),(e,t)=>{const s=S;return x(),I(s,{class:"pie_chart",ref_key:"pieChart",ref:o,option:_(m)},null,8,["option"])}}},z=F(W,[["__scopeId","data-v-17bcb147"]]),k={__name:"index",setup(c){const p=v([{value:90,name:"货车通行",flowValue:"90%",flowName:"货车车流量"},{value:10,name:"其他车通行",flowValue:"10%",flowName:"其他车车流量"}]);return setTimeout(()=>{p.value=[{value:40,name:"货车通行",flowValue:"40%",flowName:"货车车流量"},{value:50,name:"其他车通行",flowValue:"50%",flowName:"其他车车流量"},{value:10,name:"客车通行",flowValue:"10%",flowName:"客车车流量"}]},5e3),w(()=>{g.value=[`const props = defineProps({
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
});`]}),y(()=>{g.value=[""]}),(n,r)=>{const a=C;return x(),I(a,{title:"饼图轮播"},{default:j(()=>[A(z,{data:_(p)},null,8,["data"])]),_:1})}}};export{k as default};
