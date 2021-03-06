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
    }
];
export default test;