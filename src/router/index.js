import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Layout = resolve => require([ '@/views/layout' ], resolve);

export const constantRouterMap = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/',
        component: Layout,
        meta: {
            title: '自述文件'
        },
        children: [
            {
                path: '/home',
                meta: {
                    title: '系统首页'
                },
                component: () => import('@/views/home/index.vue')
            }
        // ,
        // {
        //   path: '/form',
        //   meta: {
        //     title: '基本表单'
        //   },
        //   component: () => import('@/views/form/index.vue')
        // },
        // {
        //   path: '/404',
        //   meta: {
        //     title: '404'
        //   },
        //   component: () => import('@/views/errorPage/404.vue')
        // },
        // {
        //   path: '/403',
        //   meta: {
        //     title: '403'
        //   },
        //   component: () => import('@/views/errorPage/403.vue')
        // }
        ]
    }
    // ,
    // {
    //   path: '/login',
    //   component: resolve => require(['@/views/login/index.vue'], resolve)
    // },
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
];
export default new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
});
