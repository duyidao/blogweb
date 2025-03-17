import img_err from '../assets/img/base/img_err.webp';
import img_load from '../assets/img/base/img_load.webp';
import left_active from '../assets/img/base/left_active.webp';
import left_inactive from '../assets/img/base/left_inactive.webp';
import right_inactive from '../assets/img/base/right_inactive.webp';
import right_active from '../assets/img/base/right_active.webp';

const images = [
  img_err,
  img_load,
  left_active,
  left_inactive,
  right_inactive,
  right_active,
];

const preloadImages = (max = 3) => {
  const _images = [...images];
  function loadImage() {
    const src = _images.shift();
    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      link.onload = resolve;
      link.onerror = reject;
    });
  }

  function _loadImages() {
    return loadImage()
      .catch((err) => {
        console.warn('加载失败：' + err)
      })
      .finally(() => {
        if (_images.length) _loadImages();
      });
  }
  
  for (let i = 0; i < max; i++) {
    _loadImages();
  }
}

preloadImages();