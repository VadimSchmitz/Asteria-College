import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: "Dashboard",
        component: () => import('../views/Dashboard')
    },
    {
        path: '/example',
        name: "Example View",
        component: () => import('../views/Example')
    }

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
