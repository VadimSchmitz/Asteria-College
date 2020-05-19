<template>
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
                            <button @click="$parent.toggleCreate" class="btn btn-tool" type="button">
                                <i class="far fa-user-plus"></i>
                            </button>

                            <button @click="refresh" class="btn btn-tool" type="button">
                                <i class="far fa-redo-alt"></i>
                            </button>

                            <button class="btn btn-tool" data-card-widget="maximize" type="button">
                                <i class="far fa-expand"></i>
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
</template>

<script>
    export default {
        name: 'Overview',
        components: {
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../../../layouts/components/Avatar'),
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
                await axios.get(`/students`)
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
