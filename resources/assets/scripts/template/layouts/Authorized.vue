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
    import { mapGetters } from "vuex";

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
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },
    }
</script>
