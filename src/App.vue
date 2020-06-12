<template>
    <section class="">
        <h1>this is a Vue app</h1>
        <input type="text" placeholder="请输入你知道的职业" v-model="inputContent">
        <button @click="addProfession">
            <span>添加</span>
        </button>
        <div>
            <ul>
                <li v-for="(item,index) in professionList" :key="index">{{item}}</li>
            </ul>
        </div>
        <div class="header-img">
            <img src="./assets/static/images/dxx.png" alt="">
        </div>
    </section>
</template>

<script>
import bgImg from './assets/images/bg.jpg';
import './assets/styles/test.css';
export default {
    data() {
        return {
            professionList : ['student','teacher','doctor'],
            inputContent : '',
            name : 'vanlus'
        };
    },
    methods: {
        addProfession(){
            if(this.inputContent == '') return;
            this.professionList.push(this.inputContent);
        }
    },
    components: {},
    created(){
        console.log(bgImg);
        let name123 = 'vanlus';
        console.log(name123);
    }
};
</script>

<style lang="less" scoped>
@fontSize : 20px;
button{
    border: 0;
    background: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    span{
        font-size: @fontSize;
        color: #000; 
    }
}
::placeholder{
    color: red;
}
li{
    color: blue;
}
.header-img{
    width: 100px;
    img{
        width: 100%;
    }
}
</style>
