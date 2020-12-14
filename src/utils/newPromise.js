/*
 * @Author: wanrong 
 * @Date: 2020-11-30 15:06:06 
 * @Last Modified by: wanrong
 * @Last Modified time: 2020-11-30 15:33:14
 */

/**
 * 基于ES6实现一个 Promise
*/

// 定义三种状态 : Pending（进行中）、Fulfilled（已成功）、Rejected（已失败）
const Pending = Symbol('Pending');
const Fulfilled = Symbol('Fulfilled');
const Rejected = Symbol('Rejected');

export default class MyPromise {
    constructor(executor){
        this.status = Pending;
        this.value = undefined;
        this.reason = undefined;
        const resolve = (value) => {
            if(this.status == Pending){
                this.status = Fulfilled;
                this.value = value;
            }
        }
        const reject = (reason) => {
            if(this.status == Pending){
                this.status = Rejected;
                this.reason = reason;
            }
        }
        executor(resolve,reject);
    }
    then(onFulfilled,onRejected){
        if(this.status === Fulfilled){
            if(onFulfilled && typeof onFulfilled === 'function'){
                onFulfilled(this.value);
            }
        }
        if(this.status === Rejected){
            if(onRejected && typeof onRejected === 'function'){
                onRejected(this.reason);
            }
        }
    }
}