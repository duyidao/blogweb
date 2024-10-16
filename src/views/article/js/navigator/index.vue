<script setup>

const info = ref({})

const clickFn = () => {
    if (navigator.onLine) {
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
    <IframeItem class="ifrname-box"
        title="拾色器"
        :needCode="false">
        <div class="box">
            <button @click.stop="clickFn">获取网络状态</button>
            <div class="">当前网络环境：{{ info.type || '-' }}</div>
            <div class="">当前延迟：{{ info.rtt || 0 }}ms</div>
            <div class="">当前带宽速度：{{ info.downlink || 0 }}</div>
        </div>
    </IframeItem>
</template>

<style lang="less" scoped>
.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

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