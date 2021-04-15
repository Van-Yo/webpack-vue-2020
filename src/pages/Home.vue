<template>
    <section class="home-area">
        <Tab1 ref="tab1"></Tab1>
        <Tab2 ref="tab2"></Tab2>
        <el-button type="primary" @click="clickRef" plain>保存</el-button>
        <el-button type="primary" @click="testAsync" plain>测试async</el-button>
        <el-button type="primary" @click="getAddressList" plain>测试获取mock数据</el-button>
        <el-button type="primary" @click="()=>{$router.push('/book')}" plain>book</el-button>
        <el-button type="primary" @click="testClg" plain>测试console log bug</el-button>
        <div>
            <el-button @click="goToSvgPage" type="warning" icon="el-icon-star-off" circle></el-button>
        </div>
        <div>
            <el-button type="primary" @click="testReduceMap" plain>测试reduce重写map方法</el-button>
        </div>
        <div>
            <el-button type="primary" @click="goToHtmlLayoutPage" plain>html布局</el-button>
        </div>
        <div>
            <el-button type="primary" @click="goToCssBorderTranstionPage" plain>CSS 奇思妙想边框动画</el-button>
        </div>
        <div>
            <el-button type="primary" @click="goToSearchList" plain>通讯录</el-button>
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import Storage from '@utils/storage.js';
import requestTest from '@requests/requestTest.js';
import Tab1 from '../components/common/Tab1.vue';
import Tab2 from '../components/common/Tab2.vue';
export default {
    data() {
        return {
            nowDate: '',
            foodList: ['apple', 'banner', 'peach'],
            bookInfo: {
                name: '西游记',
                price: 22
            }
        };
    },
    computed: {
        ...mapState('book', ['num']),
        ...mapGetters('book', ['numAdd1'])
    },
    methods: {
        ...mapMutations('book', ['numIncrement']),
        ...mapActions('book', ['numIncrementAsync']),
        goToSearchList(){
            this.$router.push('/searchList');
        },
        goToHtmlLayoutPage(){
            this.$router.push('/htmlLayout');
        },
        goToCssBorderTranstionPage(){
            this.$router.push('/cssBorderTranstion')
        },
        goToBook() {
            this.$router.push('/book');
        },
        goToFood() {
            this.$router.push('/food');
        },
        loading() {
            this.$loading(true);
            setTimeout(() => {
                this.$loading(false);
            }, 3000);
        },
        toast() {
            this.$toast('请先登录');
        },
        dialog() {
            this.$dialog({
                show: true,
                dialogTitle: 'Dialog', //标题
                dialogStr: '您确定要注销用户吗',
                okBtnStr: '确定',
                cancelBtnStr: '取消',
                okFn: () => {
                    console.log('选择了确定');
                },
                cancelFn: () => {
                    console.log('选择了取消');
                }
            });
        },
        setStoreage() {
            Storage.setRequestHeader({
                name: 'vanlus',
                age: '18'
            });
        },
        getAddressList() {
            requestTest.getAddressList().then(res => {
                console.log(res);
            });
        },
        getMockData() {
            requestTest.getMockData().then(res => {
                console.log(res);
            });
        },
        getProxyData() {
            requestTest.getProxyData().then(res => {
                console.log(res);
            });
        },
        getChangetime() {
            this.nowDate = new Date('2020-10-20 13:01:01').format(
                'yyyy-MM-dd hh:mm:ss'
            );
        },
        /**
         * vue不能检测哪些属性变化
         */
        getChangeFoodList() {
            // 使用下标更新数组元素
            // this.foodList[0] = '苹果'
            // this.$set( this.foodList, 0, '苹果' )

            // 使用赋值方式改变数组长度
            // this.foodList.length = 10;
            // this.$set( this.foodList, 9, '苹果' )

            // 对象增删元素
            // this.bookInfo.level = 1
            // this.$set(this.bookInfo,'level',1);
            this.$delete(this.bookInfo, 'price');
        },
        clickRef() {
            this.$refs.tab1.printSchool();
        },
        p1Promise() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve('P1');
                }, 3000);
            });
        },
        p2Promise(val) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(`${val}收到了`);
                }, 3000);
            });
        },
        async testAsync() {
            let p1 = await this.p1Promise();
            if (p1) {
                let p2 = await this.p2Promise(p1);
                console.log(p2);
            }
        },
        testClg() {
            this.$router.push('testClg');
        },
        goToSvgPage() {
            this.$router.push('svgChoose');
        },
        request(type) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    type == '001' ? resolve('resolve') : reject('reject');
                }, 3000);
            });
        },

        getData(promise) {
            return promise.then(res => {
                return [undefined, res]
            }).catch(err => {
                return [err,undefined]
            });
        },

        async getData2(){
            let err,res
            [err,res] = await this.getData(this.request('001'));
            console.log(err,res);
            if(res){}
        },

        testReduceMap(){
            let arr = [1,2,3,4,5];
            let newArr = arr.reduceMap((item,index)=>{
                return item+1
            })
            alert(newArr)
        }


    },
    created() {
        console.log(IS_ENCRYPT);
        this.getData2();
    },
    components: {
        Tab1,
        Tab2
    }
};
</script>

<style lang="less" scoped>
</style>
