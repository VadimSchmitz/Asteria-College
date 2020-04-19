<template>
    <section class="authorize">
        <auth-section v-bind:pageTitle="this.$route.meta.label"></auth-section>
    </section>
</template>

<script>
    export default {
        name: 'Authenticate',
        components: {
            AuthSection: () => import(  /* webpackChunkName: "auth-section" */  './sections/auth/AuthSection'),
        }
    }
</script>
