<script setup lang="ts">
const pasteRef = ref();

onMounted(() => {
  pasteRef.value.addEventListener("copy", function (e) {
    console.log("e", e.target.innerHTML, navigator);
    navigator.clipboard.writeText(
      e.target.innerHTML + `来源：刀刀小站<br/>每天都要更努力`
    );
  });
});
</script>

<template>
  <div ref="pasteRef" class="">
    <ol>
      <li class="">
        <p>获取浏览器cookie值</p>
        <code
          >const cookie = name => `; ${document.cookie}`.split(`;
          ${name}=`).pop().split(';').shift(); cookie('_ga');</code
        >
      </li>
      <li class="">
        <p>将RGB转换为16进制</p>
        <code
          >const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8)
          + b).toString(16).slice(1); rgbToHex(0, 51, 255); // Result:
          #0033ff</code
        >
      </li>
      <li class="">
        <p>
          复制到剪切板（使用 navigator.clipboard.writeText
          轻松将任何文本复制到剪贴板上）
        </p>
        <code
          >const copyToClipboard = (text) =>
          navigator.clipboard.writeText(text); copyToClipboard("Hello
          World");</code
        >
      </li>
      <li class="">
        <p>检查日期是否有效</p>
        <code
          >const isDateValid = (...val) => !Number.isNaN(new
          Date(...val).valueOf()); isDateValid("December 17, 1995 03:24:00"); //
          Result: true</code
        >
      </li>
      <li class="">
        <p>找出一年中的某一天（即给出一个日期，程序给出属于本年的第多少天）</p>
        <code
          >const dayOfYear = (date) => Math.floor((date - new
          Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24); dayOfYear(new
          Date()); // Result: 272
        </code>
      </li>
      <li class="">
        <p>将字符串首字母大写</p>
        <code
          >const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
          capitalize("follow for more") // Result: Follow for more</code
        >
      </li>
      <li class="">
        <p>计算两个日期之间相差的天数</p>
        <code
          >const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() -
          date2.getTime()) / 86400000)

          <br />
          dayDif(new Date("2020-10-21"), new Date("2021-10-22")) // Result: 366
        </code>
      </li>
      <li class="">
        <p>清除所有cookie</p>
        <code
          >const clearCookies = document.cookie.split(';').forEach(cookie =>
          document.cookie = cookie.replace(/^ +/, '').replace(/=.\*/,
          `=;expires=${new Date(0).toUTCString()};path=/`));</code
        >
      </li>
      <li class="">
        <p>生成随机16进制</p>
        <code
          >const randomHex = () => `#${Math.floor(Math.random() *
          0xffffff).toString(16).padEnd(6, "0")}`; console.log(randomHex()); //
          Result: #92b008</code
        >
      </li>
      <li class="">
        <p>数组去重</p>
        <code
          >const removeDuplicates = (arr) => [...new Set(arr)];
          console.log(removeDuplicates([1, 2, 3, 3, 4, 4, 5, 5, 6])); // Result:
          [ 1, 2, 3, 4, 5, 6 ]</code
        >
      </li>
      <li class="">
        <p>从URL中获取查询参数</p>
        <code
          >const getParameters = (URL) => {
          <br />
          URL = JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g,
          '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
          <br />
          return JSON.stringify(URL);
          <br />
          };
          <br />
          getParameters(window.location) // Result: { search : "easy", page : 3
          }
        </code>
      </li>
      <li class="">
        <p>从日期中获取“时分秒”格式的时间</p>
        <code
          >const timeFromDate = date => date.toTimeString().slice(0, 8);
          <br />
          console.log(timeFromDate(new Date(2021, 0, 10, 17, 30, 0))); //
          Result: "17:30:00"
        </code>
      </li>
      <li class="">
        <p>确认奇偶数</p>
        <code
          >//通过数据%2来判断并返回布尔类型 const isEven = num => num % 2 === 0;
          console.log(isEven(2)); // Result: True
        </code>
      </li>
      <li class="">
        <p>求平值</p>
        <code
          >const average = (...args) => args.reduce((a, b) => a + b) /
          args.length; average(1, 2, 3, 4); // Result: 2.5</code
        >
      </li>
      <li class="">
        <p>回到顶部（适用于网页右下角快捷返回功能）</p>
        <code> const goToTop = () => window.scrollTo(0, 0); goToTop(); </code>
      </li>
      <li class="">
        <p>反转字符串</p>
        <code
          >const reverse = str => str.split('').reverse().join('');
          reverse('hello world'); // Result: 'dlrow olleh'
        </code>
      </li>
      <li class="">
        <p>检查数组是否为空</p>
        <code
          >//通过对数组长度判断来确定是否为空 const isNotEmpty = arr =>
          Array.isArray(arr) && arr.length > 0; isNotEmpty([1, 2, 3]); //
          Result: true
        </code>
      </li>
      <li class="">
        <p>获取用户选定的文本</p>
        <code>
          const getSelectedText = () => window.getSelection().toString();
          getSelectedText();
        </code>
      </li>
      <li class="">
        <p>打乱数组</p>
        <code>
          const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
          console.log(shuffleArray([1, 2, 3, 4])); // Result: [ 1, 4, 3, 2 ]
        </code>
      </li>
      <li class="">
        <p>检查用户是否处于暗模式</p>
        <code>
          const isDarkMode = window.matchMedia &&
          window.matchMedia('(prefers-color-scheme: dark)').matches
          console.log(isDarkMode) // Result: True or False
        </code>
      </li>
    </ol>
  </div>
</template>

<style lang="less" scoped>
div {
  padding: 16px 32px;
  border: 1px solid var(--primary-info);
  color: var(--primary-info);
  border-radius: 20px;

  li {
    list-style: auto;
    line-height: 1.5;
    font-size: 14px;
    color: var(--primary-info);
  }
}

@media screen and (max-width: 768px) {
  div {
    padding: 1rem 2rem;
    border: .0625rem solid var(--primary-info);
    border-radius: 1.25rem;

    li {
      font-size: 0.875rem;
    }
  }
}
</style>
