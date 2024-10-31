<script setup>


const lineCode = ref(`background-size: 100% 2px;
background-position: left bottom;`);

const divRef = ref(null);

const handleMouseEnter = () => {
    divRef.value.style.cssText = lineCode.value;
};

const handleMouseLeave = () => {
    divRef.value.style.cssText = '';
};
</script>

<template>
  <div class="iframe-box banner">
    <IframeItemCode title="下划线动画"
      v-model="lineCode">
      <div class="line-title"
        ref="divRef"
        :style="{ '--bg': background }"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave">
        前端搬砖人每天都努力
      </div>
    </IframeItemCode>
  </div>
</template>

<style lang="less" scoped>
.line-title {
  display: inline-block;
  padding-bottom: 5px;
  background: linear-gradient(to right, #7e2f2b, #146429) no-repeat right bottom;
  transition: background-size .5s;
  background-size: 0 2px;
  cursor: pointer;
}
</style>