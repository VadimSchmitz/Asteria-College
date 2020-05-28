<template class="app">
    <section id="app">
        <transition name="fade" mode="out-in">
            <div v-show="!loading">
                <transition name="fade" mode="out-in">
                    <authenticate v-if="!this.$auth.check()"></authenticate>
                    <authorized  v-else></authorized>
                </transition>
            </div>
        </transition>
    </section>
</template>

<script>
    import { mapGetters } from "vuex";
    import User from "./core/models/User";
    import { Loading } from 'element-ui';
    let loadingInstance1 = Loading.service({ fullscreen: true });

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
                }
            },
        },
        data() {
            return {
                loading: true
            }
        },
        async mounted() {
            return setTimeout(() => {
                this.loading = false
                setTimeout(() => loadingInstance1.close() , 200)
            }, 1000);
        },
        methods: {
        }
    }
</script>

