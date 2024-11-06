<script setup>

</script>

<template>
  <a class="edge-light-button">源码展示</a>
</template>

<style lang="less"
  scoped>
  .edge-light-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-family: 'robo';
    color: var(--primary-bg);
    overflow: hidden;
    transition: all 0.3s;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 10px;
      height: 10px;
      border-left: 2px solid var(--primary-bg);
      border-top: 2px solid var(--primary-bg);
      transition: all 0.3s;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 10px;
      height: 10px;
      border-right: 2px solid var(--primary-bg);
      border-bottom: 2px solid var(--primary-bg);
      transition: all 0.3s;
    }

    &:hover {
      background-color: var(--primary-bg);
      color: var(--normal-word);
      -webkit-box-reflect: below 1px linear-gradient(transparent, rgba(0, 0, 0, .2));
      transition-delay: .3s;

      &::after,
      &::before {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .edge-light-button {
      font-size: 1.125rem;

      &::before {
        width: .625rem;
        height: .625rem;
        border-left-width: .125rem;
        border-top-width: .125rem;
      }

      &::after {
        width: .625rem;
        height: .625rem;
        border-right-width: .125rem;
        border-bottom-width: .125rem;
      }
    }
  }
</style>