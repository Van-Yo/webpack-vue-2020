/*
 * @Description: 本地数据管理类
 */
import encrypt from './encrypt';
import {IS_ENCRYPT_CONSTANT} from './constant'

class Storage {
    constructor() {
        this.aesKey = 'c2v8vthjb7ojfa5u'; //aes加密key
        this.requestHeader = 'header'; //请求头本地信息
    }

    /**
     * 加密存储
     * @param {*} key
     * @param {*} value
     */
    encryptSet(key, value) {
        let val = value;
        if ((typeof value).toLocaleLowerCase() === 'object') {
            val = JSON.stringify(value);
        }
        let data = IS_ENCRYPT_CONSTANT ? encrypt.aesEncrypt(val, this.aesKey) : val;
        sessionStorage.setItem(key, data);
    }

    /**
     * 解密获取
     * @param {*} key
     */
    decryptGet(key) {
        let localData = sessionStorage.getItem(key);
        let data =
            localData &&
            (IS_ENCRYPT_CONSTANT
                ? encrypt.aesDecrypt(localData, this.aesKey)
                : localData);
        let result = '';
        try {
            result = JSON.parse(data);
        } catch (error) {
            result = data;
        }
        return result;
    }

    /**
     * 设置本地的请求头信息
     * @param {存放的值} value
     */
    setRequestHeader(value) {
        this.encryptSet(this.requestHeader, value);
    }

    /**
     * 获取本地的请求头信息
     */
    getRequestHeader() {
        return this.decryptGet(this.requestHeader);
    }
}
export default new Storage();