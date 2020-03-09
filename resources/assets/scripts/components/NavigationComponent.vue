<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent bg-dark text-white">
        <div class="container">
            <div class="navbar-translate">
                <router-link class="navbar-brand  text-white" to="/">
                    <span>{{ settings.firstName }}</span>{{ settings.lastName }}
                </router-link>
                <button class="navbar-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-bar bar1"></span>
                    <span class="navbar-toggler-bar bar2"></span>
                    <span class="navbar-toggler-bar bar3"></span>
                </button>
            </div>

            <div class="collapse navbar-collapse justify-content-end" id="navigation">
                <div class="navbar-collapse-header">
                    <div class="row">
                        <div class="col-6 collapse-close text-right">
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                Close
                            </button>
                        </div>
                    </div>
                </div>

                <ul class="navbar-nav">
                    <router-link :key="item.key" :to="item.path" v-for="item in routes"
                                 v-show="!item.hidden">
                        <li class="nav-item p-0">
                            <a class="nav-link text-white" rel="tooltip" data-placement="bottom">{{item.name}}</a>
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
    <!-- End Navbar -->
</template>

<script>
    import router from "../router";
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                routes: router.options.routes
            };
        },

        computed: {
            ...mapGetters("global", {
                isLoggedIn: "isLoggedIn",
                currentUser: "currentUser",
                settings: "settings"
            })
        }
    }
</script>
