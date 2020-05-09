<template>
    <el-avatar :size='size' style="box-shadow: 0 3px 6px rgba(0,0,0,.20),0 3px 6px rgba(0,0,0,.32)">
        <!--    Include de Gravatar    -->
        <g-image :email="mail" :user='user' :size='size'/>
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
            ElAvatar: () => import( /* webpackChunkName: "s-avatar-component" */ 'element-ui/lib/avatar'),
            GImage: () => ({
                component: import(  /* webpackChunkName: "gravatar-image-component" */  './GImage'),
                loading: import( /* webpackChunkName: "user-initials-component" */ './UserInitials'),      // Show placeholder while loading
                error: import( /* webpackChunkName: "user-initials-component" */ './UserInitials')         // Also when the image fails to load
            })
        },
    }
</script>
