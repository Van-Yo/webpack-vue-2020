<template>
    <section class="template-area">
        test
        <ListCom :listArr="list"></ListCom>
    </section>
</template>

<script>
import ListCom from './ListCom.vue';
export default {
    data() {
        return {
            list : []
        };
    },
    created(){
        setTimeout(()=>{
            this.list.push({name:'vanlus',level:'001'})
        },3000)
    },
    methods: {},
    components: {
        ListCom
    }
};
</script>

<style lang="less" scoped>
.template-area{
}
</style>
