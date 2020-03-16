import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: () => import('../layouts/Main'),
        meta: { label: 'Home' },
        children: [
            {
                path: '/',
                component: () => import('../views/Dashboard'),
                meta: { label: 'Dashboard' },
            },
            {
                path: 'widgets',
                component: () => import('../views/Widgets'),
                meta: { label: 'Widgets' },
            },
            // {
            //     path: 'ui',
            //     component: Empty,
            //     meta: { label: 'UI Elements' },
            //     children: [
            //         {
            //             path: 'general',
            //             component: UiGeneralPage,
            //             meta: { label: 'General' },
            //         },
            //         {
            //             path: 'icons',
            //             component: UiIconsPage,
            //             meta: { label: 'Icons' },
            //         },
            //         {
            //             path: 'buttons',
            //             component: UiButtonsPage,
            //             meta: { label: 'Buttons' },
            //         },
            //     ],
            // },
            // {
            //     path: '404',
            //     component: NotFoundPage,
            //     meta: { label: '404 Error Page' },
            // },
        ],
    },
    // { path: '/pages/login', component: LoginPage },
    { path: '*', redirect: '/404' },
];

const router = new VueRouter({
    routes,
    linkActiveClass: "router-link-exact-active",
    mode: "hash"
});

export default router;
