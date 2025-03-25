<script setup>
import flowImg from '@/assets/img/drawbed/js/dialog.png'
import { codeList, modelInfo } from '@/store/effect.js'; // 引入代码列表
import { jsChildData, getDict } from '../../index.js';

const codeData = {
  scrollIntoViewCode: `\<script setup\>
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
\<\/script\>

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
</template>`,
  scrollToCode: `\<script setup\>
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
\<\/script\>

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
</template>`,
  scrollByCode: `\<script setup lang="jsx"\>
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
\<\/script\>

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
</template>`,
}

const list = getDict('js.anchor');
const componentList = shallowRef([]);
componentList.value = list.map((item) => ({
  ...item,
  model: codeData[item.name + 'Code'],
  component: Object.freeze(jsChildData.value[item.name]),
}));

onMounted(() => {
  codeList.value = [`\<script setup>
const props = defineProps({
  width: [String, Number],
  marginTop: [String, Number],
  fullDialog: {
    type: Boolean,
    default: false
  },
  center: {
    type: Boolean,
    default: false
  },
  show: {
    type: Boolean,
    default: false
  },
  content: {
    type: String,
    default: '默认内容'
  },
  title: {
    type: String,
    default: '提示'
  },
  url: {
    type: String,
    default: ''
  },
  params: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:show', 'update:fullDialog', 'cancel', 'comfirm'])

// 点击取消或关闭按钮
const cancelFn = () => {
  emit('update:show', false)
  emit('cancel')
  document.body.style.overflowY = 'auto'
}

// 点击确认按钮
const comfirmFn = () => {
  if (props.url) {
    // 模拟发请求
    window.location.href = props.url
  }
  emit('update:show', false)
  emit('comfirm')
}

// 点击全局按钮
const fullFn = () => {
  emit('update:fullDialog', !props.fullDialog)
}
\<\/script\>

<template>
  <div class="cover"
    v-if="show">
    <!--fullDialog：传递该字段后让弹窗组件全屏显示-->
    <div class="dialog"
      :class="{ fullDialog, center }"
      :style="{ width: width + 'px', marginTop: marginTop + 'px' }">
      <!-- 标题部分 -->
      <div class="title">
        <slot name="title">
          <div class="default-title">
            {{ title }}
          </div>
        </slot>

        <!-- 关闭按钮 -->
        <span class="full-icon"
          @click.stop="fullFn">all</span>
        <!-- 关闭按钮 -->
        <span class="close-icon"
          @click.stop="cancelFn">×</span>
      </div>

      <!-- 内容部分 -->
      <div class="content">
        <slot name="content">
          <div class="default-content">
            {{ content }}
          </div>
        </slot>
      </div>

      <!-- 按钮 -->
      <div class="button">
        <div class="default-button">
          <button @click.stop="cancelFn">取消</button>
          <button @click.stop="comfirmFn">确认</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.dialog {
  display: flex;
  flex-direction: column;
  min-width: 200px;
  background-color: #fff;
  width: 50%;
  margin: 50px auto;
}

.dialog.fullDialog {
  width: 100vw !important;
  height: 100vh !important;
  margin: 0 !important;
}

.title {
  position: relative;
  padding: 15px;
}

/* 预制类 */
.center .title,
.center .content {
  text-align: center;
}

.full-icon {
  position: absolute;
  right: 35px;
  top: 10px;
  cursor: pointer;
}

.close-icon {
  position: absolute;
  right: 13px;
  top: 8px;
  font-size: 16px;
  cursor: pointer;
}

.content {
  flex: 1;
  padding: 15px;
}

.button {
  padding: 15px;
}

button {
  margin-right: 15px;
}
</style>`];
  modelInfo.value = {
    ...modelInfo.value,
    type: 'vue',
  };
});

onUnmounted(() => {
  codeList.value = [''];
  modelInfo.value = {
    ...modelInfo.value,
    type: 'javascript',
  };
});
</script>

<template>
  <div class="iframe-box jsx-comp">
    <IframeItemModel v-for="item in componentList"
      :key="item.name"
      :title="item.title">
      <component :is="item.component"/>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped></style>
  