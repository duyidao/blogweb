import img_err from '../assets/img/base/img_err.png';
import img_load from '../assets/img/base/img_load.png';
import left_active from '../assets/img/base/left_active.png';
import left_inactive from '../assets/img/base/left_inactive.png';
import right_inactive from '../assets/img/base/right_inactive.png';
import right_active from '../assets/img/base/right_active.png';

const data = {
  img_err,
  img_load,
  left_active,
  left_inactive,
  right_inactive,
  right_active,
};

const createPreloadLink = () => {
  Object.keys(data).forEach((key) => {
    const path = data[key];
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    document.head.appendChild(link);
  })
}

createPreloadLink();