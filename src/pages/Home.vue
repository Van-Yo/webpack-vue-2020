<template>
	<section class="home-area">
		<div class="container">
			<el-row>
				<el-button type="primary" @click="goToBook" plain>图书</el-button>
				<el-button type="primary" @click="goToFood" plain>美食</el-button>
				<el-button type="primary" @click="loading" plain>loading</el-button>
				<el-button type="primary" @click="toast" plain>toast</el-button>
				<el-button type="primary" @click="dialog" plain>dialog</el-button>
			</el-row>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
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
		}
	},
	created(){
		console.log(PROJECT_NAME);
	},
	components: {}
};
</script>

<style lang="less" scoped>
</style>
