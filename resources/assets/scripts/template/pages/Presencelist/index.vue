<template>
    <section class="col-12">
        <el-collapse-transition>
            <div class="callout callout-info" v-show="alert">
                {{ alert }}
            </div>
        </el-collapse-transition>


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
                        <th scope="col">Achternaam</th>
                        <th scope="col">Aanwezig</th>

                        <th>
                            <div class="card-tools d-inline float-right pr-0 mr-0 pb-0">

                                <button @click="toggleEdit" class="btn btn-tool" type="button">
                                    <i class="fas fa-edit"></i>
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
                    <tr :key="student.id +' '+ student.present" v-for="(student, index) in students">
                        <th scope="row">{{ student.id }}</th>
                        <td>{{ student.first_name }}</td>
                        <td>{{ student.last_name }}</td>
                        <td>
                            <div class="d-flex justify-content-between" style="max-width: 75px">
                                <i :class="student.present ? 'fa-check text-success' : 'fa-times text-danger'"
                                   class="my-auto far"></i>

                                <span @click="change(index)" v-show="edit"> <i class="ml-2 far fa-pencil"> </i></span>
                            </div>
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
        components: {
            ElCollapseTransition: () => import(  /* webpackChunkName: "collapse-transition-component" */ 'element-ui/lib/transitions/collapse-transition'),
        },
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
            change(index) {
                let student = this.students[index];
                student.present = !student.present;

                axios.put(`/students/` + student.id, student)
                    .then(response => {
                        this.alert = 'U heeft de presentie van ' + student.first_name + ' ' + student.last_name + ' gewijzigd';

                        setTimeout(() => {
                            this.alert = null
                        }, 4500)
                    }).catch(e => this.alert = e);
            },
            toggleEdit() {
                return this.edit = !this.edit;
            },

        }
    }
</script>
