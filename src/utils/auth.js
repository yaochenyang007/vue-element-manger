import Cookies from 'js-cookie';

const TokenKey = 'Admin-Token';
/**
 *  Cookies中获取token 
 *  @returns {string} token值
 */
export function getToken() {
    return Cookies.get(TokenKey);
}
/**
 *  Cookies中设置token 
 * @param {token} token token值
 * @returns {Object} 返回cookies对象
 */
export function setToken(token) {
    return Cookies.set(TokenKey, token);
}
/**
 *  移除Cookies中的TokenKey
 *  @returns {string} token值
 */
export function removeToken() {
    return Cookies.remove(TokenKey);
}
