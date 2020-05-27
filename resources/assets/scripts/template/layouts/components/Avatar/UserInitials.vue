<template>
    <svg height="100%" viewBox="0 0 34 18" width="100%" xmlns="http://www.w3.org/2000/svg">
        <text fill="white" lengthAdjust="spacing" textLength="20" x="8" y="14">
            {{ getInitials() }}
        </text>
    </svg>
</template>

<script>
    import { mapGetters } from "vuex";
    import User from "../../../../core/models/User";

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
                let hasName = this.onlyFirst ? (user.first_name.length > 1) : (user.first_name.length > 1 && user.last_name.length > 1);

                if (hasName)
                    return user.first_name.substring(0, 1).toUpperCase() + (this.onlyFirst ? '' : (user.last_name.substring(0, 1).toUpperCase()));
                else
                    return user.name;
            }
        }
    }
</script>
