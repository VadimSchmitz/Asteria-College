<template>
    <div class="card card-outline card-cyan">
        <div class="card-body">
            <el-form :model="credentials" name='create' ref="create">
                

                <b-row>
                    <b-col cols="6">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="firstname">
                            <el-input clearable placeholder="Voornaam" type="text" v-model="credentials.firstName">
                                <template slot="prepend">
                                    <i class="fas fa-user"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                    </b-col>
                    <b-col cols="6">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="lastname">
                            <el-input clearable placeholder="Achternaam" type="text" v-model="credentials.lastName">
                                <template slot="prepend">
                                    <i class="fas fa-user"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                    </b-col>
                </b-row>

                

                <el-form-item>
                    <el-button :loading="loading" @click="submit"
                               class="btn-block btn-outline-primary" type="primary">
                        Aanmaken
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    import Student from "../../../../core/models/Student";   

    export default {
        name: 'Create',
        components: {
            ElForm: () => import( /* webpackChunkName: "form-component" */ 'element-ui/lib/form'),
            ElFormItem: () => import( /* webpackChunkName: "form-item-component" */ 'element-ui/lib/form-item'),
            ElButton: () => import( /* webpackChunkName: "button-component" */  'element-ui/lib/button'),
            ElInput: () => import( /* webpackChunkName: "input-component" */  'element-ui/lib/input'),
            ElCheckbox: () => import( /* webpackChunkName: "button-checkbox" */  'element-ui/lib/checkbox'),
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../../../layouts/components/Avatar'),
        },
        data() {
            return {
                
                credentials: {
                    firstName: '',
                    lastName: '',
                    
                },
                
            }
        },
        
        methods: {
            submit() {
                this.loading = true;

                axios.post('students', this.credentials)
                    .then(response => {
                                    setTimeout(() => {
                                    this.loading = false;
                                    return true;
                                }, 1000);
                            }).catch(error => console.error(error));
                     
            }
        }
    }
</script>
