<template>
    <section class="tab2">
        <el-button type="primary" plain>Tab2</el-button>
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
