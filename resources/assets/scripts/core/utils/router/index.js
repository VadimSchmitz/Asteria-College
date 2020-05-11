import Vue from "vue";
import VueRouter from "vue-router";
import authorize from '../authorize';
import VueAxios from "vue-axios";
import axios from 'axios';
import getComponent from "../../functions/getComponent";

window.axios = axios;
axios.defaults.baseURL = '/api/';
Vue.prototype.$axios = axios;

Vue.use(VueAxios, axios);
Vue.use(VueRouter);

export const routes = [
    {
        path: '/login',
        name: 'Authenticate',
        component: getComponent('Auth', 'Login'),
        hidden: true,
        meta: {
            auth: false,
            icon: 'user'
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: getComponent('Dashboard'),
        hidden: false,
        meta: {
            auth: true,
            icon: 'user'
        },
    },
    {
        path: '/users',
        name: 'Gebruikers',
        component: getComponent('Users'),
        hidden: false,
        meta: {
            auth: true,
            admin: true,
            icon: 'users'
        },
    },
    {
        path: '/presentielijst',
        name: 'presentielijst',
        component: () => import( /* webpackChunkName: "page-attendancesheet" */  '../../../template/pages/Attendancesheet'),
        meta: {
            auth: true,
            icon: 'user'
        },
    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: () => import( /* webpackChunkName: "page-Calendar" */  '../../../template/pages/Calendar'),
        hidden: false,
        meta: {
            auth: true,
            icon: 'alicorn'
        },
        children: [
            {
                path: '/calendar/week-1',
                name: 'Week 1',
                component: () => import( /* webpackChunkName: "page-Week-1" */ '../../../template/pages/Week-1'),
                hidden: false,
                meta: {
                    auth: true,
                    icon: 'search'
                }
            },
            {
                path: '/calendar/week-2',
                name: 'Week 2',
                component: () => import( /* webpackChunkName: "page-Week-2" */  '../../../template/pages/Week-2'),
                hidden: false,
                meta: {
                    auth: true,
                    icon: 'search'
                }
            }
        ]
    },
    {
        path: '/',
        redirect: 'dashboard',
        hidden: true
    },
    // TODO: 404 handler
    {
        path: '/404',
        redirect: '/error/404',
        hidden: true
    }
];

export const router = new VueRouter({
    mode: "history",
    base: __dirname,
    // linkActiveClass: "active",
    routes: routes,
});

Vue.router = router;

Vue.use(require('@websanova/vue-auth'), {
    auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
    http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
    router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
    authorize
});

export default router;

