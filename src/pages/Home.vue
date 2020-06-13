<template>
	<section class="home-area">
		<div class="container">
			<ul>
				<li @click="goToBook">图书</li>
				<li @click="goToFood">美食</li>
			</ul>
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
		}
	},
	components: {}
};
</script>

<style lang="less" scoped>
</style>
