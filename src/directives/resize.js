// 建立映射表
const map = new WeakMap()

// 配置监视盒子内容盒或边框盒或者 SVGElement 边界尺寸的变化函数
const ob = new ResizeObserver((entries) => {
    for(const entry of entries) {
        // 运行 entry.target 对应的回调函数
        // 保存映射表对应的方法
        const handler = map.get(entry.target)
        if(handler) {
            handler({
                width: entry.borderBoxSize[0].inlineSize,
                height: entry.borderBoxSize[0].blockSize
            })
        }
    }
})

export default {
    // 监听el元素尺寸变化
    mounted(el, binding) {
        // 保存映射表对应的方法
        map.set(el, binding.value)
        ob.observe(el)
    },
    // 卸载监听
    unmounted(el) {
        ob.unobserve(el)
    },
};