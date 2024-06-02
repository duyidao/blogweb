<script setup lang="ts">
defineProps({
  word: {
    type: String,
    default: "确认",
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: "home",
  },
});

const emit = defineEmits(["click"]);
const click = () => {
  emit("click");
};

const myButtonRef = ref(null);

const mousemoveFn = (dom, e) => {
  let x = e.offsetX - dom.offsetLeft;
  let y = e.offsetY - dom.offsetTop;
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
  <a class="my-button" ref="myButtonRef" href="javascript:;" @click.stop="click">
    <p>
      <SvgIcon v-if="showIcon" :name="iconName" />
      <span>{{ word }}</span>
    </p>
  </a>
</template>

<style lang="less" scoped>
a {
  display: block;
  position: relative;
  padding: 10px 26px;
  background-color: var(--catalogue-bg);
  color: var(--primary-info);
  border-radius: 30px;
  overflow: hidden;
  margin-right: 15px;

  p {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 5;

    svg {
      margin-right: 0.5rem;
      fill: var(--primary-info);
    }

    span {
      letter-spacing: 2px;
    }
  }

  &:hover {
    color: var(--catalogue-title);
    text-shadow: 0 0 20px var(--catalogue-title),
      0 0 50px var(--catalogue-title);

    &::before {
      opacity: 1;
    }

    svg {
      fill: var(--catalogue-title);
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: var(--y);
    left: var(--x);
    transform: translate(-50%, -50%);
    width: 140px;
    height: 140px;
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
  a {
    padding: 0.9375rem 1.875rem;
    border-radius: 1.875rem;
    margin-right: 0.9375rem;

    &:hover {
      text-shadow: 0 0 1.25rem var(--catalogue-title),
        0 0 3.125rem var(--catalogue-title);
    }

    &::before {
      width: 7.5rem;
      height: 7.5rem;
    }

    &::after {
      border-radius: 1.875rem;
      inset: 0.125rem;
    }

    span {
      letter-spacing: 0.125rem;
    }
  }
}
</style>
