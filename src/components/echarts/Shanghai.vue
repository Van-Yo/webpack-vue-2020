<style lang="less">
.o-echarts {
    min-width: 30px;
    min-height: 30px;
    width: 600px;
    height: 600px;
    //可以控制地图的位置
}
.prince-list{
    margin-left: 100px;
    .single{
        padding: 10px;
        font-size: 20px;
        color: #fff;
        cursor: pointer;
    }
    .active{
        background: #FEB6AA;
    }
}
</style>
<template>
    <div class="flex flex-ac">
        <div id="echartMap" class="o-echarts"></div>
        <div class="prince-list">
            <div @click="highLightPrince(index)" class="flex single" :class="activeIndex===index ? 'active' : ''" v-for="(item,index) in listArr" :key="index">
                <div class="name">{{item.full_name}}</div>
                <div class="num">{{item.num}}</div>
            </div>
        </div>
    </div>
</template>

<script>
//   import {registrationStatistics} from '@/api/business.js'
import echarts from 'echarts';
import JSON from './data/shanghai.json';
export default {
    name: 'echart-map',
    data() {
        return {
            activeIndex : '',
            echartObj: null,
            radioActive: 'A',
            option: {
                title: {
                    text: '',
                    top: '1%',
                    left: '8%',
                    textStyle: {
                        fontSize: 18,
                        fontWeight: 300,
                        color: '#b6d7ff',
                    },
                },
                //鼠标放上去的文字提示
                tooltip: {
                    padding: 0,
                    backgroundColor: '#6B99FF',
                    padding: 10,
                    textStyle: {
                        color: '#fff',
                        lineHeight: '18px',
                    },
                    formatter: (params) => {
                        return (
                            params.name +
                            '<br/>' +
                            '共计：' +
                            params.value +
                            '家'
                        );
                    },
                },
                // 选择条
                // visualMap: {
                //     min: 0,
                //     max: 500,
                //     top: '7%',
                //     right: '84%',
                //     show: true,
                //     splitNumber: 5,
                //     inRange: {
                //         color: ['#6B99FF'],
                //     },
                //     textStyle: {
                //         color: '#444',
                //     },
                //     splitList: [
                //         { start: 500, end: 600 },
                //         { start: 400, end: 500 },
                //         { start: 300, end: 400 },
                //         { start: 200, end: 300 },
                //         { start: 100, end: 200 },
                //         { start: 0, end: 100 },
                //     ],
                // },

                geo: {
                    map: '上海',
                    label: {
                        normal: {
                            show: true,
                            //地图中省份和数量的显示
                            // formatter: this.formatter,
                            color: '#fff',
                        },
                        emphasis: {
                            show: true,
                            color: '#fff',
                        },
                    },
                    // 鼠标滚动放大缩小
                    roam: false,
                    // 区域块设置
                    itemStyle: {
                        normal: {
                            areaColor: '#3D96C5',
                            borderColor: '#fff',
                            borderWidth: 1,
                        },
                        emphasis: {
                            areaColor: '#feb6aa', // hover效果
                        },
                    },
                    left: '5%',
                    right: '5%',
                    top: '5%',
                    bottom: '5%',
                },
                series: [
                    {
                        name: '',
                        type: 'map',
                        mapType: 'shanghai',
                        geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                        data: [],
                    },
                ],
            },
        };
    },
    computed: {
        _show: {
            get: function () {
                return this.show;
            },
            set: function (newVal) {
                this.$emit('update:show', newVal);
            },
        },
    },
    watch: {
        show: {
            immediate: true, //templat父组件中需要深度监听可以监听到
            handler(newValue, oldValue) {
                console.log(newValue);
                console.log('进入到监听部分');
                if (newValue) {
                    this.$nextTick(() => {
                        //此处使用这个可以等节点渲染后再获取节点
                        this.charts();
                    });
                }
            },
        },
        activeIndex : {
            handler(newValue, oldValue) {
                if(newValue != oldValue){
                    this.echartObj.dispatchAction({ type: 'downplay', name:this.listArr[oldValue].full_name});//取消高亮
                }
            },
        }
    },
    props: {
        serviceTypeId: {
            type: String,
        },
        //从后台接口获取来的数据
        listArr: {
            type: Array,
        },
        mouseenterFlag: {
            type: Boolean,
            default: false,
        },
        show: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        this.charts();
    },
    methods: {
        highLightPrince(index){
            // this.echartObj.dispatchAction({ type: 'downplay', name:'崇明区'});//取消高亮
            this.activeIndex = index;
            this.echartObj.dispatchAction({ type: 'highlight', name:this.listArr[index].full_name});
        },
        charts() {
            this.$nextTick(() => {
                this.echartObj = echarts.init(
                    document.getElementById('echartMap')
                );
                echarts.registerMap('上海', JSON);
                console.log('==========JSON.features============');
                console.log(JSON.features);
                this.echartObj.setOption(this.getOptions(), true);
                // 鼠标进入模块触发事件
                // this.echartObj.on('mouseover',function(param){
                //     console.log(param);
                // });
                // 鼠标移出模块触发事件
                // this.echartObj.on('mouseOut',function(param){
                //     console.log(param);
                // });
                window.addEventListener('resize', () => {
                    if (this.echartObj && this.echartObj.resize) {
                        this.echartObj.resize();
                    }
                });
            });
        },

        getOptions() {
            this.setOptions(
                'series',
                (() => {
                    console.log(this.listArr);
                    const arr = [];
                    arr['push']({
                        // name: item,
                        type: 'map',
                        geoIndex: 0, // 不可缺少，否则无tooltip 指示效果
                        data: this.getSeriesData(),
                    });
                    return arr;
                })()
            );
            return this.option;
        },

        getSeriesData() {
            console.log('=====================3=====================');
            return this.listArr.map((item) => {
                return {
                    name: item.full_name,
                    value: item.num,
                    obj: {
                        a: Math.ceil(Math.random() * 500),
                        b: Math.ceil(Math.random() * 500),
                        c: Math.ceil(Math.random() * 500),
                        d: Math.ceil(Math.random() * 500),
                    },
                };
            });
        },
        setOptions(objKey, objVal) {
            console.log('===================4=======================');
            console.log(objKey);
            console.log(objVal);
            console.log(this.option);
            if (
                this.option[objKey] &&
                typeof this.option[objKey] === 'object' &&
                !Array.isArray(this.option[objKey])
            ) {
                this.option[objKey] = Object.assign(
                    this.option[objKey],
                    objVal
                );
            } else {
                this.option[objKey] = objVal;
            }
            this.$set(this.option, objKey, this.option[objKey]);
            console.log(this.option);
        },
        formatter(val) {
            console.log(val);
            var value = '';
            this.option.series[0].data.map((e) => {
                if (e.name == val.name) {
                    value = e.value;
                }
            });
            var strs = (val.name + value).split(''); //字符串数组
            var str = '';
            console.log(strs);
            for (let i = 0, s; (s = strs[i++]); ) {
                //遍历字符串数组
                str += s;
                if (
                    val.name == '普陀区' ||
                    val.name == '静安区' ||
                    val.name == '虹口区' ||
                    val.name == '黄浦区' ||
                    val.name == '徐汇区' ||
                    val.name == '长宁区' ||
                    val.name == '杨浦区'
                ) {
                    str = value; //按需要求余
                } else if (val.name == '浦东新区') {
                    if (!(i % 4)) str += '\n'; //按需要求余
                } else {
                    if (!(i % 3)) str += '\n'; //按需要求余
                }
            }
            str = str + '家';
            return str;
        },
    },
};
</script>