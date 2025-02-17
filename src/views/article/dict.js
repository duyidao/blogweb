import addTextImg from '@/assets/img/drawbed/js/addText.png';
import copyImg from '@/assets/img/drawbed/js/copy.png';
import notcopyImg from '@/assets/img/drawbed/js/notcopy.png';
import pasteImg from '@/assets/img/drawbed/js/paste.png';

export default {
  css: {
    below: [
      {
        name: 'text',
        title: '文字倒影',
        height: '100',
      },
      {
        name: 'img',
        title: '图片倒影',
        height: '300',
      },
    ],
    clipPath: [
      {
        name: 'polygon',
        title: '相框显示',
      },
      {
        name: 'ellipse',
        title: '眨眼效果',
      },
      {
        name: 'inset',
        title: '文字下落',
      },
      {
        name: 'polygons',
        title: '多边形裁剪',
      },
    ],
    filter: [
      {
        name: 'contrast',
        title: '对比度',
        subtitle: '当前对比度：',
      },
      {
        name: 'hue-rotate',
        title: '色相旋转',
        subtitle: '当前度数：',
      },
      {
        name: 'blur',
        title: '模糊',
        subtitle: '当前模糊度：',
      },
      {
        name: 'grayscale',
        title: '灰度图',
        subtitle: '当前灰度值：',
      },
      {
        name: 'drop-shadow',
        title: '轮廓阴影',
        subtitle: '当前阴影值：',
      },
    ],
    backdropFilter: [
      {
        name: 'backdrop-blur',
        title: '背景模糊'
      },
      {
        name: 'backdrop-grayscale',
        title: '背景灰度'
      }
    ],
    scrollSnap: [
      {
        name: 'slide',
        title: '纵向轮播图',
      },
      {
        name: 'swiper',
        title: '轮播图',
      },
    ],
    vmin: [
      {
        name: 'vmin',
        title: 'vmin',
        height: '385',
      },
      {
        name: 'vmax',
        title: 'vmax',
        height: '500',
      },
    ],
  },
  js: {
    clipboard: [
      {
        name: 'addText',
        title: '复制一段话后面加内容',
        flowImg: addTextImg,
        height: '400',
      },
      {
        name: 'notCopy',
        title: '不允许复制并写入自定义内容',
        flowImg: notcopyImg,
        height: '200',
      },
      {
        name: 'paste',
        title: '刷新后粘贴剪切板内容',
        flowImg: pasteImg,
        height: '300',
      },
      {
        name: 'copy',
        title: '粘贴文件',
        flowImg: copyImg,
        height: '200',
      },
    ],
  },
};