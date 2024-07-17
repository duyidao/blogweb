<script setup>
import methods from '@/utils/customMethod'

const emit = defineEmits(['handleRouter'])

const handleRouterFn = (path) => {
  methods.$goRouter(path, '/articleList/');
  emit('handleRouter')
}
</script>

<template>
  <div class="phone-dom">
    <div class="phone-dom__title">文章列表</div>
    <div class="phone-dome__list">
      <div class="phone-dome__item"
        @click.stop="handleRouterFn('css')">
        <i class="iconfont icon-css"></i>
        <span>CSS</span>
      </div>
      <div class="phone-dome__item"
        @click.stop="handleRouterFn('js')">
        <i class="iconfont icon-js"></i>
        <span>Javascript</span>
      </div>
      <div class="phone-dome__item"
        @click.stop="handleRouterFn('learn')">
        <i class="iconfont icon-xuexi"></i>
        <span>Learn</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.phone-dom__title {
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1.75rem;
}

.phone-dome__list {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .phone-dome__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: .625rem 0;
    border: .0625rem solid var(--primary-font);
    border-radius: .5rem;
    cursor: pointer;

    &:hover {
      border: .0625rem solid #303F9F;
      background-color: #303F9F;
      color: #fff;
    }

    span {
      font-size: 1.15rem;
      margin-top: .75rem;
    }
  }
}
</style>
