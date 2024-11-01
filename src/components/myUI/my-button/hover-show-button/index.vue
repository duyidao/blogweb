<script setup>
const props = defineProps({
  word: {
    type: String,
    default: "",
  },
  iconName: {
    type: String,
    default: "youjiantou",
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
</script>

<template>
  <div class="hover-show-button"
    @click.stop="click">
    <span class="hover-show-button__circle">
      <svg-icon :name="iconName"></svg-icon>
    </span>
    <span class="hover-show-button__text">{{ word }}</span>
  </div>
</template>

<style lang="less"
  scoped>
  .hover-show-button {
    all: unset;
    padding: 8px 32px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: fit-content;

    &__circle {
      position: absolute;
      left: 0;
      display: block;
      width: 40px;
      height: 40px;
      background-color: var(--article-bg);
      border-radius: 24px;
      transition: all .45s ease;

      svg {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        left: calc(40px / 2);
        top: calc(40px / 2);
        transform: translate(-50%, -50%);
        font-size: 16px;
        transition: all .45s ease;
      }
    }

    &__text {
      margin-left: 20px;
      transition: all .45s;
    }

    &:hover {
      .hover-show-button__circle {
        width: 100%;

        svg {
          translate: 6px 0;
        }
      }

      .hover-show-button__text {
        color: black;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .hover-show-button {
      padding: .5rem 2rem;

      &__circle {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 1.5rem;

        svg {
          left: calc(2.5rem / 2);
          top: calc(2.5rem / 2);
          font-size: 1rem;
        }
      }

      &__text {
        margin-left: 1.25rem;
      }

      &:hover {
        .hover-show-button__circle {
          svg {
            translate: .375rem 0;
          }
        }
      }
    }
  }
</style>