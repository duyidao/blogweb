import img_err from '../assets/img/base/img_err.png';
import img_load from '../assets/img/base/img_load.png';
import left_active from '../assets/img/base/left_active.png';
import left_inactive from '../assets/img/base/left_inactive.png';
import right_inactive from '../assets/img/base/right_inactive.png';
import right_active from '../assets/img/base/right_active.png';

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
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      link.onload = resolve;
      link.onerror = reject;
      setTimeout(reject, 10000);
    });
  }

  function _loadImages() {
    return loadImage().finally(() => {
      if (_images.length) _loadImages();
    });
  }
  
  for (let i = 0; i < max; i++) {
    _loadImages();
  }
}

preloadImages();