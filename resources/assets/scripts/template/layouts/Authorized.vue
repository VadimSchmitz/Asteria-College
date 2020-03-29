<template>
    <section class="authorized">
        <header-navigation></header-navigation>

        <main-sidebar></main-sidebar>

        <content-sidebar></content-sidebar>

        <content-section :pageTitle="this.$route.name"></content-section>

        <main-footer></main-footer>
    </section>
</template>

<script>
    export default {
        name: 'Authorized'
    }
</script>
