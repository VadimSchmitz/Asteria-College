<template>
    <section class="col-12">
        <div class="callout callout-success">
            <h1>{{ pageTitle }}</h1>
            <p>Voor nu een opzetje routing en componenten toegevoegd</p>

            {{user.name}} {{user.email}}
        </div>
    </section>
</template>

<script>
    import { User } from "../../core/models/User";

    export default {
        name: 'Widgets',
        data() {
            return {
                pageTitle: 'erer',
                user: User
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            getUsers() {
                axios
                    .get('/users/1')
                    .then(response => {
                        this.user = new User(response.data);
                    }).catch(e => {
                    alert(e)
                });
            },
            put() {
                axios
                    .get('/users/1')
                    .then(response => {
                        this.user = new User(response.data);
                    }).catch(e => {
                    alert(e)
                });
            }
        }
    }
</script>
