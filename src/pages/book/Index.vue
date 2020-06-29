<template>
  <section class="book-area">
    <div class="container">
      <Header></Header>
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
      
      <p @click="getData">点我</p>
      {{newObj.like}}
      <Footer></Footer>
    </div>
  </section>
</template>

<script>
import Footer from '@components/common/Footer.vue';
import Header from '@components/common/Header.vue';
export default {
  data() {
    return {
      bookList: ['西游记', '水浒传', '三国演义', '红楼梦'],
      newObj : {
        like : '西瓜'
      }
    };
  },
  methods: {
		goToBookDetail(item){
			this.$router.push({path:'/bookDetail',query: {item}})
		},
    getData(){
      this.$set(this.newObj, 'like', '苹果');
      // this.newObj.disLike = '苹果';
      // this.bookList[0] = 'hahaha';
      this.bookList.length = 6;
      console.log(this.bookList);
      console.log(this.newObj);
    }
	},
  created(){
    // this.newObj = {
      
    // };
    // console.log(this.newObj);
  },
  components: {
    Footer,
    Header
  },
};
</script>

<style lang="less" scoped></style>
