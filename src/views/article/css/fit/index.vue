<script setup>
const code = ref(`color: #c7c6c5;
mix-blend-mode: difference;`);
</script>

<template>
  <div class="ifrname-box">
    <IframeItem v-model="code"
      title="文字填充">
      <div class="banner">
        <div :style="code"
          class="title">前端搬砖人&nbsp;&nbsp;&nbsp;&nbsp;每天都努力</div>
      </div>
    </IframeItem>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
  background-image: linear-gradient(45deg,
      #c7c6c5 0%,
      #c7c6c5 50%,
      #000 50%,
      #000 100%);
}

@media screen and (max-width: 768px) {
  .banner {
    height: 6.25rem;
    line-height: 6.25rem;
    border-radius: .625rem;
  }
}
</style>