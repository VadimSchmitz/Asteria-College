<template>
    <section class="col-12">
        <div class="callout callout-info">
            <p>Asteria College</p>
            {{ alert }}
        </div>

        <div class="card card-outline card-info mt-3">
            <div class="overlay" v-show="studentsLoading && students == null">
                <i class="fas fa-2x fa-sync-alt fa-spin"></i>
            </div>

            <div class="p-0">
                <table class="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Voornaam</th>
                        <th scope = "col">Achternaam</th>
                        <th scope="col">Aanwezig</th>

                        <th>
                            <div class="card-tools d-inline float-right pr-0 mr-0 pb-0">
                                <!-- <b-link to="/presencelist/edit"> -->
                                    <button class="btn btn-tool" type="button" @click="toggleEdit">
                                        <i class="fas fa-edit"></i>
                                    </button>
                                <!--</b-link>-->

                                <button class="btn btn-tool" data-card-widget="maximize" type="button">
                                    <i class="fas fa-expand"></i>
                                </button>
                                <button class="btn btn-tool" data-card-widget="collapse" type="button">
                                    <i class="fas fa-minus"></i>
                                </button>
                            </div>
                        </th>

                    </tr>
                    </thead>
                    <tbody v-if="students">
                    <tr :key="student.id" v-for="student in students">
                        <th scope="row">{{ student.id }}</th>
                        <td>{{ student.first_name }}</td>
                        <td>{{ student.last_name }}</td>
                        <td>
                            <button @click="change(student.id)">
                                <i class="far" :class="student.present === 1 ? 'fa-check' : 'fa-times'" :key="student.present"></i>
                                <i class="ml-2 far fa-pencil" v-if="edit"></i>
                            </button>

                        </td>
<td></td>

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
            change(id) {
                let student = this.students[id];
                student.present = !student.present;

                axios.put(`/students/` + id, student)
                    .then(response => {
                        this.alert = 'U heeft de presentie gewijzigd';
                    })
                    .catch(e => this.alert = e);
            },
            toggleEdit() {
                return this.edit = !this.edit;
            },

        }
    }
</script>
