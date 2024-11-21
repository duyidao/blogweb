<script setup>
defineProps({
  loading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="my-loading"
    v-if="loading">
    <div id="wifi-loader">
      <svg class="circle-outer"
        viewBox="0 0 86 86">
        <circle class="back"
          cx="43"
          cy="43"
          r="40"></circle>
        <circle class="front"
          cx="43"
          cy="43"
          r="40"></circle>
        <circle class="new"
          cx="43"
          cy="43"
          r="40"></circle>
      </svg>
      <svg class="circle-middle"
        viewBox="0 0 60 60">
        <circle class="back"
          cx="30"
          cy="30"
          r="27"></circle>
        <circle class="front"
          cx="30"
          cy="30"
          r="27"></circle>
      </svg>
      <svg class="circle-inner"
        viewBox="0 0 34 34">
        <circle class="back"
          cx="17"
          cy="17"
          r="14"></circle>
        <circle class="front"
          cx="17"
          cy="17"
          r="14"></circle>
      </svg>
      <div class="text"
        data-text="正在加载中..."></div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>

  .my-loading {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #e8e8e8;
    z-index: 99999;

    #wifi-loader {
      --back-color: #c3c8de;
      --text-color: #414856;
      width: 64px;
      height: 64px;
      border-radius: 50px;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;

        &.circle-middle {
          height: 60px;
          width: 60px;

          circle {
            stroke-dasharray: 42.5 127.5;

            &.back {
              animation: circle-middle6123 1.8s ease infinite 0.25s;
            }

            &.front {
              animation: circle-middle6123 1.8s ease infinite 0.1s;
            }
          }
        }

        circle {
          position: absolute;
          fill: none;
          stroke-width: 6px;
          stroke-linecap: round;
          stroke-linejoin: round;
          transform: rotate(-100deg);
          transform-origin: center;

          &.back {
            stroke: var(--back-color);
          }

          &.front {
            stroke: var(--primary-bg);
          }
        }

        &.circle-outer {
          height: 86px;
          width: 86px;

          circle {
            stroke-dasharray: 62.75 188.25;

            &.back {
              animation: circle-outer135 1.8s ease infinite 0.3s;
            }

            &.front {
              animation: circle-outer135 1.8s ease infinite 0.15s;
            }
          }
        }

        &.circle-inner {
          height: 34px;
          width: 34px;

          circle {
            stroke-dasharray: 22 66;

            &.back {
              animation: circle-inner162 1.8s ease infinite 0.2s;
            }

            &.front {
              animation: circle-inner162 1.8s ease infinite 0.05s;
            }
          }
        }
      }

      .text {
        position: absolute;
        bottom: -40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: lowercase;
        font-weight: 500;
        font-size: 14px;
        letter-spacing: 0.2px;
        width: 90px;

        &::before,
        &::after {
          content: attr(data-text);
          width: 100%;
        }

        &::before {
          color: var(--text-color);
        }

        &::after {
          color: var(--primary-bg);
          animation: text-animation76 3.6s ease infinite;
          position: absolute;
          left: 0;
          z-index: 9;
        }
      }
    }
  }

  @keyframes circle-outer135 {
    0% {
      stroke-dashoffset: 25;
    }

    25% {
      stroke-dashoffset: 0;
    }

    65% {
      stroke-dashoffset: 301;
    }

    80% {
      stroke-dashoffset: 276;
    }

    100% {
      stroke-dashoffset: 276;
    }
  }

  @keyframes circle-middle6123 {
    0% {
      stroke-dashoffset: 17;
    }

    25% {
      stroke-dashoffset: 0;
    }

    65% {
      stroke-dashoffset: 204;
    }

    80% {
      stroke-dashoffset: 187;
    }

    100% {
      stroke-dashoffset: 187;
    }
  }

  @keyframes circle-inner162 {
    0% {
      stroke-dashoffset: 9;
    }

    25% {
      stroke-dashoffset: 0;
    }

    65% {
      stroke-dashoffset: 106;
    }

    80% {
      stroke-dashoffset: 97;
    }

    100% {
      stroke-dashoffset: 97;
    }
  }

  @keyframes text-animation76 {
    0% {
      clip-path: inset(0 100% 0 0);
    }

    50% {
      clip-path: inset(0);
    }

    100% {
      clip-path: inset(0 0 0 100%);
    }
  }

  @media screen and (max-width: 768px) {
    .my-loading {
      #wifi-loader {
        width: 4rem;
        height: 4rem;
        border-radius: 3.125rem;

        svg {
          &.circle-middle {
            height: 3.75rem;
            width: 3.75rem;
          }

          circle {
            stroke-width: .375rem;
          }

          &.circle-outer {
            height: 5.375rem;
            width: 5.375rem;
          }

          &.circle-inner {
            height: 2.125rem;
            width: 2.125rem;
          }
        }

        .text {
          bottom: -2.5rem;
          font-size: .875rem;
          letter-spacing: .0125rem;
          width: 5.625rem;
        }
      }
    }
  }
</style>
