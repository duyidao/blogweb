<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'RenderItems',
    props: {
        items: {
            type: Array,
            required: true
        },
        parentIndex: {
            type: Array,
            default: []
        },
        parentName: String
    },
    setup(props, {emit}) {
        const data = ref(props.items.map(item => {
            console.log('({...item, show: false}))', item, item.name);
            return {
                ...item,
                name: item.name,
                kind: item.kind,
                show: false
            }
        }))

        console.log('data', data);

        const handleClick = (parentIndex, item) => {
            if (item && item.kind === 'directory') {
                item.show = !item.show;
            }
            else {
                emit('click', parentIndex)
            }
        }

        return {
            data,
            handleClick,
        }
    },
});
</script>

<template>
    <div class="file-list">
        <div v-for="(item, index) in data"
            :key="index"
            class="file-item">
            <div v-if="item.kind === 'file'"
                class="file-item-file"
                @click.stop="handleClick([...parentIndex, index], item)">
                文件: {{ item.name }}
            </div>
            <div v-else
                class="file-item-directory"
                :class="{'active': item.show}"
                @click.stop="handleClick([...parentIndex, index], item)">
                文件夹: {{ item.name }}
                <render-items class="file-list-child" :items="item.children"
                    :parent-index="[...parentIndex, index]"
                    :parent-name="item.name"
                    v-show="item.children && item.show"
                    @click="handleClick" />
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.file-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-left: 20px;
    text-align: left;

    .file-item {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .file-list-child {
        margin-top: 10px;
    }

    .file-item-file {
        cursor: pointer;
    }

    .file-item-directory {
        position: relative;
        cursor: pointer;

        &.active {
            &::before {
                transform: translateY(-1px) rotate(180deg);
            }
        }

        &::before {
            content: '▲';
            position: absolute;
            left: -20px;
            top: 0;
            transform: rotate(90deg);
            transition: transform 0.3s ease;
        }
    }
}
</style>