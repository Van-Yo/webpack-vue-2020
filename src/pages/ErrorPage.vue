<template>
    <section class="error-page-area">
        <div class="container">
            <img src="../assets/images/err_404.jpg" alt="">
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
.error-page-area{
    height: 100vh;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
    .container{
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center;     /* 垂直居中 */
    }
}
</style>
