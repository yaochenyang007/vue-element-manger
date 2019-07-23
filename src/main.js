import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 默认主题
import 'element-ui/lib/theme-chalk/index.css'; 
// 浅绿色主题
// import '../static/css/theme-green/index.css';       
import Element from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';
import '@/styles/element-variables.scss';
import '@/styles/index.scss'; // global css
//引入封装的工具类和方法
import {ajax, loadjs} from './utils/ajax'; 
Vue.use(Element, { locale });
//设置请求方法
Vue.prototype.ajax = ajax;
//加载插件包例如echart，gojs
Vue.prototype.loadjs = loadjs; 
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
