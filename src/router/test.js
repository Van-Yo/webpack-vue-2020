const test = [
    {
        path: '/testClg',
        component: () => import(/* webpackChunkName: "test" */'../pages/test/consoleLog/Index.vue'),
        meta: {
            title: '书籍'
        }
    }
];
export default test;