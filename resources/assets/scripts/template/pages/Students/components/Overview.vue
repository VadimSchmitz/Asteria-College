<template>
    <div class="card card-outline card-info">
        <div class="overlay" v-show="loading">
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>

        <div class="p-0">
            <table class="table table-striped d-print-table">
                <thead>
                <tr class='d-print-head'>
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
                            .

                        </div>
                    </th>
                </tr>
                </thead>

                <tbody v-if="students">
                <tr :key="student.id" class='d-print-row' v-for="student in students">

                    <td class='d-print-col' colspan="2">
                        <a class="text-bold">{{ student.first_name }} {{ student.last_name }}
                        </a>
                    </td>
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
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../../../layouts/components/Avatar'),
        },
        data() {
            return {
                students: null,
                error: null,
                loading: true
            }
        },
        async mounted() {
            await this.fetch();
            this.bus.$on('submit', this.refresh)
        },
        methods: {
            async fetch() {
                await axios.get(`/students`)
                    .then(response => {
                        setTimeout(() => {
                            this.loading = false;
                            this.students = response.data;
                        }, 400);
                    }).catch(e => {
                        this.loading = false;
                        this.error = e;
                    });
            },
            async refresh() {
                this.loading = true;
                this.students = await this.fetch();
            }
        }
    }
</script>
