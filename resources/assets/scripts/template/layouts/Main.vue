<template>
    <section>
            <header-navigation></header-navigation>

            <main-sidebar></main-sidebar>

            <content-sidebar></content-sidebar>

            <content-section v-bind:pageTitle="this.$route.meta.label"></content-section>

            <main-footer></main-footer>
    </section>
</template>

<script>
    export default {
        name: 'Main'
    }
</script>
