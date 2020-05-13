<template>
    <section class="authorized">
        <header-navigation></header-navigation>

        <main-sidebar></main-sidebar>

        <content-sidebar></content-sidebar>

        <content-section :pageTitle="this.$route.name"></content-section>

        <main-footer></main-footer>
    </section>
</template>

<script>
    import {User} from "./../../core/models/User";

    export default {
        name: 'Authorized',
        components: {
            HeaderNavigation: () => import(  /* webpackChunkName: "app-header" */  './sections/HeaderNavigation'),
            MainSidebar: () => import(  /* webpackChunkName: "app-sidebar" */  './sections/MainSidebar'),
            ContentSidebar: () => import(  /* webpackChunkName: "app-content-sidebar" */  './sections/ContentSidebar'),
            ContentSection: () => import(  /* webpackChunkName: "app-content" */  './sections/ContentSection'),
            MainFooter: () => import(  /* webpackChunkName: "app-footer" */  './sections/MainFooter'),
        },
        computed: {
            user() {
                return this.$store.state.user;
            }
        },
        mounted() {
            this.fetchUser()
        },
        methods: {
            fetchUser() {
                const data = this.$auth.watch.data;
                this.$store.commit('updateUser', new User(data));
            },
        }
    }
</script>
