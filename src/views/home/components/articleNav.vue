<script setup></script>

<template>
  <div class="nav card">
    <router-link
      to="/articleList/css"
      style="--i: -1"
    >
      <div class="corner top">
        <span class="number">K</span>
        <span>♣</span>
      </div>

      <div class="suit">
        <span>CSS</span>
      </div>

      <div class="corner bottom">
        <span class="number">K</span>
        <span>♣</span>
      </div>
    </router-link>
    <router-link
      to="/articleList/js"
      style="--i: 0"
    >
      <div class="corner top">
        <span class="number">Q</span>
        <span>♦</span>
      </div>

      <div class="suit">
        <span>JavaScript</span>
      </div>

      <div class="corner bottom">
        <span class="number">Q</span>
        <span>♦</span>
      </div>
    </router-link>
    <router-link
      to="/articleList/learn"
      style="--i: 1"
    >
      <div class="corner top">
        <span class="number">J</span>
        <span>♠</span>
      </div>

      <div class="suit">
        <span>Learn</span>
      </div>

      <div class="corner bottom">
        <span class="number">J</span>
        <span>♠</span>
      </div>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 50%;
  height: 240px;
  margin: 35px auto 10px;

  &:active {
    a:not(:active) {
      background-color: #333;
      border-color: #333;
    }
  }

  &:hover {
    a {
      background: #fff;
      transform: rotate(calc(var(--i) * 10deg))
        translate(calc(var(--i) * 120px), -30px);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      color: var(--home-word-hover);

      .suit, .corner {
        opacity: 1;
      }
    }
  }

  a {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 100%;
    border-radius: 8px;
    border: 10px solid var(--catalogue-bg);
    background-color: var(--catalogue-bg);
    transform-origin: 50% 100%;
    background: url('../../../assets/img/puke.jpg') no-repeat center center;
    filter: hue-rotate(calc(var(--i) * 50deg));
    transition: background .3s, transform 0.3s, translate .3s;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    color: var(--home-word-normal);

    .suit {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      transform: rotate(-15deg);
      opacity: 0;
    }

    .corner {
      line-height: 1;
      overflow: hidden;
      position: absolute;
      text-align: center;
      opacity: 0;

      &.top {
        left: 8px;
        top: 12px;
      }

      &.bottom {
        bottom: 12px;
        right: 8px;
        -moz-transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
      }

      span {
        display: block;
        font-size: 24px;
        font-weight: bold;
      }

      .number {
        font-size: 32px;
        height: 32px;
        line-height: 32px;
      }
    }

    &:hover {
      translate: calc(var(--i) * 20px) -50px;
      z-index: 9;
    }
  }
}
</style>
