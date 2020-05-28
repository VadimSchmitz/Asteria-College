<template>
    <b-row>
        <el-collapse-transition>
            <b-col cols="12" v-if="alert.type">
                <div :class="'callout callout-'+ alert.type">
                    <strong>{{ alert.type === 'success' ? 'Gelukt!' : 'Foutmelding:' }}</strong><br/>
                    {{ alert.message }}
                </div>
            </b-col>
        </el-collapse-transition>

        <b-col cols="12">
            <upload />
        </b-col>
    </b-row>
</template>

<script>
    export default {
        name: 'Settings',
        components: {
            Upload: () => import(  /* webpackChunkName: "upload-csv-component" */  './components/Upload'),
            ElCollapseTransition: () => import(  /* webpackChunkName: "collapse-transition-component" */ 'element-ui/lib/transitions/collapse-transition')
        },
        data() {
            return {
                alert: {
                    type: null,
                    message: null
                }
            }
        },
        watch: {
            alert(val) {
                setTimeout(() => this.alert = {
                    type: null,
                    message: null
                }, 4000);
            }
        },
        methods: {

        }
    }
</script>
