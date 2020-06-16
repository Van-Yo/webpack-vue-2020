import http from '@utils/http.js';

class requestTest{
    constructor(){}
    getAddressList(){
        return http.get('http://localhost:3300/book/getBookList');
    }
}

export default new requestTest();