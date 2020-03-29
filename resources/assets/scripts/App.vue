<template class="app">
    <section id="app">
        <authenticate v-if="!this.$auth.check()"></authenticate>

        <authorized v-else-if="this.$auth.check()"></authorized>
    </section>
</template>

<script>
    import Authenticate from "./template/layouts/Authenticate";
    import Authorized from "./template/layouts/Authorized";

    export default {
        name: 'App',
        components: {Authorized, Authenticate},
        data() {
            return {

            }
        }
    }
</script>
