export const screenWidth = ref(document.documentElement.clientWidth || document.body.clientWidth);

export const type = ref('list')

export const convertToRem = (size) => {
    return `${size / 16}rem`
}