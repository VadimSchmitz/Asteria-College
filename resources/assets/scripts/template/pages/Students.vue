  <template>
    <section class="col-12">
    <div class="container">
      <div class="row mt-3">
        <div class="col-lg-12">
          <button class="btn btn-info float-right" @click="showAddModal=true">
            <i class="fas fa-user"></i>&nbsp;&nbsp;Student Toevoegen</button>
        </div>
      </div>

    </div>
    <hr class="bg-info">
    <div class="alert alert-danger" v-if="errorMsg">
    Error Message
    </div>

   <div class="alert alert-success" v-if="successMsg">
    Success Message
    </div>


            <div class="row">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr class="text-center bg-info text-light">
                        <th scope="col">Studentnummer</th>
                        <th scope="col">Voornaam</th>
                        <th scope="col">Achternaam</th>
                        <th scope="col">Wijzigen</th>
                        <th scope="col">Verwijderen</th>
                     </tr>
                    
                    </thead>

                    <tbody v-if="students">
                    <tr :key="students.id" v-for="student in students">
                        <th scope="row">{{ student.id }}</th>
                        <td>{{student.firstName }}</td>
                        <td>{{student.lastName }}</td>
                        <td><a href="#" class="text-success" @click="showEditModal=true"><i class="fas fa-edit"></i></a></td>
                        <td><a href="#" class="text-danger"><i class="fas fa-trash-alt"></i></a></td>
                     </tr>
                    </tbody>
                </table>
            </div>

            <!-- Add new User Model -->
            <div id="overlay" v-if="showAddModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Nieuw student</h5>
                    <button type="button" class="close" @click="showAddModal=false">
                      <span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body p-4">
                  <form action="#" method="post">
                  <div class="form-group">
                  <input type="text" name="name" class="form-control form-control-lg" placeholder="Voornaam">
                  </div>
                  <div class="form-group">
                  <input type="text" name="text" class="form-control form-control-lg" placeholder="Achternaam">
                  </div>
                  <div class="form-group">
                  <button class="btn btn-info btn-block btn-lg" @click="showAddModal=false">Opslaan</button>
                  </div>

                  </form>
                  </div>
                  </div>
               </div>
              </div>
            </div>

            <!-- Edit User Model -->
            <div id="overlay" v-if="showEditModal">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title">Wijzigen</h5>
                    <button type="button" class="close" @click="showEditModal=false">
                      <span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body p-4">
                  <form action="#" method="post">
                  <div class="form-group">
                  <input type="text" name="name" class="form-control form-control-lg" placeholder="Voornaam">
                  </div>
                  <div class="form-group">
                  <input type="text" name="text" class="form-control form-control-lg" placeholder="Achternaam">
                  </div>
                  <div class="form-group">
                  <button class="btn btn-info btn-block btn-lg" @click="showEditModal=false">Opslaan</button>
                  </div>

                  </form>
                  </div>
                  </div>
               </div>
              </div>
            </div>

        
    </section>

</template>

<script>
    export default {
        name: '',
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
                        }, 3000);
                    }).catch(error => console.error(error));
            }
        }
    }

    
  </script>

  <style type="text/css">
    #overlay{
      position:fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.5);
      }
      </style>
