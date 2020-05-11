<template>
    <div class="card card-outline card-cyan">
        <div class="card-body">
            <el-form :model="credentials" :rules="rules" name='create' ref="create">
                <b-row>
                    <b-col order-lg='1' cols="12" lg="3" class="text-center mb-2 mb-lg-auto">
                            <el-avatar :size=100 icon="fal fa-user fa-2x" v-show="!credentials.email"></el-avatar>
                            <avatar :size='100' :email='credentials.email' :key="credentials.email" v-show="credentials.email"></avatar>
                    </b-col>

                    <b-col cols="12" lg="9">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="email">
                            <el-input clearable placeholder="E-mailadres" type="email" v-model="credentials.email">
                                <template slot="prepend">
                                    <i class="fas fa-at"></i>
                                </template>
                            </el-input>
                        </el-form-item>

                        <el-form-item :class="error ? 'is-error' : ' '" prop="name">
                            <el-input clearable placeholder="Gebruikersnaam" type="text" v-model="credentials.name">
                                <template slot="prepend">
                                    <i class="fas fa-user"></i>
                                </template>
                            </el-input>
                        </el-form-item>
                    </b-col>
                </b-row>

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

                <el-form-item :class="error ? 'is-error' : ''" prop="password">
                    <el-input placeholder="Wachtwoord" show-password
                              type="password" v-model="credentials.password">
                        <template slot="prepend"><i class="fas fa-lock"></i></template>
                    </el-input>
                </el-form-item>

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
            ElCheckbox: () => import( /* webpackChunkName: "button-checkbox" */  'element-ui/lib/checkbox'),
            Avatar: () => import(  /* webpackChunkName: "avatar-component" */  '../../../layouts/components/Avatar'),
        },
        data() {
            return {
                rules: {
                    email: [{validator: validateEmail, trigger: 'blur'}],
                    username: [{validator: validateUsername, trigger: 'blur'}],
                    firstName: [{validator: validateName, trigger: 'blur'}],
                    lastName:  [{validator: validateName, trigger: 'blur'}],
                    password: [{validator: validatePassword, trigger: 'blur'}]
                },
                credentials: {
                    email: '',
                    name: '',
                    firstName: '',
                    lastName: '',
                    password: ''
                },
                error: null
            }
        },
        methods: {
            submit() {
                this.loading = true;

                this.$refs['create'].validate((valid) => {
                    if (valid) {
                        axios.post('auth/register', this.credentials)
                            .then(response => {
                            // TODO: Add welcome
                            setTimeout(() => {
                                this.loading = false;
                                return true;
                            }, 1000);
                        }).catch(e => {
                            setTimeout(() => {
                                this.loading = false;
                                this.error = 'De gegevens die je hebt ingevuld kloppen niet ' + e;
                                return false
                            }, 400);
                        });
                    } else {
                        this.loading = false;
                        return false;
                    }
                });
            }
        }
    }
</script>
