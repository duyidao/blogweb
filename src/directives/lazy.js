import imgErr from '@/assets/img/base/img_err.webp';

// IntersectionObserver API
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      // 出现在视口中
      const img = entry.target;
      const src = img.getAttribute('data-src'); // 获取图片的src属性
      img.src = src; // 设置图片的src属性
      img.onload = () => {
        img.setAttribute('class', 'fade-in');
      }
      img.onerror = () => {
        img.src = imgErr; // 设置图片的src属性为错误图片
      }
      ob.unobserve(entry.target); // 播放过后就不再播放动画
    }
  }
})

export default {
  mounted(el, binding) {
    // 判断当前元素是否在视口之上或者视口内，在的话不需要播放动画
    // if (!isBelowViewPort(el)) return;
    ob.observe(el); // 观察元素是否进入视口
  },
  unmounted(el) {
    ob.unobserve(el); // 元素卸载后断开观察
  }
}