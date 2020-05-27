<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-light-secondary elevation-4">
        <!-- Brand Logo -->
        <router-link class="brand-link" to="dashboard">
            <img alt="Logo" class="brand-image img-circle elevation-3" src="assets/img/AdminLTELogo.png"
                 style="opacity: .8">
            <span class="brand-text font-weight-light">Asteria College</span>
        </router-link>

        <!-- Sidebar -->
        <div class="sidebar">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                <div class="image mt-2">
                    <avatar :email="user.email"/>
                </div>

                <div class="info">
                    <a class="text-bold mb-0" href="#">{{user.first_name}} {{user.prefix}} {{user.last_name}}</a><br/>
                    <i>{{user.is_admin ? 'Administrator' : 'Leraar'}}</i>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-accordion="false" data-widget="treeview"
                    role="menu">

                    <li :class="route.children ? 'has-treeview' : '' " class="nav-item" v-for="route in navRoutes">
                        <router-link :class="(route.path === currentRoute.path) ? 'nav-link active' : 'nav-link'"
                                     :to="route.path">
                            <i :class="'fa-' + route.meta.icon" class="nav-icon fal "></i>
                            <p>{{ route.name }}</p>
                        </router-link>

                        <ul class='nav has-treeview' v-if="route.children">
                            <li class="nav-item" v-for="childRoute in route.children">
                                <router-link
                                        :class="(childRoute.path === currentRoute.path) ? 'nav-link active' : 'nav-link'"
                                        :to="childRoute.path">
                                    <i :class="'fa-' + childRoute.meta.icon" class="nav-icon fal "></i>
                                    <p>{{ childRoute.name }}</p>
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->

        </div>
        <!-- /.sidebar -->
    </aside>

</template>

<script>
    import router, { routes } from "../../../core/utils/router";
    import { mapGetters } from "vuex";

    export default {
        name: 'MainSidebar',
        components: {
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../components/Avatar')
        },
        data() {
            return {
                navRoutes: [],
                currentRoute: router.currentRoute
            }
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },
        mounted() {
            this.getRoutes()
        },
        methods: {
            getRoutes() {
                routes.forEach((route) => {
                    if (!route.hidden) {
                        if (!route.children) {
                            this.navRoutes.push(route);
                        } else {
                            let pushRoute = {
                                path: route.path,
                                name: route.name,
                                meta: route.meta,
                                hidden: route.hidden,
                                children: []
                            };

                            route.children.forEach((child) => {
                                pushRoute.children.push(child);
                            });

                            this.navRoutes.push(pushRoute);
                        }
                    }
                });
            }
        }
    }
</script>
