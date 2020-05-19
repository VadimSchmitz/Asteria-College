<template>
    <div class="card card-outline card-cyan">
        <div class="card-body pb-0">
            <el-form :model="credentials" :rules="rules" name='create' ref="create">
                

                <b-row>
                    <b-col cols="7">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="first_name">
                            <el-input clearable placeholder="Voornaam" type="text" v-model="credentials.first_name">
                            </el-input>
                        </el-form-item>
                    </b-col>
                    <b-col cols="3">
                        <el-form-item prop="prefix">
                            <el-input clearable placeholder="Tussenvoegsel" type="text" v-model="credentials.prefix">
                            </el-input>
                        </el-form-item>
                    </b-col>
                    <b-col cols="7">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="last_name">
                            <el-input clearable placeholder="Achternaam" type="text" v-model="credentials.last_name">
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
    import { validateEmail, validateName, validatePassword, validateUsername } from "../../../../core/functions";

    export default {
        name: 'Create',
        components: {
            ElForm: () => import( /* webpackChunkName: "form-component" */ 'element-ui/lib/form'),
            ElFormItem: () => import( /* webpackChunkName: "form-item-component" */ 'element-ui/lib/form-item'),
            ElButton: () => import( /* webpackChunkName: "button-component" */  'element-ui/lib/button'),
            ElInput: () => import( /* webpackChunkName: "input-component" */  'element-ui/lib/input'),
            ElSwitch: () => import( /* webpackChunkName: "switch-button-component" */  'element-ui/lib/switch'),
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../../../layouts/components/Avatar'),
            ElAvatar: () => import(  /* webpackChunkName: "el-avatar-component" */  'element-ui/lib/avatar'),
        },
        data() {
            return {
                rules: {
                    email: [{validator: validateEmail, trigger: 'blur'}],
                    name: [{validator: validateUsername, trigger: 'blur'}],
                    first_name: [{validator: validateName, trigger: 'blur'}],
                    last_name: [{validator: validateName, trigger: 'blur'}],
                    password: [{validator: validatePassword, trigger: 'blur'}]
                },
                credentials: {
                    email: '',
                    name: '',
                    first_name: '',
                    prefix: '',
                    last_name: '',
                    password: '',
                    is_admin: false
                },
                error: null,
                loading: false
            }
        },
        methods: {
            submit() {
                this.loading = true;

                this.$refs['create'].validate((valid) => {
                    if (valid) {
                        axios.post('auth/register', this.credentials)
                            .then(response => setTimeout(() => {
                                this.loading = false;
                                this.$parent.alert = {
                                    type: 'success',
                                    message: 'De gebruiker is succesvol aangemaakt!'
                                }
                            }, 400))
                            .catch(e => setTimeout(() => {
                                this.loading = false;
                                this.$parent.alert = {
                                    type: 'danger',
                                    message: ('Deze gebruiker kon niet worden aangemaakt, de volgende fout is opgetreden: ' + e)
                                }
                            }, 400));
                    } else {
                        this.loading = false;
                        return false;
                    }
                });
            }
        }
    }
</script>

