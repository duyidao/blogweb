// 页面整体宽度
export const screenWidth = ref(document.documentElement.clientWidth || document.body.clientWidth);

// 文章列表显示类型
export const type = ref('img')

// 当前模式（暗黑模式与光亮模式）
export const light = ref(true);

// px转rem函数方法
export const convertToRem = (size) => {
    return `${size / 16}rem`
}