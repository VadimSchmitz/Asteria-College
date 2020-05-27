<template>
    <div class="card card-outline card-cyan">
        <div class="card-body pb-0">
            <el-form :model="$parent.event" :rules="rules" name='create-edit' ref="create-edit" :key="$parent.event.id" :v-text="addingMode ? 'create a new event' : 'edit an event'">
                <b-row>
                    <b-col cols="12">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="event_name">
                            <el-input clearable placeholder="Vak" type="text" autofocus v-model="$parent.event.event_name">
                            </el-input>
                        </el-form-item>
                    </b-col>
                    <b-col cols="12">
                        <el-form-item prop="assignment">
                            <el-input clearable placeholder="Opdracht" type="text" v-model="$parent.event.assignment">
                            </el-input>
                        </el-form-item>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="12" md="6">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="start_date">
                                <el-date-picker class="calendar-input"
                                        v-model="$parent.event.start_date"
                                        type="datetime"
                                        placeholder="Selecteer een begin datum en tijd">
                                </el-date-picker>
                        </el-form-item>
                    </b-col>
                    <b-col cols="12" md="6">
                        <el-form-item :class="error ? 'is-error' : ' '" prop="end_date">
                                <el-date-picker class="calendar-input"
                                        v-model="$parent.event.end_date"
                                        type="datetime"
                                        placeholder="Selecteer een eind datum en tijd">
                                </el-date-picker>
                        </el-form-item>
                    </b-col>
                </b-row>

                <div class="pb-3" >
                    <template>
                        <b-button @click="removeEvent" size="m" v-if="!addingMode" variant="danger">Verwijderen
                        </b-button>
                        <b-button @click="$parent.showModal = false" size="m" variant="secondary">Annuleren</b-button>
                        <b-button @click="addEvent" size="m" v-if="addingMode" variant="success">Toevoegen</b-button>
                        <b-button @click="updateEvent" size="m" v-else variant="success">Wijzigen</b-button>
                    </template>
                </div>
            </el-form>
        </div>
    </div>
</template>


<script>
    import {validateTitle, validateStartDate, validateEndDate} from "../../../../../core/functions/calendarValidation";
    import User from "../../../../../core/models/User";

    export default {
        name: 'Create',

        components: {
            ElDatePicker: () => import( /* webpackChunkName: "form-date-picker-input-component" */ 'element-ui/lib/date-picker'),
            ElForm: () => import( /* webpackChunkName: "form-component" */ 'element-ui/lib/form'),
            ElFormItem: () => import( /* webpackChunkName: "form-item-component" */ 'element-ui/lib/form-item'),
            ElButton: () => import( /* webpackChunkName: "button-component" */  'element-ui/lib/button'),
            ElInput: () => import( /* webpackChunkName: "input-component" */  'element-ui/lib/input'),
        },

        props: {
            id: {type: Number, required: false},
            updatable: {
                type: Object,
                required: false
            }
        },
        data() {
            return {
                rules: {
                    event_name: [{validator: validateTitle, trigger: 'blur'}],
                    start_date: [{validator: validateStartDate, trigger: 'blur'}],
                    end_date: [{validator: validateEndDate, trigger: 'blur'}],
                },
                error: null,
                loading: false
            }
        },

        computed: {
            addingMode() {
                return !this.id
            }
        },

        methods: {
            async updateEvent() {
                await this.$parent.updateEvent();
            },
            async addEvent() {
                await this.$parent.addEvent();
            },
            async removeEvent() {
                await axios.delete("calendar/" + this.$parent.event.id).then(resp => this.$parent.getEvents())
                    .catch(e => console.log(e));
            }
        }
    };
</script>
