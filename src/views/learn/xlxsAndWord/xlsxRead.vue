<script setup>
import vueOfficeExcel from '@vue-office/excel'
import '@vue-office/excel/lib/index.css'

const file = ref(null)

const changeFn = e => {
    file.value = e.target.files[0] // 读取文件数据
}
</script>

<template>
    <div class="xlsx">
        <input type="file"
            name="file"
            id="file"
            @change="changeFn">
        <vueOfficeExcel v-if="file" :src="file" style="height: 500px;" />
    </div>
</template>

<style lang="less"
    scoped>
    .xlsx {
        margin-top: 15px;

        .input {
            display: flex;
            align-items: center;
            color: var(--primary-info);

            input {
                width: 150px;
                height: 35px;
                border: 1px solid var(--primary-bg);
                margin-right: 20px;
                padding-left: 15px;
                color: var(--primary-info);
                background-color: var(--catalogue-bg);
            }

            button {
                height: 30px;
            }
        }

        table {
            margin-top: 15px;
        }
    }

    @media screen and (max-width: 768px) {
        .xlsx {
            margin-top: .9375rem;

            .input {

                input {
                    width: 9.375rem;
                    height: 2.1875rem;
                    border: .0625rem solid var(--primary-bg);
                    margin-right: 1.25rem;
                    padding-left: .9375rem;
                }

                button {
                    width: 6.25rem;
                    height: 2.1875rem;
                    border: .0625rem solid var(--primary-bg);
                }
            }

            table {
                margin-top: .9375rem;
            }
        }
    }
</style>