// 1.创建vue根实例
// 2.挂载App组件
import Vue from 'vue';
import App from './App.vue';
new Vue({
    el:'#app',
    components:{
        App
    },
    template:'<App/>'
})