<template>
    <div class="card card-outline card-info">
        <div class="overlay" v-show="loading">
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>

        <div class="p-0">
            <table class="table table-striped mb-0">
                <thead>
                <tr>
                    <th colspan="3" scope="col"></th>
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
                    <td style='width: 40px'>
                        <el-badge :value="user.is_admin ? 'ADM' : ''" class="item">
                            <avatar :size="45" :user="user"></avatar>
                        </el-badge>
                    </td>
                    <td colspan="2">
                        <a class="text-bold">{{ user.first_name }} {{ user.prefix }} {{ user.last_name }}
                            <small>({{ user.name }})</small></a><br/>
                        <small>{{ user.email }}</small>
                    </td>
                    <td>
                        <el-checkbox v-model="user.checked" v-show="$parent.edit">
                        </el-checkbox>
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
        props: ['bus'],
        components: {
            ElBadge: () => import(  /* webpackChunkName: "badge-component" */  'element-ui/lib/badge'),
            ElCheckbox: () => import(  /* webpackChunkName: "checkbox-component" */  'element-ui/lib/checkbox'),
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../../../layouts/components/Avatar'),
        },
        data() {
            return {
                users: null,
                error: null,
                loading: true
            }
        },
        methods: {
            async fetch() {
                await axios.get(`/users`)
                    .then(response => {
                        setTimeout(() => {
                            this.loading = false;
                            this.users = response.data;
                        }, 200);
                    }).catch(e => {
                        this.loading = false;
                        this.error = e;
                    });
            },
            async refresh() {
                this.loading = true;
                return await this.fetch();
            }
        },
        async mounted() {
            await this.fetch();
            this.bus.$on('submit', this.refresh)
        },

    }
</script>
