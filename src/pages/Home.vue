<template>
	<section class="home-area">
		<div class="container">
			<Header></Header>
			<div>
				<el-row>
					<el-button type="primary" @click="goToBook" plain>图书</el-button>
					<el-button type="primary" @click="goToFood" plain>美食</el-button>
					<el-button type="primary" @click="loading" plain>loading</el-button>
					<el-button type="primary" @click="toast" plain>toast</el-button>
					<el-button type="primary" @click="dialog" plain>dialog</el-button>
				</el-row>
			</div>
			<div>
				<h3>计数器</h3>
				<p>当前数字是：{{num}}</p>
				<p>转换后数字是：{{numAdd1}}</p>
				<el-button type="primary" @click="numIncrement(1)" plain>点我加1</el-button>
				<el-button type="primary" @click="numIncrementAsync" plain>点我三秒后加3</el-button>
			</div>
			<div>
				<el-button type="primary" @click="setStoreage" plain>本地存储数据</el-button>
			</div>
			<div>
				<el-button type="primary" @click="getAddressList" plain>请求接口数据</el-button>
			</div>
			<div>
				<el-button type="primary" @click="getMockData" plain>获取mock数据</el-button>
			</div>
			<div>
				<p>{{nowDate}}</p>
				<el-button type="primary" @click="getChangetime" plain>获取转换后的时间</el-button>
			</div>
			<div>
				<p>{{foodList}}</p>
				<p>{{bookInfo}}</p>
				<el-button type="primary" @click="getChangeFoodList" plain>使用下标更新数组元素</el-button>
			</div>
			<Footer></Footer>
		</div>
	</section>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
import Footer from '@components/common/Footer.vue';
import Header from '@components/common/Header.vue';
import Storage from '@utils/storage.js';
import requestTest from '@requests/requestTest.js';
export default {
	data() {
		return {
			nowDate:'',
			foodList : ['apple','banner','peach'],
			bookInfo : {
				name : '西游记',
				price : 22
			}
		};
	},
	computed : {
		...mapState('book',[
            'num',
        ]),
		...mapGetters('book',[
            'numAdd1',
        ])
	},
	methods: {
		...mapMutations('book',[
			'numIncrement'
		]),
		...mapActions('book',[
			'numIncrementAsync'
		]),
		goToBook(){
			this.$router.push('/book')
		},
		goToFood(){
			this.$router.push('/food')
		},
		loading(){
			this.$loading(true);
			setTimeout(()=>{
				this.$loading(false);
			},3000)
		},
		toast(){
			this.$toast('请先登录');
		},
		dialog(){
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
		setStoreage(){
			Storage.setRequestHeader({name:'vanlus',age:'18'});
		},
		getAddressList(){
			requestTest.getAddressList().then(res=>{
				console.log(res);
			})
		},
		getMockData(){
			requestTest.getMockData().then(res=>{
				console.log(res);
			})
		},
		getChangetime(){
			this.nowDate = new Date('2020-10-20 13:01:01').format('yyyy-MM-dd hh:mm:ss');
		},
		/**
		* vue不能检测哪些属性变化
		*/
		getChangeFoodList(){
			// 使用下标更新数组元素
			// this.foodList[0] = '苹果'
			// this.$set( this.foodList, 0, '苹果' )

			// 使用赋值方式改变数组长度
			// this.foodList.length = 10;
			// this.$set( this.foodList, 9, '苹果' )
			
			// 对象增删元素
			// this.bookInfo.level = 1
			// this.$set(this.bookInfo,'level',1);
			this.$delete(this.bookInfo,'price');
		}
	},
	created(){
		console.log(IS_ENCRYPT);
	},
	components: {
		Footer,
		Header
	}
};
</script>

<style lang="less" scoped>
</style>
