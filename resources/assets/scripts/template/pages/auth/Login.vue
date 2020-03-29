<template>
    <section>
        <div class="lockscreen-logo">
            <a href=""><b>Admin</b>LTE</a>
        </div>
        <!-- User name -->
        <div class="lockscreen-name">
            <div class="image ">
                <img src="assets/img/user1-128x128.jpg" alt="User Image">
            </div>

            John Doe
        </div>


            <el-form :model="credentials" :rules="rules" name='login' ref="login">
                <el-form-item prop="email" v-bind:class="error ? 'is-error' : ' '">
                    <el-input autofocus="true" clearable placeholder="E-mailadres"
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
                    <el-checkbox v-model="credentials.rememberMe" border label="Ingelogd blijven" style="width: 100%"></el-checkbox>
                </el-form-item>

                <el-form-item>
                    <el-button :loading="loading" @click="submit('login')"
                               class="btn-block btn-outline-primary mt-3" tabindex="3" type="primary">
                        Inloggen
                    </el-button>
                </el-form-item>
            </el-form>

        <!-- /.lockscreen-item -->
        <div class="help-block text-center">
           Klik hier om naar het dashboard te navigeren
        </div>
        <div class="lockscreen-footer text-center">
            Copyright © 2014-2019 <b><a href="http://adminlte.io" class="text-black">AdminLTE.io</a></b><br>
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
