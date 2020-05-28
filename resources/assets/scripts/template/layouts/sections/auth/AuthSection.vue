<template>
    <section class="lockscreen-wrapper">
        <div class="lockscreen-logo">
            <a href=""><b>Asteria</b>College</a>
        </div>

        <div class="lockscreen-name mb-2">
            <el-avatar :size=100 icon="fal fa-user fa-2x"></el-avatar>
        </div>

        <div class="el-form__warning text-center">
            <span class="el el-icon-warning text-warning"></span>
            <span class='text-warning font-weight-normal'>Vanaf nu log je in met je gebruikersnaam</span>
        </div>

        <div style="height: 45px">
            <el-collapse-transition>
                <div class="el-form__error text-center" v-show="error">
                    <span class="el el-icon-error text-danger"></span>
                    <span class='text-danger'> {{error}} </span>
                </div>
            </el-collapse-transition>
        </div>

        <el-form :model="credentials" :rules="rules" name='login' ref="login">
            <el-form-item :class="error ? 'is-error' : ' '" prop="name">
                <el-input clearable placeholder="Gebruikersnaam"
                          tabindex="1" type="text" v-model="credentials.name">
                    <template slot="prepend">
                        <i class="fas fa-user"></i>
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item :class="error ? 'is-error' : ''" prop="password">
                <el-input placeholder="Wachtwoord" show-password tabindex="2"
                          type="password" v-model="credentials.password">
                    <template slot="prepend"><i class="fas fa-lock"></i></template>
                </el-input>
            </el-form-item>

            <el-form-item prop="remember">
                <el-checkbox border label="Ingelogd blijven" style="width: 100%"
                             v-model="remember"></el-checkbox>
            </el-form-item>

            <el-form-item>
                <el-button :loading="loading" @click="submit"
                           class="btn-block btn-outline-primary" tabindex="3" type="primary">
                    Inloggen
                </el-button>
            </el-form-item>
        </el-form>

        <!-- /.lockscreen-item -->
        <div class="help-block text-center">

        </div>
        <div class="lockscreen-footer text-center text-gray">
            © 2020 | Asteria College
        </div>
    </section>
</template>


<script>
    import { validateLoginName, validateLoginPassword } from "../../../../core/functions";
    import { mapActions } from "vuex";

    export default {
        name: 'Login',
        components: {
            ElCollapseTransition: () => import( /* webpackChunkName: "collapse-transition" */  'element-ui/lib/transitions/collapse-transition'),
            ElForm: () => import( /* webpackChunkName: "form-component" */ 'element-ui/lib/form'),
            ElFormItem: () => import( /* webpackChunkName: "form-item-component" */ 'element-ui/lib/form-item'),
            ElButton: () => import( /* webpackChunkName: "button-component" */  'element-ui/lib/button'),
            ElInput: () => import( /* webpackChunkName: "input-component" */  'element-ui/lib/input'),
            ElCheckbox: () => import( /* webpackChunkName: "button-checkbox" */  'element-ui/lib/checkbox'),
            ElAvatar: () => import( /* webpackChunkName: "a-avatar-component" */  'element-ui/lib/avatar'),
        },
        data() {
            return {
                error: null,
                errorAlert: {
                    active: false,
                    message: null
                },
                loading: false,
                credentials: {
                    name: '',
                    password: '',
                },
                remember: false,
                rules: {
                    name: [{validator: validateLoginName, trigger: 'blur'}],
                    password: [{validator: validateLoginPassword, trigger: 'blur'}]
                }
            }
        },
        methods: {
            ...mapActions({
                signIn: 'auth/signIn'
            }),
            async submit() {
                this.$refs['login'].validate(async (valid) => {
                    this.loading = true;
                    if (valid)
                        await this.signIn(this.credentials, this.remember)
                            .then(response => setTimeout(() => {
                                    this.loading = false;
                                    this.$router.push({path: '/'});
                                    return true;
                                }, 300)
                            ).catch(e => setTimeout(() => {
                                this.loading = false;
                                this.error = "De gegevens die je hebt ingevuld kloppen niet";
                                return false
                            }, 200));
                    else {
                        this.loading = false;
                        this.error = "De gegevens die je hebt ingevuld kloppen niet";
                    }
                })
            },
        }
    }
</script>
