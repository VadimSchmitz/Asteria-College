import Vue from "vue";
import axios from 'axios';
import Vuex from "vuex";
import Global from "./Global";

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = axios;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        global: Global
    }
});

export default store;
