<template>
    <section id="example">
<h1>Example page</h1>
        <p>Voor nu een opzetje routing en componenten toegevoegd</p>
    </section>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: 'Example',
        computed: {
            ...mapGetters("global", {
                settings: "settings"
            })
        },
    }
</script>
