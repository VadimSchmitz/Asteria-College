<template>
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
</template>

<script>
    export default {
        name: 'Overview',
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
