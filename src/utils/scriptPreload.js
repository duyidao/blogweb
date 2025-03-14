import { BMap } from '@/store/effect.js'

export const preloadMd5 = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/blueimp-md5@2.19.0/js/md5.min.js';
    script.crossOrigin = 'anonymous';
    script.async = true;
    script.onload = () => resolve(window.md5);
    script.onerror = () => reject();
    document.head.appendChild(script);
  });
}

const baiduMapInit = () => {
  BMap.value = new BMapGL.Map('map');
  console.log('BMap.value', BMap.value);
}

export const preloadBMap = () => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://api.map.baidu.com/api?v=3.0&s=1&ak=42fr9YjV9zQPGeuHeOD5DpXGY8InSmCI&callback=baiduMapInit';
    script.type = 'text/javascript';
    // script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.head.appendChild(script);
  });
}
