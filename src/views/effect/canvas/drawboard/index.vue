<script setup>
import canvasImg from '@/assets/img/canvas/drawboard.jpg';
import flowImg from '@/assets/img/drawbed/canvas/compress.png'
import { codeList } from '@/store/effect.js'; // 引入代码列表

let float = null // 浮层画板
let floatCtx = null // 浮层画板的canvas上下文
let sign = null // 签名画板
let signCtx = null // 签名画板的canvas上下文
let main = null // 主画板
let mainCtx = null // 主画板的canvas上下文

// 后端数据
const data = {
  baseUrl: canvasImg,
  size: {
    width: 600,
    height: 400
  }
}

const left = ref(0)
const top = ref(0)

/**
 * 主画板
 */
 const initImg = () => { 
  const img = new Image() 
  img.src = data.baseUrl 
  img.onload = () => { 
    mainCtx.drawImage(img, 0, 0, data.size.width, data.size.height) 
  } 
}

onMounted(() => {
  // 获取主画板
  main = document.getElementById('main')
  mainCtx = main.getContext('2d')
  initImg()
})

// 保存
function save () { 
  mainCtx.drawImage(float, left.value, top.value, 200, 80) 
  let imgData = main.toDataURL('image/png') 
  let a = document.createElement('a')
  a.href = imgData
  a.download = 'canvas.png' 
  a.click() 
} 

// 清除
function backInit () { 
  mainCtx.clearRect(0, 0, data.size.width, data.size.height) 
  initImg() 
}

/**
 * 浮层画板
 */
onMounted(() => {
  // 获取悬浮板
  float = document.getElementById('float')
  floatCtx = float.getContext('2d')
})

/**
 * 签名画板
 */
onMounted(() => {
  // 获取签名板
  sign = document.getElementById('sign')
  signCtx = sign.getContext('2d')
})

let canSign = false
// 鼠标点击
function mouseDown(event) { 
  canSign = true
  // 获取鼠标在画板上的坐标
  const { offsetX, offsetY } = event
  console.log('offsetX, offsetY', offsetX, offsetY);
  // 设置起点
  signCtx.moveTo(offsetX, offsetY) 
  signCtx.strokeStyle = '#000' // 线颜色设置
} 

// 鼠标移动
function mouseMove(event) { 
  if (!canSign) return
  // 获取鼠标在画板上的坐标
  const { offsetX, offsetY } = event 
  // 绘制线段
  signCtx.lineTo(offsetX, offsetY) 
  signCtx.stroke() 
} 

// 鼠标松开
function mouseUp() { 
  canSign = false
  // 绘制线段
  signCtx.stroke() 
}

// 清除
function clearSign () { 
  signCtx.clearRect(0, 0, 400, 400) 
} 

// 确认
function sendSignToFloat () { 
  floatCtx.drawImage(sign, 0, 0, 200, 80) 
}

onMounted(() => {
  codeList.value = [``];
});

onUnmounted(() => {
  codeList.value = [''];
});
</script>

<template>
  <div class="iframe-box box">
    <IframeItemModel title="文件签名与画板功能"
      :flowImg="flowImg">
      <div class="container">
        <div class="mainboard">
          <!-- 主画板 -->
          <canvas id="main"
            :width="data.size.width"
            :height="data.size.height"></canvas>
          <!-- 签名绘制浮层画板 -->
          <div class="floatboard"
            :style="{ left: `${left}px`, top: `${top}px` }"
            @mounsedown="dragMousedown"
            @mouseup="dragMouseup"
            @mousemove="dragMousemove">
            <canvas id="float"
              width="200"
              height="80"></canvas>
          </div>
          <button @click="save">保存</button>
          <button @click="backInit">清除</button>
        </div>
        <!-- 签名画板 -->
        <div class="signboard">
          <canvas
            id="sign"
            @mousedown="mouseDown" @mousemove="mouseMove" @mouseup="mouseUp"></canvas> 
          <button @click="sendSignToFloat">确认</button>
          <button @click="clearSign">清除</button>
        </div>
      </div>
    </IframeItemModel>
  </div>
</template>

<style lang="less"
  scoped>
  .container {
    display: flex;
    width: 100%;

    .mainboard {
      position: relative;
      #sign {
        border: 1px solid #000;
      }

      .floatboard {
        position: absolute;
      }
    }

    #sign {
      border: 1px solid #000;
    }
  }

  @media screen and (max-width: 768px) {
    .container {
      flex-direction: column;

      .mainboard {
        width: 100% !important;

        #main {
          width: 100% !important;
        }
      }

      .signboard {
        #sign {
          width: 100% !important;
          margin-top: .625rem;
        }
      }
    }
  }
</style>