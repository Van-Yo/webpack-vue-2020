<template>
    <section class="header-area">
        <div class="container">
            <el-row :gutter="10">
                <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="1"><div class="grid-content bg-purple flex flex-ac flex-ps ">webpack+vue</div></el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :xs="4" :sm="6" :md="6" :lg="6" :xl="11"><div class="grid-content bg-purple"></div></el-col>
                <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="1"><div class="grid-content bg-purple-light flex flex-ac flex-pe">您好啊</div></el-col>
            </el-row>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {},
    components: {}
};
</script>

<style lang="less" scoped>
.header-area{
    border-bottom: 1px solid #dcdfe6;
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #fff;
    }
    .bg-purple {
        color: #409eff;
        font-weight: bold;
        font-size: 30px;
    }
    .bg-purple-light {
        background: #fff;
        font-size: 13px;
        color: #888;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 80px;
    }
}
</style>
