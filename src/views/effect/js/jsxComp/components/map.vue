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
</script>

<template>
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
          :style="goods.styleObj">{{ goods.text }}</div>
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