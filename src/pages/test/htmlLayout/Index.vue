<template>
    <section class="html-layout-area">
        <div>
            <h2>一栏布局</h2>
            <div class="main main-1">
                <header></header>
                <main></main>
                <footer></footer>
            </div>
        </div>
        <div>
            <h2>一栏布局（通栏）</h2>
            <div class="main main-2">
                <header></header>
                <main></main>
                <footer></footer>
            </div>
        </div>
        <div>
            <h2>2列布局(calc函数)</h2>
            <div class="main main-3">
                <div class="slider"></div>
                <div class="content"></div>
            </div>
        </div>
        <div>
            <h2>2列布局(flex属性)</h2>
            <div class="main main-4">
                <div class="slider"></div>
                <div class="content"></div>
            </div>
        </div>
        <div>
            <h2>3列布局(双飞翼布局)</h2>
            <div class="main main-5">
                <div class="middle">
                    <div class="content"></div>
                </div>
                <div class="left"></div>
                <div class="right"></div>
            </div>
        </div>
        <div>
            <h2>3列布局(圣杯布局)</h2>
            <div class="main main-6">
                <div class="center"></div>
                <div class="left"></div>
                <div class="right"></div>
            </div>
        </div>
        <div>
            <h2>3列布局(flex布局)</h2>
            <div class="main main-7">
                <div class="left"></div>
                <div class="main"></div>
                <div class="right"></div>
            </div>
        </div>
        <div>
            <h2>垂直方向的布局(flex布局)</h2>
            <div class="height-250">
                <div class="main-8">
                    <header></header>
                    <div class="content">
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>1</div>
                        <div>再加几行试试</div>
                    </div>
                    <footer></footer>
                </div>
            </div>
        </div>
        <div>
            <h2>粘性布局（sticky）</h2>
            <div class="main main-9">
                <header>标题一</header>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <header>标题二</header>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <header>标题三</header>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <header>标题四</header>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
                <div class="content">1</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {};
    },
    created(){},
    methods: {},
    components: {}
};
</script>

<style lang="less" scoped>
.html-layout-area{
    background-color: #fff;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    margin-top: 1px;
    .height-250{
        height: 250px;
        overflow: auto;
    }
    & >div{
        width: 50%;
        height: 300px;
        background: #fff;
        padding: 10px 20px;
        border: 1px solid #f0f0f0;
        h2{
            color: #000;
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: bold;
        }
        .main{
            width: 100%;
            height: 250px;
        }
        .main-1{
            header,footer{
                width: 100%;
                height: 30px;
                margin: 0 auto;
                background: #409eff;
            }
            main{
                width: 100%;
                height: 190px;
                background: #f0f0f0;
                margin: 0 auto;
            }
        }
        .main-2{
            header,footer{
                width: 100%;
                height: 30px;
                background: #409eff;
            }
            main{
                width: 70%;
                height: 190px;
                background: #f0f0f0;
                margin: 0 auto;
            }
        }
        .main-3{
            position: relative;
            .slider,.content{
                height: 100%;
            }
            .slider{
                position: absolute;
                left: 0;
                top: 0;
                width: 30px;
                background: #409eff;
            }
            .content{
                width: calc(100% - 30px);
                background: #f0f0f0;
                margin-left: 30px;
            }
        }
        .main-4{
            display: flex;
            .slider,.content{
                height: 100%;
            }
            .slider{
                width: 30px;
                background: #409eff;
            }
            .content{
                flex:1;
                background: #f0f0f0;
            }
        }
        .main-5{
            &>div {
                float: left;
                height: 100%;
            }
            &:after{
                clear: both;
            }
            .left {
                width: 30px;
                background: #409eff;
                margin-left: -100%;
                
            }

            .right {
                width: 30px;
                background: #409eff;
                margin-left: -30px;
                height: 100%;
            }

            .middle {
                width: 100%;
                background: #f0f0f0;

            }

            .content {
                margin-left: 30px;
                margin-right: 30px;
            }
        }
        .main-6{
            padding: 0 30px 0 30px;
            *zoom: 1;
            >div{
                float: left;
            }
            .center {
                width: 100%;
                height: 100%;
                background: #f0f0f0;
            }
            .left {
                width: 30px;
                height: 100%;
                background: #409eff;
                margin-left: -100%;
                position: relative;
                left: -30px;
            }
            .right {
                width: 30px;
                height: 100%;
                background: #409eff;
                margin-left: -30px;
                position: relative;
                left: 30px;
            }
        }
        .main-7{
            display: flex;
            .left,
            .right {
                width: 30px;
                background-color: #409eff;
            }
            .main {
                flex: 1;
                background-color: #f0f0f0;
            }
        }
        .main-8{
            display: flex; 
            flex-flow: column;
            min-height: 100%;
            background: #f0f0f0;
            header{
                height: 30px;  
                background-color: #409eff;
            }
            .content {
                // flex: 1; 
                background: #f0f0f0;
                height: 100%;
                overflow: auto;
            }
            footer{
                height: 30px;  
                background-color: #409eff;
                margin-top: auto;
            }
        }
        .main-9{
            overflow: auto;
            header {
                position: sticky;
                top: 0;
                height: 30px;
                background-color:#409eff;
            }
        }
    }
}
</style>
