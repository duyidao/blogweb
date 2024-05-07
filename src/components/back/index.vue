<script setup
    lang="ts">
    import { useRouter } from 'vue-router'

    const router = useRouter()

    const emit = defineEmits(['back', 'home'])

    const btnClickFn = (type) => {
        switch (type) {
            case 'back':
                router.back()
                emit('back')
                break;
            case 'home':
                router.replace('/')
                emit('home')
                break;
            default:
                break;
        }
    }

    const backRef = ref(null)
    const homeRef = ref(null)

    const mousemoveFn = (dom, e) => {
        let x = e.pageX - dom.offsetLeft
        let y = e.pageY - dom.offsetTop
        dom.style.setProperty('--x', x + 'px')
        dom.style.setProperty('--y', y + 'px')
    }

    onMounted(() => {
        backRef.value.addEventListener('mousemove', (e) => mousemoveFn(backRef.value, e))
        homeRef.value.addEventListener('mousemove', (e) => mousemoveFn(homeRef.value, e))
    })

    onBeforeUnmount(() => {
        backRef.value.removeEventListener('mousemove', (e) => mousemoveFn(backRef.value, e))
        homeRef.value.removeEventListener('mousemove', (e) => mousemoveFn(homeRef.value, e))
    })
</script>

<template>
    <div class="btns-icon">
        <a ref="backRef"
            href="javascript:;"
            @click.stop="btnClickFn('home')">
            <SvgIcon name="home" />
            <span>首页</span>
        </a>

        <a ref="homeRef"
            href="javascript:;"
            @click.stop="btnClickFn('back')">
            <SvgIcon name="back" />
            <span>返回</span>
        </a>
    </div>
</template>

<style lang="less"
    scoped>
    .btns-icon {
        display: flex;

        a {
            display: flex;
            align-items: center;
            position: relative;
            padding: 15px 30px;
            background-color: var(--catalogue-bg);
            color: var(--primary-info);
            border-radius: 30px;
            transition: background-color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06), border-color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06), color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06);
            overflow: hidden;
            margin-right: 15px;

            svg {
                position: relative;
                margin-right: .625rem;
                fill: var(--primary-info);
                z-index: 5;
            }

            &:hover {
                color: var(--catalogue-title);
                text-shadow: 0 0 20px var(--catalogue-title), 0 0 50px var(--catalogue-title);

                &::before {
                    opacity: 1;
                }

                svg {
                    fill: var(--catalogue-title);
                }
            }

            &::before {
                content: '';
                position: absolute;
                top: var(--y);
                left: var(--x);
                transform: translate(-50%, -50%);
                width: 120px;
                height: 120px;
                opacity: 0;
                transition: background-color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06), border-color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06), color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06), opacity .5s;
                background: radial-gradient(var(--catalogue-title), transparent, transparent);
            }

            &::after {
                content: '';
                position: absolute;
                background-color: var(--catalogue-bg);
                border-radius: 30px;
                inset: 2px;
                transition: background-color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06), border-color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06), color .5s cubic-bezier(0.89, 0.04, 0.96, 0.06);
            }

            span {
                position: relative;
                letter-spacing: 2px;
                z-index: 9;
            }
        }
    }

    @media screen and (max-width: 768px) {
        .btns-icon {
            a {
                padding: .9375rem 1.875rem;
                border-radius: 1.875rem;
                margin-right: .9375rem;

                &:hover {
                    text-shadow: 0 0 1.25rem var(--catalogue-title), 0 0 3.125rem var(--catalogue-title);
                }

                &::before {
                    width: 7.5rem;
                    height: 7.5rem;
                }

                &::after {
                    border-radius: 1.875rem;
                    inset: .125rem;
                }

                span {
                    letter-spacing: .125rem;
                }
            }
        }
    }
</style>