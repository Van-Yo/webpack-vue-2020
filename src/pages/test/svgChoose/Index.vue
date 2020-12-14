<template>
    <section class="svg-area">
        <div class="container">
            <el-row :gutter="20">
                <el-col
                    v-clipboard="`<svg-icon :icon-class=&quot;${index + 1}&quot;/>`"
                    v-clipboard:success="clipboardSuccessHandler"
                    v-clipboard:error="clipboardErrorHandler"
                    :span="2"
                    v-for="(item, index) in 20"
                    :key="index"
                    class="single flex-ac flex-pc"
                >
                    <svg-icon :icon-class="index + 1 + ''" />
                </el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    created() {},
    methods: {
        //定义复制失败的回调
        clipboardSuccessHandler({ value, event }) {
            console.log('success', value);
            this.$message.success('代码复制成功，前往粘贴');
        },
        //定义复制成功的回调方法
        clipboardErrorHandler({ value, event }) {
            console.log('error', value);
        },
    },
    components: {},
};
</script>

<style lang="less" scoped>
.svg-area {
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
    .single {
        cursor: pointer;
        height: 40em;
        &:hover {
            background: #f0f0f0;
        }
    }
}
</style>
