<script setup lang="ts">

</script>

<template>
  <div class="router-buttons">
    <div class="router-buttons__logo">
        <span class="logo__text">刀刀博客</span>
    </div>
    <div class="router-buttons__list">
        <div>
            <div class="router-buttons__item">
                <my-button word="css" />
                <!-- <div class="item-list">
                    <div class="item-list__item">123</div>
                    <div class="item-list__item">123</div>
                    <div class="item-list__item">123</div>
                </div> -->
            </div>
            <div class="router-buttons__item">
                <my-button word="javascript" />
            </div>
        </div>
    </div>
    <div class="router-buttons__link"></div>
  </div>
</template>

<style lang="less" scoped>
.router-buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-bottom: 40px;

    .router-buttons__logo {
        width: 150px;
        cursor: pointer;

        .logo__text {
            font-family: '仿宋';
            font-weight: 600;
            font-size: 25px;
            letter-spacing: 2px;
            color: var(--primary-bg);
        }
    }

    .router-buttons__list {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;

        >div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70%;

            .router-buttons__item {
                position: relative;

                .item-list {
                    position: absolute;
                    top: 40px;
                    left: 0;
                    background-color: red;
                }
            }
        }
    }

    .router-buttons__link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 100%;
        background-color: pink;
    }
}
</style>