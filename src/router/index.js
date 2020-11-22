import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//路由文件自动配置，不需要手动引用
const requireContext = require.context('./', false, /\.js$/);
let moduleRouter = [];
requireContext.keys().forEach(fileName => {
    // 排除本文件
    if (!/index/g.test(fileName)) {
        let list = requireContext(fileName).default;
        moduleRouter.push(...list);
    }
});
/**
 * 基础路由，不需要权限就能访问
*/
export const baseArr = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import(/* webpackChunkName: "home" */'../pages/login/Index.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/home',
        component: () => import(/* webpackChunkName: "home" */'../pages/Home.vue'),
        meta: {
            title: '首页'
        }
    }
];
/**
 * 动态路由，需要判断权限动态挂载路由
*/
export const asyncRoutes = [
    {
        path : '/nav',
        component: () => import(/* webpackChunkName: "permission" */'../pages/asyncPages/RoleHome.vue'),
        children:[
            {
                path: 'page1',
                name: 'Page1',
                component: () => import(/* webpackChunkName: "permission" */'../pages/asyncPages/RolePage1.vue'),
                meta: { roles: ['SHSWJW31000'] }
              },
              {
                path: 'page2',
                name: 'Page2',
                component: () => import(/* webpackChunkName: "permission" */'../pages/asyncPages/RolePage2.vue'),
                meta: { roles: ['SHSWJW31000','SHSWJW31001'] }
              },
              {
                path: 'page3',
                name: 'Page3',
                component: () => import(/* webpackChunkName: "permission" */'../pages/asyncPages/RolePage2.vue'),
                meta: { roles: ['SHSWJW31002'] }
              }
        ]
    },
    /**
     * 注意：如果有动态路由的时候，需要将跳转404页面放在动态路由，而不是放在外面
    */
    { path: '*', redirect: '/errorPage', hidden: true }
  ]
/**
 * 路由错误页面配置
*/
let errorList = [{
    path: '/errorPage',
    component: () => import(/* webpackChunkName: "errorPage" */'../pages/ErrorPage.vue'),
    meta: {
        title: '缺省页'
    }
}];
let routes = [
    ...baseArr,
    ...moduleRouter,
    ...errorList
];
const index = new VueRouter({
    // mode: 'history',
    routes
});
export default index;