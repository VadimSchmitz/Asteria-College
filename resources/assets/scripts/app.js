import Vue from 'vue';
import utils from './core/utils';
import router from "./core/utils/router";
import store from './core/store';
import App from './App.vue';

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.use(utils);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
}).$mount("#app");
