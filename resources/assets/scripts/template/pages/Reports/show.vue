<template>
    <div class="card card-outline card-info mt-3">
        <div class="overlay" v-show="reportsLoading && reports == null">
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>

        <div class="p-0">
            <table class="table table-striped">
                <thead>
                <th scope="col">Report</th>


                </thead>
                <tbody v-if="reports">
                <tr :key="report.id" v-for="report in reports">

                    <td>{{ report.report }}</td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Studentreport',
        data() {
            return {
                reports: null,
                reportsLoading: false,
                edit: false,
                alert: null
            }
        },
        mounted() {
            this.getReports()
        },
        methods: {
            getReports() {
                this.reportsLoading = true;

                axios.get(`/reports`)
                    .then(response => {
                        // Timeout only to show loading screen
                        setTimeout(() => {
                            this.reportsLoading = false;
                            this.reports = response.data;
                        }, 1000);
                    }).catch(error => console.error(error));
            },
        }
    }
</script>