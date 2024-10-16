<script setup>

</script>

<template>
  <div class="below">
    <p>daodao</p>
    <img src="@/assets/img/css/fit.jpg"
      alt="">
  </div>
</template>

<style scoped>
.below {
  height: 300px;
}

img {
  width: 250px;
  -webkit-box-reflect: below 15px linear-gradient(transparent, transparent, rgba(0, 0, 0, .5));
}

p {
  width: 250px;
  -webkit-box-reflect: below 3px linear-gradient(transparent, rgba(0, 0, 0, .5));
  margin-bottom: 40px;
}
</style>