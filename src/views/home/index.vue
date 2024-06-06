<script setup>
import Weather from "./components/weather.vue";
import User from "./components/user.vue";

const timer = ref(null);
const nowTime = ref("");

onMounted(() => {
  timer.value = setInterval(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const day = ("0" + now.getDate()).slice(-2);
    const hours = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const seconds = ("0" + now.getSeconds()).slice(-2);

    nowTime.value =
      year +
      "-" +
      month +
      "-" +
      day +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds;
  }, 1000);
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<template>
  <div class="home">
    <div class="user">
      <User />
      <Weather />
      <div class="home-candle">
        <Candle />
      </div>
      <div class="home-time">{{ nowTime }}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .home-candle {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 25%;
    height: 136px;
    padding: 10px 0;
    margin-top: 20px;
    border-radius: 12px;
    box-shadow: 0 0 8px 1px #ccc;
  }

  .user {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
}

@media screen and (max-width: 768px) {
  .home {
    .home-candle {
      width: 30%;
      padding: .625rem 0;
      margin-top: 1.25rem;
      border-radius: .75rem;
      box-shadow: 0 0 .5rem .0625rem #ccc;
    }
    .user {
      flex-direction: row;
      justify-content: start;
      width: 100%;
    }
  }
}
</style>
