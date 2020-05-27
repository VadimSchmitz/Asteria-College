<template>
  <div class="card card-outline card-cyan">
    <div class="card-body">
      <el-form :model="newStudent" :rules="rules" name="createStudent" ref="createStudent">
        <b-row>
          <b-col cols="6">
            <el-form-item :class="error ? 'is-error' : ' '" prop="first_name">
              <el-input
                clearable
                placeholder="Voornaam"
                type="text"
                v-model="newStudent.first_name"
              >
                <template slot="prepend">
                  <i class="fas fa-user"></i>
                </template>
              </el-input>
            </el-form-item>
          </b-col>
          <b-col cols="6">
            <el-form-item :class="error ? 'is-error' : ' '" prop="first_name">
              <el-input
                clearable
                placeholder="Achternaam"
                type="text"
                v-model="newStudent.last_name"
              >
                <template slot="prepend">
                  <i class="fas fa-user"></i>
                </template>
              </el-input>
            </el-form-item>
          </b-col>
        </b-row>

        <el-form-item>
          <el-button
            :loading="loading"
            @click="submit"
            class="btn-block btn-outline-primary"
            type="primary"
          >Aanmaken</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Student from "../../../../core/models/Student";
import { validateName } from "../../../../core/functions";

export default {
  name: "Create",
  components: {
    ElForm: () =>
      import(/* webpackChunkName: "form-component" */ "element-ui/lib/form"),
    ElFormItem: () =>
      import(
        /* webpackChunkName: "form-item-component" */ "element-ui/lib/form-item"
      ),
    ElButton: () =>
      import(
        /* webpackChunkName: "button-component" */ "element-ui/lib/button"
      ),
    ElInput: () =>
      import(/* webpackChunkName: "input-component" */ "element-ui/lib/input"),
    ElCheckbox: () =>
      import(
        /* webpackChunkName: "button-checkbox" */ "element-ui/lib/checkbox"
      ),
    Avatar: () =>
      import(
        /* webpackChunkName: "avatar-component" */ "../../../layouts/components/Avatar"
      )
  },
  data() {
    return {
      rules: {
        first_name: [{ validator: validateName, trigger: "blur" }],
        last_name: [{ validator: validateName, trigger: "blur" }]
      },
      newStudent: new Student(),
      loading: false,
      error: null
    };
  },

  methods: {
    async submit() {
      this.loading = true;

      await this.$refs["createStudent"].validate(async valid => {
        if (valid) {
          try {
            await axios.post("/students", this.newStudent).then(response =>
              setTimeout(() => {
                this.$parent.alert = {
                  type: "success",
                  message: "De student is succesvol aangemaakt!"
                };
                this.newStudent = new Student();
                this.$parent.reload();
              }, 400)
            );
          } catch (e) {
            setTimeout(
              () =>
                (this.$parent.alert = {
                  type: "danger",
                  message:
                    "Deze student kon niet worden aangemaakt, de volgende fout is opgetreden: " +
                    e
                }),
              400
            );
          }
        }
        this.loading = false;
      });
    }
  }
};
</script>
