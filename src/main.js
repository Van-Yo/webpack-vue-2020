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
import Storage from './utils/storage';

Vue.use(ElementUI);
Vue.use(dialog);


/**
 * 注：路由守卫必须放在new Vue之前，否则页面刷新时路由守卫不执行
*/
// flag用于只有初始化或者刷新页面时才动态增加路由
let flag = true;
const whiteList = ['/login', '/errorPage'] // 免登录白名单
router.beforeEach(async (to, from, next) => {
    let token = Storage.getUserInfo();
    // 判断登录状态
    if (token) {
        let routeHome;
        if(token.role[0] == 'SHSWJW31000'){
            routeHome = '/nav/page1'
        }else if(token.role[0] == 'SHSWJW31002'){
            routeHome = '/nav/page3'
        }
        // 判断登录后跳转哪个页面，根据业务需求而定
        if (to.path === '/login' || to.path === '/nav' || to.path === '/nav/') {
            next({ path: routeHome })
            // next()
        } else {
            if (flag) {
                let hasRoles = store.state.permission.roles && store.state.permission.roles.length > 0
                if (!hasRoles) {
                    // let userInfo = await store.dispatch('getUser')
                    let userInfo = token;
                    let routes = await store.dispatch('getAsyncRoutes', userInfo.role)
                    router.addRoutes(routes)
                    flag = false;
                    next({ ...to, replace: true }) // 保证路由已挂载
                } else {
                    next()
                }
            }else{
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
            next()
        } else {
            next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
        }
    }
})

new Vue({
    el: '#app',
    router,
    store,
    render: c => c(App),
})