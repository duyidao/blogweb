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
      <p class="user-famous__word">前端之路渐行渐远，退路早已遥遥无期</p>
      <p class="user-famous__word">
        The road to the front is fading away, and the road to return is far away
      </p>
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
    font-size: 18px;
    font-family: "宋体";
    font-weight: 600;
    margin-top: 20px;
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
    width: 100%;
    margin: 15px 0;
    font-size: 16px;
    font-family: "仿宋";

    p {
      margin-bottom: 15px;
    }
  }

  .user-accent {
    display: flex;
    img {
      width: 70px;
      height: 70px;
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

@media screen and (max-width: 768px) {
  .home-user {
    width: 100%;
    height: 15.625rem;
    border-radius: 0.75rem;
    padding: 1.5rem 1.625rem;
    margin-right: 0;
    margin-bottom: 1rem;
    box-shadow: 0 0 0.25rem #ccc;

    .user-call {
      font-size: 1.125rem;
      margin-top: 1.25rem;

      span {
        padding: 0.5rem 0.75rem 0.5rem 0;
      }

      i {
        margin-right: 1.25rem;
        font-size: 1.125rem;
      }
    }

    .user-famous {
      margin: 0.9375rem 0;
      font-size: 1rem;

      p {
        margin-bottom: 0.9375rem;
      }
    }

    .user-accent {
      img {
        width: 4.375rem;
        height: 4.375rem;
        margin-right: 0.9375rem;
      }
      .user-accent__name {
        p {
          &:first-child {
            font-size: 1.875rem;
            margin-bottom: .9375rem;
          }
          &:last-child {
            font-size: .875rem;

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
