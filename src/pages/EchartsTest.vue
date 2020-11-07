<template>
    <section class="template-area">
        <h1>Echarts Shanghai Prinvince</h1>
        <Shanghai :listArr="listArr"></Shanghai>
    </section>
</template>

<script>
import Shanghai from '../components/echarts/Shanghai.vue';
export default {
    data() {
        return {
            listArr : [
                {
                    full_name : '崇明区',
                    num : 100
                },
                {
                    full_name : '嘉定区',
                    num : 200
                },
                {
                    full_name : '宝山区',
                    num : 300
                },
                {
                    full_name : '青浦区',
                    num : 100
                },
                {
                    full_name : '闵行区',
                    num : 200
                },
                {
                    full_name : '松江区',
                    num : 300
                },
                {
                    full_name : '浦东新区',
                    num : 100
                },
                {
                    full_name : '奉贤区',
                    num : 200
                },
                {
                    full_name : '金山区',
                    num : 300
                },
            ]
        };
    },
    created(){},
    methods: {},
    components: {
        Shanghai
    }
};
</script>

<style lang="less" scoped>
.template-area{
    height: 100%;
    background: #404958;
    h1{
        color: #fff;
        font-size: 24px;
        padding: 15px 0 10px;
        text-align: center;
    }
}
</style>
