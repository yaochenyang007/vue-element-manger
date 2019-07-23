import axios from 'axios';

let instance = axios.create({
    baseURL: 'http://172.0.0.1:80',
    timeout: 1000
});

/**
 * 登录接口
 * @param {string} username  用户名
 * @param {string} password  密码
 * @returns {promises} 接口返回
 */
export function login(username, password) {
    return instance({
        url: '/user/login',
        method: 'post',
        data: {
            username,
            password
        }
    });
}
