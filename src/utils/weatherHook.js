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

export const WEATHER_IMAGES = {
  '晴': { day: qing, night: wanshang },
  '阴': yin,
  '多云': duoyun,
  '小雨': { day: xiaoyu, night: wanshangxiaoyu },
  '小雨-中雨': { day: xiaoyu, night: wanshangxiaoyu },
  '中雨': { day: zhongyu, night: wanshangzhongyu },
  '大雨': dayu,
  '中雨-大雨': dayu,
  '暴雨': dayu,
  '大雨-暴雨': dayu,
  '雷阵雨': leizhenyu,
  '阵雨': zhenyu,
};
  
export const TIME_GREETINGS = {
  morning: { rain: '早上好，今天有雨...', default: '早上好...' },
  afternoon: { rain: '中午好...', default: '中午好...' },
  // ...其他时间段
};

export const getBMapLocation = () => {
  const point = new BMap.Point(longitude, latitude);
  const geocoder = new BMap.Geocoder();
  return new Promise((resolve) => {
    geocoder.getLocation(point, (result) => resolve(result?.addressComponents));
  });
}

export function getGreetingByTime(hour, weather) {
  const period = 
    hour >= 6 && hour < 12 ? 'morning' :
    hour >= 12 && hour < 14 ? 'noon' :
    hour >= 14 && hour < 18 ? 'afternoon' :
    hour >= 18 && hour < 22 ? 'evening' : 'night';
  
  const isRain = weather?.includes('雨');
  return TIME_GREETINGS[period][isRain ? 'rain' : 'default'];
}