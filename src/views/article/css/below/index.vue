<script setup>
const pCode = ref(`-webkit-box-reflect: below 3px linear-gradient(transparent, rgba(0, 0, 0, .5));`);

const imgCode = ref(`-webkit-box-reflect: below 15px linear-gradient(transparent, transparent, rgba(0, 0, 0, .5));`);
</script>

<template>
  <div class="below">
    <div class="iframe-box"
      id="iframe-box">
      <IframeItem v-model="pCode" title="文字倒影">
        <p :style="pCode">daodao</p>
      </IframeItem>
      <IframeItem v-model="imgCode" title="图片倒影">
        <img :style="imgCode" src="@/assets/img/css/fit.jpg"
          alt="图片倒影">
      </IframeItem>
    </div>
  </div>
</template>

<style lang="less" scoped>
.below {
  height: 450px;
  img {
    width: 250px;
  }

  p {
    width: 250px;
  }
}

@media screen and (max-width: 768px) {
  .below {
    height: 28.125rem;
    img {
      width: 15.625rem;
    }

    p {
      width: 15.625rem;
    }
  }
}
</style>