/*
 * @Description: js对象拓展方法
 */
(function () {
    /**
     * 日期格式化拓展函数  new Date().format("yyyy-MM-dd") 返回2019-04-03 
     * new Date().format("yyyy-MM-dd hh:mm:ss") 返回2019-04-03 09:20:10
     */
    Date.prototype.format = function (formatStr) {
        var o = {
            'M+': this.getMonth() + 1, // 月
            'd+': this.getDate(), // 日
            'h+': this.getHours(), // 时
            'm+': this.getMinutes(), // 分
            's+': this.getSeconds(), // 秒
            'q+': Math.floor((this.getMonth() + 3) / 3), // 季节
            'S': this.getMilliseconds() //毫秒数
        };
        if (/(y+)/.test(formatStr)) {
            formatStr = formatStr.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp('(' + k + ')').test(formatStr)) {
                formatStr = formatStr.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return formatStr;
    };
})();