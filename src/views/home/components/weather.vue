<script setup>
import axios from "axios";
import { adcodeList } from "@/store/adcode.js";
import duoyun from '/images/duoyun.svg'
import yin from '/images/yin.svg'
import zhongyu from '/images/zhongyu.svg'
import wanshangzhongyu from '/images/wanshangzhongyu.svg'
import xiaoyu from '/images/xiaoyu.svg'
import wanshangxiaoyu from '/images/wanshangxiaoyu.svg'
import dayu from '/images/dayu.svg'
import leizhenyu from '/images/leizhenyu.svg'
import qing from '/images/qing.svg'
import wanshang from '/images/wanshang.svg'
import zhenyu from '/images/zhengyu.svg'

const addComp = ref({});
const userPoint = ref({});
// 创建一个函数，主要功能是在调用html5的geolocation()前，先判断当前浏览器是否支持html5，（PC绝大部分浏览器不支持或者拒绝html5定位）
function getLocation() {
  let options = {
    enableHighAccuracy: true,
    maximumAge: 1000,
  };
  if (navigator.geolocation) {
    addComp.value = "正在定位...";
    // 调用html5的geolocation()方法
    // 第一个参数是定位成功后的回调函数，第二个参数是定位失败后的回调函数，第三个参数是定位的一些配置参数
    // 注意：第三个参数里有一个enableHighAccuracy属性，这个属性是用来开启高精度定位的，默认是false，开启后，会消耗更多的电量和流量
    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  } else {
    // 否则浏览器不支持geolocation
    addComp.value = "浏览器不支持定位";
    handleWeather();
  }
}

// 成功时的回调函数，获取定位成功返回的经纬度数据，结合百度那边提供的接口进行具体位置的转换
function onSuccess(position) {
  // 经度
  userPoint.value.longitude = position.coords.longitude;
  // 纬度
  userPoint.value.latitude = position.coords.latitude;
  // 根据经纬度获取地理位置，不太准确，获取城市区域还是可以的
  let point = new BMap.Point(
    userPoint.value.longitude,
    userPoint.value.latitude
  );
  let gc = new BMap.Geocoder();
  gc.getLocation(point, function (rs) {
    addComp.value = rs.addressComponents;
    let cityList = adcodeList.find((item) => {
      return addComp.value.province.includes(item.provice);
    });
    if (!cityList) return;
    let city = cityList.city.find((item) => {
      return addComp.value.city.includes(item.name);
    });
    handleWeather(city.adcode);
  });
}

// 失败时的回调函数，错误提示信息
function onError(error) {
  handleWeather();
  switch (error.code) {
    case 1:
      addComp.value = "位置服务被拒绝！";
      break;
    case 2:
      addComp.value = "暂时获取不到位置信息！";
      break;
    case 3:
      addComp.value = "获取信息超时！";
      break;
    case 4:
      addComp.value = "未知错误！";
      break;
  }
}

const getWeatherImg = type => {
  const hour = new Date().getHours();
  switch (type) {
    case '晴':
      return hour > 17 ? wanshang : qing
    case '阴':
      return yin
    case '多云':
      return duoyun
    case '小雨':
    case '小雨-中雨':
      return hour > 17 ? wanshangxiaoyu : xiaoyu
    case '中雨':
      return hour > 17 ? wanshangzhongyu : zhongyu
    case '大雨':
    case '中雨-大雨':
    case '暴雨':
    case '大雨-暴雨':
      return dayu
    case '雷阵雨':
      return leizhenyu
    case '阵雨':
      return zhenyu
    default:
      break;
  }
}

// 获取天气数据
const weatherList = ref([]);
const handleWeather = (code = "440100") => {
  let hash = md5(`city=${code}&extensions=all&key=c687eb90870c9b75cf7c54d1124e2023d4af823828bdc195310c1e700a262ce6`)
  axios
    .get(
      `https://restapi.amap.com/v3/weather/weatherInfo?city=${code}&extensions=all&key=c687eb90870c9b75cf7c54d1124e2023&sig=${hash}`
    )
    .then((res) => {
      weatherList.value = res.data.forecasts[0].casts.map(item => {
        return {
          ...item,
          weatherImg: getWeatherImg(item.dayweather)
        }
      });
      getHelloFn();
    });
};

const interval = ref("");
const weatherHello = ref("欢迎光临~");
const waetherImg = ref('/blogweb/images/sunny.webp');
// 获取欢迎词
const getHelloFn = () => {
  let now = new Date();
  const hour = now.getHours();
  const weather = weatherList.value[0]?.dayweather;
  waetherImg.value = weather && weather.includes("雨")
    ? '/blogweb/images/rain.webp' : weather && weather.includes("云")
    ? '/blogweb/images/cloudy.webp' : '/blogweb/images/sunny.webp';

  // 根据时间与天气获取欢迎词
  if (hour >= 6 && hour < 12) {
    weatherHello.value =
      weather && weather.includes("雨")
        ? "早上好，今天有雨，上班记得带伞哦"
        : "早上好，今天是个好天气，希望一天都有好心情";
  } else if (hour >= 12 && hour < 14) {
    weatherHello.value =
      weather && weather.includes("雨")
        ? "中午好，外面有雨，去吃饭注意地滑"
        : "中午好，劳累了一个上午，吃顿好的犒劳自己吧~";
  } else if (hour >= 14 && hour < 18) {
    weatherHello.value = "下午好，该继续上午的任务了";
  } else if (hour >= 18 && hour < 22) {
    weatherHello.value =
      weather && weather.includes("雨")
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
  <div class="weather"
    :style="{ backgroundImage: `url(${waetherImg})` }">
    <div class="weather-today">
      <p class="weather-today__title">
        <template v-if="!addComp.province">
          <span class="end">{{ addComp }}</span>
        </template>
        <template v-else>
          <span>{{ addComp.province }}</span>
          <span>{{ addComp.city }}</span>
          <span>{{ addComp.district }}</span>
          <span>{{ addComp.street }}</span>
          <span class="end">{{ addComp.streetNumber }}</span>
        </template>
        <span>{{ userPoint.longitude }}</span>
        <span>{{ userPoint.latitude }}</span>
      </p>
      <div class="weather-today__content">
        <div class="today__content__info">
          <img :src="weatherList[0]?.weatherImg || qing"
            alt="" />
          <div class="today__content">
            <div class="today__content__daytemp">
              {{ weatherList[0]?.daytemp || 0 }}°
            </div>
            <div class="today__content__weather">
              {{ weatherList[0]?.dayweather || '晴' }}
            </div>
          </div>
        </div>
        <div class="today__content__hello">{{ weatherHello }}</div>
      </div>
    </div>
    <div class="weather-list">
      <div v-for="item in weatherList.filter((item, index) => index !== 0)"
        :key="item.date"
        class="weather-item">
        <div class="weather-date">{{ item.date }}</div>
        <div class="weather-msg">
          <img :src="item.weatherImg"
            alt="">
          <div>
            <div class="weather-daytemp"><span>{{ item.daytemp }}</span>℃</div>
            <div class="weather-dayweather">{{ item.dayweather }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.dark {
  .weather {
    opacity: .75;
  }
}

.weather {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 290px;
  border-radius: 12px;
  box-shadow: 0 0 8px 1px #ccc;
  background: no-repeat center / 100%;
  color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;

  .weather-today {
    flex: 1;
    margin-bottom: 18px;

    .weather-today__title {
      font-size: 14px;
      margin-bottom: 15px;
      font-family: 'robo';

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

      .today__content__info {
        display: flex;
        align-items: center;

        img {
          width: 58px;
          height: 64px;
        }
      }

      .today__content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 20px;

        .today__content__daytemp {
          font-size: 40px;
          font-weight: 600;
          margin-bottom: 10px;
          font-family: 'robo';
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
    flex: 1;
    height: 130px;

    .weather-item {
      font-size: 14px;

      .weather-date {
        font-size: 18px;
        font-weight: 600;
        font-family: 'robo';
      }

      .weather-msg {
        display: flex;
        align-items: center;
        height: 50px;
        margin-top: 15px;

        img {
          height: 50px;
          margin-right: 15px;
        }

        .weather-daytemp span {
          font-size: 16px;
          margin-right: 4px;
        }

        >div {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          font-family: 'robo';
          height: 100%;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .weather {
    width: 100%;
    height: 18.125rem;
    border-radius: 0.75rem;
    box-shadow: 0 0 0.25rem #ccc;
    padding: .625rem 1.25rem;
    margin-bottom: 1.25rem;

    .weather-today {
      flex: 1;

      .weather-today__title {
        font-size: 0.875rem;
        margin-bottom: .9375rem;

        span {
          margin-right: 0.3125rem;

          &.end {
            margin-right: 1rem;
          }
        }
      }

      .weather-today__content {
        height: calc(100% - 2.125rem);

        .today__content__info {

          img {
            width: 3.625rem;
            height: 4rem;
          }
        }

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

      .weather-item {
        font-size: 0.875rem;

        .weather-date {
          font-size: 1.125rem;
        }

        .weather-msg {
          height: 3.125rem;
          margin-top: .9375rem;

          .weather-daytemp span {
            font-size: 1rem;
            margin-right: .25rem;
          }

          img {
            height: 3.125rem;
            margin-right: .9375rem;
          }
        }
      }
    }
  }
}
</style>
