<script setup>
import axios from "axios";
import { adcodeList } from "@/store/adcode.js";
import { preloadBMap } from "@/utils/scriptPreload.js";
import { 
  getBMapLocation, 
  getGreetingByTime, 
  ERROR_MSG, 
  WEATHER_IMAGES 
} from "@/utils/weatherHook.js";
import md5 from 'blueimp-md5';
import qing from '/images/qing.svg'

// 响应式数据
const weatherData = ref({
  fewDaylist: [], // 未来几天的天气数据
  todayData: {}, // 当天天气数据
  location: '获取定位中...', // 位置信息
  coordinates: {}, // 经纬度信息
  greeting: '欢迎光临~', // 问候语
  backgroundImg: '/blogweb/images/sunny.webp' // 背景图片
})

const interval = ref(null);

// 定位处理逻辑
const handleLocation = {
  onError: (error) => {
    weatherData.value.location = ERROR_MSG[error.code] || '定位失败';
  },

  onSuccess: async (position) => {
    const { longitude, latitude } = position.coords;
    weatherData.value.coordinates = { longitude, latitude };
    
    const point = new BMap.Point(longitude, latitude);
    const location = await getBMapLocation(point);
    
    const provinceData = adcodeList.find(p => 
      location.province.includes(p.provice)
    );
    
    if (provinceData) {
      const city = provinceData.city.find(c => 
        location.city.includes(c.name)
      );
      if (city) updateWeatherData(city.adcode, location);
    }
  }
}

// 数据更新方法
const updateWeatherData = (code, location) => {
  weatherData.value.location = `${location.province} ${location.city} ${location.district} ${location.street} ${location.streetNumber} ${location.town}`;
  fetchWeather(code);
}

// API请求
const fetchWeather = async (code) => {
  try {
    const hash = md5(`city=${code}&extensions=all&key=c687eb90870c9b75cf7c54d1124e2023d4af823828bdc195310c1e700a262ce6`)
    const { data } = await axios.get(`https://restapi.amap.com/v3/weather/weatherInfo?city=${code}&extensions=all&key=c687eb90870c9b75cf7c54d1124e2023&sig=${hash}`);

    const currentHour = new Date().getHours();
    weatherData.value.todayData = {
      ...data.forecasts[0].casts[0],
      weatherImg: WEATHER_IMAGES[data.forecasts[0].casts[0].dayweather]?.[currentHour >= 6 && currentHour < 18 ? 'day' : 'night'] || qing
    }
    weatherData.value.fewDaylist = data.forecasts[0].casts.map(cast => ({
      ...cast,
      weatherImg: WEATHER_IMAGES[cast.dayweather]?.[currentHour >= 6 && currentHour < 18 ? 'day' : 'night'] || qing
    })).filter((item, index) => index !== 0);

    updateGreeting();
  } catch (error) {
    console.error('天气数据获取失败:', error);
  }
}

// 问候语更新
const updateGreeting = () => {
  const { hour, weather } = {
    hour: new Date().getHours(),
    weather: weatherData.value.todayData?.dayweather
  }
  const greeting = getGreetingByTime(hour, weather);
  weatherData.value.greeting = greeting.hello;
  weatherData.value.backgroundImg = greeting.weatherImg;
}

// 定位逻辑封装
const getGeoLocation = () => {
  if (!navigator.geolocation) {
    weatherData.value.location = "浏览器不支持定位";
    return;
  }

  navigator.geolocation.getCurrentPosition(
    handleLocation.onSuccess,
    handleLocation.onError,
    { enableHighAccuracy: true, maximumAge: 1000 }
  );
}

// 生命周期
onMounted(async () => {
  try {
    await preloadBMap();
    setTimeout(() => {
      getGeoLocation();
      fetchWeather('440100'); // 默认广州
    }, 1000);
    interval.value = setInterval(updateGreeting, 1000 * 60 * 60 * 2); // 每2小时更新问候语
  } catch (error) {
    console.error('地图脚本加载失败:', error);
  }
});

onUnmounted(() => clearInterval(interval.value));
</script>

<template>
  <div class="weather"
    :style="{ backgroundImage: `url(${weatherData.backgroundImg})` }">
    <div class="weather-today">
      <p class="weather-today__title">
        <span class="end">{{ weatherData.location }}</span>
        <span>{{ weatherData.coordinates?.longitude || 0 }}</span>
        <span>{{ weatherData.coordinates?.latitude || 0 }}</span>
      </p>
      <div class="weather-today__content">
        <div class="today__content__info">
          <img :src="weatherData.todayData?.weatherImg || qing" alt="" />
          <div class="today__content">
            <div class="today__content__daytemp">
              {{ weatherData.todayData?.daytemp || 0 }}°
            </div>
            <div class="today__content__weather">
              {{ weatherData.todayData?.dayweather || '晴' }}
            </div>
          </div>
        </div>
        <div class="today__content__hello">{{ weatherData.greeting }}</div>
      </div>
    </div>
    <div class="weather-list">
      <div v-for="item in weatherData.fewDaylist"
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
