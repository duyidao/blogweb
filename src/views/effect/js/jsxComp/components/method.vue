<script setup>
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
</script>

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
        <img :src="`https://picsum.photos/80/80?${i}?${index}`" />
        <div class="info"
          :style="createStyle(item.title, i)">{{ createText(item.title, i, goods) }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .if {
    width: 230px;
    margin-bottom: 20px;
    padding: 10px 20px 15px;
    border-bottom: 1px solid #ccc;

    .if-title {
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 20px;
    }

    .if-goods {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .good {
        position: relative;

        img {
          width: 80px;
          height: 80px;
        }

        .info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 25px;
          line-height: 25px;
          text-align: center;
        }
      }
    }
  }
</style>