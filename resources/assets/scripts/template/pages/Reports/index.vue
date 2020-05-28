<template>
    <div class="card card-outline card-info mt-3">
        <div class="overlay" v-show="studentsLoading && students == null">
            <i class="fas fa-2x fa-sync-alt fa-spin"></i>
        </div>

        <div class="p-0">
            <table class="table table-striped">
                <thead>
                <th scope="col">Voornaam</th>
                <th scope="col">Achternaam</th>


                </thead>
                <tbody v-if="students">
                <tr :key="student.id" v-for="student in students" @click="goToReports(student.id)">

                    <td>{{ student.first_name }}</td>
                    <td>{{ student.last_name }}</td>

                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Reports',
        data() {
            return {
                students: null,
                studentsLoading: false,
                edit: false,
                alert: null
            }
        },
        mounted() {
            this.getStudents()
        },
        methods: {
            getStudents() {
                this.studentsLoading = true;

                axios.get(`/students`)
                    .then(response => {
                        // Timeout only to show loading screen
                        setTimeout(() => {
                            this.studentsLoading = false;
                            this.students = response.data;
                        }, 1000);
                    }).catch(error => console.error(error));
            },
            goToReports(id) {
                this.$router.push({path: '/reports/' + id});
            }
        }
    }
</script>
