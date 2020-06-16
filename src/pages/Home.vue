<template>
	<section class="home-area">
		<div class="container">
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
			<!-- <div>
				<el-button type="primary" @click="getProxyData" plain>获取proxy数据</el-button>
			</div> -->
			<Footer></Footer>
		</div>
	</section>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions } from 'vuex';
import Footer from '@components/common/Footer.vue';
import Storage from '@utils/storage.js';
import requestTest from '@requests/requestTest.js';
export default {
	data() {
		return {};
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
		// getProxyData(){
		// 	requestTest.getProxyData().then(res=>{
		// 		console.log(res);
		// 	})
		// }
	},
	created(){
		console.log(IS_ENCRYPT);
	},
	components: {
		Footer
	}
};
</script>

<style lang="less" scoped>
</style>
