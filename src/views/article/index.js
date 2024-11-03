import { defineAsyncComponent } from 'vue';
import dict from './dict.js';

// 获取全部子组件
const childComp = import.meta.glob([`./**/**/components/**.vue`]);

export const cssChildData = shallowRef({});
export const jsChildData = shallowRef({});

// 获取名称的函数
const getCompNameFn = (key) => {
  return key.replace(/\.\/\w+\/\w+\/components\/(\b[a-zA-Z]+(-[a-zA-Z]+)*\b).vue/, '$1');
};

Object.entries(childComp).forEach(([path, component]) => {
  const name = getCompNameFn(path);
  
  if (path.startsWith('./css')) {
    let asyncComponent = cssChildData.value[name] || null;
    asyncComponent = defineAsyncComponent(component);
    cssChildData.value[name] = asyncComponent;
  }
  else if (path.startsWith('./js')) {
    let asyncComponent = jsChildData.value[name] || null;
    asyncComponent = defineAsyncComponent(component);
    jsChildData.value[name] = asyncComponent;
  }
});

// 获取对应的字典数组
export const getDict = (configKey) => {
  return configKey.split('.').reduce((p, c) => {
    return p?.[c];
  }, dict);
}

export const toCamelCase = (str) => {
  return str.replace(/-(\w)/g, (match, p1) => p1.toUpperCase());
}
