<template>
    <div class="container">
        <h1>{{settings.firstName}}</h1>{{ settings.lastName }}
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'Dashboard',
        computed: {
            ...mapGetters("global", {
                settings: "settings"
            })
        },
    }
</script>
