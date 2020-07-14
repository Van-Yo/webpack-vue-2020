// 1.创建vue根实例
// 2.挂载App组件
import Vue from 'vue';
import App from './App.vue';
import '@assets/styles/reset.css';
import '@assets/styles/public.less';
import router from '@router/index';
// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入自定义组件
import dialog from '@utils/dialog';
// 引入vuex
import store from './store';
// 引入js对象拓展方法
import '@utils/objectExpand';

Vue.use(ElementUI);
Vue.use(dialog);

new Vue({
    el:'#app',
    router,
    store,
    render: c => c(App),
})