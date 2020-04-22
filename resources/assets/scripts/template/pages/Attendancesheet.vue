<template>
    <section class="col-12">
        <div class="callout callout-info">
            <p>Asteria College</p>
            <button @click="get()" class="btn btn-outline-info btn-block" v-bind:disabled="studentsLoading || students">
                <i class="fas fa-sync-alt"></i>
                Studenten ophalen
            </button>
        </div>

        <div class="card card-outline card-info mt-3">
            <div class="overlay" v-show="usersLoading && users == null">
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
            </div>

            <div class="p-0">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Naam</th>
                        <th scope="col">Aanwezig
                            <div class="card-tools d-inline float-right pr-0 mr-0 pb-0">
                                <button class="btn btn-tool" data-card-widget="maximize" type="button">
                                    <i class="fas fa-expand"></i>
                                </button>
                                <button class="btn btn-tool" data-card-widget="collapse" type="button">
                                    <i class="fas fa-minus"></i>
                                </button>
                                <button @click="students= null" class="btn btn-tool" type="button">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody v-if="students">
                    <tr :key="students.id" v-for="student in students">
                        <th scope="row">{{ student.id }}</th>
                        <td>{{student.name }}</td>
                        <td>{{ student.email }}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </section>

</template>

<script>
    export default {
        name: 'Presentielijst',
        data() {
            return {
                students: null,
                studentsLoading: false
            }
        },
        methods: {
            get() {
                this.studentsLoading = true;

                axios.get(`/students`)
                    .then(response => {
                        // Timeout only to show loading screen
                        setTimeout(() => {
                            this.studentsLoading = false;
                            this.students = response.data;
                        }, 3000);
                    }).catch(error => console.error(error));
            }
        }
    }
</script>