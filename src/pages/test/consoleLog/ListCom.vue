<template>
    <section class="template-area">
        <ul>
            <li v-for="(item,index) in listArr" :key="index">{{item.name}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    props :{
        listArr : {
            type : Array
        }
    },
    watch:{
        listArr : {
            handler(newVal,oldVal){
                if(newVal.length){
                    console.log(newVal[0].name);
                }
                
                // console.log(oldVal,newVal,newVal.length);
                // if(newVal != oldVal){
                //     console.log('变化了');
                //     console.log(newVal);
                //     console.log(newVal[0].name);
                // }
            },
            deep :true,
            immediate : true
        }
    },
    created(){},
    methods: {},
    components: {}
};
</script>

<style lang="less" scoped>
.template-area{
}
</style>
