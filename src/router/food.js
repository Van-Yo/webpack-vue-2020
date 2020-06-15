const food = [
    {
        path: '/food',
        component: () => import(/* webpackChunkName: "food" */'../pages/food/Index.vue'),
        meta: {
            title: '美食'
        }
    }
];
export default food;