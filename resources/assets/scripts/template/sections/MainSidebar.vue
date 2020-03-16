<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
        <!-- Brand Logo -->
        <a class="brand-link" href="/">
            <img alt="AdminLTE Logo" class="brand-image img-circle elevation-3" src="assets/img/AdminLTELogo.png"
                 style="opacity: .8">
            <span class="brand-text font-weight-light">Asteria College</span>
        </a>

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
                    <!-- Add icons to the links using the .nav-icon class
                         with font-awesome or any other icon font library -->
<!--                    <li class="nav-item" v-for="item in menu">-->
<!--                        <router-link class="nav-link" :to="item.path">-->
<!--                            <i class="nav-icon fas fa-tachometer-alt"></i>-->
<!--                            <p>{{item.label}} </p>-->
<!--                        </router-link>-->
<!--                    </li>-->
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">
                            <i class="nav-icon fas fas fa-tree"></i>
                            <p>Dashboard </p>
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="widgets">
                            <i class="nav-icon fas fas fa-user"></i>
                            <p>Widgets </p>
                        </router-link>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>

</template>

<script>
    export default {
        name: 'MainSidebar',
        props: {
            ['menu']:{
                type: Array,
                default: []
            }
        },
        mounted() {
            let menu = this.$router.routes;
            // for(let route in menu){
            //     this.menu.push(route);
            // }

        }
    }
</script>
