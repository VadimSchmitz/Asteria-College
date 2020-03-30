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
        created() {
            this.fetchUser()
        },
        methods: {
            fetchUser() {
                const data = this.$auth.watch.data;
                let user = new User({
                    id: data.id,
                    name: data.name,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    email: data.email
                });
                this.$store.commit('updateUser', new User({
                    id: data.id,
                    name: data.name,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    email: data.email,
                    createdAt: data.createdAt
                }));
            },
        }
    }
</script>
