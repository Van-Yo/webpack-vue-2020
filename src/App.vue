<template>
    <section class="">
        this is a Vue app
        <button>
            <span>hello!!!</span>
        </button>
        <input type="text" placeholder="你好">
    </section>
</template>

<script>
import bgImg from '../src/assets/images/bg.jpg';
import '../src/assets/styles/test.css';
export default {
    data() {
        return {};
    },
    methods: {},
    components: {},
    created(){
        console.log(bgImg);
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
</style>
