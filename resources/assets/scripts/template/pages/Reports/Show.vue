<template>
    <div class="card card-outline card-info mt-3" v-if="reports">
        <div class="overlay" v-show="reportsLoading && reports === null">
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>

        <div class="p-0">
            <table class="table table-striped">
                <thead>
                <th scope="col">Report #{{student.first_name}}</th>
                </thead>
                <tbody>

                <tr v-for="report in reports">
                    <td>{{ report.report }}</td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import Student from "../../../core/models/Student";

    export default {
        name: 'Studentreport',
        data() {
            return {
                reports: null,
                reportsLoading: false,
                edit: false,
                student: null,
                alert: null,
                id: null
            }
        },
        async mounted() {
            this.id = await this.$route.params.id;
            await this.getReports();
        },
        methods: {
            async getReports() {
                this.reportsLoading = true;

                axios.get(`/students/` + this.id + '/reports')
                    .then(response => {
                        // Timeout only to show loading screen
                        setTimeout(() => {
                            this.reportsLoading = false;
                            this.student = new Student(response.data.student)
                            this.reports = response.data.reports;
                        }, 400);
                    }).catch(error => console.error(error));
            },
        }
    }
</script>