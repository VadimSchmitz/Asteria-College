<template class="app">
    <section id="app">
        <authenticate v-if="!this.$auth.check()"></authenticate>

        <authorized v-else-if="this.$auth.check()"></authorized>
    </section>
</template>

<script>
    export default {
        name: 'App',
        components: {
            Authorized: () => import('./template/layouts/Authorized'),
            Authenticate: () => import('./template/layouts/Authenticate')
        },
    }
</script>
