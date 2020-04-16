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
