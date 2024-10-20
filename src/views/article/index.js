import { defineAsyncComponent } from 'vue';
import dict from './dict.js';

// 获取全部子组件
const childComp = import.meta.glob([`./css/**/**.vue`, `./js/**/**.vue`, `./learn/**/**.vue`]);
const reg = /\.\/\w+\/\w+\/index.vue/g;

// 过滤出非index.vue的子组件
const filterIndexComp = Object.entries(childComp).filter(([key, value]) => {
  return !key.match(reg);
});

export const cssChildData = shallowRef({});
export const jsChildData = shallowRef({});
export const learnChildData = shallowRef({});

// 获取名称的函数
const getCompNameFn = (key) => {
  return key.replace(/\.\/\w+\/\w+\/(\b[a-zA-Z]+(-[a-zA-Z]+)*\b).vue/, '$1');
};

filterIndexComp.forEach(([path, component]) => {
  const name = getCompNameFn(path);
  
  if (path.includes('css')) {
    let asyncComponent = cssChildData.value[name] || null;
    asyncComponent = defineAsyncComponent(component);
    cssChildData.value[name] = asyncComponent;
  }
  else if (path.includes('js')) {
    let asyncComponent = jsChildData.value[name] || null;
    asyncComponent = defineAsyncComponent(component);
    jsChildData.value[name] = asyncComponent;
  }
  else {
    let asyncComponent = learnChildData.value[name] || null;
    asyncComponent = defineAsyncComponent(component);
    learnChildData.value[name] = asyncComponent;
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
