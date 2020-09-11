<template>
    <section class="tab1">
        <el-button type="primary" plain>Tab1</el-button>
    </section>
</template>

<script>
export default {
    data() {
        return {
            school : 'wonders'
        };
    },
    methods: {
        printSchool(){
            console.log(this.school);
        }
    },
    components: {}
};
</script>

<style lang="less" scoped>
</style>
