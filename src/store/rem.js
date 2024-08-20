export function useUnit(base = 750) {
    const ratio = ref(window.innerWidth / base);

    function updateRatio() {
        ratio.value = window.innerWidth / base;
    }

    onMounted(() => {
        window.addEventListener('resize', updateRatio);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateRatio);
    });

    function px2rem(px, unit = 'rem') {
        return Number((px / 16).toFixed(5)) + unit;
    }

    return {
        px2rem,
        ratio,
    };
}