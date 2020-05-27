<template>
    <b-row>
        <b-col cols="12" lg="6" xl="8">
            <el-collapse-transition>
                <create v-show="create"/>
            </el-collapse-transition>

            <overview/>
        </b-col>

        <b-col cols="12" lg="6" xl="4">
            <options/>
        </b-col>
    </b-row>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: 'Students',
        components: {
            Overview: () => import(  /* webpackChunkName: "students-overview-component" */  './components/Overview'),
            Options: () => import(  /* webpackChunkName: "students-options-component" */  './components/Options'),
            Create: () => import(  /* webpackChunkName: "students-create-component" */  './components/Create'),
            ElCollapseTransition: () => import(  /* webpackChunkName: "collapse-transition-component" */ 'element-ui/lib/transitions/collapse-transition'),
        },
        data() {
            return {
                create: false,
                bus: new Vue(),
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
