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
</script>

<template>
  <div class="home-user">
    <div class="user-accent">
      <img src="@/assets/img/cat.png" alt="" />
      <div class="user-accent__name">
        <p>你好</p>
        <p>
          我是
          <span class="user-accent__name__zh">刀刀</span>
          <span class="user-accent__name__en">Duyidao</span>
        </p>
      </div>
    </div>
    <div class="user-famous">
      <div>
        <span class="user-famous__word"
          >前端之路渐行渐远，退路早已遥遥无期</span
        >
      </div>
    </div>
    <div class="user-call">
      <span>联系我：</span>
      <i
        title="github"
        class="iconfont icon-github"
        @click.stop="handleLinkFn('github')"
      ></i>
      <i
        title="gitee"
        class="iconfont icon-gitee"
        @click.stop="handleLinkFn('gitee')"
      ></i>
      <i
        title="bilibili"
        class="iconfont icon-bilibili-fill"
        @click.stop="handleLinkFn('bilibili')"
      ></i>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-user {
  width: 49%;
  height: 250px;
  border-radius: 12px;
  padding: 20px 10px;
  margin-right: 2%;
  box-shadow: 0 0 8px 1px #ccc;

  .user-call {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: "宋体";
    font-weight: 600;
    margin-top: 15px;
    color: var(--primary-bg);

    span {
      padding: 8px 12px;
      font-weight: 600;
    }

    i {
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .user-famous {
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin: 15px 0;

    > div {
      display: inline-block;
      font-size: 18px;
      font-family: "宋体";
      .user-famous__word {
        display: block;
        overflow: hidden;
        border-right: 2px solid var(--primary-bg);
        white-space: nowrap;
        width: 0;
        animation: typing 4s steps(14) forwards, blink 0.8s infinite;
        font-weight: 500;
      }
    }
  }

  .user-accent {
    display: flex;
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 15px;
    }
    .user-accent__name {
      display: flex;
      flex-direction: column;
      justify-content: center;

      p {
        &:first-child {
          font-size: 30px;
          font-weight: 600;
          font-family: "黑体";
          margin-bottom: 15px;
        }
        &:last-child {
          font-size: 14px;
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
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@keyframes blink {
  from {
    border-color: transparent;
  }
  to {
    border-color: var(--primary-bg);
  }
}

@media screen and (max-width: 768px) {
  .home-user {
    width: 100%;
    height: 15.625rem;
    border-radius: 0.75rem;
    padding: 1.25rem 0.625rem;
    margin-bottom: 1.25rem;
    margin-right: 0;
    box-shadow: 0 0 0.5rem 0.0625rem #ccc;

    .user-call {
      justify-content: center;
      font-size: 1.25rem;
      margin-top: 0.9375rem;

      span {
        display: none;
      }

      i {
        margin-right: 3.875rem;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .user-famous {
      height: 1.875rem;
      line-height: 1.875rem;
      margin: 0.9375rem 0;

      > div {
        font-size: 1.125rem;
        .user-famous__word {
          border-right: 0.125rem solid var(--primary-bg);
        }
      }
    }

    .user-accent {
      img {
        width: 6.25rem;
        height: 6.25rem;
        margin-right: 0.9375rem;
      }
      .user-accent__name {
        p {
          &:first-child {
            font-size: 1.875rem;
            margin-bottom: 0.9375rem;
          }
          &:last-child {
            font-size: 0.875rem;

            .user-accent__name__en {
              margin-left: 0.3125rem;
            }
          }
        }
      }
    }
  }
}
</style>
