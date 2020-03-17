<template>
    <section class="lockscreen lockscreen-wrapper">
          <router-view></router-view>
    </section>
</template>


<script>
    export default {
        name: 'AuthSection',
        props: {
            ['pageTitle']: {
                type: String,
                default: 'Login'
            }
        }
    }
</script>
