const test = [
    {
        path: '/testClg',
        component: () => import(/* webpackChunkName: "test" */'../pages/test/consoleLog/Index.vue'),
        meta: {
            title: '书籍'
        }
    },
    {
        path: '/svgChoose',
        component: () => import(/* webpackChunkName: "test" */'../pages/test/svgChoose/Index.vue'),
        meta: {
            title: 'svg图例库'
        }
    },
    {
        path: '/htmlLayout',
        component: () => import(/* webpackChunkName: "test" */'../pages/test/htmlLayout/Index.vue'),
        meta: {
            title: 'html布局'
        }
    },
    {
        path: '/cssBorderTranstion',
        component: () => import(/* webpackChunkName: "test" */'../pages/test/cssBorderTranstion/Index.vue'),
        meta: {
            title: 'CSS 奇思妙想边框动画'
        }
    }
];
export default test;