<template class="app">
    <section>
        <header-navigation></header-navigation>
        <main-sidebar></main-sidebar>
        <content-section></content-section>

        <main-footer></main-footer>

    </section>
</template>

<script>
    import ContentSection from "./components/ContentSection";

    export default {
        name: 'App',
        components: {ContentSection}
    }
</script>
