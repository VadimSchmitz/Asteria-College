import Vue from "vue";
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import authorize from '../authorize';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

export const routes = [
    {
        path: '/login',
        name: 'Authenticate',
        component: () => import( /* webpackChunkName: "page-login" */ '../../../template/pages/auth/Login'),
        hidden: true,
        meta: {
            auth: false,
            icon: 'user'
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import( /* webpackChunkName: "page-dashboard" */  '../../../template/pages/Dashboard'),
        hidden:false,
        meta: {
            auth: true,
            icon: 'user'
        },
    },
    {
        path: '/presentielijst',
        name: 'presentielijst',
        component: () => import( /* webpackChunkName: "page-Attendancesheet" */  '../../../template/pages/Attendancesheet'),

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
    }
    // TODO: 404 handler
    // {
    //     path: '404',
    //     redirect: '/error/404'
    // }
];

const router = new VueRouter({
    mode: "hash",
    linkActiveClass: "active",
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

