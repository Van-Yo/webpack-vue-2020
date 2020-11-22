<template>
    <div class="login flex-ac flex-pc" clearfix>
        <div class="login-wrap">
            <el-row type="flex" justify="center">
                <el-form
                    ref="loginForm"
                    :model="user"
                    status-icon
                    label-width="80px"
                >
                    <h3>登录</h3>
                    <hr />
                    <el-form-item prop="username" label="用户名">
                        <el-input
                            v-model="user.username"
                            placeholder="请输入用户名"
                            prefix-icon
                        ></el-input>
                    </el-form-item>
                    <el-form-item id="password" prop="password" label="密码">
                        <el-input
                            v-model="user.password"
                            show-password
                            placeholder="请输入密码"
                        ></el-input>
                    </el-form-item>
                    <router-link to="/">找回密码</router-link>
                    <router-link to="/register">注册账号</router-link>
                    <el-form-item>
                        <el-button
                            type="primary"
                            icon="el-icon-upload"
                            @click="doLogin()"
                            >登 录</el-button
                        >
                    </el-form-item>
                </el-form>
            </el-row>
        </div>
    </div>
</template>
 
<script>
import requestTest from '../../requests/requestTest';
import Storage from '../../utils/storage';
export default {
    name: 'login',
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        };
    },
    created() {},
    methods: {
        doLogin() {
            if (!this.user.username) {
                this.$message.error('请输入用户名！');
                return;
            } else if (!this.user.password) {
                this.$message.error('请输入密码！');
                return;
            } else {
                //校验用户名和密码是否正确;
                requestTest
                    .login({
                        username: this.user.username,
                        password: this.user.password,
                    })
                    .then((res) => {
                        Storage.setUserInfo({
                            username: res.data.data.username,
                            role: [res.data.data.orgInfo.ccode], //用户的角色
                        });
                        // 判断登录完之后跳转那个页面，可优化
                        let routeHome;
                        if (res.data.data.orgInfo.ccode == 'SHSWJW31000') {
                            routeHome = '/nav/page1';
                        }else if(res.data.data.orgInfo.ccode == 'SHSWJW31002'){
                            routeHome = '/nav/page3';
                        }
                        // 不加catch路由会因为多次redirect而报错
                        this.$router.push(routeHome).catch((err) => {
                            console.log(err);
                        });
                    });
            }
        },
    },
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
    width: 100%;
    height: 100%;
    background: url("../../assets/images/login_bg.jpg") no-repeat 100% 100%;
    /* background-size: contain; */
    overflow: hidden;
}
.login-wrap {
    /* background: url("../assets/images/login_bg.png") no-repeat; */
    background: #f0f0f0;
    background-size: cover;
    width: 400px;
    height: 300px;
    overflow: hidden;
    padding-top: 10px;
    line-height: 40px;
}
#password {
    margin-bottom: 5px;
}
h3 {
    color: #0babeab8;
    font-size: 24px;
}
hr {
    background-color: #444;
    margin: 20px auto;
}
a {
    text-decoration: none;
    color: #aaa;
    font-size: 15px;
}
a:hover {
    color: coral;
}
.el-button {
    width: 80%;
    margin-left: -50px;
}
</style>