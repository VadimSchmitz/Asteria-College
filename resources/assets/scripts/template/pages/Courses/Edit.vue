<template>
    <section class="col-12">
        <div class="callout callout-info">
            <p>boeken aanmaak pagina</p>
            <div v-if="coursesLoading">
                Loading...
            </div>
            <div :style="'color: ' + course.color" v-else v-for="course in courses">
                {{course.name}}
                {{course.level}}
            </div>
        </div>

        <div>
            <!--            <form>-->
            <!--                <div>-->

            <!--                    <div>-->
            <!--                        <label>Vak</label>-->
            <!--                        <div class="control">-->
            <!--                            <input name="name" type="text" placeholder="Vak...">-->
            <!--                        </div>-->

            <!--                        &lt;!&ndash;                    @error('name')&ndash;&gt;-->
            <!--                        &lt;!&ndash;                    <p>{{ $message }}</p>&ndash;&gt;-->
            <!--                        &lt;!&ndash;                    @enderror&ndash;&gt;-->
            <!--                    </div>-->

            <!--                    <div>-->
            <!--                        <label>Niveau</label>-->
            <!--                        <div class="control">-->
            <!--                            <input level="level"-->
            <!--                                   type="text" placeholder="Niveau...">-->
            <!--                        </div>-->

            <!--                        <label>Kleur</label>-->
            <!--                        <div class="control">-->
            <!--                            <input type="color">-->
            <!--                        </div>-->


            <!--                        <div>-->
            <!--                            <button type="submit" @click="save">Opslaan</button>-->
            <!--                        </div>-->

            <!--                    </div>-->
            <!--                </div>-->
            <!--            </form>-->

        </div>

        <el-form :model="course" :rules="rules" name='create' ref="create">


            <el-form-item :class="error ? 'is-error' : ''" prop="name">
                <el-input clearable placeholder="Coursetitel"
                          type="text" v-model="course.name">
                    <template slot="prepend">
                        <el-color-picker size="medium" v-model="course.color"></el-color-picker>
                    </template>
                </el-input>
            </el-form-item>

            <el-form-item :class="error ? 'is-error' : ''" prop="niveau">
                <el-input clearable placeholder="courseniveau"
                          type="number" v-model="course.level">
                    <template slot="prepend"></template>
                </el-input>
            </el-form-item>

            <el-form-item>
                <el-button :loading="loading" @click="save"
                           class="btn-block btn-outline-primary" type="primary">
                    Aanmaken
                </el-button>
            </el-form-item>
        </el-form>


    </section>

</template>

<script>
    import { Courses } from "../../../core/models/Courses";
    import { validateName } from "../../../core/functions";

    export default {
        name: 'Courses',
        components: {
            ElForm: () => import( /* webpackChunkName: "form-component" */ 'element-ui/lib/form'),
            ElFormItem: () => import( /* webpackChunkName: "form-item-component" */ 'element-ui/lib/form-item'),
            ElButton: () => import( /* webpackChunkName: "button-component" */  'element-ui/lib/button'),
            ElInput: () => import( /* webpackChunkName: "input-component" */  'element-ui/lib/input'),
            ElColorPicker: () => import( /* webpackChunkName: "color-picker-component" */  'element-ui/lib/color-picker'),
        },
        data() {
            return {
                course: new Courses(),
                loading: false,
                rules:
                    {
                        name: [{validator: validateName, trigger: 'blur'}],
                    },
                error: null,
                courses: null,
                coursesLoading: false
            }
        },
        async mounted() {
            await this.get();
        },
        methods: {
            async save() {
                this.loading = true;

                this.$refs['create'].validate((valid) => {
                    if (valid) {
                        axios.post('courses', this.course)
                            .then(response => {
                                // TODO: Success alert
                                setTimeout(() => {
                                    this.refresh();
                                    this.loading = false;
                                    return true;
                                }, 400);
                            }).catch(e => {
                            setTimeout(() => {
                                this.loading = false;
                                this.error = 'De volgende fout is opgetreden: ' + e;
                                return false
                            }, 400);
                        });
                    } else {
                        this.loading = false;
                        return false;
                    }
                });
            },

            async refresh() {
                this.loading = true;
                await this.get();
            },

            async get() {
                this.coursesLoading = true;

                await axios.get(`/courses`)
                    .then(response => {
                        // Timeout only to show loading screen
                        setTimeout(() => {
                            this.coursesLoading = false;
                            this.courses = response.data;
                        }, 400);
                    }).catch(e => this.error = e);
            }
        }
    }


</script>
