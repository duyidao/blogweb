import { BMap } from '@/store/effect.js'

const baiduMapInit = () => {
  BMap.value = new BMap.Map('weather');
  console.log('BMap.value', BMap.value);
}

/**
 * 预加载百度地图API
 *
 * @returns 返回一个Promise对象，加载成功时resolve，加载失败时reject
 */
export const preloadBMap = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://api.map.baidu.com/api?v=3.0&s=1&ak=42fr9YjV9zQPGeuHeOD5DpXGY8InSmCI&callback=baiduMapInit';
    script.type = 'text/javascript';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.head.appendChild(script);
  });
}

export const preloadMusic = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = '/js/APlayer.min.js';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.head.appendChild(script);
  });
}
