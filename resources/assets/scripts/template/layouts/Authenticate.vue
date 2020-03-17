<template>
    <section>
        <auth-section v-bind:pageTitle="this.$route.meta.label"></auth-section>
    </section>
</template>

<script>
    export default {
        name: 'Main'
    }
</script>
