import http from '@utils/http.js';
import {BASE_URL_CONSTANT} from '@utils/constant.js';

class requestTest{
    constructor(){}
    getAddressList(){
        return http.get(`${BASE_URL_CONSTANT}/book/getBookList`);
    }
    getMockData(){
        return http.get(`${BASE_URL_CONSTANT}/daduhui/test`);
    }
    getProxyData(){
        return http.get('/proxy/api/blogList/getBlogList');
    }
    login(data){
        return http.post(`${BASE_URL_CONSTANT}/login`,data)
    }
}

export default new requestTest();