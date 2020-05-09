<template class="app">
    <section id="app">
        <transition name="fade" type="in-out" appear>
            <authenticate v-if="!this.$auth.check()"></authenticate>

            <authorized :key="authenticated" v-else></authorized>
        </transition>
    </section>
</template>

<script>
    import { mapGetters } from "vuex";
    import { User } from "./core/models/User";

    export default {
        name: 'App',
        components: {
            Authorized: () => import(  /* webpackChunkName: "layout-authorized" */   './template/layouts/Authorized'),
            Authenticate: () => import(  /* webpackChunkName: "layout-authenticate" */   './template/layouts/Authenticate')
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                user: 'auth/user'
            })
        },
        watch: {
            '$route'(to) {
                if (to.meta.auth && !this.authenticated && (this.$auth.check() === true)) {
                    this.$store.commit('auth/SET_AUTHENTICATED', true);
                    this.$store.commit('auth/SET_USER', new User(this.$auth.user()));
                    this.$router.push({name: 'Dashboard'})
                }
            },
        }
    }
</script>
