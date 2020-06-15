<template>
    <section class="book-detail-area">
        <div class="container">
            这是{{$route.query.item}}的详情
            <Footer></Footer>
        </div>
    </section>
</template>

<script>
import Footer from '@components/common/Footer.vue';
export default {
    data() {
        return {};
    },
    methods: {},
    components: {
        Footer
    }
};
</script>

<style lang="less" scoped>
</style>
