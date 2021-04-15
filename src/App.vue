<template>
    <div class="wsx-body-area">
        <div class="container" v-if="!loginFlag">
            <Header></Header>
            <router-view></router-view>
            <Footer></Footer>
        </div>
        <router-view v-if="loginFlag"></router-view>
    </div>
</template>

<script>
import Header from '@components/common/Header.vue';
import Footer from '@components/common/Footer.vue';
export default {
    // created(){
    //     console.log(this.$route.path)
    // },
    data(){
        return{
            loginFlag : false
        }
    },
    watch: {
        $route(to, from) {
            if(this.$route.path == '/login' || this.$route.path == '/searchList'){
                this.loginFlag = true
            }else{
                this.loginFlag = false
            }
        }
    },
    components:{
        Header,
        Footer
    }
}
</script>

<style lang="less" scoped>
.wsx-body-area {
    width: 100%;
    height: 100%;
    .container {
        min-height: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>
