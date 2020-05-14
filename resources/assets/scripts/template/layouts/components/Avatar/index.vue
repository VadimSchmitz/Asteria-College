<template>
    <el-avatar :size='size'
               style="box-shadow: 0 3px 6px rgba(0,0,0,.20),0 3px 6px rgba(0,0,0,.32); background-color: rgba(169,0,241,0.79)">
        <!--    Include de Gravatar    -->
        <g-image :email="mail" :size='size' :user='user'/>
    </el-avatar>
</template>

<script>
    export default {
        name: 'SAvatar',
        props: {
            email: {
                type: String,
                required: false
            },
            user: {
                default: null,
                required: false
            },
            size: {
                type: Number,
                default: 40
            },
        },
        data() {
            return {
                mail: this.email
            }
        },
        mounted() {
            if (this.user)
                this.mail = this.user.email
        },
        components: {
            ElAvatar: () => import( /* webpackChunkName: "a-avatar-component" */ 'element-ui/lib/avatar'),
            GImage: () => import(  /* webpackChunkName: "gravatar-image-component" */  './GImage')
        },
    }
</script>
