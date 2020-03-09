<template>
    <!-- Footer -->
    <footer class="footer bg-dark fixed-bottom text-white text-center">
        Footer is the end of a page
    </footer>
    <!-- End Footer -->
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "FooterComponent",
        computed: {
            ...mapGetters("global", {
                settings: "settings"
            })
        },
    }
</script>
