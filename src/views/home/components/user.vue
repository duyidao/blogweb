<script setup>
const handleLinkFn = (type) => {
  switch (type) {
    case "github":
      window.open("https://github.com/Duyidao");
      break;
    case "gitee":
      window.open("https://gitee.com/Duyidao");
      break;
    case "bilibili":
      window.open("https://space.bilibili.com/383875686");
      break;
    default:
      break;
  }
};

const textRef = ref(null);
const text = "前端之路渐行渐远，退路早已遥遥无期。"; // 要显示的文本
let index = 0;

function typeWriter() {
  if (index < text.length && textRef.value) {
    textRef.value.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 1000); // 设置打字速度，单位是毫秒
  }
}

// 页面加载完成后开始打字机效果
onMounted(() => {
  typeWriter();
});
</script>

<template>
  <div class="home-user">
    <div class="home-user-img">
      <img src="@/assets/img/cat.webp"
        alt="猫猫头像" />
    </div>
    <div class="home-user-info">
      <div class="user-accent">
        <p>你好 ✨</p>
        <p>
          我是
          <span class="user-accent__name__zh">刀刀</span>
        </p>
      </div>
      <div class="user-famous">
        <div ref="textRef"
          class="text__write"></div>
      </div>
      <div class="user-call">
        <span>联系我：</span>
        <i title="github"
          class="iconfont icon-github"
          @click.stop="handleLinkFn('github')"></i>
        <i title="gitee"
          class="iconfont icon-gitee"
          @click.stop="handleLinkFn('gitee')"></i>
        <i title="bilibili"
          class="iconfont icon-bilibili-fill"
          @click.stop="handleLinkFn('bilibili')"></i>
      </div>
    </div>
  </div>
</template>

<style lang="less"
  scoped>
  .home-user {
    display: flex;
    width: 100%;
    height: 250px;
    border-radius: 12px;
    padding: 20px 30px;
    margin: 0 auto 20px;
    box-shadow: 0 0 8px 1px #ccc;

    .home-user-img {
      display: flex;
      align-items: center;
      margin-right: 30px;

      img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
      }
    }

    .home-user-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-end;

      .user-call {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-family: "宋体";
        font-weight: 600;
        color: var(--primary-bg);

        span {
          padding: 8px 12px 8px 0;
          font-weight: 600;
        }

        i {
          margin-right: 20px;
          cursor: pointer;
          font-size: 18px;
        }
      }

      .user-famous {
        margin: 15px 0;
        font-size: 20px;
        font-family: "仿宋";
        border-right: 4px solid skyblue;
        white-space: nowrap;
        width: 0;
        animation: typing 17.2s steps(25, end) infinite, border .75s step-end infinite;
        overflow: hidden;
      }

      .user-accent {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;

        p {
          font-size: 35px;

          &:first-child {
            font-weight: 600;
            font-family: "黑体";
            margin-bottom: 15px;
          }

          &:last-child {
            font-size: 25px;
            font-weight: 400;
            font-family: "宋体";
            font-weight: 600;

            .user-accent__name__en {
              font-family: "仿宋";
              font-style: italic;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }

  @keyframes typing {
    from {
      width: 0;
    }

    to {
      width: 360px;
    }
  }

  @keyframes border {

    from,
    to {
      border-color: transparent;
    }

    50% {
      border-color: skyblue;
    }
  }

  @media screen and (max-width: 768px) {
    @keyframes typing {
      from {
        width: 0;
      }

      to {
        width: 22.5rem;
      }
    }

    .home-user {
      width: 100%;
      height: 15.625rem;
      border-radius: .75rem;
      padding: 1.25rem 1.875rem;
      margin: 0 auto 1.25rem;
      box-shadow: 0 0 .5rem .0625rem #ccc;

      .home-user-img {
        margin-right: 1.875rem;

        img {
          width: 9.375rem;
          height: 9.375rem;
        }
      }

      .home-user-info {
        .user-call {
          font-size: 1.125rem;

          span {
            padding: .5rem .75rem .5rem 0;
          }

          i {
            margin-right: 1.25rem;
            font-size: 1.125rem;
          }
        }

        .user-famous {
          margin: .9375rem 0;
          font-size: 1.25rem;
          border-right: .25rem solid skyblue;
        }

        .user-accent {
          p {
            font-size: 2.1875rem;

            &:first-child {
              margin-bottom: .9375rem;
            }

            &:last-child {
              font-size: 1.5625rem;

              .user-accent__name__en {
                margin-left: .3125rem;
              }
            }
          }
        }
      }
    }
  }
</style>
