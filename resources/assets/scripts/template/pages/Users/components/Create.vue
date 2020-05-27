<template>
    <div class="card card-outline card-cyan">
        <div class="card-body pb-0">
            <el-form :model="credentials" :rules="rules" name='create' ref="create">
                <b-row>
                    <b-col class="text-center mb-2 mb-lg-auto" cols="12" lg="3" order-lg='1'>
                        <el-avatar :size=100 icon="fal fa-user fa-2x" v-show="!credentials.email"></el-avatar>
                        <avatar :email='credentials.email' :key="credentials.email" :size='100'
                                v-show="credentials.email">
                        </avatar>
                    </b-col>

                    <b-col cols="12" lg="9">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="email">
                            <el-input clearable placeholder="E-mailadres" type="email" v-model="credentials.email">
                            </el-input>
                        </el-form-item>

                        <el-form-item :class="error ? 'is-error' : ' '" prop="name">
                            <el-input clearable placeholder="Gebruikersnaam" min-length="3" type="text" v-model="credentials.name">
                            </el-input>
                        </el-form-item>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="5">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="first_name">
                            <el-input clearable placeholder="Voornaam" type="text" v-model="credentials.first_name">
                            </el-input>
                        </el-form-item>
                    </b-col>
                    <b-col cols="2">
                        <el-form-item prop="prefix">
                            <el-input clearable placeholder="Tussenvoegsel" type="text" v-model="credentials.prefix">
                            </el-input>
                        </el-form-item>
                    </b-col>
                    <b-col cols="5">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="last_name">
                            <el-input clearable placeholder="Achternaam" type="text" v-model="credentials.last_name">
                            </el-input>
                        </el-form-item>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="5">
                        <el-form-item :class="error ? 'is-error' : ''" prop="password">
                            <el-input placeholder="Wachtwoord" show-password
                                      type="password" min-length="5" v-model="credentials.password">
                            </el-input>
                        </el-form-item>
                    </b-col>
                    <b-col cols="2">

                    </b-col>
                        <b-col cols="5">
                            <el-form-item class="my-auto text-center">
                                <el-switch
                                        style="display: inline-block"
                                        v-model="credentials.is_admin"
                                        active-color="#13ce66"
                                        inactive-color="#ff4949"
                                        active-text="Super administrator"
                                        inactive-text="Leraar">
                                </el-switch>
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
    import User from "../../../../core/models/User";

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
                credentials: new User(),
                error: null,
                loading: false
            }
        },

        methods: {
            async submit() {
                this.loading = true;

                await this.$refs['create'].validate(async (valid) => {
                    if (valid) {
                        try {
                            await axios.post('auth/register', this.credentials)
                                .then(response => setTimeout(() => {
                                    this.$parent.alert = {
                                        type: 'success',
                                        message: 'De gebruiker is succesvol aangemaakt!'
                                    }
                                    this.credentials = new User();
                                    this.$parent.reload();
                                }, 400))
                        } catch (e) {
                            setTimeout(() => this.$parent.alert = {
                                type: 'danger',
                                message: ('Deze gebruiker kon niet worden aangemaakt, de volgende fout is opgetreden: ' + e)
                            }, 400)
                        }
                    }
                    this.loading = false;
                });
            }
        }
    }
</script>
