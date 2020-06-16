import http from '@utils/http.js';

class requestTest{
    constructor(){}
    getAddressList(){
        return http.get('http://localhost:3300/book/getBookList');
    }
    getMockData(){
        return http.get('http://localhost:8080/daduhui/test');
    }
    // getProxyData(){
    //     return http.get('/api/user/findAllUsers');
    // }
}

export default new requestTest();