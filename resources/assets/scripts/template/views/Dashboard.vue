<template>
    <section class="col-12">
        <div class="callout callout-info">
            <p>Asteria College</p>
            <button @click="get()" class="btn btn-outline-info btn-block" v-bind:disabled="usersLoading || users">
                <i class="fas fa-sync-alt"></i>
                Gebruikers ophalen
            </button>
        </div>

        <div class="card card-outline card-info mt-3">
            <div class="overlay dark" v-show="usersLoading && users == null">
                <i class="fas fa-2x fa-sync-alt fa-spin text-white"></i>
            </div>

            <div class="p-0">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Naam</th>
                        <th scope="col">Emailadres
                            <div class="card-tools d-inline float-right pr-0 mr-0 pb-0">
                                <button class="btn btn-tool" data-card-widget="maximize" type="button"><i
                                    class="fas fa-expand"></i></button>
                                <button class="btn btn-tool" data-card-widget="collapse" type="button"><i
                                    class="fas fa-minus"></i></button>
                                <button @click="users = null" class="btn btn-tool" type="button"><i
                                    class="fas fa-times"></i></button>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody v-if="users">
                    <tr :key="user.id" v-for="user in users">
                        <th scope="row">{{ user.id }}</th>
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </section>

</template>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                users: null,
                usersLoading: false
            }
        },
        methods: {
            get() {
                this.usersLoading = true;

                axios.get(`/api/users`)
                    .then(response => {
                        // Timeout only to show loading screen
                        setTimeout(() => {
                            this.usersLoading = false;
                            this.users = response.data;
                        }, 3000);
                    }).catch(error => console.error(error));
            }
        }
    }
</script>
