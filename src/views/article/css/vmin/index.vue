<script setup>
const vmaxCode = ref(`width: 100vmax;`);
const vminCode = ref(`width: 100vmin;`);
</script>

<template>
  <div class="iframe-box box">
    <IframeItemCode title="vmax"
      class="iframe-box"
      v-model="vmaxCode">
      <div class="box-img">
        <img title="vmax"
          class="vmax"
          src="@/assets/img/js/copy.jpg"
          :style="vmaxCode"
          alt="vmax">
      </div>
    </IframeItemCode>
    <IframeItemCode title="wmin"
      class="iframe-box"
      v-model="vminCode">
      <div class="box-img">
        <img title="vmin"
          src="@/assets/img/js/copy.jpg"
          :style="vminCode"
          alt="vmin">
      </div>
    </IframeItemCode>
  </div>
</template>

<style lang="less" scoped>
.box {
  padding: 20px;

  .box-img {
    width: 850px;

    img {
      display: block;
    }
  }
}

@media screen and (max-width: 768px) {
  .box {
    padding: 1.25rem;

    .box-img {
      width: 53.125rem;
    }
  }
}
</style>