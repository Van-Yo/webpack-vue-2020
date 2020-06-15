<template>
  <section class="book-area">
    <div class="container">
      book
      <ul>
        <li
          v-for="(item, index) in bookList"
          :key="index"
          @click="goToBookDetail(item)"
        >
          {{ item }}
        </li>
      </ul>
      <Footer></Footer>
    </div>
  </section>
</template>

<script>
import Footer from '@components/common/Footer.vue';
export default {
  data() {
    return {
      bookList: ['西游记', '水浒传', '三国演义', '红楼梦'],
    };
  },
  methods: {
		goToBookDetail(item){
			this.$router.push({path:'/bookDetail',query: {item}})
		}
	},
  components: {
    Footer
  },
};
</script>

<style lang="less" scoped></style>
