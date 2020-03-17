import Vue from 'vue';
import store from './stores';
import router from './router';
import App from './App.vue'

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));


new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
});
