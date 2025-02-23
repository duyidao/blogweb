define(["exports","./index-CfXhc3Ls","./effect-CbHB8Sih","./index-d1Q_HJau","./index-D2dCyH29","./vender-CF49NVAq"],function(s,n,o,a,p,t){"use strict";var c=document.createElement("style");c.textContent=`.jsx-comp[data-v-e706053d]{width:100%}.jsx-comp[data-v-e706053d] [data-v-e706053d] .iframe-item-model__content__info{flex-direction:column}
`,document.head.appendChild(c);const f={class:"iframe-box jsx-comp"},g={__name:"index",setup(u){const r={ifCode:`<script setup>
let data = [
  {
    title: '热销排行',
    goodsData: [
      {
        price: '100.0',
        profit: 30,
        src: ''
      },
      {
        price: '78.0',
        profit: 20,
        src: ''
      },
    ]
  },
  {
    title: '利润排行',
    goodsData: [
      {
        price: '30.0',
        profit: 130,
        src: ''
      },
      {
        price: '333.0',
        profit: 55,
        src: ''
      },
    ]
  },
  {
    title: '热门主题',
    goodsData: [
      {
        price: '137.0',
        src: ''
      },
      {
        price: '78.0',
        src: ''
      },
    ]
  },
  {
    title: '低价好物',
    goodsData: [
      {
        price: '100.0',
        profit: 30,
        src: ''
      },
      {
        price: '78.0',
        profit: 20,
        src: ''
      },
    ]
  }
]
<\/script>

<template>
  <div class="if"
    v-for="(item, index) in data"
    :key="index">
    <div class="if-title">{{ item.title }}</div>
    <div class="if-goods">
      <div class="good"
        v-for="(goods, i) in item.goodsData"
        :key="i">
        <img src="" />
        <div class="info"
          v-if="item.title === '热销排行' && i === 0"
          style="background: red; color: #fff;">Top1</div>
        <div class="info"
          v-if="item.title === '热销排行' && i === 1"
          style="background: orange; color: #fff;">Top2</div>
        <div class="info"
          v-if="item.title === '利润排行'"
          style="background: pink; color: #000;">{{ goods.profit }}%</div>
        <div class="info"
          v-if="item.title === '低价好物'"
          style="background: #555; color: #000;">{{ goods.price }}</div>
      </div>
    </div>
  </div>
</template>`,methodCode:`<script setup>
let data = [
  {
    title: '热销排行',
    goodsData: [
      {
        price: '100.0',
        profit: 30,
        src: ''
      },
      {
        price: '78.0',
        profit: 20,
        src: ''
      },
    ]
  },
  {
    title: '利润排行',
    goodsData: [
      {
        price: '30.0',
        profit: 130,
        src: ''
      },
      {
        price: '333.0',
        profit: 55,
        src: ''
      },
    ]
  },
  {
    title: '热门主题',
    goodsData: [
      {
        price: '137.0',
        src: ''
      },
      {
        price: '78.0',
        src: ''
      },
    ]
  },
  {
    title: '低价好物',
    goodsData: [
      {
        price: '100.0',
        profit: 30,
        src: ''
      },
      {
        price: '78.0',
        profit: 20,
        src: ''
      },
    ]
  }
]

const num = ref(0)

const createStyle = (title, index) => {
  console.log('执行了该方法')
  let styleObj = {}
  switch (title) {
    case '热销排行':
      styleObj.color = '#fff'
      if (index === 0) styleObj.background = 'red'
      else styleObj.background = 'orange'
      break;
    case '利润排行':
      styleObj.color = '#000'
      styleObj.background = 'pink'
      break;
    case '低价好物':
      styleObj.color = '#000'
      styleObj.background = 'gray'
      break;
    case '热门主题':
      styleObj.display = 'none'
      break;
    default:
      break;
  }
  return styleObj
}

const createText = (title, index, good) => {
  console.log('执行了该方法')
  let txt = ''
  switch (title) {
    case '热销排行':
      if (index === 0) txt = 'Top1'
      else txt = 'Top2'
      break;
    case '利润排行':
      txt = good.profit + '%'
      break;
    case '低价好物':
      txt = good.price
      break;
    default:
      break;
  }
  return txt
}
<\/script>

<template>
  <button @click="() => { num += 1 }">
    点击事件触发，createStyle与createText函数依旧触发：{{ num }}
  </button>
  <div class="if"
    v-for="(item, index) in data"
    :key="index">
    <div class="if-title">{{ item.title }}</div>
    <div class="if-goods">
      <div class="good"
        v-for="(goods, i) in item.goodsData"
        :key="i">
        <img src="" />
        <div class="info"
          :style="createStyle(item.title, i)">{{ createText(item.title, i, goods) }}</div>
      </div>
    </div>
  </div>
</template>`,jsxCode:`<script setup lang="jsx">
  let data = [
    {
      title: '热销排行',
      goodsData: [
        {
          price: '100.0',
          profit: 30,
          src: ''
        },
        {
          price: '78.0',
          profit: 20,
          src: ''
        },
      ]
    },
    {
      title: '利润排行',
      goodsData: [
        {
          price: '30.0',
          profit: 130,
          src: ''
        },
        {
          price: '333.0',
          profit: 55,
          src: ''
        },
      ]
    },
    {
      title: '热门主题',
      goodsData: [
        {
          price: '137.0',
          src: ''
        },
        {
          price: '78.0',
          src: ''
        },
      ]
    },
    {
      title: '低价好物',
      goodsData: [
        {
          price: '100.0',
          profit: 30,
          src: ''
        },
        {
          price: '78.0',
          profit: 20,
          src: ''
        },
      ]
    }
  ]

  const num = ref(0)

  function TextComponent({ title, index, goods }) {
    console.log('执行了。')
    let styleObj = {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '25px',
      lineHeight: '25px',
      textAlign: 'center',
    }
    let text = ''
    switch (title) {
      case '热销排行':
        if (index === 0) {
          styleObj.background = 'red'
          styleObj.color = '#fff'
          text = 'Top1'
        } else {
          styleObj.background = 'orange'
          styleObj.color = '#fff'
          text = 'Top2'
        }
        break;
      case '利润排行':
        styleObj.background = 'pink'
        styleObj.color = '#000'
        text = goods.profit + '%'
        break;
      case '热门主题':
        styleObj.display = 'none'
        break;
      case '低价好物':
        styleObj.background = 'gray'
        styleObj.color = '#000'
        text = goods.price
        break;
      default:
        break;
    }
    return <div style={styleObj}>{text}</div>
  }
<\/script>

<template>
  <button @click="() => { num += 1 }">
    点击事件触发，createStyle与createText函数不会触发：{{ num }}
  </button>
  <div class="if"
    v-for="(item, index) in data"
    :key="index">
    <div class="if-title">{{ item.title }}</div>
    <div class="if-goods">
      <div class="good"
        v-for="(goods, i) in item.goodsData"
        :key="i">
        <img src="" />
        <TextComponent :title="item.title"
          :index="i"
          :goods="goods"></TextComponent>
      </div>
    </div>
  </div>
</template>`,mapCode:`<script setup>
let data = [
  {
    title: '热销排行',
    goodsData: [
      {
        price: '100.0',
        profit: 30,
        src: ''
      },
      {
        price: '78.0',
        profit: 20,
        src: ''
      },
    ]
  },
  {
    title: '利润排行',
    goodsData: [
      {
        price: '30.0',
        profit: 130,
        src: ''
      },
      {
        price: '333.0',
        profit: 55,
        src: ''
      },
    ]
  },
  {
    title: '热门主题',
    goodsData: [
      {
        price: '137.0',
        src: ''
      },
      {
        price: '78.0',
        src: ''
      },
    ]
  },
  {
    title: '低价好物',
    goodsData: [
      {
        price: '100.0',
        profit: 30,
        src: ''
      },
      {
        price: '78.0',
        profit: 20,
        src: ''
      },
    ]
  }
]

data.forEach((item, index) => {
  switch (item.title) {
    case '热销排行':
      item.goodsData.forEach((goods, i) => {
        goods.styleObj = {
          background: 'red',
          color: '#fff'
        }
        goods.text = 'Top1'
        if (i !== 0) {
          goods.styleObj.background = 'orange'
          goods.text = 'Top2'
        }
      })
      break;
    case '利润排行':
      item.goodsData.forEach((goods, i) => {
        goods.styleObj = {
          background: 'pink',
          color: '#000'
        }
        goods.text = goods.profit + '%'
      })
      break;
    case '低价好物':
      item.goodsData.forEach((goods, i) => {
        goods.styleObj = {
          background: 'gray',
          color: '#000'
        }
        goods.text = goods.price
      })
      break;
    default:
      break;
  }
})
<\/script>

<template>
  <div class="if"
    v-for="(item, index) in data"
    :key="index">
    <div class="if-title">{{ item.title }}</div>
    <div class="if-goods">
      <div class="good"
        v-for="(goods, i) in item.goodsData"
        :key="i">
        <img src="" />
        <div class="info"
          :style="goods.styleObj">{{ goods.text }}</div>
      </div>
    </div>
  </div>
</template>`},l=a.getDict("js.jsxComp"),d=t.shallowRef([]);return d.value=l.map(e=>({...e,model:r[e.name+"Code"],component:Object.freeze(a.jsChildData.value[e.name])})),t.onMounted(()=>{o.codeList.value=l.map(e=>({name:e.title+"源码",value:r[e.name+"Code"]})),o.modelInfo.value={...o.modelInfo.value,type:"vue",activeIndex:0}}),t.onUnmounted(()=>{o.codeList.value=[""],o.modelInfo.value={...o.modelInfo.value,type:"javascript",activeIndex:0}}),(e,v)=>{const b=n.__unplugin_components_0;return t.openBlock(),t.createElementBlock("div",f,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d),i=>(t.openBlock(),t.createBlock(b,{key:i.name,title:i.title},{default:t.withCtx(()=>[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(i.component)))]),_:2},1032,["title"]))),128))])}}},m=p._export_sfc(g,[["__scopeId","data-v-e706053d"]]);s.default=m,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
