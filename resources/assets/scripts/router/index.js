import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export const routes = [
    {
        path: '',
        component: () => import('../template/layouts/Main'),
        redirect: 'login',
        meta: { label: 'Home' },
        children: [
            {
                path: 'dashboard',
                component: () =>  import('../template/views/Dashboard'),
                meta: { label: 'Dashboard', icon: 'user' },
            },
            {
                path: '/widgets',
                component: () => import('../template/views/Widgets'),
                meta: { label: 'Widgets', icon: 'alicorn' },
                children: [
                    {
                        path: '/widgets/hejfnee',
                        component: () => import('../template/views/Dashboard'),
                        meta: { label: 'Voorbeeld 1', icon: 'search' }
                    },
                    {
                        path: '/widgets/ererereer',
                        component: () => import('../template/views/Widgets'),
                        meta: { label: 'Voorbeeld 2', icon: 'search' }
                    }

                ]
            }],
    },
    {
        path: 'authenticate',
        component: () => import('../template/layouts/Authenticate'),
        redirect: '/login',
        meta: {label: 'Authenticate'},
        children: [
                {
                    path: '/login',
                    component: () => import('../template/views/auth/Login'),
                    meta: {label: 'Inloggen', icon: 'user'}
                }
            ]
    },
    // { path: '/views/login', component: LoginPage },
    {path: '404', redirect: '/error/404'}
];

const router = new VueRouter({
    routes,
    linkActiveClass: "active",
    mode: "hash"
});

export default router;
