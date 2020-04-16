<template>
    <el-avatar :size="35" v-if="user">
        <v-gravatar :email="user.email" :size="35" default-img="404"  crossorigin></v-gravatar>
        <span class="font-weight-500">{{ getInitials() }}</span>
    </el-avatar>
</template>

<script>
    export default {
        name: 'Avatar',
        components: {
            VGravatar: (resolve) => import(  /* webpackChunkName: "app-gravatar" */  'vue-gravatar')
        },
        computed: {
            user() {
                return this.$store.state.user;
            }
        },
        methods: {
            getInitials() {
                if (this.user.firstName.length > 1 && this.user.lastName.length > 1)
                    return this.user.firstName.substring(0, 1).toUpperCase() + ' ' + this.user.lastName.substring(0, 1).toUpperCase();
                else
                    return this.user.firstName + ' ' + this.user.lastName;
            }
        }
    }
</script>
