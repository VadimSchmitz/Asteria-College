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
                <div class="image">
                    <img alt="User Image" class="img-circle elevation-2" src="assets/img/user2-160x160.jpg">
                </div>
                <div class="info">
                    <a class="d-block" href="#">Levi Deurloo</a>
                </div>
            </div>

            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-accordion="false" data-widget="treeview"
                    role="menu">

                    <li class="nav-item" :class="(route.children > 0) ? 'has-treeview' : '' " v-for="route in navRoutes">
                        <router-link :class="(route.path === currentRoute.fullpath) ? 'nav-link active' : 'nav-link'" :to="route.path">
                            <i class="nav-icon fal " :class="'fa-' + route.meta.icon"></i>
                            <p>{{ route.name }}</p>
                        </router-link>

                        <ul :class="(route.path === currentRoute.fullPath ) ? 'nav nav-treeview menu-open has-treeview' : 'nav nav-treeview'" v-if="route.children">
                            <li class="nav-item" v-for="childRoute in route.children">
                                <router-link :to="childRoute.path" :class="(childRoute.path === currentRoute.path) ? 'nav-link active' : 'nav-link'" >
<!--                                    <i class="nav-icon fal " :class="'fa-' + childRoute.meta.icon"></i>-->
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
    import router, {routes} from "../../../core/utils/router";

    export default {
        name: 'MainSidebar',
        data() {
            return {
                navRoutes: [
                ],
                currentRoute: router.currentRoute
            }
        },
        mounted() {
           this.getRoutes()
        },
        methods: {
            getRoutes() {
                routes.forEach(route =>{
                    if(!route.hidden)
                        this.navRoutes.push(route);
                })
            }
        }
    }
</script>
