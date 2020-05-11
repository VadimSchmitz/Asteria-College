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
    export default {
        name: 'Users',
        components: {
            Overview: () => import(  /* webpackChunkName: "user-overview-component" */  './components/Overview'),
            Options: () => import(  /* webpackChunkName: "user-options-component" */  './components/Options'),
            Create: () => import(  /* webpackChunkName: "user-create-component" */  './components/Create'),
        },
        data() {
            return {
                create: false
            }
        },
        methods: {
            toggleCreate() {
                return this.create = !this.create;
            }
        }
    }
</script>
