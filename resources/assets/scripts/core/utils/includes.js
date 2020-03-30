import ElementUI from 'element-ui';
import {BootstrapVue} from "bootstrap-vue";
import Gravatar from 'vue-gravatar';
import VueRouter from "vue-router";
import VueAxios from "vue-axios";
import axios from "axios";
import authorize from "./authorize";

window.axios = axios;
axios.defaults.baseURL = '/api/';

const includes = {
    install(Vue) {
        Vue.use(ElementUI);
        Vue.use(BootstrapVue);
        Vue.use(VueRouter);
        Vue.use(VueAxios, axios);
        Vue.use(require('@websanova/vue-auth'), {
            auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
            http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
            router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
            authorize
        });
        Vue.component('v-gravatar', Gravatar);
    }
};

export default includes;
