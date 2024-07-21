<script setup>
import Weather from "./components/weather.vue";
import User from "./components/user.vue";
import Candle from './components/candle/index.vue';
import Music from './components/music.vue';

const timer = ref(null);
const nowYear = ref("");
const nowTime = ref("");

const week = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
const nowDate = ref("");

onMounted(() => {
  let now = new Date();
  const date = now.getDay();
  nowYear.value =
    now.getFullYear() +
    "-" +
    ("0" + (now.getMonth() + 1)).slice(-2) +
    "-" +
    ("0" + now.getDate()).slice(-2);
  nowDate.value = week[date];

  const getTime = () => {
    now = new Date();
    const hours = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const seconds = ("0" + now.getSeconds()).slice(-2);
    nowTime.value = hours + ":" + minutes + ":" + seconds;
  }
  getTime();
  timer.value = setInterval(() => {
    getTime();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="home">
    <User class="user" />
    <div class="msg">
      <Weather />
      <div class="play">
        <div class="box">
          <div class="home-candle">
            <Candle />
          </div>
          <div class="home-time">
            <span>{{ nowYear }}</span>
            <span>{{ nowDate }}</span>
            <span>{{ nowTime }}</span>
          </div>
        </div>
        <Music />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .msg {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .play {
      display: flex;
      width: 100%;

      .box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 48%;
        margin-right: 20px;

        .home-candle {
          display: flex;
          justify-content: center;
          align-self: center;
          width: 100%;
          height: 136px;
          padding: 10px 0;
          border-radius: 12px;
          box-shadow: 0 0 8px 1px #ccc;
        }

        .home-time {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 136px;
          padding: 10px 0;
          border-radius: 12px;
          font-family: "黑体";
          font-size: 25px;
          box-shadow: 0 0 8px 1px #ccc;

          span {
            &:nth-child(2) {
              margin: 10px 0;
              font-size: 20px;
            }

            &:last-child {
              font-size: 32px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .home {
    .msg {
      flex-direction: column;

      .play {
        flex-direction: column;
        width: 100%;

        .box {
          width: 100%;
          flex-direction: row;
          justify-content: space-between;
          .home-candle {
            width: 48%;
            height: 8.5rem;
            padding: .625rem 0;
            border-radius: .75rem;
            box-shadow: 0 0 .5rem .0625rem #ccc;
          }

          .home-time {
            width: 48%;
            height: 8.5rem;
            padding: .625rem 0;
            border-radius: .75rem;
            font-size: 1.5625rem;
            box-shadow: 0 0 .5rem .0625rem #ccc;
            margin-top: 0;

            span {
              &:nth-child(2) {
                margin: .625rem 0;
                font-size: 1.25rem;
              }

              &:last-child {
                font-size: 2rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
