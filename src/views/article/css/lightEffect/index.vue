<script setup>

</script>

<template>
    <div class="ifrname-box">
        <IframeItem title="光影特效"
            :needCode="false">
            <div class="box">
                <span>C</span>
                <span>O</span>
                <span>L</span>
                <span>O</span>
                <span>R</span>
                <span>F</span>
                <span>U</span>
                <span>L</span>
            </div>
        </IframeItem>
    </div>
</template>

<style lang="less" scoped>
    @keyframes spread {
        to {
            color: skyblue;
            text-shadow: 20px 0 70px skyblue;
        }
    }


    .box {
        width: 100%;
        background-color: #000;
        text-align: center;
        line-height: 100px;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 10px;

        span {
            animation: spread 1s linear infinite alternate;
            color: #fff;
        }

        span:nth-child(1) {
            animation-delay: 0s;
        }

        span:nth-child(2) {
            animation-delay: 0.2s;
        }

        span:nth-child(3) {
            animation-delay: 0.4s;
        }

        span:nth-child(4) {
            animation-delay: 0.6s;
        }

        span:nth-child(5) {
            animation-delay: 0.8s;
        }

        span:nth-child(6) {
            animation-delay: 1s;
        }

        span:nth-child(7) {
            animation-delay: 1.2s;
        }

        span:nth-child(8) {
            animation-delay: 1.4s;
        }
    }

    @media screen and (max-width: 768px) {
        .box {
            line-height: 6.25rem;
            font-size: 2rem;
            letter-spacing: .625rem;
        }
    }
</style>