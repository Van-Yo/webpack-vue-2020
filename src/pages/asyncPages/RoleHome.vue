<template>
    <section class="role-home-area">
        <header class="flex-ac flex-pc">这是头部</header>
        <div>
            <router-view></router-view>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    created(){},
    methods: {},
    components: {}
};
</script>

<style lang="less" scoped>
.role-home-area{
    width: 100%;
    header{
        width: 100%;
        height: 100px;
        background: #f0f0f0;
    }
}
</style>
