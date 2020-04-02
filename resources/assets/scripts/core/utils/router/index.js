import Vue from "vue";
import VueRouter from "vue-router";

export const routes = [
    {
        path: '/login',
        name: 'Authenticate',
        component: () => import('../../../template/pages/auth/Login'),
        hidden: true,
        meta: {
            auth: false,
            icon: 'user'
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../../../template/pages/Dashboard'),
        hidden: false,
        meta: {
            auth: true,
            icon: 'user'
        },
    },
    {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('../../../template/pages/Widgets'),
        hidden: false,
        meta: {
            auth: true,
            icon: 'alicorn'
        },
        children: [
            {
                path: '/widgets/hejfnee',
                name: 'Voorbeeld 1',
                component: () => import('../../../template/pages/Dashboard'),
                hidden: false,
                meta: {
                    auth: true,
                    icon: 'search'
                }
            },
            {
                path: '/widgets/ererereer',
                name: 'voorbeeld 2',
                component: () => import('../../../template/pages/Widgets'),
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

export default router;

