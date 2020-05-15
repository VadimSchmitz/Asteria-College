<template>
    <section class ="col-12">
        <div class="callout callout-info">
            <p>Asteria College</p>

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
                                <button class="btn btn-tool"  type="button">
                                    <i class="far fa-save"></i>
                                </button>
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
                    <tr :key="students.id" v-for="student in students">
                        <th scope="row">{{ student.id }}</th>
                        <td>{{student.first_name }}</td>
                        <td>{{student.last_name}}</td>
                        <td> <input type="checkbox" id="present" name="present" value="true" ></td>



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
        name: 'Edit',
        data() {
            return {
                students: null,
                studentsLoading: false
            }
        },
        mounted(){
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
            }
        }
    }
</script>