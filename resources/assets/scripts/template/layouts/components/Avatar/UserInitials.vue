<template>
    <span class="font-weight-600 d-block" style="width: 100%; height: 100%; padding-top: 2px">{{ getInitials() }}</span>
</template>

<script>
    import { mapGetters } from "vuex";
    import { User } from "../../../../core/models/User";

    export default {
        name: 'UserInitials',
        props: {
            onlyFirst: {
                type: Boolean,
                default: false
            },
            user: {
                default: null,
                required: false
            }
        },
        computed: {
            ...mapGetters({
                authenticated: 'auth/authenticated',
                fallBackUser: 'auth/user',
            })
        },
        methods: {
            getInitials() {
                let user = this.fallBackUser;
                if (this.user) user = new User(this.user);
                let hasName = this.onlyFirst ? (user.firstName.length > 1) : (user.firstName.length > 1 && user.lastName.length > 1);

                if (hasName)
                    return user.firstName.substring(0, 1).toUpperCase() + (this.onlyFirst ? '' : (user.lastName.substring(0, 1).toUpperCase()));
                else
                    return user.name;
            }
        }
    }
</script>
