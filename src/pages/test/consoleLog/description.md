## 问题
之前写vue项目的时候,涉及到watcher监听props中的数据时，总产生一个未知的bug,利用`console log`去排除问题，却找不出问题所在。举例：
``` js
// 父组件（部分代码省略）
<template>
    <section>
        <ListCom :listArr="list"></ListCom>
    </section>
</template>

<script>
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
    }
};
</script>
```

``` js
// 子组件
<template>
    <section class="template-area">
        <ul>
            <li v-for="(item,index) in listArr" :key="index">{{item.name}}</li>
        </ul>
    </section>
</template>

<script>
export default {
    props :{
        listArr : {
            type : Array
        }
    },
    watch:{
        listArr : {
            handler(newVal,oldVal){
                if(newVal != oldVal){
                    console.log('变化了');
                    console.log(newVal);
                    console.log(newVal[0].name);
                }
            },
            deep :true,
            immediate : true
        }
    }
};
</script>
```
这时候，F12查看控制台，报错了：
```
[Vue warn]: Error in callback for immediate watcher "listArr": "TypeError: Cannot read property 'name' of undefined"
```
再去console log 看一下输出了什么？
``` js
// 变化了
// [{name:'vanlus',level:'001'}]
```
这就很奇怪了，明明有值，为什么还报错。

## 原因
> 在WebKit中,JavaScript中的console.log函数是异步的

浏览器F12打开控制台,分别敲下面这两段代码,并且拉开显示全部结果，你就会发现问题了：
``` js
var arr = [1,2,3,4]
console.log(arr)
arr.push(5)
console.log(arr)
```

``` js
var obj = {}
console.log(obj)
obj.foo = 'bar'
console.log(obj)
```
显示的不一样，但拉开发现结果是一样的，这是为什么呢？《JavaScript异步编程》书中是这么解释的：
> WebKit的console.log并没有立即拍摄对象快照，相反，它只存储了一个指向对象的引用，然后在代码返回事件队列时才去拍摄快照。而chrome的内核正是webkit；Node的console.log是另一回事，它是严格同步的，因此同样的代码输出却是正确的书中指出，JavaScript 环境提供的异步函数一般分为两大类：I/O函数和计时函数。console.log就是一个I/O函数。对于引用类型，console.log会先储存一个引用，因此在打印引用类型时结果不一定准确。

所以 console.log 到底是同步还是异步取决于运行环境。

## 解决方案
对于引用类型的值，父组件中data里面有初始值，并且通过接口（异步）获取新值再传输给子组件并使用该值时，建议这么写，后续待完善。
``` js
watch:{
    listArr : {
        handler(newVal,oldVal){
            if(newVal.length){
                console.log(newVal[0].name);
            }
        },
        deep :true,
        immediate : true
    }
},
```

未完待续 :D