// 1.创建vue根实例
// 2.挂载App组件
import Vue from 'vue';
import App from './App.vue';
import './assets/styles/reset.css';
import router from './router/index';
new Vue({
    el:'#app',
    router,
    render: c => c(App),
})