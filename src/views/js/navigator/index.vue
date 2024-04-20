<script setup>
const info = ref({})

navigator.connection.onchange = (e) => {
    // ...
    console.log('change', e);
}

window.addEventListener('online', (e) => {
    // ...
    console.log('online', e);
})

window.addEventListener('offline', (e) => {
    // ...
    console.log('offline', e);
})

const clickFn = () => {
    if(navigator.onLine) {
        console.log('navigator.connection', navigator.connection);
        info.value = {
            type: navigator.connection.type || navigator.connection.effectiveType,
            rtt: navigator.connection.rtt,
            downlink: navigator.connection.downlink
        }
    }
}
</script>

<template>
    <div class="ifrname-box box transition-color">
        <button class="transition-color" @click.stop="clickFn">获取网络状态</button>
        <div class="transition-color">当前网络环境：{{ info.type || '-' }}</div>
        <div class="transition-color">当前延迟：{{ info.rtt || 0 }}ms</div>
        <div class="transition-color">当前带宽速度：{{ info.downlink || 0 }}</div>
    </div>
</template>

<style lang="less" scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;

    button {
        margin: 0 auto 20px;
    }

    div {
        font-size: 14px;
        color: var(--primary-info);
        margin-bottom: 15px;
    }
}

@media screen and (max-width: 768px) {
    .box {
        padding-top: 1.25rem;

        button {
            margin: 0 auto 1.25rem;
        }

        div {
            font-size: .875rem;
            margin-bottom: 1rem;
        }
    }
}
</style>