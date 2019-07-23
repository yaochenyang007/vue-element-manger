/**
 * 一些工具方法
 */


const utils = {
    /**
 * 倒计时:cb: 回调，接收剩余秒数,s: 总秒数
 * @param  {function} cb 回调函数
 * @param  {nubmer} s 总秒数
 */
    countDown(cb, s) {
        let timer = setInterval(() => {
            s === 0 ? clearInterval(timer) : --s;
            cb(s);
        }, 1000);
    },
    /**
     * 生成随机字符串
     *  @returns {string} 随机数
     */
    createUniqueStr() {
        let hexDigits = "0123456789abcdef", s = [];
        for (let i = 0; i < 36; i += 1) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            s[14] = "4";
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
            s[8] = s[13] = s[18] = s[23] = "-";
        }
        return s.join("");
    },
    /**
     * 深拷贝,objectCopy(tagData[]):目标数组
     * @param  {Object} obj1 拷贝对象
     * @param  {Object} obj2 新对象
     * @returns {Object} 深拷贝对象
     */
    objectCopy(obj1, obj2) {
        if (!obj2)
            obj2 = obj1.constructor === Array ? [] : {};

        for (let name in obj1) {
            if (typeof obj1[name] === "object") {
                obj2[name] = obj1[name].constructor === Array ? [] : {};
                utils.objectCopy(obj1[name], obj2[name]);
            } else
                obj2[name] = obj1[name];

        }
        return obj2;
    },
    /**
     * 设置存储
     * @param  {string} key 属性
     * @param  {string} value 属性值
     */
    setQuery(key, value) {
        if (process.server) return;
        const data = JSON.stringify(value).replace(/\,/g, '@_@');
        window.localStorage.setItem(key, encodeURI(data));
    },
    /**
     * 获取储存值
     * @param  {string} key 属性
     * @returns  {string} value值
     */
    getQuery(key) {
        const data = window.localStorage.getItem(key);
        return data ? JSON.parse(decodeURI(data).replace(/\@\_\@/g, ',')) : false;
    },
    /**
     * 加
     * @param  {string} a 值
     * @param  {string} b 值
     * @returns  {string} 加运算后的值
     */
    add(a, b) {
        let c, d, e;
        try {
            c = a.toString().split('.')[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split('.')[1].length;
        } catch (f) {
            d = 0;
        }
        e = Math.pow(10, Math.max(c, d));
        return (utils.mul(a, e) + utils.mul(b, e)) / e;
    },
    /**
     * 减
     * @param  {string} a 值
     * @param  {string} b 值
     * @returns  {string} 减运算后的值
     */
    sub(a, b) {
        let c, d, e;
        try {
            c = a.toString().split('.')[1].length;
        } catch (f) {
            c = 0;
        }
        try {
            d = b.toString().split('.')[1].length;
        } catch (f) {
            d = 0;
        }
        e = Math.pow(10, Math.max(c, d));
        return (utils.mul(a, e) - utils.mul(b, e)) / e;
    },
    /**
     * 乘
     * @param  {string} a 值
     * @param  {string} b 值
     * @returns  {string} 乘运算后的值
     */
    mul(a, b) {
        let c = 0;
        let d = a.toString();
        let e = b.toString();
        try {
            c += d.split('.')[1].length;
        } catch (f) { }
        try {
            c += e.split('.')[1].length;
        } catch (f) { }
        return Number(d.replace('.', '')) * Number(e.replace('.', '')) / Math.pow(10, c);
    },
    /**
     * 除
     * @param  {string} a 值
     * @param  {string} b 值
     * @returns  {string} 除运算后的值
     */
    div(a, b) {
        let c, d;
        let e = 0;
        let f = 0;
        try {
            e = a.toString().split('.')[1].length;
        } catch (g) { }
        try {
            f = b.toString().split('.')[1].length;
        } catch (g) { }
        c = Number(a.toString().replace('.', ''));
        d = Number(b.toString().replace('.', ''));
        return utils.mul(c / d, Math.pow(10, f - e));
    },
    /**
     * 下载文件
     * @param  {string} url 值
     */
    downloadFile(url) {
        let form = document.createElement('form');
        form.style.display = 'none';
        form.setAttribute('target', '');
        form.setAttribute('method', 'post');
        form.setAttribute('action', url);
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', 'exportData');
        input.setAttribute('value', (new Date()).getMilliseconds());
        document.body.appendChild(form);
        form.appendChild(input);
        form.submit();
    },
    /**
     * 保存参数到url
     * @param  {string} json 值
     */
    saveToUrl(json) {
        let str = '';
        Object.entries(json).forEach(([ key, value ]) => {
            if (value)
                str += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';

        });
        // 出去最后一个 & 符号
        str = str.substr(0, str.length - 1);
        // 原url已经有参数了
        let hash = '';
        if (location.hash.indexOf('?') > -1) {
            let index = location.hash.indexOf('?');
            hash = location.hash.substr(0, index);
        } else
            hash = location.hash;

        location.replace(hash + '?' + str);
    },
    /**
     * 数量过滤：1：四舍五入，精确多少位
     * @param  {string} str 参数传入值
     * @param  {string} num 参数传入值 
     * @returns {string} result返回值
     */
    numberFilter(str, num) {
        let str1,
            str2,
            result,
            negative = parseFloat(str) < 0;
        if (str === "" || parseFloat(str) === 0 || isNaN(parseFloat(str)))
            result = "";
        else {
            if (str.indexOf(".") === -1) {
                str = str.replace(/[^\d]/g, "").replace(/\b(0+)/gi, "") + ".00";
                result = str;
            } else {
                str1 = str
                    .substring(0, str.indexOf("."))
                    .replace(/[^\d]/g, "")
                    .replace(/\b(0+)/gi, "");
                str2 = str
                    .substring(str.indexOf(".") + 1, str.length)
                    .replace(/[^\d]/g, "")
                    .substring(0, Number(num) + 1);
                if (str2.length === (Number(num) + 1)) {
                    let strlast = parseInt(str2.substring(str2.length - 1, str2.length), 10);
                    if (strlast <= 4)
                        str2 = str2.substring(0, Number(num));
                    else if (strlast >= 5)
                        str2 = String(parseInt(str2.substring(0, Number(num)), 10) + 1);

                }
                if (str1 === "") {
                    if (str2 === "00")
                        result = "";
                    else
                        result = "0." + str2;

                } else
                    result = str1 + "." + str2;

            }
        }
        if (negative)
            result = "-" + result;

        return result;
    },
    /**
     *  金额千分符
     * @param  {string} number 参数传入值
     * @returns {string} 金额千分符返回值
     */
    outputmoney(number) {
        if (isNaN(number) || number === "") return "";
        number = Math.round(number * 100) / 100;
        if (number < 0)
            return '-' + utils.outputdollars(String(Math.floor(Math.abs(number) - 0))) + utils.outputcents(Math.abs(number) - 0);
        return utils.outputdollars(String(Math.floor(number - 0))) + utils.outputcents(number - 0);
    },
    /**
     *  金额千分符
     * @param  {string} number 参数传入值
     * @returns {string} 金额千分符返回值
     */
    outputdollars(number) {
        if (number.length <= 3)
            return number === '' ? '0' : number;

        let mod = number.length % 3;
        let output = mod === 0 ? '' : number.substring(0, mod);
        for (let i = 0; i < Math.floor(number.length / 3); i++) {
            if ((mod === 0) && (i === 0))
                output += number.substring(mod + 3 * i, mod + 3 * i + 3);
            else
                output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
        }
        return output;

    },
    /**
     *  金额千分符
     * @param  {string} amount 参数传入值
     * @returns {string} 返回值
     */
    outputcents(amount) {
        amount = Math.round((amount - Math.floor(amount)) * 100);
        return amount < 10 ? '.0' + amount : '.' + amount;
    },
    /**
     *  元素全屏
     * @param  {string} element dom元素
     */
    requestFullScreen(element) {
        // 判断各种浏览器，找到正确的方法W3C,Chrome,FireFox,IE11
        let requestMethod = element.requestFullScreen || 
            element.webkitRequestFullScreen || 
            element.mozRequestFullScreen ||  
            element.msRequestFullScreen; 
        if (requestMethod)
            requestMethod.call(element);
        // for Internet Explorer
        else if (typeof window.ActiveXObject !== 'undefined') { 
            let wscript = new window.ActiveXObject('WScript.Shell');
            if (wscript !== null)
                wscript.SendKeys('{F11}');
        }
    },
    /**
     *  退出全屏 判断浏览器种类
     */
    exitFullScreen() {
        // 判断各种浏览器，找到正确的方法
        let exitMethod = document.exitFullscreen ||
            document.mozCancelFullScreen ||
            document.webkitExitFullscreen || 
            document.webkitExitFullscreen; 
        if (exitMethod)
            exitMethod.call(document);
        else if (typeof window.ActiveXObject !== 'undefined') { 
            let wscript = new window.ActiveXObject('WScript.Shell');
            if (wscript !== null)
                wscript.SendKeys('{F11}');
        }
    },
    /**
     *  是不是处于全屏状态 
     *  @returns {boolean} 是否是全屏
     */
    checkFullScreen() {
        let isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
        // to fix : false || undefined == undefined
        if (isFull === null)
            isFull = false;
        return isFull;
    },
    /**
     *  公用打印 
     * @param {string} parent 元素
     */
    print(parent) {
        let el = document.getElementById('__print-wrap');
        if (!el)
            el = document.createElement('div');

        el.id = '__print-wrap';
        el.className = 'printable print-only';
        el.style.width = '100%';
        el.innerHTML = parent.innerHTML;
        // 小图标不打印
        el.querySelectorAll('.el-collapse-item__arrow').forEach(item => {
            item.classList.add('print-exclude');
        });
        el.querySelectorAll('.el-collapse-item__wrap').forEach(item => {
            item.style.border = 'none';
        });
        document.body.appendChild(el);
        window.print();
    },
    /**
     *  深度拷贝 
     * @param {Array} o 数组
     * @returns {Array} 返回数组
     */
    deepCopy: function (o) {
        if (o instanceof Array) {
            let n = [];
            for (let i = 0; i < o.length; ++i)
                n[i] = utils.deepCopy(o[i]);
            return n;
        } else if (o instanceof Object) {
            let n = {};
            Object.keys(o).forEach((item, index)=>{
                n[index] = utils.deepCopy(item[index]);
            });
            return n;
        }
        return o ;

    },
    /**
     *  根据数组的id, pId生成二叉树，调用示例 
     * @param {Array} rootId 数组id
     * @param {Array} list 数组
     * @returns {Array} 返回数组
     */
    getTree(rootId, list) {
        let arr = [];
        for (let i = 0, len = list.length; i < len; i++) {
            if (list[i].pId === rootId) {
                list[i].children = this.getTree(list[i].id, list);
                arr.push(list[i]);
            }
        }
        return arr;
    },
    /**
     *  获取分页索引
     * @param {number} page 页数
     * @param {number} pageSize 每页大小
     * @param {number} index 索引
     * @returns {number} 返回值
     */
    getHeadNumAdapter(page = 1, pageSize = 0, index = 0) {
        return utils.mul(pageSize, page - 1) + index + 1;
    }
};
export default utils;
