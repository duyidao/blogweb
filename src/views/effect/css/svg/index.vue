<script setup>
import bgImg from "@/assets/img/cat.png";

const inputValue = ref("Logo");
const colorValue = ref("#ff0000");

const inputChange = (e) => {
  inputValue.value = e.target.value;
};

const fileValue = ref(bgImg);
const changeFn = (e) => {
  const reader = new FileReader();
  reader.addEventListener("load", (event) => {
    // 读取完成后的回调函数
    const fileData = event.target.result;
    // 在这里可以对文件数据进行进一步处理
    fileValue.value = fileData;
  });

  reader.readAsDataURL(e);
}

const code = ref(`<svg viewBox="0 0 500 300">
  <defs>
    <filter id="conform">
      <feImage
        :href="fileValue"
        result="ORIGIN_IMAGE"
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
      ></feImage>
      <feColorMatrix
        in="ORIGIN_IMAGE"
        type="saturate"
        values="0"
        result="GRAY_IMAGE"
      ></feColorMatrix>
      <feDisplacementMap
        in="SourceGraphic"
        in2="GRAY_IMAGE"
        scale="15"
        xChannelSelector="R"
        yChannelSelector="R"
        result="TEXTURED_TEXT"
      ></feDisplacementMap>
      <feImage
        :href="fileValue"
        in="TEXTURED_TEXT"
        x="0"
        y="0"
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        result="BG"
      ></feImage>
      <feColorMatrix
        in="TEXTURED_TEXT"
        type="matrix"
        values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0"
        result="OPACITY_TEXT"
      ></feColorMatrix>
      <feBlend
        in="BG"
        in2="OPACITY_TEXT"
        mode="multiply"
        result="BLENDED_TEXT"
      ></feBlend>
    </filter>
  </defs>
  <image
    :href="fileValue"
    x="0"
    y="0"
    width="100%"
    height="100%"
    preserveAspectRatio="none"
  ></image>
  <text
    x="50%"
    y="50%"
    font-size="10em"
    font-weight="bold"
    text-anchor="middle"
    alignment-baseline="middle"
    :fill="colorValue"
    filter="url(#conform)"
  >
    {{ inputValue }}
  </text>
</svg>
`);
</script>

<template>
  <IframeItemModel title="纹理适配"
    :code="code"
    type="vue">
    <div class="svg__container">
      <my-upload style="width: 100%;"
        @change="changeFn" />
      <div class="input__list">
        <my-input v-model="inputValue" />
        <input v-model="colorValue"
          type="color"
          name=""
          id="" />
      </div>
      <svg viewBox="0 0 500 300">
        <defs>
          <filter id="conform">
            <feImage :href="fileValue"
              result="ORIGIN_IMAGE"
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"></feImage>
            <feColorMatrix in="ORIGIN_IMAGE"
              type="saturate"
              values="0"
              result="GRAY_IMAGE"></feColorMatrix>
            <feDisplacementMap in="SourceGraphic"
              in2="GRAY_IMAGE"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="R"
              result="TEXTURED_TEXT"></feDisplacementMap>
            <feImage :href="fileValue"
              in="TEXTURED_TEXT"
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              result="BG"></feImage>
            <feColorMatrix in="TEXTURED_TEXT"
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 9 0"
              result="OPACITY_TEXT"></feColorMatrix>
            <feBlend in="BG"
              in2="OPACITY_TEXT"
              mode="multiply"
              result="BLENDED_TEXT"></feBlend>
          </filter>
        </defs>
        <image :href="fileValue"
          x="0"
          y="0"
          width="100%"
          height="100%"
          preserveAspectRatio="none"></image>
        <text x="50%"
          y="50%"
          font-size="10em"
          font-weight="bold"
          text-anchor="middle"
          alignment-baseline="middle"
          :fill="colorValue"
          filter="url(#conform)">
          {{ inputValue }}
        </text>
      </svg>
    </div>
  </IframeItemModel>
</template>

<style lang="less"
  scoped>
  .svg__container {
    display: flex;
    flex-direction: column;
  }
  .input__list {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    >input {
      height: 35px;

      &:last-child {
        width: 40px;
        margin-left: 10px;
      }
    }
  }

  svg {
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    .input__list {
      margin-top: 1.25rem;

      >input {
        height: 1.875rem;

        &:last-child {
          margin-left: 0.625rem;
          width: 2.5rem;
        }
      }
    }

    svg {
      margin-top: 1.25rem;
    }
  }
</style>
