<template class="app">
    <section>
            <navigation-component></navigation-component>

            <div class="container pt-5">
                <router-view></router-view>
            </div>

            <footer-component></footer-component>
    </section>
</template>


<script>
    export default {
        name: 'app'
    }
</script>
