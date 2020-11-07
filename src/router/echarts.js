const echarts = [
    {
        path: '/echarts',
        component: () => import(/* webpackChunkName: "echarts" */'../pages/EchartsTest.vue'),
        meta: {
            title: '美食'
        }
    }
];
export default echarts;