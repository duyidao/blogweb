<script setup>
import axios from "axios";

const addComp = ref({})
const userPoint = ref({})
// 创建一个函数，主要功能是在调用html5的geolocation()前，先判断当前浏览器是否支持html5，（PC绝大部分浏览器不支持或者拒绝html5定位）
function getLocation() {
  let options = {
    enableHighAccuracy: true,
    maximumAge: 1000,
  };
  if (navigator.geolocation) {
    // 走到这里说明，浏览器支持geolocation，参数里有两个回调函数，一个是定位成功后的处理操作，一个是定位失败后的处理操作，另外一个参数没有研究过
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  } else {
    // 否则浏览器不支持geolocation
    console.log("您的浏览器不支持地理位置定位！");
    handleWeather();
  }
}

// 成功时的回调函数，获取定位成功返回的经纬度数据，结合百度那边提供的接口进行具体位置的转换
function onSuccess(position) {
  // 经度
  userPoint.value.longitude = position.coords.longitude;
  // 纬度
  userPoint.value.latitude = position.coords.latitude;
  handleWeather();
  // 根据经纬度获取地理位置，不太准确，获取城市区域还是可以的
  let map = new BMap.Map("allmap");
  let point = new BMap.Point(userPoint.value.longitude, userPoint.value.latitude);
  let gc = new BMap.Geocoder();
  gc.getLocation(point, function (rs) {
    addComp.value = rs.addressComponents;
    console.log('addComp.value', addComp.value);
  });
}

// 失败时的回调函数
// 这里是错误提示信息
function onError(error) {
  switch (error.code) {
    case 1:
      console.log("位置服务被拒绝！");
      break;
    case 2:
      console.log("暂时获取不到位置信息！");
      break;
    case 3:
      console.log("获取信息超时！");
      break;
    case 4:
      console.log("未知错误！");
      break;
  }
  let longitude = 23.130061;
  let latitude = 113.264499;
  handleWeather();
}

// 获取天气数据
const weatherList = ref([]);
const handleWeather = (code) => {
  axios
    .get(
      "https://restapi.amap.com/v3/weather/weatherInfo?key=c687eb90870c9b75cf7c54d1124e2023&city=440100&extensions=all"
    )
    .then((res) => {
      weatherList.value = res.data.forecasts[0].casts;
      getHelloFn();
    });
};

const interval = ref("");
const weatherHello = ref("欢迎光临~");
// 获取欢迎词
const getHelloFn = () => {
  let now = new Date();
  const hour = now.getHours();
  const weather = weatherList.value[0]?.dayweather;
  if (hour >= 6 && hour < 12) {
    weatherHello.value = weather && weather.includes("雨")
      ? "早上好，今天有雨，上班记得带伞哦"
      : "早上好，今天是个好天气，希望一天都有好心情";
  } else if (hour >= 12 && hour < 14) {
    weatherHello.value = weather && weather.includes("雨")
      ? "中午好，外面有雨，去吃饭注意地滑"
      : "中午好，劳累了一个上午，吃顿好的犒劳自己吧~";
  } else if (hour >= 14 && hour < 18) {
    weatherHello.value = "下午好，该继续上午的任务了";
  } else if (hour >= 18 && hour < 22) {
    weatherHello.value = weather && weather.includes("雨")
      ? "晚上好，傍着雨声听听音乐休息一下吧~"
      : "晚上好，又奋斗了一天，好好放松一下吧~";
  } else {
    weatherHello.value = "夜深了，该休息了，明天也是拼搏的一天";
  }
};
// 页面载入时请求获取当前地理位置
onMounted(() => {
  // html5获取地理位置
  getLocation();
  interval.value = setInterval(() => {
    getHelloFn();
  }, 100000);
});

onUnmounted(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <div class="weather">
    <div class="weather-today">
      <p class="weather-today__title">
        <span>{{ addComp.province || '广东省' }}</span>
        <span>{{ addComp.city || '湛江市' }}</span>
        <span class="end">{{ addComp.district || '霞山区' }}</span>
        <span>{{ userPoint.longitude || '113.3824' }}</span>
        <span>{{ userPoint.latitude || '23.1962' }}</span>
      </p>
      <div class="weather-today__content">
        <div class="today__content__info">
          <img src="" alt="" />
          <div class="today__content">
            <div class="today__content__daytemp">
              {{ weatherList[0]?.daytemp || 0 }}°
            </div>
            <div class="today__content__weather">
              {{ weatherList[0]?.dayweather }}
            </div>
          </div>
        </div>
        <div class="today__content__hello">{{ weatherHello }}</div>
      </div>
    </div>
    <div class="weather-list">
      <div
        v-for="item in weatherList.filter((item, index) => index !== 0)"
        :key="item.date"
        class="weather-item"
      >
        <div class="weather-date">{{ item.date }}</div>
        <div class="weather-daytemp">{{ item.daytemp }}℃</div>
        <div class="weather-dayweather">{{ item.dayweather }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.weather {
  display: flex;
  flex-direction: column;
  width: 49%;
  height: 250px;
  border-radius: 12px;
  box-shadow: 0 0 8px 1px #ccc;

  .weather-today {
    flex: 1;

    .weather-today__title {
      padding: 10px 20px;
      font-size: 14px;
      color: gray;

      span {
        margin-right: 5px;

        &.end {
          margin-right: 16px;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .weather-today__content {
      display: flex;
      align-items: center;
      height: calc(100% - 34px);

      .today__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;

        .today__content__daytemp {
          font-size: 40px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .today__content__weather {
          font-size: 12px;
        }
      }

      .today__content__hello {
        flex: 1;
        font-size: 20px;
        font-family: "仿宋";
        font-weight: 600;
        padding: 0 20px;
        line-height: 1.3;
        text-indent: 2em;
      }
    }
  }

  .weather-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 130px;
    padding: 0 20px;

    .weather-item {
      font-size: 14px;
      color: #555;

      .weather-daytemp {
        margin: 10px 0;
      }

      .weather-date {
        color: #000;
        font-size: 16px;
        font-weight: 600;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .weather {
    width: 100%;
    height: 15.625rem;
    border-radius: 0.75rem;
    box-shadow: 0 0 0.5rem 0.0625rem #ccc;

    .weather-today {
      flex: 1;

      .weather-today__title {
        padding: 0.625rem 1.25rem;
        font-size: 0.875rem;

        span {
          margin-right: .3125rem;

          &.end {
            margin-right: 1rem;
          }
        }
      }

      .weather-today__content {
        height: calc(100% - 2.125rem);

        .today__content {
          margin-left: 1.25rem;

          .today__content__daytemp {
            font-size: 2.5rem;
            margin-bottom: 0.625rem;
          }

          .today__content__weather {
            font-size: 0.75rem;
          }
        }

        .today__content__hello {
          font-size: 1.25rem;
          padding: 0 1.25rem;
        }
      }
    }

    .weather-list {
      height: 8.125rem;
      padding: 0 1.25rem;

      .weather-item {
        font-size: 0.875rem;

        .weather-daytemp {
          margin: 0.625rem 0;
        }

        .weather-date {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>