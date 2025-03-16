import duoyun from '/images/duoyun.svg'
import yin from '/images/yin.svg'
import zhongyu from '/images/zhongyu.svg'
import wanshangzhongyu from '/images/wanshangzhongyu.svg'
import wanshangduoyun from '/images/wanshangduoyun.svg'
import xiaoyu from '/images/xiaoyu.svg'
import wanshangxiaoyu from '/images/wanshangxiaoyu.svg'
import dayu from '/images/dayu.svg'
import leizhenyu from '/images/leizhenyu.svg'
import qing from '/images/qing.svg'
import wanshang from '/images/wanshang.svg'
import zhenyu from '/images/zhengyu.svg'

export const WEATHER_IMAGES = {
  '晴': { day: qing, night: wanshang },
  '阴': { day: duoyun, night: duoyun },
  '多云': { day: yin, night: yin },
  '小雨': { day: xiaoyu, night: wanshangxiaoyu },
  '小雨-中雨': { day: xiaoyu, night: wanshangxiaoyu },
  '中雨': { day: zhongyu, night: wanshangzhongyu },
  '大雨': { day: dayu, night: dayu },
  '中雨-大雨': { day: dayu, night: dayu },
  '暴雨': { day: dayu, night: dayu },
  '大雨-暴雨': { day: dayu, night: dayu },
  '雷阵雨': { day: leizhenyu, night: leizhenyu },
  '阵雨': { day: zhenyu, night: zhenyu },
};
  
export const TIME_GREETINGS = {
  morning: { rain: '早上好，今天有雨，出行记得带伞哦', default: '早上好，今天是个好天气，希望一天都有好心情' },
  afternoon: { rain: '中午好，外面有雨，出行注意脚下安全', default: '中午好，劳累了一个上午，吃顿好的犒劳自己吧~' },
  evening: { rain: '晚上好，傍着雨声听听音乐休息一下吧~', default: '晚上好，又奋斗了一天，好好放松一下吧~' },
  atnight: '夜深了，该休息了，明天也是拼搏的一天',
  beforedawn: '凌晨了，不要熬夜，早点休息吧',
};

export const ERROR_MSG = {
  1: "位置服务被拒绝！",
  2: "暂时获取不到位置信息！",
  3: "获取信息超时！",
  4: "未知错误！",
}

/**
 * 获取百度地图的地址
 * @param {number} longitude 经度
 * @param {number} latitude 纬度
 * @returns {Promise<string>} 地址
 */
export const getBMapLocation = (point) => {
  const geocoder = new BMap.Geocoder();
  return new Promise((resolve) => {
    geocoder.getLocation(point, (result) => resolve(result?.addressComponents));
  });
}

/**
 * 根据时间获取问候语
 * @param {number} hour 当前小时
 * @param {string} weather 天气
 * @returns {string} 问候语
 */
export function getGreetingByTime(hour, weather) {
  const period = 
    hour < 6 ? 'beforedawn' :
    hour >= 6 && hour < 12 ? 'morning' :
    hour === 12 ? 'afternoon' :
    hour >= 13 && hour < 18 ? 'evening' : 'atnight';
  const weatherImg = weather && weather.includes("雨")
  ? '/blogweb/images/rain.webp' : weather && weather.includes("云")
  ? '/blogweb/images/cloudy.webp' : '/blogweb/images/sunny.webp';
  return {
    hello: TIME_GREETINGS[period],
    weatherImg,
  };
}