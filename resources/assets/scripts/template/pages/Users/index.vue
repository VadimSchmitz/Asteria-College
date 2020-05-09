<template>
        <b-row>
            <b-col cols="12">
                <div class="callout callout-info">
                    <p>Gebruikers overzicht</p>
                </div>
            </b-col>


            <b-col cols="12" lg="6" xl="8">
                <div class="card card-outline card-info">
                    <div class="overlay" v-show="loading">
                        <i class="fas fa-2x fa-sync-alt fa-spin"></i>
                    </div>

                    <div class="p-0">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th colspan="2" scope="col"></th>
                                    <th scope="col">
                                        <div class="card-tools d-inline float-right pr-0 mr-0 pb-0">
                                            <button class="btn btn-tool" data-card-widget="maximize" type="button">
                                                <i class="fas fa-expand"></i>
                                            </button>
                                            <button class="btn btn-tool" data-card-widget="collapse" type="button">
                                                <i class="fas fa-minus"></i>
                                            </button>
                                            <button @click="refresh" class="btn btn-tool" type="button">
                                                <i class="fas fa-sync"></i>
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody v-if="users">
                                <tr :key="user.id" v-for="user in users">
                                    <td style='width: 40px;'>
                                        <avatar :size="45" :user="user" class="d-block my-1"></avatar>
                                    </td>
                                    <td colspan="2">
                                        <a class="text-bold">{{ user.first_name }} {{ user.last_name }}
                                            <small>({{ user.name }})</small></a><br/>
                                        <small>{{ user.email }}</small>
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
            <b-col cols="12" lg="6" xl="4">
                <div class="card card-outline card-cyan">
                    <div class="card-header">
                        <h3 class="card-title">Opties</h3>

                        <div class="card-tools">
                            <a class="btn btn-tool" data-toggle="tooltip" href="#" title="Previous"><i
                                    class="fas fa-chevron-left"></i></a>
                            <a class="btn btn-tool" data-toggle="tooltip" href="#" title="Next"><i
                                    class="fas fa-chevron-right"></i></a>
                        </div>
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
            },
            async refresh() {
                this.loading = true;
                this.users = await this.fetch();
            }
        }
    }
</script>
