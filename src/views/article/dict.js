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
      },
      {
        name: 'notCopy',
        title: '不允许复制并写入自定义内容',
      },
      {
        name: 'paste',
        title: '刷新后粘贴剪切板内容',
      },
      {
        name: 'copy',
        title: '粘贴文件',
      },
    ],
  },
};