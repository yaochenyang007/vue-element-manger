/*接口请求*/
import api  from  '@/api';
import axios from 'axios';
/**
 * 设置请求头
 * @param {Object} data 对象数据 
 */
export const setAjaxHeader = (data) => {
    if (!data) return;
    axios.defaults.headers.post.Token = data.token;
};

/**
 * 封装ajax方法
 * 参数： 
 *   fun：string类型，api里面的接口的方法名
 *   data：请求参数
 *   callback：回调函数
 * 例1：
 *   this.ajax('user_getPublicKey',{}, e => {
 *     // do something
 *   });
 * 例2：
 *   this.ajax('user_getPublicKey',{}).then(e => {
 *     // do something
 *   });
 * 例3：
 *   this.ajax('user_getPublicKey',{}, e => {
 *     // do something
 *     // 不写return的话下面的then接收到的e就是undefined
 *     return e
 *   }).then(e => {
 *     // do something
 *   });
 * 例4：
 *   async () => {
 *     const e = await this.ajax('user_getPublicKey',{})
 *     // do something
 *   }
 */

/**
 * ajax封装
 * @param {string} fun api里面的接口的方法名 
 * @param {Object} data 对象数据 
 * @param {function} callback 回调函数 
 * @returns {string} 返回值
 */
export const ajax = async (fun, data, callback) => {
    try {
        const response = await api[ fun ](data);
        return callback ? callback(response.data) : response.data;
    } catch (error) {
    // console.log(error);
    }
};

/**
 * 异步加载封装
 * @param {string} url url地址 
 * @returns {promises} 返回值
 */
export const loadjs = (url) => {
    return new Promise((resolve, reject) => {
        let exist = false;
        Array.prototype.slice.call(document.getElementsByTagName('script')).forEach(item => {
            if (item.src === url) {
                resolve();
                exist = true;
            }
        });
        // 不存在才加载script
        if (!exist) {
            let script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
            if (document.all) { 
                script.onreadystatechange = () => {
                    if (script.readyState === 'loaded' || script.readyState === 'complete') 
                        resolve();
          
                };
            } else {
                script.onload = () => {
                    resolve();
                };
            }
        }
    });
};

