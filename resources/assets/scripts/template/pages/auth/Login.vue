<template>
    <section>
        <div class="lockscreen-logo">
            <a href=""><b>Asteria</b>College</a>
        </div>

        <div class="lockscreen-name mb-2">
            <el-avatar :key="!key" :size=100 icon="fal fa-user fa-2x"></el-avatar>
        </div>

        <div style="height: 45px">
            <el-collapse-transition>
                <div class="el-form__error text-center" v-show="error">
                    <span class="el el-icon-error text-danger"></span> <span
                        class='text-danger'> {{error}} </span>
                </div>
            </el-collapse-transition>
        </div>

        <el-form :model="credentials" :rules="rules" name='login' ref="login">
            <el-form-item :class="error ? 'is-error' : ' '" prop="email" ref="emailAvatar">
                <el-input clearable placeholder="E-mailadres"
                          tabindex="1" type="email" v-model="credentials.email">
                    <template slot="prepend">
                        <i class="fas fa-user"></i>
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item prop="password" v-bind:class="error ? 'is-error' : ''">
                <el-input placeholder="Wachtwoord" show-password tabindex="2"
                          type="password" v-model="credentials.password">
                    <template slot="prepend"><i class="fas fa-lock"></i></template>
                </el-input>
            </el-form-item>

            <el-form-item prop="rememberMe">
                <el-checkbox border label="Ingelogd blijven" style="width: 100%"
                             v-model="credentials.rememberMe"></el-checkbox>
            </el-form-item>

            <el-form-item>
                <el-button :loading="loading" @click="submit('login')"
                           class="btn-block btn-outline-primary" tabindex="3" type="primary">
                    Inloggen
                </el-button>
            </el-form-item>
        </el-form>

        <!-- /.lockscreen-item -->
        <div class="help-block text-center">

        </div>
        <div class="lockscreen-footer text-center text-gray">
            Copyright © 2020 <b><a class="text-gray-light" href="http://AsteriaCollege.nl">AsteriaCollege.nl</a></b><br>
            All rights reserved
        </div>
    </section>
</template>

<script>
    import {validateEmail, validatePassword} from "../../../core/functions/validators";

    export default {
        name: 'Login',
        data() {
            return {
                error: null,
                loading: false,
                credentials: {
                    email: '',
                    password: '',
                    rememberMe: false
                },
                rules: {
                    email: [{validator: validateEmail, trigger: 'blur'}],
                    password: [{validator: validatePassword, trigger: 'blur'}]
                }
            }
        },
        methods: {
            submit(name) {
                this.loading = true;
                this.error = null;

                this.$refs[name].validate((valid) => {
                    if (valid)
                        this.$auth.login({
                            body: this.credentials, // Vue-resource
                            data: this.credentials, // Axios
                            refresh: true,
                            fetchUser: true
                        }).then((response) => {
                            // TODO: Add welcome
                            setTimeout(() => {
                                this.loading = false;
                                return true;
                            }, 1000);

                        }).catch((error) => {
                            setTimeout(() => {
                                this.loading = false;
                                this.error = 'De gegevens die je hebt ingevuld kloppen niet';
                                return false
                            }, 1000);
                        });

                    else {
                        this.loading = false;
                        return false;
                    }
                });
            }
        }
    }
</script>
