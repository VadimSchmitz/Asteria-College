<template>
    <el-avatar :size="40" v-if="user">
        <v-gravatar :email="user.email" :size="45" default-img="404"
                    style="position: relative; z-index: 1; margin-right: -15px;"></v-gravatar>
        <span class="font-weight-500">{{ this.getInitials() }}</span>
    </el-avatar>
</template>

<script>
    export default {
        name: 'AvatarInitials',
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
