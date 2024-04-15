<script setup lang="ts">

</script>

<template>
  <div id="ifrname-box"
    class="ifrname-box">
    <div class="link">
      <div class="iframe-box-title transition-color">伪类选择器</div>
      <ul>
        <li><a href="javascript:;">无操作链接显示蓝色；长按链接显示绿色；鼠标悬停显示红色</a></li>
      </ul>
    </div>
    <div class="input">
      <div class="iframe-box-title transition-color">表单选择器</div>
      <ul>
        <li>
          单选框组：
          <label class=""
            for="">单选框1
            <input type="radio"
              name="radio"
              id="">
          </label>
          <label class=""
            for="">单选框2
            <input type="radio"
              checked
              name="radio"
              id="">
          </label>
          <label class=""
            for="">单选框3
            <input type="radio"
              name="radio"
              id="">
          </label>
          <label class=""
            for="">单选框禁用
            <input type="radio"
              disabled
              name="radio"
              id="">
          </label>
          <label class=""
            for="">单选框只读
            <input type="radio"
              readonly
              name="radio"
              id="">
          </label>
        </li>
        <li>
          多选框组：
          <label class=""
            for="">多选框1
            <input type="checkbox"
              name="checkbox"
              id="">
          </label>
          <label class=""
            for="">多选框2
            <input type="checkbox"
              checked
              name="checkbox"
              id="">
          </label>
          <label class=""
            for="">多选框3
            <input type="checkbox"
              checked
              name="checkbox"
              id="">
          </label>
          <label class=""
            for="">多选框禁用
            <input type="checkbox"
              disabled
              name="checkbox"
              id="">
          </label>
          <label class=""
            for="">多选框只读
            <input type="checkbox"
              readonly
              name="checkbox"
              id="">
          </label>
        </li>
        <li>
          <input type="text"
            style="border: 1px solid #000;"
            placeholder="默认样式生效">
        </li>
      </ul>
    </div>
    <div class="element">
      <div class="iframe-box-title transition-color">元素选择器</div>
      <div class="box">
        <p>第一个元素</p>
        <div>第二个元素：div</div>
        <p>第二个元素：p</p>
        <p>第三个元素：p</p>
        <p>第四个元素：p</p>
        <p>倒数第二个元素：p</p>
        <div>倒数第二个元素：div</div>
        <p>最后一个元素：p</p>
      </div>
    </div>
    <div class="function">
      <div class="iframe-box-title transition-color">表单选择器</div>
      <div class="where">
        <p class="title-2">where：所有p标签和div标签下的span改为黄色</p>
        <div class="box-where">
          <p><span>p标签内的span内容</span></p>
          <div><span>div标签内的span内容</span></div>
          <div><i>div标签内的i内容</i></div>
        </div>
      </div>
      <div class="is">
        <p class="title-2">is：div标签下的内容改为绿色，其span标签单独改为黄色</p>
        <div class="box-is">
          <p><span>p标签内的span内容</span></p>
          <div><span>div标签内的span内容</span></div>
          <div><em>div标签内的em内容</em></div>
        </div>
      </div>
      <div class="has">
        <p class="title-2">has：p标签下有span标签添加颜色</p>
        <div class="box-has">
          <p><span>p标签内的span内容</span></p>
          <p><b>p标签内的b内容</b></p>
          <div><b>div标签内的span内容</b></div>
        </div>
      </div>
      <div class="not">
        <p class="title-2">not：非p标签、且p标签下非span标签的文本颜色不添加颜色</p>
        <div class="box-not">
          <p><span>p标签内的span内容</span></p>
          <p><i>p标签内的i内容</i></p>
          <div><span>div标签内的span内容</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
#ifrname-box {

  p,
  div,
  em,
  i,
  b {
    color: var(--primary-info);
  }

  > div {
    margin-bottom: 1.5625rem;

    &.link {
      a:link {
        color: blue
      }

      a:visited {
        color: #ccc
      }

      a:hover {
        color: red
      }

      a:active {
        color: green
      }

      ul {
        padding-left: 10px;

        li {
          font-size: .875rem;
          margin-bottom: 10px;
        }
      }
    }

    &.input {
      label:focus-within {
        border-color: #fff;
        border-style: dashed;
        background: lightcoral;
        color: #fff;
      }

      input:placeholder-shown {
        background-color: skyblue;
        border: 2px solid darkorange;
        border-radius: 5px;
      }

      ::selection {
        background: red;
        color: #fff;
      }

      li {
        margin-bottom: 3.125rem;

        &:last-child {
          margin-bottom: 0;
        }

        &:first-letter {
          font-weight: bold;
          font-size: 4em;
          text-transform: uppercase;
          float: left;
          line-height: 1;
          margin-right: 10px;
        }
      }

      input {
        margin-right: 10px ;

        &:checked {
          color: red ;
        }

        &:disabled {
          color: blue ;
        }

        &:read-only {
          color: yellow ;
        }
      }
    }

    &.element .box {
      p, div {
        font-size: 14px;
        margin-bottom: 5px;
      }
      :first-child {
        font-size: 12px;
      }

      :last-child {
        font-size: 20px;
      }

      :nth-child(2) {
        color: red;
      }

      p:nth-of-type(2) {
        color: blue;
      }

      :nth-last-child(2) {
        color: orange;
      }

      p:nth-last-of-type(2) {
        color: green;
      }
    }

    &.function {
      .title-2 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: .8125rem;
      }

      .box-where,
      .box-has,
      .box-is,
      .box-not {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 15px;
      }

      .box-where {
        :where(div, p) span {
          color: yellow;
        }
      }

      .box-has {
        &:has(> p) span {
          color: yellow;
        }
      }

      .box-is {
        div em {
          color: green;
        }

        :is(div) span {
          color: yellow !important;
        }
      }

      .box-not {
        :not(div) :not(i) {
          color: yellow;
        }
      }
    }
  }
}
</style>