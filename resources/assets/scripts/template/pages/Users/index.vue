<template>
    <b-row>
        <el-collapse-transition>
            <b-col cols="12" v-if="alert.type">
                <div :class="'callout callout-'+ alert.type">
                    <strong>{{ alert.type === 'success' ? 'Gelukt!' : 'Foutmelding:' }}</strong><br />
                    {{ alert.message }}
                </div>
            </b-col>
        </el-collapse-transition>

        <b-col cols="12" lg="6" xl="8">
            <el-collapse-transition>
                <create v-show="create"/>
            </el-collapse-transition>

            <overview :bus="bus" />
        </b-col>

        <b-col cols="12" lg="6" xl="4">
            <options/>
        </b-col>
    </b-row>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Users',
        components: {
            Overview: () => import(  /* webpackChunkName: "user-overview-component" */  './components/Overview'),
            Options: () => import(  /* webpackChunkName: "user-options-component" */  './components/Options'),
            Create: () => import(  /* webpackChunkName: "user-create-component" */  './components/Create'),
            ElCollapseTransition: () => import(  /* webpackChunkName: "collapse-transition-component" */ 'element-ui/lib/transitions/collapse-transition'),
        },
        data() {
            return {
                create: false,
                edit: false,
                bus: new Vue(),
                alert: {
                    type: null,
                    message: null
                }
            }
        },
        watch: {
            alert(val) {
                if (val.type === 'success')
                    this.toggleCreate();

                setTimeout(() => this.alert = {
                    type: null,
                    message: null
                }, 4000);
            }
        },
        methods: {
            toggleCreate() {
                this.edit = false;
                return this.create = !this.create;
            },
            toggleEdit() {
                this.create = false;
                return this.edit = !this.edit;
            },
            reload() {
                this.bus.$emit('submit')
            }
        }
    }
</script>
