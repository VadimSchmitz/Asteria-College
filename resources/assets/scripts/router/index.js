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
    linkActiveClass: "active",
    mode: "hash"
});

//
//      Function to do something before redirecting to other route
//
// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     const currentUser = Store.getters["global/currentUser"];
//     const isLoggedIn = Store.getters["global/isLoggedIn"];
//
//     if (isLoggedIn) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${
//             currentUser.token
//         }`;
//     }
//
//     // if (requiresAuth && !isLoggedIn) next("/login");
//     else if (
//         (to.path === "/login" && isLoggedIn) ||
//         (to.path === "/register" && isLoggedIn)
//     )  next("/");
//     else next();
// });

export default router;
