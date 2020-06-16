import axios from 'axios';
import storage from './storage.js';
import vue from 'vue';
const Vue = new vue();
/**
 * 基于axios的http请求配置
 */
class http{
    constructor(){}
    /**
     * 基于baseHttp封装的get请求
     * @param {请求地址} url
     * @param {请求入参} params
     * @param {其他} options
     */
    get(url,params,options){
        return this.baseHppt(url,'get',params,options);
    }
    /**
     * 基于baseHttp封装的post请求
     * @param {请求地址} url
     * @param {请求入参} params
     * @param {其他} options
     */
    post(url,params,options){
        return this.baseHppt(url,'post',params,options);
    }
    /**
     * 基于axios封装的异步请求
     * @param {请求地址} url
     * @param {请求类型} method
     * @param {请求参数} params
     * @param {其他} options
     */
    baseHppt(url,method,params,options){
        let header = storage.getRequestHeader();
        header = options && options.header ? options.header : header;
        return new Promise((resolve,reject) => {
            let config = {
                method:method,
                url:url,
                headers:header
            };
            if(method == 'get'){
                config.params = params;
            }
            if(method == 'post'){
                config.data = params;
            }
            if(!config.url){
                reject({
                    status:400,
                    message:'非法请求地址'
                });
            }
            Vue.$loading(true);
            axios(config).then(result => {
                Vue.$loading(false);
                resolve(result);
            }).catch(err => {
                Vue.$loading(false);
                let errorObj;
                if(err.response){
                    errorObj = err.response.data;
                }else if(err.request){
                    errorObj = {
                        status:500,
                        message:'网络异常'
                    };
                }else{
                    errorObj = err;
                }
                reject(errorObj);
            });
        });
    }
}
export default new http();