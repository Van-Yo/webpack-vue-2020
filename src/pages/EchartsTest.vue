<template>
    <section class="template-area">
        <h1>Echarts Shanghai Prinvince</h1>
        <Shanghai :listArr="listArr"></Shanghai>
        <div id="data-zoom"></div>
    </section>
</template>

<script>
import Shanghai from '../components/echarts/Shanghai.vue';
let echarts = require('echarts/lib/echarts');
// // 引入饼图
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/component/legend');
require('echarts/lib/component/tooltip');
export default {
    data() {
        return {
            listArr : [
                {
                    full_name : '崇明区',
                    num : 100
                },
                {
                    full_name : '嘉定区',
                    num : 200
                },
                {
                    full_name : '宝山区',
                    num : 300
                },
                {
                    full_name : '青浦区',
                    num : 100
                },
                {
                    full_name : '闵行区',
                    num : 200
                },
                {
                    full_name : '松江区',
                    num : 300
                },
                {
                    full_name : '浦东新区',
                    num : 100
                },
                {
                    full_name : '奉贤区',
                    num : 200
                },
                {
                    full_name : '金山区',
                    num : 300
                },
            ]
        };
    },
    created(){},
    mounted(){
        this.init();
    },
    methods: {
        init(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('data-zoom'));
            myChart.setOption({
                title:{
                    // left:20,
                    // top:10,
                    padding:[10,0,5,20],
                    textStyle:{
                        color:'yellowgreen',
                    },
                    text:'营业额统计',
                    subtext:'副标题'
                },
                legend: {
                    top: 30,
                    left:100
                    // padding:[100,0,10,15]
                },
                tooltip:{//组件提示
                    trigger:'axis',
                    axisPointer:{
                        type: 'cross'
                    }
                },
                dataZoom:[
                    {
                        type:'slider',//slider表示有滑动块的，inside表示内置的
                        show:true,
                        xAxisIndex:[0],
                        start:10,
                        end:35
                    }
                ],
                xAxis:{
                    data:['23:00-8:00','8:00-10:00','10:00-12:00','12:00-14:00','14:00-16:00','16:00-18:00','18:00-20:00','20:00-22:00']
                },
         
                yAxis:{},
                series:[
                    {
                        name:'销量',
                        type: 'line',
                        data:[100, 200, 150, 99, 43.3, 85.8, 93.7]
                    },
                    {  
                        name:'支付宝',
                        type: 'line',
                        data:[3.1, 258.4, 55.1, 0, 9, 50, 100,60]
                    },
                    {
                        name:'会员卡',
                        type: 'line',
                        data:[0.4, 3.2, 82.5,30, 40, 300, 15, 10]
                    }
                ]
            });

           
            //根据窗口的大小变动图表 --- 重点
            // window.addEventListener('resize', () => {
            //     myChart.resize();
            // });
        },
    },
    components: {
        Shanghai
    }
};
</script>

<style lang="less" scoped>
.template-area{
    height: 100%;
    background: #404958;
    h1{
        color: #fff;
        font-size: 24px;
        padding: 15px 0 10px;
        text-align: center;
    }
    #data-zoom{
        width: 500px;
        height: 400px;
    }
}
</style>
