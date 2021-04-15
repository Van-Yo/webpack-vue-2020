<template>
  <section class="book-area">
    <div class="container">
      <!-- <Header></Header> -->
      book
      <ul ref="ulNode" @click ='goToBookDetail'>
        <li
          v-for="(item, index) in noteList"
          :key="index"
          :data-index="JSON.stringify(item)"
        >
          {{ item.value }}
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
// import Header from '@components/common/Header.vue';
export default {
  data() {
    return {
      bookList: ['西游记', '水浒传', '三国演义', '红楼梦'],
      noteList : [
        {key:1,value:'西游记'},
        {key:2,value:'西游记1'},
        {key:3,value:'西游记2'},
        {key:4,value:'西游记3'}
      ],
      newObj : {
        like : '西瓜'
      }
    };
  },
  methods: {
		goToBookDetail(e){
      if (e.target.nodeName.toLowerCase() === 'li') {
        JSON.stringify
            const index = parseInt(e.target.dataset)
            console.log(e.target.dataset.index)
            // console.log(index)
            // 获得引索后，只需要修改data数据就能改变UI了
            // this.doSomething(index)
          }
      // console.log(this.$refs.ulNode);
      
      // alert(item);
			// this.$router.push({path:'/bookDetail',query: {item}})
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
    // Header
  },
};
</script>

<style lang="less" scoped></style>
