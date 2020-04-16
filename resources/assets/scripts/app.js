import Vue from 'vue';
import utils from './core/utils';
import router from "./core/utils/router";
import store from './core/store';
import App from './App.vue';

Vue.use(utils);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount("#app");
