<template>
    <b-row>
        <b-col cols="12">
            <div class="callout callout-info">
                <p>Gebruikers overzicht</p>
            </div>

            <div class="card card-outline card-info mt-3">
                <div class="overlay" v-show="loading">
                    <i class="fas fa-2x fa-sync-alt fa-spin"></i>
                </div>

                <div class="p-0">
                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Gebruiker</th>
                            <th scope="col">Informatie
                                <div class="card-tools d-inline float-right pr-0 mr-0 pb-0">
                                    <button class="btn btn-tool" data-card-widget="maximize" type="button">
                                        <i class="fas fa-expand"></i>
                                    </button>
                                    <button class="btn btn-tool" data-card-widget="collapse" type="button">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <button @click="users = null" class="btn btn-tool" type="button">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </th>
                        </tr>
                        </thead>
                        <tbody v-if="users">
                        <tr :key="user.id" v-for="user in users">
                            <td style='width: 40px;'>
                                <avatar :user="user" :size="45" class="d-block my-1"></avatar>
                            </td>
                            <td>
                                <a class="text-bold">{{ user.first_name }} {{ user.last_name }} <small>({{ user.name }})</small></a><br />
                                <small>{{ user.email }}</small>
                            </td>
                            <td>
                                <strong>{{ user.first_name }} {{ user.last_name }}</strong> <small>({{ user.name }})</small><br />
                                23 studenten
                            </td>
                        </tr>
                        </tbody>
                        <tbody v-else-if="error">
                            <tr :key="error">
                                <td colspan="3">{{ error.message }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'UserOverview',
        components: {
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../../layouts/components/Avatar'),
        },
        data() {
            return {
                users: null,
                error: null,
                loading: true
            }
        },
        async mounted() {
            await this.fetch();
        },
        methods: {
            async fetch() {
                await axios.get(`/users`)
                    .then(response => {
                        setTimeout(() => {
                            this.loading = false;
                            this.users = response.data;
                        }, 400);
                    }).catch(e => {
                        this.loading = false;
                        this.error = e;
                    });
            }
        }
    }
</script>
