<script setup lang="ts">
const props = defineProps({
  word: {
    type: String,
    default: "",
  },
  iconName: {
    type: String,
    default: "",
  },
  full: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};

const myButtonRef = ref(null);

const mousemoveFn = (dom, e) => {
  let x =e.pageX - dom.getBoundingClientRect().left;
  let y =e.pageY - dom.getBoundingClientRect().top;
  dom.style.setProperty("--x", x + "px");
  dom.style.setProperty("--y", y + "px");
};

onMounted(() => {
  myButtonRef.value.addEventListener("mousemove", (e) =>
    mousemoveFn(myButtonRef.value, e)
  );
});

onBeforeUnmount(() => {
  myButtonRef.value.removeEventListener("mousemove", (e) =>
    mousemoveFn(myButtonRef.value, e)
  );
});
</script>

<template>
  <div :class="{ full }" ref="myButtonRef" @click.stop="click">
    <i v-if="iconName" class="iconfont" :class="iconName"></i>
    <span :class="{ hasMargin: iconName }">{{ word }}</span>
  </div>
</template>

<style lang="less" scoped>
div {
  position: relative;
  padding: 0 26px;
  min-width: 80px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  background-color: var(--catalogue-bg);
  color: var(--primary-info);
  border-radius: 30px;
  overflow: hidden;
  transition: all 0.5s;
  cursor: pointer;

  &.full {
    background-color: var(--primary-bg);
    color: var(--catalogue-bg);

    i,
    span {
      color: var(--normal-word);
    }

    &:hover {
      color: var(--catalogue-title);
      text-shadow: 0 0 20px var(--catalogue-bg), 0 0 50px var(--catalogue-bg);
    }

    &::before {
      background: radial-gradient(
        var(--catalogue-bg),
        transparent,
        transparent
      );
    }

    &::after {
      background-color: var(--catalogue-title);
      border-radius: 30px;
      inset: 3px;
    }
  }

  span,
  i {
    position: relative;
    letter-spacing: 2px;
    z-index: 5;
  }

  span {
    font-size: 14px;

    &.hasMargin {
      margin-left: 5px;
    }
  }

  &:hover {
    color: var(--catalogue-title);
    text-shadow: 0 0 20px var(--catalogue-title),
      0 0 50px var(--catalogue-title);

    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: var(--y);
    left: var(--x);
    transform: translate(-50%, -50%);
    width: 160px;
    height: 160px;
    opacity: 0;
    background: radial-gradient(
      var(--catalogue-title),
      transparent,
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    background-color: var(--catalogue-bg);
    border-radius: 30px;
    inset: 2px;
  }
}

@media screen and (max-width: 768px) {
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1.625rem;
    min-width: 5rem;
    height: 2.1875rem;
    line-height: 2.1875rem;
    border-radius: 1.875rem;

    &.full {
      &:hover {
        text-shadow: 0 0 1.25rem var(--catalogue-bg),
          0 0 3.125rem var(--catalogue-bg);
      }

      &::after {
        border-radius: 1.875rem;
        inset: 0.125rem;
      }
    }

    span,
    i {
      letter-spacing: 0.125rem;
    }

    span {
      font-size: 0.875rem;

      &.hasMargin {
        margin-left: 0.3125rem;
      }
    }

    &:hover {
      text-shadow: 0 0 1.25rem var(--catalogue-title),
        0 0 3.125rem var(--catalogue-title);
    }

    &::before {
      width: 9.375rem;
      height: 9.375rem;
    }

    &::after {
      border-radius: 1.875rem;
      inset: 0.125rem;
    }
  }
}
</style>
