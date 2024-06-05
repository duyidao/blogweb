<script setup>
const timer = ref(null)
const nowTime = ref('')

onMounted(() => {
  timer.value = setInterval(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);

    nowTime.value = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
  }, 1000);
})

onUnmounted(() => {
  clearInterval(timer.value);
})
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
      <span class="user-famous__word">前端之路渐行渐远，退路早已遥遥无期</span>
    </div>
    <div class="user-time">{{ nowTime }}</div>
  </div>
</template>

<style lang="less" scoped>
.home-user {
  width: 49%;
  height: 250px;
  border-radius: 12px;
  padding: 20px 10px;
  box-shadow: 0 0 8px 1px #ccc;

  .user-famous {
    display: inline-block;
    margin-top: 15px;
    font-size: 14px;
    font-family: "宋体";
    &__word {
      display: block;
      overflow: hidden;
      border-right: 2px solid var(--primary-bg);
      white-space: nowrap;
      width: 0;
      animation: typing 4s steps(14) forwards, blink 0.8s infinite;
      font-weight: 500;
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
    margin-bottom: 1.25rem;
    border-radius: 0.75rem;
    box-shadow: 0 0 0.5rem 0.0625rem #ccc;
  }
}
</style>
