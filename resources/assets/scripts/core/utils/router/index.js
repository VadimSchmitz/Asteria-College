import Vue from "vue";
import VueRouter from "vue-router";
import authorize from '../authorize';
import VueAxios from "vue-axios";
import axios from 'axios';
import getComponent from "../../functions/getComponent";

window.axios = axios;
axios.defaults.baseURL = '/api/';

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
        path: '/',
        redirect: 'dashboard',
        hidden: true
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: getComponent('Dashboard'),
        meta: {
            auth: true,
            icon: 'browser'
        },
    },
    {
        path: '/users',
        name: 'Gebruikers',
        component: getComponent('Users'),
        meta: {
            auth: true,
            admin: true,
            icon: 'users'
        },
    },
    {
        path: '/students',
        name: 'Studenten',
        component: getComponent('Students'),
        meta: {
            auth: true,
            admin: true,
            icon: 'users'
        },
    },
    {
        path: '/presencelist',
        component: getComponent('Presencelist'),
        name: 'Presentielijst',
        meta: {
            auth: true,
            icon: 'user'
        },

    },
    {
        path: '/calendar',
        name: 'Calendar',
        component: getComponent('Calendar'),
        meta: {
            auth: true,
            icon: 'alicorn'
        }
    },
    {
        path: '/courses/edit',
        name: 'EditBooks',
        component: getComponent('Courses', 'Edit'),
        meta: {
            auth: true,
            icon: 'user'
        }
    },
    {
        path: '/reports',
        name: 'Reports',
        component: getComponent('Reports'),
        meta: {
            auth: true,
            icon: 'browser'
        },
    },
    {
        path: '/reports/:id',
        name: 'Students report',
        component: getComponent('Reports', 'Show'),
        hidden: true,
        meta: {
            auth: true,
            icon: 'browser'
        },
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

