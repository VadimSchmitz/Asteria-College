<template>
    <section class="authorize">
        <auth-section v-bind:pageTitle="this.$route.meta.label"></auth-section>
    </section>
</template>

<script>
    export default {
        name: 'Authenticate'
    }
</script>
