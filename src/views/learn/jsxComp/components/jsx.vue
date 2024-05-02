<script setup lang="jsx">
let data =[
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

function TextComponent({title, index, goods}) {
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
  switch(title) {
    case '热销排行':
      if(index === 0) {
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
</script>

<template>
    <button @click="() => {num += 1}">
        点击事件触发，createStyle与createText函数依旧触发：{{ num }}
    </button>
    <div class="if" v-for="(item, index) in data" :key="index">
        <div class="if-title">{{ item.title }}</div>
        <div class="if-goods">
            <div class="good" v-for="(goods, i) in item.goodsData" :key="i">
                <img src="" />
                <TextComponent :title="item.title" :index="i" :goods="goods"></TextComponent>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
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