<template class="app">
    <section id="app">
        <transition name="fade" type="in-out" appear>
            <authenticate v-if="!this.$auth.check()"></authenticate>

            <authorized v-else-if="this.$auth.check()"></authorized>
        </transition>
    </section>
</template>

<script>
    export default {
        name: 'App',
        components: {
            Authorized: () => import(  /* webpackChunkName: "layout-authorized" */   './template/layouts/Authorized'),
            Authenticate: () => import(  /* webpackChunkName: "layout-authenticate" */   './template/layouts/Authenticate')
        },
        beforeMount() {
            return this.authorized = this.$auth.check();
        },
        data() {
            return {
                authorized: false
            }
        },

    }
</script>

