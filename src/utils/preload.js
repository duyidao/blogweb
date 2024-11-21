const getPreloadUrl = (path) => {
  return new URL(path, import.meta.url).href;
}

const createPreloadLink = (path) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = getPreloadUrl(path);
  document.head.appendChild(link);
}

createPreloadLink('../assets/img/base/img_err.png');
createPreloadLink('../assets/img/base/img_load.png');
createPreloadLink('../assets/img/base/left_active.png');
createPreloadLink('../assets/img/base/left_inactive.png');
createPreloadLink('../assets/img/base/right_inactive.png');
createPreloadLink('../assets/img/base/right_active.png');