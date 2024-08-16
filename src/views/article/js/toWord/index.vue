<script setup>
import IframeBoxItem from '@/views/article/components/iframeBoxItem/index.vue';
const num = ref(120001003);

const numMap = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
const unitMap = ['', '十', '百', '千'];
const bigUnitMap = ['', '万', '亿'];

// 分批次转中文
const wordChange = part => {
    // 为零的情况
    if (part === '0000' || part === '000' || part === '00' || part === '00' || part === '0') return numMap[0];

    let word = '';
    for (let i = 0; i < part.length; i++) {
        let unit = unitMap[part.length - i - 1];
        let num = numMap[+part[i]];

        // 判断是否为零，为零不需要单位
        if (num === numMap[0]) {
            unit = '';
        }
        word += num + unit;
    }
    return word.replace(/零{2,}/g, '零').replace(/零+$/g, '');
}

// 添加大单位
const unitAdd = list => {
    let result = '';
    for (let i = 0; i < list.length; i++) {
        const part = list[i];
        let unit = bigUnitMap[list.length - 1 - i];
        // 如果是零，不设置单位
        if (part === numMap[0]) {
            unit = '';
        }
        result += part + unit;
    }
    return result.replace(/零{2,}/g, '零').replace(/零+$/g, '');
}

const changeList = ref([]);

// 转换函数
const toChineseNumber = num => {
    const nummStr = num
        .toString()
        .replace(/(?=(\d{4})+$)/g, ',')
        .split(',')
        .filter(Boolean);

    let arr = [];
    for (let i = 0; i < nummStr.length; i++) {
        let part = wordChange(nummStr[i]);
        arr.push(part);
    }
    const res = unitAdd(arr);
    changeList.value.push({
        num,
        word: res,
    })
}

// 点击转换按钮
const handleChange = () => {
    toChineseNumber(num.value);
}
</script>

<template>
    <IframeBoxItem title="数字转中文"
        :needCode="false"
        column
        class="ifrname-box box">
        <div class="input">
            <input class=""
                type="number"
                v-model="num"
                name="num"
                id="num"
                placeholder="请输入要转化的数字">
            <button class=""
                @click.stop="handleChange">转换</button>
        </div>
        <div class="list">
            <div v-for="(item, index) in changeList"
                :key="index"
                class="item">
                <div class="item-num ">数字：{{ item.num }}</div>
                <div class="item-word ">转换后：{{ item.word }}</div>
            </div>
        </div>
    </IframeBoxItem>
</template>

<style lang="less"
    scoped>
    .box {
        .input {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            input {
                width: 300px;
                height: 30px;
                border: 1px solid var(--primary-border);
                padding: 0 10px;
                color: var(--catalogue-word);
                background-color: var(--catalogue-bg);
            }

            button {
                margin-left: 10px;
            }
        }

        .list {
            flex-direction: column;

            .item {
                display: flex;
                align-items: center;
                margin-bottom: 10px;

                >div {
                    color: var(--primary-info);

                    &.item-num {
                        min-width: 30%;
                    }

                    &.item-word {
                        margin-left: 20px;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .box {
            .input {
                margin-bottom: 1.25rem;

                input {
                    width: 18.75rem;
                    height: 1.875rem;
                    border: .0625rem solid var(--primary-border);
                    padding: 0 .625rem;
                    font-size: 1rem;
                }

                button {
                    margin-left: .625rem;
                }
            }

            .list {
                max-height: 50rem;
                overflow-y: auto;

                .item {
                    margin-bottom: .625rem;

                    >div {
                        font-size: .875rem;

                        &.item-word {
                            margin-left: 1.25rem;
                        }
                    }
                }
            }
        }
    }
</style>